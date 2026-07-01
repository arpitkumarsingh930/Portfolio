import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { PERSONAL_INFO } from '@/constants';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: PERSONAL_INFO.github, icon: FiGithub },
  { label: 'LinkedIn', href: PERSONAL_INFO.linkedin, icon: FiLinkedin },
  { label: 'LeetCode', href: PERSONAL_INFO.leetcode, icon: SiLeetcode },
  { label: 'Email', href: `mailto:${PERSONAL_INFO.email}`, icon: FiMail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border dark:border-border-dark">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-text-secondary dark:text-text-dark-secondary order-2 sm:order-1">
          © {year} {PERSONAL_INFO.name}. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-4 order-1 sm:order-2">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border dark:border-border-dark text-text-secondary dark:text-text-dark-secondary hover:text-accent hover:border-accent/40 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
