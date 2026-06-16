import { experience } from "../lib/data";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-border bg-surface/40"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <SectionHeading eyebrow="Where I've been" title="Experience" />
        <ol className="relative border-l border-border">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="ml-6 pb-10 last:pb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {job.role}{" "}
                  <span className="text-accent">· {job.company}</span>
                </h3>
                <span className="text-sm text-subtle">{job.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted">{job.location}</p>
              <ul className="mt-3 space-y-2">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
