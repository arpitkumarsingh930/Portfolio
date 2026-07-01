import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '@/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="Education" title="Academic background" />

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {EDUCATION.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.1}>
            <div className="card card-hover p-6 h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-4">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-dark-primary">
                {item.institution}
              </h3>
              <p className="text-sm text-accent font-medium mt-1">{item.degree}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-text-secondary dark:text-text-dark-secondary">
                <span>{item.location}</span>
                <span className="tag-pill !py-0.5">{item.duration}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
