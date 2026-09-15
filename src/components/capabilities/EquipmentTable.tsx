import { Wrench } from "lucide-react";
import { equipment } from "@/data/equipment";

export function EquipmentTable() {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900">
          <Wrench className="h-5 w-5 text-gold-400" />
        </span>
        <div>
          <h3 className="text-base font-bold text-navy-900">Năng lực thiết bị</h3>
          <p className="text-xs text-navy-500">Máy móc, thiết bị thi công hiện đại</p>
        </div>
      </div>

      {/* Table on sm+, stacked list on mobile */}
      <div className="hidden sm:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-navy-100 text-left text-xs uppercase tracking-wide text-navy-500">
              <th className="py-2 font-semibold">Tên thiết bị</th>
              <th className="py-2 text-right font-semibold">Số lượng</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50">
            {equipment.map((item) => (
              <tr key={item.name}>
                <td className="py-2.5 text-navy-800">{item.name}</td>
                <td className="py-2.5 text-right font-semibold text-navy-900">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="divide-y divide-navy-50 sm:hidden">
        {equipment.map((item) => (
          <li key={item.name} className="flex items-center justify-between gap-4 py-2.5 text-sm">
            <span className="text-navy-800">{item.name}</span>
            <span className="shrink-0 font-semibold text-navy-900">{item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
