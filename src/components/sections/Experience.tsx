import { Briefcase, Users } from 'lucide-react';
import { EXPERIENCE } from '@/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked and led"
        subtitle="Internships and leadership roles that shaped how I approach engineering and teams."
      />

      <div className="mt-12 relative">
        <div
          aria-hidden="true"
          className="absolute left-[19px] top-2 bottom-2 w-px bg-border dark:bg-border-dark hidden sm:block"
        />

        <ol className="space-y-8">
          {EXPERIENCE.map((item, i) => {
            const Icon = item.type === 'work' ? Briefcase : Users;
            return (
              <Reveal as="li" key={item.id} delay={i * 0.08}>
                <div className="relative sm:pl-14">
                  <div className="hidden sm:flex absolute left-0 top-0 h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-bg-dark-secondary border-2 border-accent/30 text-accent">
                    <Icon size={16} />
                  </div>

                  <div className="card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-text-primary dark:text-text-dark-primary">
                          {item.role}
                        </h3>
                        <p className="text-sm text-accent font-medium">{item.organization}</p>
                      </div>
                      <span className="text-xs font-medium text-text-secondary dark:text-text-dark-secondary tag-pill">
                        {item.duration}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed flex gap-2.5"
                        >
                          <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
