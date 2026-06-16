import { profile } from "../lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./icons";

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute top-40 right-0 h-64 w-64 translate-x-1/3 rounded-full bg-accent/10 blur-[100px] [animation-delay:-4s]"
      />
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
        <h1 className="animate-fade-up mt-6 text-4xl font-bold tracking-tight [animation-delay:80ms] sm:text-6xl">
          {profile.name}
        </h1>
        <p className="animate-fade-up mt-3 text-xl font-medium text-accent [animation-delay:160ms] sm:text-2xl">
          {profile.role} · {profile.tagline}
        </p>

        <p className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted [animation-delay:240ms] sm:text-lg">
          {profile.summary}
        </p>

        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 [animation-delay:320ms]">
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted"
          >
            <MailIcon className="h-4 w-4" />
            Get in touch
          </a>
        </div>

        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted [animation-delay:400ms]">
          <span className="inline-flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" />
            {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <dl className="animate-fade-up mt-12 grid max-w-xl grid-cols-3 gap-4 [animation-delay:480ms]">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
            >
              <dt className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
