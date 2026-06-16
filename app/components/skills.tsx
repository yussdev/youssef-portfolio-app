import { skillGroups } from "../lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="What I work with" title="Skills & Tooling" />
      <Reveal className="reveal-group grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10"
          >
            <h3 className="text-base font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-surface-muted px-3 py-1 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
