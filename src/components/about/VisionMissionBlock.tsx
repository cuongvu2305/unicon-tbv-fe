import { Telescope, Target } from "lucide-react";
import { vision, mission } from "@/data/coreValues";

const blocks = [
  { title: "Tầm nhìn", icon: Telescope, items: vision },
  { title: "Sứ mệnh", icon: Target, items: mission },
];

export function VisionMissionBlock() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {blocks.map(({ title, icon: Icon, items }) => (
        <div key={title} className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900">
              <Icon className="h-5 w-5 text-gold-400" />
            </span>
            <h3 className="text-base font-bold text-navy-900">{title}</h3>
          </div>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
