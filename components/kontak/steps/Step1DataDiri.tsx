"use client";

import { useConsultationStore } from "@/store/consultationStore";
import { ArrowRight } from "lucide-react";

function InputField({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-wider mb-2 font-medium"
        style={{ color: "var(--color-wood)", fontFamily: "var(--font-mono)" }}
      >
        {label} {required && <span style={{ color: "var(--color-gold)" }}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all"
        style={{
          backgroundColor: "var(--color-linen)",
          border: `1px solid ${error ? "#e53e3e" : "var(--color-stone)"}`,
          color: "var(--color-charcoal)",
          fontFamily: "var(--font-inter)",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = error ? "#e53e3e" : "var(--color-stone)"; }}
      />
      {error && <p className="text-xs mt-1" style={{ color: "#e53e3e", fontFamily: "var(--font-inter)" }}>{error}</p>}
    </div>
  );
}

export default function Step1DataDiri() {
  const { data, errors, updateField, nextStep } = useConsultationStore();

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
        Data Diri
      </h3>
      <p className="text-sm mb-8 opacity-70" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
        Kami butuh info dasar Anda untuk menghubungi kembali dengan penawaran terbaik
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <InputField
          label="Nama Lengkap"
          id="nama"
          value={data.nama}
          onChange={(v) => updateField("nama", v)}
          error={errors.nama}
          placeholder="Budi Santoso"
          required
        />
        <InputField
          label="Nomor Telepon"
          id="telepon"
          type="tel"
          value={data.telepon}
          onChange={(v) => updateField("telepon", v)}
          error={errors.telepon}
          placeholder="+62 812 3456 7890"
          required
        />
        <InputField
          label="Alamat Email"
          id="email"
          type="email"
          value={data.email}
          onChange={(v) => updateField("email", v)}
          error={errors.email}
          placeholder="budi@email.com"
          required
        />
        <div>
          <label
            htmlFor="alamat"
            className="block text-xs uppercase tracking-wider mb-2 font-medium"
            style={{ color: "var(--color-wood)", fontFamily: "var(--font-mono)" }}
          >
            Kota/Alamat <span style={{ color: "var(--color-gold)" }}>*</span>
          </label>
          <textarea
            id="alamat"
            rows={3}
            value={data.alamat}
            onChange={(e) => updateField("alamat", e.target.value)}
            placeholder="Jakarta Selatan, Kompleks..."
            className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all resize-none"
            style={{
              backgroundColor: "var(--color-linen)",
              border: `1px solid ${errors.alamat ? "#e53e3e" : "var(--color-stone)"}`,
              color: "var(--color-charcoal)",
              fontFamily: "var(--font-inter)",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = errors.alamat ? "#e53e3e" : "var(--color-stone)"; }}
          />
          {errors.alamat && <p className="text-xs mt-1" style={{ color: "#e53e3e", fontFamily: "var(--font-inter)" }}>{errors.alamat}</p>}
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={nextStep} className="btn-primary">
          Lanjut: Kebutuhan <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
