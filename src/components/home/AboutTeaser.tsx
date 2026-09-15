import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { coreValues, vision } from "@/data/coreValues";

export function AboutTeaser() {
  return (
    <Section id="gioi-thieu" variant="light">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-5 text-left">
          <SectionHeading
            eyebrow="Về UNICON TBV"
            title="Đối tác thi công cơ điện đáng tin cậy"
            align="left"
          />
          <ul className="space-y-3">
            {vision.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
          <Button href="/gioi-thieu" variant="ghost" className="!px-0">
            Tìm hiểu thêm về chúng tôi
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
          {coreValues.map((value) => (
            <div
              key={value.letter}
              className="flex flex-col gap-3 rounded-2xl border border-navy-100 bg-navy-50/50 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-lg font-extrabold text-gold-400">
                {value.letter}
              </span>
              <div>
                <p className="text-sm font-bold text-navy-900">
                  {value.titleVi} <span className="font-medium text-navy-500">({value.titleEn})</span>
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-navy-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
