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
        <Image src="/prem-logo.png" width={60} height={60} alt="logo" />
        {lang.value === "ru" && (
          <h1 className={css.title}>Telegram Premium - бесплатно!</h1>
        )}
        {lang.value === "uz" && (
          <h1 className={css.title}>Telegram Premium - bepul!</h1>
        )}
      </div>
      <div className={css.languageSelector}>
        <SelectLang />
      </div>
    </header>
  );
}
