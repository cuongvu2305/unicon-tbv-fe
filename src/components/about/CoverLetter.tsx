import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/dictionary";

export function CoverLetter({ dict }: { dict: Dictionary }) {
  const { coverLetter } = dict.about;

  return (
    <div>
      <SectionHeading eyebrow={coverLetter.eyebrow} title={coverLetter.title} align="left" />
      <div className="mt-6 space-y-4">
        {coverLetter.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-navy-700">
            {paragraph}
          </p>
        ))}
        <p className="text-sm font-bold text-navy-900">{coverLetter.closing}</p>
      </div>
    </div>
  );
}
