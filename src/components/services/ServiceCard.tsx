import type { Service } from "@/types/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-navy-900/5">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 transition-colors duration-200 group-hover:bg-gold-500">
        <Icon className="h-6 w-6 text-gold-400 transition-colors duration-200 group-hover:text-navy-950" />
      </span>
      <h3 className="text-base font-bold text-navy-900">{service.title}</h3>
      <p className="text-sm leading-relaxed text-navy-600">{service.description}</p>
    </div>
  );
}
