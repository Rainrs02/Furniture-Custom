"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useConsultationStore } from "@/store/consultationStore";
import Step1DataDiri from "./steps/Step1DataDiri";
import Step2Ruangan from "./steps/Step2Ruangan";
import Step3Detail from "./steps/Step3Detail";
import Step4Konfirmasi from "./steps/Step4Konfirmasi";
import SuccessMessage from "./SuccessMessage";

const stepLabels = [
  { number: 1, label: "Data Diri" },
  { number: 2, label: "Kebutuhan" },
  { number: 3, label: "Detail Proyek" },
  { number: 4, label: "Konfirmasi" },
];

export default function KonsultasiForm() {
  const { currentStep, isSuccess } = useConsultationStore();

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-linen)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="wood-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
            Form Konsultasi
          </h2>
          <p className="mt-4 text-base opacity-75" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
            Isi form berikut untuk mendapatkan estimasi harga dan desain gratis dari tim kami
          </p>
        </div>

        {isSuccess ? (
          <SuccessMessage />
        ) : (
          <div
            className="rounded-sm overflow-hidden"
            style={{ border: "1px solid var(--color-stone)" }}
          >
            {/* Progress Bar */}
            <div style={{ backgroundColor: "var(--color-wood)" }} className="px-8 py-6">
              {/* Step indicators */}
              <div className="flex items-center justify-between mb-4">
                {stepLabels.map((step, i) => (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold transition-all duration-300"
                        style={{
                          fontFamily: "var(--font-mono)",
                          backgroundColor: currentStep >= step.number ? "var(--color-gold)" : "rgba(253,251,247,0.2)",
                          color: currentStep >= step.number ? "var(--color-wood-dark)" : "rgba(253,251,247,0.5)",
                        }}
                      >
                        {currentStep > step.number ? "✓" : step.number}
                      </div>
                      <span
                        className="text-xs mt-2 hidden sm:block"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: currentStep >= step.number ? "var(--color-gold)" : "rgba(253,251,247,0.4)",
                        }}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < stepLabels.length - 1 && (
                      <div
                        className="flex-1 h-px mx-3 transition-all duration-500"
                        style={{
                          backgroundColor: currentStep > step.number ? "var(--color-gold)" : "rgba(253,251,247,0.2)",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Wood grain progress */}
              <div className="relative h-1 rounded-sm overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-sm"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  animate={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                {/* Wood grain lines */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.2) 8px, rgba(255,255,255,0.2) 10px)" }}
                />
              </div>
            </div>

            {/* Form Steps */}
            <div className="p-8 md:p-12" style={{ backgroundColor: "var(--color-broken-white)" }}>
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                    <Step1DataDiri />
                  </motion.div>
                )}
                {currentStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                    <Step2Ruangan />
                  </motion.div>
                )}
                {currentStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                    <Step3Detail />
                  </motion.div>
                )}
                {currentStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                    <Step4Konfirmasi />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
