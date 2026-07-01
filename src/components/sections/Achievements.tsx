import { Award, Code2, FileBadge, Trophy, Users2 } from 'lucide-react';
import { ACHIEVEMENTS } from '@/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import type { Achievement } from '@/types';

const ICON_MAP: Record<Achievement['icon'], typeof Award> = {
  code: Code2,
  award: Award,
  certificate: FileBadge,
  trophy: Trophy,
  users: Users2,
};

export function Achievements() {
  return (
    <Section id="achievements" muted>
      <SectionHeader
        eyebrow="Achievements"
        title="Recognition & certifications"
        subtitle="Competitive programming, certifications, and leadership milestones."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ACHIEVEMENTS.map((achievement, i) => {
          const Icon = ICON_MAP[achievement.icon];
          const content = (
            <div className="card card-hover p-6 h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-dark-primary">
                {achievement.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-dark-secondary mt-2 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          );

          return (
            <Reveal key={achievement.id} delay={i * 0.06}>
              {achievement.link ? (
                <a href={achievement.link} target="_blank" rel="noreferrer" className="block">
                  {content}
                </a>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
