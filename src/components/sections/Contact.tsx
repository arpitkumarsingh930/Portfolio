import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { PERSONAL_INFO } from '@/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/sections/ContactForm';

const CONTACT_LINKS = [
  { label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, icon: FiMail },
  { label: 'LinkedIn', value: 'linkedin.com/in/arpitkumarsingh', href: PERSONAL_INFO.linkedin, icon: FiLinkedin },
  { label: 'GitHub', value: 'github.com/arpitkumarsingh', href: PERSONAL_INFO.github, icon: FiGithub },
  { label: 'Resume', value: 'Download PDF', href: PERSONAL_INFO.resumeUrl, icon: FiDownload },
];

export function Contact() {
  return (
    <Section id="contact" muted>
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Have a role, project, or idea in mind? I'd love to hear from you."
      />

      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <Reveal>
          <div className="card p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            {CONTACT_LINKS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                download={label === 'Resume' ? true : undefined}
                className="card card-hover p-5 flex items-center gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-text-secondary dark:text-text-dark-secondary">{label}</p>
                  <p className="text-sm font-medium text-text-primary dark:text-text-dark-primary">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
