import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';
import { Reveal } from '@/components/ui/Reveal';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay}>
      <article className="card card-hover h-full flex flex-col overflow-hidden group">
        <div className="h-40 bg-gradient-to-br from-accent/[0.07] to-bg-secondary dark:to-white/[0.02] flex items-center justify-center border-b border-border dark:border-border-dark">
          <span className="font-display font-bold text-2xl text-accent/20 tracking-tight select-none">
            {project.title}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-semibold text-lg text-text-primary dark:text-text-dark-primary">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed">
            {project.description}
          </p>

          {project.highlights && (
            <ul className="mt-3 space-y-1.5">
              {project.highlights.slice(0, 2).map((h, i) => (
                <li
                  key={i}
                  className="text-xs text-text-secondary dark:text-text-dark-secondary flex gap-2"
                >
                  <span className="text-accent mt-1 h-1 w-1 rounded-full bg-accent shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag-pill !py-0.5">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-5 flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary dark:text-text-dark-primary hover:text-accent transition-colors"
              >
                <Github size={15} />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary dark:text-text-dark-primary hover:text-accent transition-colors"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
