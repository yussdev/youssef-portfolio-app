import { projects } from "../lib/data";
import { SectionHeading } from "./section-heading";
import { ArrowUpRightIcon } from "./icons";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="Selected work" title="Projects" />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-subtle transition-colors group-hover:text-accent" />
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
