import { SKILLS } from '@/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Skills() {
  return (
    <Section id="skills" muted>
      <SectionHeader
        eyebrow="Skills"
        title="Technologies I work with"
        subtitle="A snapshot of the languages, frameworks, and tools I reach for most."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.06}>
            <div className="card card-hover p-6 h-full">
              <h3 className="font-semibold text-text-primary dark:text-text-dark-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
