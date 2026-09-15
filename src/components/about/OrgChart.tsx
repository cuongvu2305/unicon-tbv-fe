import { orgChart } from "@/data/orgChart";

export function OrgChart() {
  return (
    <div>
      <h3 className="text-base font-bold text-navy-900">Sơ đồ tổ chức</h3>

      <div className="mt-6 flex flex-col items-center gap-6">
        <div className="rounded-xl bg-navy-950 px-6 py-3 text-sm font-bold text-gold-400 shadow-sm">
          {orgChart.director}
        </div>

        <div className="h-8 w-px bg-navy-200" />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {orgChart.departments.map((dept) => (
            <div
              key={dept.name}
              className="rounded-xl border border-navy-100 bg-navy-50/60 px-4 py-4 text-center text-xs font-semibold leading-snug text-navy-800"
            >
              {dept.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
