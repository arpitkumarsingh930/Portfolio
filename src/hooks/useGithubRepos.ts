import { useEffect, useState } from 'react';
import type { GithubRepo } from '@/types';

interface UseGithubReposResult {
  repos: GithubRepo[];
  isLoading: boolean;
  error: string | null;
}

export function useGithubRepos(username: string, limit = 6): UseGithubReposResult {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchRepos() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error(`GitHub API responded with ${res.status}`);
        }
        const data: GithubRepo[] = await res.json();
        if (isMounted) {
          setRepos(data.filter((repo) => !repo.name.includes(username)));
        }
      } catch (err) {
        if (isMounted && (err as Error).name !== 'AbortError') {
          setError('Unable to load repositories right now.');
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchRepos();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [username, limit]);

  return { repos, isLoading, error };
}
