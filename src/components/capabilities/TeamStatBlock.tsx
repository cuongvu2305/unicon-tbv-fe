import { Users } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionary";

export function TeamStatBlock({ dict }: { dict: Dictionary }) {
  const { team } = dict.capabilities;
  const total = team.items.reduce((sum, row) => sum + row.headcount, 0);

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900">
          <Users className="h-5 w-5 text-gold-400" />
        </span>
        <div>
          <h3 className="text-base font-bold text-navy-900">{team.heading}</h3>
          <p className="text-xs text-navy-500">
            {team.subheadingTemplate.replace("{count}", String(total))}
          </p>
        </div>
      </div>

      <ul className="divide-y divide-navy-100">
        {team.items.map((row) => (
          <li key={row.discipline} className="flex items-center justify-between gap-4 py-3 text-sm">
            <div>
              <p className="font-medium text-navy-800">{row.discipline}</p>
              <p className="text-xs text-navy-500">{row.qualification}</p>
            </div>
            <span className="shrink-0 rounded-full bg-navy-50 px-3 py-1 text-sm font-bold text-navy-900">
              {row.headcount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
