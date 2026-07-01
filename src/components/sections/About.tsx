import { GraduationCap, Cpu, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: 'B.Tech Mechanical Engineering',
    detail: 'NSUT, New Delhi',
  },
  {
    icon: Cpu,
    title: 'BS in Data Science',
    detail: 'IIT Madras',
  },
  {
    icon: Sparkles,
    title: 'Software Engineering',
    detail: 'AI/ML · Full Stack · Problem Solving',
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">
        <Reveal>
          <SectionHeader eyebrow="About" title="A little about me" />
          <div className="mt-6 space-y-4">
            {PERSONAL_INFO.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-text-secondary dark:text-text-dark-secondary leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 content-start">
          {HIGHLIGHTS.map(({ icon: Icon, title, detail }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="card card-hover p-6 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary dark:text-text-dark-primary">
                    {title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary mt-1">
                    {detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
