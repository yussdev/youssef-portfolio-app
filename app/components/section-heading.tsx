import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="reveal mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
