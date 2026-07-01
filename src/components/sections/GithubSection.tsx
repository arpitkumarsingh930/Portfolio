import { Github, Star, GitFork, AlertCircle } from 'lucide-react';
import { useGithubRepos } from '@/hooks/useGithubRepos';
import { GITHUB_USERNAME, PERSONAL_INFO } from '@/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

function RepoCardSkeleton() {
  return (
    <div className="card p-6 animate-pulse">
      <div className="h-4 w-2/3 bg-bg-secondary dark:bg-white/10 rounded mb-3" />
      <div className="h-3 w-full bg-bg-secondary dark:bg-white/10 rounded mb-2" />
      <div className="h-3 w-4/5 bg-bg-secondary dark:bg-white/10 rounded mb-4" />
      <div className="h-3 w-1/3 bg-bg-secondary dark:bg-white/10 rounded" />
    </div>
  );
}

export function GithubSection() {
  const { repos, isLoading, error } = useGithubRepos(GITHUB_USERNAME, 6);

  return (
    <Section id="github">
      <SectionHeader
        eyebrow="GitHub"
        title="Latest from my GitHub"
        subtitle="Live repository data, fetched directly from the GitHub API."
      />

      <div className="mt-12">
        {isLoading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <RepoCardSkeleton key={i} />
            ))}
          </div>
        )}

        {!isLoading && error && (
          <div className="card p-8 text-center flex flex-col items-center gap-3">
            <AlertCircle className="text-text-secondary dark:text-text-dark-secondary" size={24} />
            <p className="text-sm text-text-secondary dark:text-text-dark-secondary">{error}</p>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              View profile on GitHub instead
            </a>
          </div>
        )}

        {!isLoading && !error && repos.length === 0 && (
          <div className="card p-8 text-center">
            <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
              No public repositories found yet.
            </p>
          </div>
        )}

        {!isLoading && !error && repos.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <Reveal key={repo.id} delay={i * 0.05}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="card card-hover p-6 h-full flex flex-col"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-text-primary dark:text-text-dark-primary truncate">
                      {repo.name}
                    </h3>
                    <Github size={16} className="text-text-secondary dark:text-text-dark-secondary shrink-0" />
                  </div>
                  <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed line-clamp-2 flex-1">
                    {repo.description ?? 'No description provided.'}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary dark:text-text-dark-secondary">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={13} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={13} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
