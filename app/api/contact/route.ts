import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/site";

/**
 * 문의 폼 서버 처리 (보안 체크리스트: 서버 검증 · honeypot · rate limit · 키는 서버 전용 env)
 *
 * - WEB3FORMS_ACCESS_KEY (서버 전용, NEXT_PUBLIC_ 아님)가 있으면 Web3Forms로 전달해 메일 알림.
 * - 없으면 데모 모드: 검증만 하고 저장·전송하지 않음 (영업 시연용).
 * - rate limit은 인스턴스 메모리 기준(서버리스에서는 인스턴스마다 따로 셈). 실제 교회 사이트에서는
 *   Upstash 등 외부 저장소로 바꾸는 것을 권장.
 * - 입력값은 HTML로 렌더링하지 않고, 서버 로그에 개인정보를 남기지 않음.
 */

export const runtime = "nodejs";

const TYPES = ["새가족 등록", "기도 요청", "심방 요청", "헌금 영수증", "기타"] as const;
const PHONE_PATTERN = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear(); // 메모리 보호
  return false;
}

function str(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max + 1) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "잘못된 요청입니다." }, { status: 400 });
  }

  // honeypot: 사람에게는 보이지 않는 칸. 채워져 있으면 봇으로 보고 조용히 성공 처리
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  // 너무 빠른 제출(2초 미만)도 봇으로 간주
  const startedAt = Number(body.startedAt);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 2000) return NextResponse.json({ ok: true });

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "잠시 후 다시 시도해 주세요. 급하시면 전화로 연락 주세요." },
      { status: 429 }
    );
  }

  const name = str(body.name, 30);
  const phone = str(body.phone, 20).replace(/\s/g, "");
  const type = str(body.type, 20);
  const message = str(body.message, 1000);
  const consent = body.privacyConsent === true;

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 30) errors.name = "이름을 2~30자로 적어 주세요.";
  if (!PHONE_PATTERN.test(phone)) errors.phone = "연락처를 010-0000-0000 형식으로 적어 주세요.";
  if (!(TYPES as readonly string[]).includes(type)) errors.type = "문의 유형을 골라 주세요.";
  if (message.length < 2 || message.length > 1000) errors.message = "내용을 2~1000자로 적어 주세요.";
  if (!consent) errors.privacyConsent = "개인정보 수집·이용에 동의해 주세요.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: "입력 내용을 확인해 주세요.", fields: errors }, { status: 422 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    // 데모 모드: 아무 데도 보내지 않음
    return NextResponse.json({ ok: true, demo: true });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[${SITE_CONFIG.name} 문의] ${type}`,
        from_name: `${SITE_CONFIG.name} 웹사이트`,
        name,
        phone,
        type,
        message,
      }),
      signal: AbortSignal.timeout(8000),
    });
    const result = (await res.json().catch(() => ({}))) as { success?: boolean };
    if (!res.ok || !result.success) throw new Error("forward failed");
    return NextResponse.json({ ok: true });
  } catch {
    console.error("[contact] 전달 실패 (개인정보는 기록하지 않음)");
    return NextResponse.json(
      { ok: false, error: "전송하지 못했습니다. 전화나 이메일로 연락 주세요." },
      { status: 502 }
    );
  }
}
