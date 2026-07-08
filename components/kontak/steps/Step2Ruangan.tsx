"use client";

import { useConsultationStore } from "@/store/consultationStore";
import { ArrowRight, ArrowLeft, Upload } from "lucide-react";

const rooms = [
  "Dapur / Kitchen Set",
  "Ruang Tamu",
  "Ruang Keluarga",
  "Kamar Tidur",
  "Ruang Kerja",
  "Ruang Makan",
  "Walk In Closet",
  "Kamar Mandi",
  "Pantry / Laundry",
  "Area Komersial",
  "Lainnya",
];

export default function Step2Ruangan() {
  const { data, errors, updateField, nextStep, prevStep } = useConsultationStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    updateField("referensiFoto", file);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
        Ruangan & Kebutuhan
      </h3>
      <p className="text-sm mb-8 opacity-70" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
        Pilih jenis ruangan dan ceritakan furnitur yang Anda inginkan
      </p>

      {/* Room Selection */}
      <div className="mb-6">
        <label className="block text-xs uppercase tracking-wider mb-3 font-medium" style={{ color: "var(--color-wood)", fontFamily: "var(--font-mono)" }}>
          Jenis Ruangan <span style={{ color: "var(--color-gold)" }}>*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {rooms.map((room) => (
            <button
              key={room}
              type="button"
              onClick={() => updateField("ruangan", room)}
              className="px-3 py-2.5 text-xs text-left rounded-sm transition-all"
              style={{
                fontFamily: "var(--font-inter)",
                backgroundColor: data.ruangan === room ? "var(--color-wood)" : "var(--color-linen)",
                color: data.ruangan === room ? "var(--color-linen)" : "var(--color-wood)",
                border: `1px solid ${data.ruangan === room ? "var(--color-wood)" : "var(--color-stone)"}`,
              }}
            >
              {room}
            </button>
          ))}
        </div>
        {errors.ruangan && <p className="text-xs mt-2" style={{ color: "#e53e3e", fontFamily: "var(--font-inter)" }}>{errors.ruangan}</p>}
      </div>

      {/* Description */}
      <div className="mb-6">
        <label htmlFor="deskripsi" className="block text-xs uppercase tracking-wider mb-2 font-medium" style={{ color: "var(--color-wood)", fontFamily: "var(--font-mono)" }}>
          Deskripsi Kebutuhan <span style={{ color: "var(--color-gold)" }}>*</span>
        </label>
        <textarea
          id="deskripsi"
          rows={5}
          value={data.deskripsi}
          onChange={(e) => updateField("deskripsi", e.target.value)}
          placeholder="Contoh: Saya butuh kitchen set untuk dapur berukuran 3x4 meter dengan lemari atas dan bawah, kitchen island di tengah, finishing HPL motif kayu, warna putih broken white..."
          className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all resize-none"
          style={{
            backgroundColor: "var(--color-linen)",
            border: `1px solid ${errors.deskripsi ? "#e53e3e" : "var(--color-stone)"}`,
            color: "var(--color-charcoal)",
            fontFamily: "var(--font-inter)",
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = errors.deskripsi ? "#e53e3e" : "var(--color-stone)"; }}
        />
        <div className="flex justify-between mt-1">
          {errors.deskripsi && <p className="text-xs" style={{ color: "#e53e3e", fontFamily: "var(--font-inter)" }}>{errors.deskripsi}</p>}
          <p className="text-xs ml-auto" style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-mono)" }}>
            {data.deskripsi.length}/500
          </p>
        </div>
      </div>

      {/* Reference Photo */}
      <div className="mb-8">
        <label className="block text-xs uppercase tracking-wider mb-2 font-medium" style={{ color: "var(--color-wood)", fontFamily: "var(--font-mono)" }}>
          Foto Referensi (Opsional)
        </label>
        <label
          className="flex flex-col items-center justify-center p-6 rounded-sm cursor-pointer transition-all"
          style={{
            backgroundColor: "var(--color-linen)",
            border: "1px dashed var(--color-stone)",
          }}
        >
          <Upload size={24} style={{ color: "var(--color-gold)", marginBottom: "0.5rem" }} />
          <p className="text-sm font-medium" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
            {data.referensiFoto ? data.referensiFoto.name : "Klik untuk unggah foto referensi"}
          </p>
          <p className="text-xs mt-1 opacity-60" style={{ color: "var(--color-wood)", fontFamily: "var(--font-mono)" }}>
            JPG, PNG, WEBP hingga 5MB
          </p>
          <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
        </label>
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="btn-secondary">
          <ArrowLeft size={16} /> Kembali
        </button>
        <button onClick={nextStep} className="btn-primary">
          Lanjut: Detail <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
