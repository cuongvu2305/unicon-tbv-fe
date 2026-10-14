import Image from "next/image";
import Link from "next/link";
import { serviceProjects } from "@/data/services";
import { projectGalleries, serviceIcons, serviceImages } from "@/i18n/assets";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

type ServiceItem = Dictionary["services"]["items"][number];

const cardClasses =
  "group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition-shadow duration-200 hover:shadow-lg hover:shadow-navy-900/5";

export function ServiceCard({ service, locale }: { service: ServiceItem; locale: Locale }) {
  const Icon = serviceIcons[service.id];

  const content = (
    <>
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
        <Image
          src={serviceImages[service.id]}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 transition-colors duration-200 group-hover:bg-gold-500">
          <Icon className="h-6 w-6 text-gold-400 transition-colors duration-200 group-hover:text-navy-950" />
        </span>
        <h3 className="text-base font-bold text-navy-900">{service.title}</h3>
        <p className="text-sm leading-relaxed text-navy-600">{service.description}</p>
      </div>
    </>
  );

  // Services with a detail page link there; otherwise a service whose id matches a
  // project with photos links to that project's page.
  const href = serviceProjects[service.id]
    ? `/${locale}/linh-vuc/${service.id}`
    : projectGalleries[service.id]
      ? `/${locale}/du-an/${service.id}`
      : null;
  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    );
  }
  return <div className={cardClasses}>{content}</div>;
}
