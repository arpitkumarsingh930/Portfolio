import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}

export function Section({ id, children, className = '', muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${muted ? 'bg-bg-secondary dark:bg-bg-dark-secondary/40' : ''} ${className}`}
    >
      <div className="section-container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </div>
  );
}
