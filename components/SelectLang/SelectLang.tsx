"use client";

import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import css from "./SelectLang.module.css";
import { useLangStore } from "@/lib/stores/langStore";
import { LangOption } from "@/types/lang";

const options = [
  { value: "uz", label: "UZ" },
  { value: "ru", label: "RU" },
];

export default function SelectLang() {
  const [isClient, setIsClient] = useState(false);
  const { lang, setLang } = useLangStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = async (selectedOption: SingleValue<LangOption>) => {
    if (selectedOption) {
      setLang(selectedOption);
    }
  };
  return (
    <>
      {isClient && (
        <Select
          className={css.selector}
          onChange={handleChange}
          isSearchable
          options={options}
          value={lang}
        />
      )}
    </>
  );
}
