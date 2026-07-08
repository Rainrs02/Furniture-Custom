"use client";

import { useConsultationStore } from "@/store/consultationStore";
import { ArrowLeft, Send, Loader2 } from "lucide-react";

function SummaryRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-4 py-3 border-b" style={{ borderColor: "var(--color-stone)" }}>
      <span className="text-xs uppercase tracking-wider w-36 flex-shrink-0 pt-0.5" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
        {label}
      </span>
      <span className="text-sm flex-1" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
        {value}
      </span>
    </div>
  );
}

export default function Step4Konfirmasi() {
  const { data, prevStep, submit, isSubmitting } = useConsultationStore();

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
        Konfirmasi & Kirim
      </h3>
      <p className="text-sm mb-8 opacity-70" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
        Periksa kembali data Anda sebelum mengirim konsultasi
      </p>

      {/* Summary */}
      <div
        className="p-6 rounded-sm mb-8"
        style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-stone)" }}
      >
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
          Ringkasan Konsultasi
        </p>

        <SummaryRow label="Nama" value={data.nama} />
        <SummaryRow label="Email" value={data.email} />
        <SummaryRow label="Telepon" value={data.telepon} />
        <SummaryRow label="Alamat" value={data.alamat} />
        <SummaryRow label="Ruangan" value={data.ruangan} />
        <SummaryRow label="Kebutuhan" value={data.deskripsi} />
        <SummaryRow label="Foto" value={data.referensiFoto ? data.referensiFoto.name : "-"} />
        <SummaryRow label="Material" value={data.material} />
        <SummaryRow label="Budget" value={data.budget} />
        <SummaryRow label="Timeline" value={data.timeline} />
      </div>

      {/* Privacy Note */}
      <div
        className="p-4 rounded-sm mb-8 text-xs leading-relaxed"
        style={{ backgroundColor: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}
      >
        🔒 Data Anda aman bersama kami. Informasi yang Anda berikan hanya digunakan untuk keperluan konsultasi dan tidak akan dibagikan kepada pihak ketiga.
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="btn-secondary" disabled={isSubmitting}>
          <ArrowLeft size={16} /> Kembali
        </button>
        <button
          onClick={submit}
          className="btn-primary"
          disabled={isSubmitting}
          style={{ opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Mengirim...
            </>
          ) : (
            <>
              <Send size={16} /> Kirim Konsultasi
            </>
          )}
        </button>
      </div>
    </div>
  );
}
