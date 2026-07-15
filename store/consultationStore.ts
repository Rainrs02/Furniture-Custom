import { create } from "zustand";

export type ConsultationStep = 1 | 2 | 3 | 4;

export interface ConsultationData {
  // Step 1 – Data Diri
  nama: string;
  alamat: string;
  email: string;
  telepon: string;

  // Step 2 – Ruangan & Kebutuhan
  ruangan: string;
  deskripsi: string;
  referensiFoto: File | null;

  // Step 3 – Detail Proyek
  material: string;
  budget: string;
  timeline: string;
}

interface ConsultationStore {
  currentStep: ConsultationStep;
  data: ConsultationData;
  errors: Partial<Record<keyof ConsultationData, string>>;
  isSubmitting: boolean;
  isSuccess: boolean;

  setStep: (step: ConsultationStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateField: <K extends keyof ConsultationData>(key: K, value: ConsultationData[K]) => void;
  setError: (key: keyof ConsultationData, message: string) => void;
  clearError: (key: keyof ConsultationData) => void;
  validateStep: (step: ConsultationStep) => boolean;
  submit: () => Promise<void>;
  reset: () => void;
}

const initialData: ConsultationData = {
  nama: "",
  alamat: "",
  email: "",
  telepon: "",
  ruangan: "",
  deskripsi: "",
  referensiFoto: null,
  material: "",
  budget: "",
  timeline: "",
};

export const useConsultationStore = create<ConsultationStore>((set, get) => ({
  currentStep: 1,
  data: initialData,
  errors: {},
  isSubmitting: false,
  isSuccess: false,

  setStep: (step) => set({ currentStep: step }),

  nextStep: () => {
    const { currentStep, validateStep } = get();
    if (validateStep(currentStep) && currentStep < 4) {
      set({ currentStep: (currentStep + 1) as ConsultationStep });
    }
  },

  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 1) {
      set({ currentStep: (currentStep - 1) as ConsultationStep });
    }
  },

  updateField: (key, value) =>
    set((state) => ({
      data: { ...state.data, [key]: value },
      errors: { ...state.errors, [key]: undefined },
    })),

  setError: (key, message) =>
    set((state) => ({
      errors: { ...state.errors, [key]: message },
    })),

  clearError: (key) =>
    set((state) => {
      const errors = { ...state.errors };
      delete errors[key];
      return { errors };
    }),

  validateStep: (step) => {
    const { data, setError } = get();
    let valid = true;

    if (step === 1) {
      if (!data.nama.trim()) { setError("nama", "Nama wajib diisi"); valid = false; }
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        setError("email", "Email tidak valid"); valid = false;
      }
      if (!data.telepon.trim()) { setError("telepon", "Nomor telepon wajib diisi"); valid = false; }
      if (!data.alamat.trim()) { setError("alamat", "Alamat wajib diisi"); valid = false; }
    }

    if (step === 2) {
      if (!data.ruangan) { setError("ruangan", "Pilih jenis ruangan"); valid = false; }
      if (!data.deskripsi.trim() || data.deskripsi.length < 20) {
        setError("deskripsi", "Deskripsi minimal 20 karakter"); valid = false;
      }
    }

    if (step === 3) {
      if (!data.material) { setError("material", "Pilih material"); valid = false; }
      if (!data.budget) { setError("budget", "Pilih estimasi budget"); valid = false; }
      if (!data.timeline) { setError("timeline", "Pilih timeline proyek"); valid = false; }
    }

    return valid;
  },

  submit: async () => {
    const { data, validateStep } = get();
    if (!validateStep(3)) return;

    set({ isSubmitting: true });

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const responseData = await res.json();
        set({ isSuccess: true, isSubmitting: false });

        // Format pesan WA
        const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "628123456789"; 
        let message = `Halo Wasilah Furniture, saya ingin berkonsultasi:\n\n`;
        message += `Nama: ${data.nama}\n`;
        message += `Telepon: ${data.telepon}\n`;
        message += `Email: ${data.email}\n`;
        message += `Alamat: ${data.alamat}\n`;
        message += `Ruangan: ${data.ruangan}\n`;
        message += `Deskripsi: ${data.deskripsi}\n`;
        message += `Material: ${data.material}\n`;
        message += `Budget: ${data.budget}\n`;
        message += `Timeline: ${data.timeline}\n`;
        
        if (responseData.data?.fileUrl) {
           message += `\nReferensi File: ${responseData.data.fileUrl}`;
        }
        
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, "_blank");
      } else {
        throw new Error("Gagal mengirim");
      }
    } catch {
      set({ isSubmitting: false });
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  },

  reset: () =>
    set({
      currentStep: 1,
      data: initialData,
      errors: {},
      isSubmitting: false,
      isSuccess: false,
    }),
}));
