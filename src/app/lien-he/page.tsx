import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ với UNICON TBV để được tư vấn giải pháp thi công cơ điện (M&E).",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Liên hệ"
        title="Hãy để chúng tôi hỗ trợ bạn"
        subtitle="Gửi thông tin liên hệ, đội ngũ UNICON TBV sẽ phản hồi trong thời gian sớm nhất."
      />

      <Section variant="light">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ContactInfoCard />
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
