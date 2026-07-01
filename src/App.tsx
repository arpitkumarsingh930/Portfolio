import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { SkipToContent } from '@/components/ui/SkipToContent';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Achievements } from '@/components/sections/Achievements';
import { GithubSection } from '@/components/sections/GithubSection';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <ErrorBoundary>
      <SkipToContent />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ErrorBoundary>
  );
}

export default App;
