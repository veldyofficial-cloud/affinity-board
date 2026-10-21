import { NextResponse } from "next/server";
import { pingDatabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

// Vercel Cron이 매일 호출 (vercel.json) → Supabase 자동 일시정지 방지
export async function GET() {
  const result = await pingDatabase();
  return NextResponse.json(result, { status: result.ok ? 200 : 503 });
}
