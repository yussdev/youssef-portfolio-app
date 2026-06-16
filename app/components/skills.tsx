import { skillGroups, type SkillIcon } from "../lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import {
  SparklesIcon,
  CodeIcon,
  ServerIcon,
  CubeIcon,
  LayersIcon,
} from "./icons";

const iconMap: Record<SkillIcon, (props: { className?: string }) => React.ReactElement> = {
  ai: SparklesIcon,
  frontend: CodeIcon,
  backend: ServerIcon,
  web3: CubeIcon,
  architecture: LayersIcon,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="What I work with" title="Skills & Tooling" />
      <Reveal className="reveal-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon];
          return (
            <div
              key={group.title}
              className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                group.featured
                  ? "border-accent/50 bg-accent-soft/40 shadow-md shadow-accent/10 hover:border-accent hover:shadow-accent/20"
                  : "border-border bg-surface hover:border-accent/60 hover:shadow-accent/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    group.featured
                      ? "bg-accent/15 text-accent"
                      : "bg-surface-muted text-muted group-hover:text-accent"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
                {group.featured && (
                  <span className="ml-auto inline-flex items-center rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                    Featured
                  </span>
                )}
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                      group.featured
                        ? "border-accent/30 bg-accent/10 text-accent hover:bg-accent/20"
                        : "border-border bg-surface-muted text-foreground hover:border-accent/60 hover:text-accent"
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
