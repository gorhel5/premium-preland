"use client";

import Image from "next/image";
import css from "./Header.module.css";
import SelectLang from "../SelectLang/SelectLang";
import { useLangStore } from "@/lib/stores/langStore";

export default function Header() {
  const { lang } = useLangStore();
  return (
    <header className={css.header}>
      <div className={css.titleBlock}>
        <Image src="/turon-logo.webp" width={60} height={60} alt="logo" />
        {lang.value === "ru" && (
          <h1 className={css.title}>TuronBank — кредит для всех!</h1>
        )}
        {lang.value === "uz" && (
          <h1 className={css.title}>TuronBank - kredit hamma uchun!</h1>
        )}
      </div>
      <div className={css.languageSelector}>
        <SelectLang />
      </div>
    </header>
  );
}
