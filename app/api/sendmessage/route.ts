import { NextRequest, NextResponse } from "next/server";
import { apiTelegram, ApiError } from "../api";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await apiTelegram.post("/sendMessage", body);
    return NextResponse.json(res.data);
  } catch (err) {
    const error = err as ApiError;
    return NextResponse.json(
      {
        error: error.response?.data.error || error.message,
      },
      {
        status: error.response?.status || 500,
      }
    );
  }
}
