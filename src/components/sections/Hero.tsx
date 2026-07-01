import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-3xl" />
      </div>

      <div className="section-container grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Hi, I&apos;m {PERSONAL_INFO.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-text-primary dark:text-text-dark-primary"
          >
            Building reliable software,
            <br />
            one clean line at a time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 text-lg text-text-secondary dark:text-text-dark-secondary max-w-xl leading-relaxed"
          >
            Software Engineer · Data Science Student · Mechanical Engineering Student.{' '}
            {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              as="a"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </Button>
            <Button as="a" href={PERSONAL_INFO.resumeUrl} download variant="secondary" icon={<Download size={15} />}>
              Download Resume
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="secondary"
              icon={<Mail size={15} />}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="justify-self-center md:justify-self-end"
        >
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/[0.03] border border-border dark:border-border-dark flex items-center justify-center overflow-hidden">
              <span className="font-display font-bold text-6xl sm:text-7xl text-accent/25 select-none">
                AKS
              </span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/[0.06] border border-border dark:border-border-dark -z-10" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-secondary dark:text-text-dark-secondary hover:text-accent transition-colors"
      >
        <span className="text-xs font-medium tracking-wide uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
