import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/dictionary";

export function WhyChooseSection({ dict }: { dict: Dictionary }) {
  const teamTotal = dict.capabilities.team.items.reduce(
    (sum, item) => sum + item.headcount,
    0,
  );
  const values = [
    "",
    String(teamTotal),
    String(dict.capabilities.equipment.items.length),
    String(dict.services.items.length),
    String(dict.projects.items.length),
    "",
  ];

  return (
    <Section id="vi-sao-chon" variant="light">
      <SectionHeading
        eyebrow={dict.whyChoose.eyebrow}
        title={dict.whyChoose.title}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dict.whyChoose.items.map((item, i) => (
          <div
            key={item.title}
            className="rounded-2xl border border-navy-100 bg-white p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-400">
              {i + 1}
            </span>
            <h3 className="mt-4 text-base font-bold text-navy-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              {item.description.replace("{n}", values[i])}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
