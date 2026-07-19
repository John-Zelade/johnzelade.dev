interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium text-primary">{eyebrow}</p>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
