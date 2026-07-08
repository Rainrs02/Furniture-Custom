"use client";

import { useConsultationStore } from "@/store/consultationStore";
import { ArrowRight, ArrowLeft } from "lucide-react";

const materials = [
  "Multiplek / Plywood HPL",
  "MDF + Duco",
  "Blockboard",
  "Solid Wood Jati",
  "Solid Wood Mahoni",
  "Veneer",
  "Melamic",
  "ACP (Komersial)",
  "Belum tahu / Minta Saran",
];

const budgets = [
  "< Rp 5 Juta",
  "Rp 5–15 Juta",
  "Rp 15–30 Juta",
  "Rp 30–60 Juta",
  "Rp 60–100 Juta",
  "> Rp 100 Juta",
  "Belum tentukan",
];

const timelines = [
  "Sesegera mungkin (< 1 bulan)",
  "1–2 bulan",
  "2–3 bulan",
  "3–6 bulan",
  "> 6 bulan / masih planning",
];

function SelectGroup({ label, options, value, onChange, error }: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div className="mb-6">
      <label className="block text-xs uppercase tracking-wider mb-3 font-medium" style={{ color: "var(--color-wood)", fontFamily: "var(--font-mono)" }}>
        {label} <span style={{ color: "var(--color-gold)" }}>*</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className="px-3 py-2 text-xs rounded-sm transition-all"
            style={{
              fontFamily: "var(--font-inter)",
              backgroundColor: value === opt ? "var(--color-wood)" : "var(--color-linen)",
              color: value === opt ? "var(--color-linen)" : "var(--color-wood)",
              border: `1px solid ${value === opt ? "var(--color-wood)" : "var(--color-stone)"}`,
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      {error && <p className="text-xs mt-2" style={{ color: "#e53e3e", fontFamily: "var(--font-inter)" }}>{error}</p>}
    </div>
  );
}

export default function Step3Detail() {
  const { data, errors, updateField, nextStep, prevStep } = useConsultationStore();

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
        Detail Proyek
      </h3>
      <p className="text-sm mb-8 opacity-70" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
        Informasi ini membantu kami menyiapkan penawaran yang paling tepat untuk Anda
      </p>

      <SelectGroup
        label="Preferensi Material"
        options={materials}
        value={data.material}
        onChange={(v) => updateField("material", v)}
        error={errors.material}
      />
      <SelectGroup
        label="Estimasi Budget"
        options={budgets}
        value={data.budget}
        onChange={(v) => updateField("budget", v)}
        error={errors.budget}
      />
      <SelectGroup
        label="Timeline Proyek"
        options={timelines}
        value={data.timeline}
        onChange={(v) => updateField("timeline", v)}
        error={errors.timeline}
      />

      <div className="flex justify-between">
        <button onClick={prevStep} className="btn-secondary">
          <ArrowLeft size={16} /> Kembali
        </button>
        <button onClick={nextStep} className="btn-primary">
          Lanjut: Konfirmasi <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
