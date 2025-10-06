import ipify from "ipify";
import { nextServer } from "./api";

export const sendMessage = async () => {
  const ipRes = await ipify({ useIPv6: false });
  const text = `<b>👁️ new page view</b>\n\n<i>🌐 ${ipRes}</i>`;

  const res = await nextServer.post("/sendmessage", {
    chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
    text,
    parse_mode: "HTML",
  });

  return res.data;
};
