import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '@/constants';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrolled } from '@/hooks/useScrolled';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.href.replace('#', '')));

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-border dark:border-border-dark'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex items-center justify-between h-16"
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="font-display font-bold text-lg tracking-tight"
        >
          AKS
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-accent'
                      : 'text-text-secondary dark:text-text-dark-secondary hover:text-text-primary dark:hover:text-text-dark-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-accent rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={PERSONAL_INFO.resumeUrl}
            download
            className="btn-secondary !px-4 !py-2 text-sm"
          >
            Resume
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border dark:border-border-dark"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white dark:bg-bg-dark border-b border-border dark:border-border-dark"
          >
            <ul className="section-container flex flex-col py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block py-2.5 text-sm font-medium text-text-secondary dark:text-text-dark-secondary hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={PERSONAL_INFO.resumeUrl} download className="btn-secondary w-full text-sm">
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
