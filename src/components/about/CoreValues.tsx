import { coreValues } from "@/data/coreValues";

export function CoreValues() {
  return (
    <div>
      <h3 className="text-base font-bold text-navy-900">Giá trị cốt lõi — TBV</h3>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {coreValues.map((value) => (
          <div key={value.letter} className="rounded-2xl border border-navy-100 bg-white p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-xl font-extrabold text-navy-950">
              {value.letter}
            </span>
            <p className="mt-4 text-sm font-bold text-navy-900">
              {value.titleVi} <span className="font-medium text-navy-500">({value.titleEn})</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
