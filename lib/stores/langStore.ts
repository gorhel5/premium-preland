import { LangOption } from "@/types/lang";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type LangStore = {
  lang: LangOption;
  setLang: (newLang: LangOption) => void;
};

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: { label: "RU", value: "ru" },
      setLang: (newLang) => set({ lang: newLang }),
    }),
    {
      name: "lang-storage",
    }
  )
);
