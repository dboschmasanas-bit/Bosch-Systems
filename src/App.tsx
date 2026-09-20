import { I18nProvider } from '@/i18n';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/sections/Problem';
import { Capabilities } from '@/components/sections/Capabilities';
import { UseCases } from '@/components/sections/UseCases';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { ROICalculator } from '@/components/sections/ROICalculator';
import { SystemDemos } from '@/components/sections/SystemDemos';
import { Technology } from '@/components/sections/Technology';
import { About } from '@/components/sections/About';
import { FutureVision } from '@/components/sections/FutureVision';
import { FAQ } from '@/components/sections/FAQ';
import { AuditForm } from '@/components/sections/AuditForm';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-[var(--bg)]">
        <Nav />
        <main>
          <Hero />
          <Problem />
          <Capabilities />
          <UseCases />
          <BeforeAfter />
          <ROICalculator />
          <SystemDemos />
          <Technology />
          <About />
          <FutureVision />
          <FAQ />
          <AuditForm />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
