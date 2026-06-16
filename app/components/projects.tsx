import { projects } from "../lib/data";
import { SectionHeading } from "./section-heading";
import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="Selected work" title="Projects" />
      <Reveal className="reveal-group grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
                {project.name}
              </h3>
              <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
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
      </Reveal>
    </section>
  );
}
