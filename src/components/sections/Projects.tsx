import { PROJECTS } from '@/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';

export function Projects() {
  return (
    <Section id="projects" muted>
      <SectionHeader
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A selection of full-stack, machine learning, and systems projects."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.08} />
        ))}
      </div>
    </Section>
  );
}
