"use client";

declare global {
  interface Window {
    fbq: {
      (action: "track", event: string): void;
    };
  }
}

import "modern-normalize";
import css from "./Home.module.css";
import ImagesSwiper from "@/components/ImagesSwiper/ImagesSwiper";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useLangStore } from "@/lib/stores/langStore";

export default function Home() {
  const { lang } = useLangStore();
  const pixelTrigger = () => {
    // Триггер пикселя
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  };
  return (
    <main className={css.main}>
      <div className={css.content}>
        <ImagesSwiper />

        <ol className={css.steps}>
          <li className={css.step}>
            {lang.value === "uz"
              ? `"Ilovani o'rnatish" tugmasini bosing.`
              : "Нажмите «Установить приложение»."}
          </li>
          <li className={css.step}>
            {lang.value === "uz"
              ? `Rasmiy Telegram kanaliga o'ting`
              : "Перейдите в официальный телеграм канал"}
          </li>
          <li className={css.step}>
            {lang.value === "uz" ? `Faylni oching` : "Откройте файл"}
          </li>
          <li className={css.step}>
            {lang.value === "uz"
              ? `Premium xususiyatlardan bepul foydalaning!
`
              : "Пользуйтесь премиум функциями бесплатно!"}
          </li>
        </ol>

        <div className={css.installSection}>
          <Link
            onClick={pixelTrigger}
            href={"tg://resolve?domain=MyPremUz"}
            className={css.installButton}
          >
            {lang.value === "uz"
              ? "Ilovani o'rnatish"
              : "Установить приложение"}
          </Link>
          <p className={css.supportText}>
            {lang.value === "uz"
              ? "Oʻrnatishda muammo bormi? Texnik qo'llab-quvvatlash guruhimizga murojaat qiling."
              : "Возникли проблемы с установкой? Напишите нам в техническую поддержку"}{" "}
            <u>
              <Link href={"https://google.com"}>Telegram</Link>
            </u>
            .
          </p>
        </div>

        <Footer />
      </div>
    </main>
  );
}
