import { profile, education } from "../lib/data";
import { SectionHeading } from "./section-heading";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <SectionHeading eyebrow="Education" title="" />
        {education.map((item) => (
          <Reveal
            key={item.degree}
            className="reveal mb-12 flex flex-col gap-1 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="mt-1 text-sm text-accent">{item.school}</p>
            </div>
            <span className="text-sm text-subtle">{item.period}</span>
          </Reveal>
        ))}

        <Reveal className="reveal rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-transparent p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            I&apos;m always open to discussing new projects, ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-subtle">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <GitHubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <MailIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
