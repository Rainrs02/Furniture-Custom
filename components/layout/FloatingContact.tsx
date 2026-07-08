"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useContactStore } from "@/store/contactStore";

export default function FloatingContact() {
  const { isOpen, customMessage, openModal, closeModal, setMessage, sendViaWhatsApp } =
    useContactStore();

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-80 rounded-sm shadow-2xl overflow-hidden"
              style={{
                backgroundColor: "var(--color-linen)",
                border: "1px solid var(--color-stone)",
              }}
            >
              {/* Modal Header */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ backgroundColor: "var(--color-wood)", color: "var(--color-linen)" }}
              >
                <div>
                  <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                    Konsultasi Gratis
                  </p>
                  <p className="text-xs opacity-70 mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                    via WhatsApp · Respons cepat
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="opacity-70 hover:opacity-100 transition-opacity p-1"
                  aria-label="Tutup"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4">
                <p
                  className="text-sm mb-3 leading-relaxed"
                  style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}
                >
                  Ceritakan kebutuhan furnitur Anda, kami siap membantu!
                </p>
                <textarea
                  value={customMessage}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contoh: Saya butuh kitchen set untuk dapur 3x4m dengan material HPL dan finishing duco putih..."
                  rows={4}
                  className="w-full text-sm resize-none rounded-sm p-3 outline-none transition-all"
                  style={{
                    backgroundColor: "var(--color-broken-white)",
                    border: "1px solid var(--color-stone)",
                    color: "var(--color-charcoal)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.8rem",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-gold)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-stone)";
                  }}
                />
                <button
                  onClick={sendViaWhatsApp}
                  className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-sm font-semibold text-sm transition-all hover:brightness-110"
                  style={{
                    backgroundColor: "#25D366",
                    color: "white",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  <Send size={16} />
                  Kirim via WhatsApp
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Trigger */}
        <motion.button
          onClick={() => (isOpen ? closeModal() : openModal())}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-3 shadow-lg rounded-sm font-semibold text-sm"
          style={{
            backgroundColor: isOpen ? "var(--color-wood)" : "var(--color-gold)",
            color: isOpen ? "var(--color-linen)" : "var(--color-wood-dark)",
            fontFamily: "var(--font-inter)",
          }}
          aria-label="Konsultasi Gratis via WhatsApp"
        >
          <MessageCircle size={20} />
          <span className="hidden sm:inline">
            {isOpen ? "Tutup" : "Konsultasi Gratis"}
          </span>
        </motion.button>
      </div>
    </>
  );
}
