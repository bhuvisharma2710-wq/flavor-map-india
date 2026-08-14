type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
};

/** Shared heading block so every homepage section keeps the same rhythm. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={
          tone === "light"
            ? "mt-3 text-3xl font-semibold text-deep-foreground sm:text-4xl"
            : "mt-3 text-3xl font-semibold text-foreground sm:text-4xl"
        }
      >
        {title}
      </h2>
      {description && (
        <p
          className={
            tone === "light"
              ? "mt-4 text-base leading-relaxed text-deep-foreground/75"
              : "mt-4 text-base leading-relaxed text-muted-foreground"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}
