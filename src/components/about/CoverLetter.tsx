import { SectionHeading } from "@/components/ui/SectionHeading";
import { coverLetter } from "@/data/coreValues";

export function CoverLetter() {
  return (
    <div>
      <SectionHeading eyebrow="Thư ngỏ" title="Kính gửi Quý đối tác, Quý khách hàng!" align="left" />
      <div className="mt-6 space-y-4">
        {coverLetter.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-navy-700">
            {paragraph}
          </p>
        ))}
        <p className="text-sm font-bold text-navy-900">Trân trọng!</p>
      </div>
    </div>
  );
}
