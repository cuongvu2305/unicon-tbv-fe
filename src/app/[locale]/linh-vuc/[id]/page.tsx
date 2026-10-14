import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { serviceProjects } from "@/data/services";
import { isLocale, defaultLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { serviceImages } from "@/i18n/assets";

type Params = Promise<{ locale: string; id: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).serviceDetail.items.map((item) => ({ locale, id: item.id })),
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const service = getDictionary(locale).services.items.find((s) => s.id === id);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const service = dict.services.items.find((s) => s.id === id);
  const detail = dict.serviceDetail.items.find((s) => s.id === id);
  if (!service || !detail) notFound();

  const projects = (serviceProjects[id] ?? [])
    .map((projectId) => dict.projects.items.find((p) => p.id === projectId))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHeader eyebrow={dict.services.eyebrow} title={service.title} subtitle={service.description} />

      <Section variant="light">
        <Link
          href={`/${locale}#linh-vuc-hoat-dong`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-600"
        >
          <ArrowLeft className="h-4 w-4" />
          {dict.serviceDetail.backToList}
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy-950">
            <Image
              src={serviceImages[id]}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-navy-700">{detail.intro}</p>
            <div>
              <h2 className="mb-4 text-xl font-bold text-navy-900">{dict.serviceDetail.scopeTitle}</h2>
              <ul className="flex flex-col gap-3">
                {detail.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {projects.length > 0 && (
        <Section variant="muted">
          <h2 className="mb-8 text-2xl font-bold text-navy-900">{dict.serviceDetail.relatedProjectsTitle}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                scopeLabel={dict.projects.scopeLabel}
                locale={locale}
              />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
