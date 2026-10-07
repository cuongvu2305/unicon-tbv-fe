import Image from "next/image";
import Link from "next/link";
import { projectImages } from "@/i18n/assets";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

type ProjectItem = Dictionary["projects"]["items"][number];

export function ProjectCard({
  project,
  scopeLabel,
  locale,
}: {
  project: ProjectItem;
  scopeLabel: string;
  locale: Locale;
}) {
  return (
    <Link
      href={`/${locale}/du-an/${project.id}`}
      className="group block overflow-hidden rounded-2xl border border-navy-100 bg-white transition-shadow duration-200 hover:shadow-lg hover:shadow-navy-900/5"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
        <Image
          src={projectImages[project.id]}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-sm font-bold text-navy-900">{project.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-navy-500">
          <span className="font-semibold text-gold-700">{scopeLabel}</span>{" "}
          {project.scopeOfWork}
        </p>
      </div>
    </Link>
  );
}
