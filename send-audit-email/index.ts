import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const TO_EMAIL = "dboschmasanas@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const { error: dbError } = await supabase
      .from("audit_requests")
      .insert({
        name: String(name).trim(),
        email: String(email).trim(),
        company: company ? String(company).trim() : null,
        message: String(message).trim(),
      });

    if (dbError) {
      console.error("DB insert error:", dbError.message);
    }

    // Send email via Resend
    if (RESEND_API_KEY) {
      const emailBody = `
Nova sol·licitud d'auditoria — Bosch Systems

Nom: ${name}
Email: ${email}
Empresa: ${company || "—"}

Missatge:
${message}
`.trim();

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Bosch Systems <onboarding@resend.dev>",
          to: [TO_EMAIL],
          replyTo: String(email).trim(),
          subject: `Nova sol·licitud d'auditoria — ${name}`,
          text: emailBody,
        }),
      });

      if (!emailResponse.ok) {
        const errText = await emailResponse.text();
        console.error("Resend error:", errText);
        return new Response(
          JSON.stringify({ error: "Email sending failed", detail: errText }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } else {
      console.warn("RESEND_API_KEY not set — submission stored in DB only");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
