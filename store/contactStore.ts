import { create } from "zustand";

interface ContactStore {
  isOpen: boolean;
  customMessage: string;
  openModal: () => void;
  closeModal: () => void;
  setMessage: (msg: string) => void;
  sendViaWhatsApp: () => void;
}

const WHATSAPP_NUMBER = "6281234567890";

export const useContactStore = create<ContactStore>((set, get) => ({
  isOpen: false,
  customMessage: "",

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false, customMessage: "" }),

  setMessage: (msg) => set({ customMessage: msg }),

  sendViaWhatsApp: () => {
    const { customMessage } = get();
    const message = customMessage.trim() || "Halo, saya ingin berkonsultasi tentang furniture custom.";
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    set({ isOpen: false, customMessage: "" });
  },
}));
