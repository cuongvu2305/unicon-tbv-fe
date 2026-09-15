interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            dark ? "text-gold-400" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold sm:text-4xl ${dark ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed ${dark ? "text-white/70" : "text-navy-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
