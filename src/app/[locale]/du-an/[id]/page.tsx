import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { isLocale, defaultLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { projectGalleries, projectImages, projectVideos } from "@/i18n/assets";

type Params = Promise<{ locale: string; id: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).projects.items.map((project) => ({
      locale,
      id: project.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const project = getDictionary(locale).projects.items.find((p) => p.id === id);
  if (!project) return {};
  return { title: project.name, description: project.scopeOfWork };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const project = dict.projects.items.find((p) => p.id === id);
  if (!project) notFound();

  const gallery = projectGalleries[project.id];
  const videos = projectVideos[project.id];
  const hasCatalogue = project.id === "quat-tran-cong-nghiep";

  return (
    <>
      <PageHeader
        eyebrow={dict.projects.page.eyebrow}
        title={project.name}
        subtitle={project.scopeOfWork}
      />

      <Section variant="light">
        <Link
          href={`/${locale}/du-an`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-600"
        >
          <ArrowLeft className="h-4 w-4" />
          {dict.projects.backToList}
        </Link>

        {hasCatalogue && (
          <Link
            href={`/${locale}/catalogue`}
            className="mb-10 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            {dict.nav.catalogue}
          </Link>
        )}

        {videos && (
          <div className="mb-12">
            <h2 className="mb-6 text-xl font-bold text-navy-900">{dict.projects.videoTitle}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {videos.map((src) => (
                <video
                  key={src}
                  src={src}
                  poster={projectImages[project.id]}
                  controls
                  preload="metadata"
                  playsInline
                  className="aspect-video w-full rounded-2xl bg-navy-950"
                />
              ))}
            </div>
          </div>
        )}

        {gallery && (
          <>
            <h2 className="mb-6 text-xl font-bold text-navy-900">
              {dict.projects.galleryTitle}
            </h2>
            <ProjectGallery images={gallery} alt={project.name} />
          </>
        )}
      </Section>
    </>
  );
}
