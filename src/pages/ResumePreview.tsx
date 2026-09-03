import { useEffect } from 'react';
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function ResumePreview() {
  useEffect(() => {
    const previous = document.title;
    document.title = `Resume — ${PERSONAL_INFO.name}`;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bg-secondary dark:bg-bg-dark">
      <header className="sticky top-0 z-10 border-b border-border dark:border-border-dark bg-white/85 dark:bg-bg-dark/85 backdrop-blur-md">
        <div className="section-container flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-3 min-w-0">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-text-dark-secondary hover:text-accent transition-colors shrink-0"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Portfolio</span>
            </a>
            <span
              aria-hidden="true"
              className="hidden sm:block h-5 w-px bg-border dark:bg-border-dark"
            />
            <h1 className="font-display font-semibold text-sm sm:text-base tracking-tight truncate">
              Resume — {PERSONAL_INFO.name}
            </h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle />
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-4 !py-2 text-sm hidden sm:inline-flex"
            >
              Open PDF
              <ExternalLink size={15} />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download={PERSONAL_INFO.resumeFileName}
              className="btn-primary !px-4 !py-2 text-sm"
            >
              Download
              <Download size={15} />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Inline viewer — desktop browsers render PDFs natively in an iframe. */}
        <iframe
          src={`${PERSONAL_INFO.resumeUrl}#view=FitH`}
          title={`Resume of ${PERSONAL_INFO.name}`}
          className="hidden md:block flex-1 w-full border-0 bg-bg-secondary dark:bg-bg-dark"
        />

        {/* Mobile browsers mostly refuse to render PDFs inline, so offer the actions directly. */}
        <div className="md:hidden flex-1 flex items-center justify-center p-6">
          <div className="card p-8 w-full max-w-sm text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <FileText size={26} />
            </div>
            <h2 className="mt-5 font-display font-bold text-lg text-text-primary dark:text-text-dark-primary">
              {PERSONAL_INFO.name}
            </h2>
            <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary">
              Inline preview isn&apos;t supported on most mobile browsers. Open the PDF in a new tab
              or download a copy.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-sm"
              >
                Open PDF
                <ExternalLink size={15} />
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeFileName}
                className="btn-secondary w-full text-sm"
              >
                Download
                <Download size={15} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
