/*
# Create audit_requests table

1. Purpose
   Stores submissions from the public "Solicitar una auditoría" contact form
   on the Bosch Systems marketing site. No login is required to submit —
   any visitor can fill in the form. Submissions are write-only from the
   public client (no read/update/delete from the frontend).

2. New Tables
   - `audit_requests`
     - `id` (uuid, primary key, auto-generated)
     - `name` (text, not null) — visitor's name
     - `email` (text, not null) — visitor's email
     - `company` (text, nullable) — company name, optional
     - `message` (text, not null) — what they need / where work gets stuck
     - `created_at` (timestamptz, default now())

3. Security
   - Enable RLS on `audit_requests`.
   - INSERT policy for `anon, authenticated` — anyone can submit a request.
     No SELECT / UPDATE / DELETE policies: the public client cannot read
     or modify submissions. Only the Supabase dashboard (service role)
     can read them.

4. Notes
   - This is a single-tenant marketing site with no sign-in flow.
   - The frontend only inserts; it never reads back submissions.
*/

CREATE TABLE IF NOT EXISTS audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE audit_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_audit_request" ON audit_requests;
CREATE POLICY "anon_insert_audit_request"
  ON audit_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
