import { ArrowRight, Phone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function ContactTeaser() {
  return (
    <Section variant="light">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 px-6 py-14 text-center text-white sm:px-16">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Sẵn sàng bắt đầu dự án cơ điện của bạn?
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Liên hệ ngay với UNICON TBV để được tư vấn giải pháp M&amp;E phù hợp nhất cho công
          trình của bạn.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/lien-he">
            Gửi yêu cầu tư vấn
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={`tel:${company.phone.replace(/\s/g, "")}`} variant="outline">
            <Phone className="h-4 w-4" />
            {company.phone}
          </Button>
        </div>
      </div>
    </Section>
  );
}
