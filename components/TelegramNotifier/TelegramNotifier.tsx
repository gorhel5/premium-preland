"use client";

import { sendMessage } from "@/lib/api/telegramAPI";
import { useEffect } from "react";

export default function TelegramNotifier() {
  useEffect(() => {
    const sendData = async () => {
      await sendMessage();
    };
    sendData();
  }, []);
  return null;
}
