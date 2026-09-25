"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const TYPES = ["새가족 등록", "기도 요청", "심방 요청", "헌금 영수증", "기타"] as const;
const PHONE_PATTERN = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;

type Fields = Partial<Record<"name" | "phone" | "type" | "message" | "privacyConsent", string>>;

const inputCls =
  "mt-2 block w-full min-h-[52px] rounded-md border border-line-strong bg-bg px-4 py-3 text-[17px] text-text outline-none transition-colors focus:border-accent aria-[invalid=true]:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<{ text: string; kind: "idle" | "ok" | "error" }>({ text: "", kind: "idle" });
  const [fields, setFields] = useState<Fields>({});
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState<(typeof TYPES)[number]>("새가족 등록");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      type,
      message: String(data.get("message") || "").trim(),
      privacyConsent: data.get("privacyConsent") === "on",
      website: String(data.get("website") || ""),
      startedAt: startedAt.current,
    };

    const next: Fields = {};
    if (payload.name.length < 2) next.name = "이름을 2자 이상 적어 주세요.";
    if (!PHONE_PATTERN.test(payload.phone.replace(/\s/g, ""))) next.phone = "연락처를 010-0000-0000 형식으로 적어 주세요.";
    if (payload.message.length < 2) next.message = "궁금하신 내용을 적어 주세요.";
    if (!payload.privacyConsent) next.privacyConsent = "개인정보 수집·이용에 동의해 주세요.";
    setFields(next);
    if (Object.keys(next).length) {
      setStatus({ text: "빨간 표시가 있는 칸을 확인해 주세요.", kind: "error" });
      const first = Object.keys(next)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setSubmitting(true);
    setStatus({ text: "", kind: "idle" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        demo?: boolean;
        error?: string;
        fields?: Fields;
      };
      if (res.ok && result.ok) {
        setStatus({
          text: result.demo
            ? `${payload.name}님, 문의가 접수되었습니다. (시연용 사이트라 실제로 전송되지는 않았습니다)`
            : `${payload.name}님, 문의가 접수되었습니다. 담당자가 곧 연락드리겠습니다.`,
          kind: "ok",
        });
        form.reset();
        setType("새가족 등록");
      } else {
        if (result.fields) setFields(result.fields);
        setStatus({ text: result.error || "전송하지 못했습니다. 전화나 이메일로 연락 주세요.", kind: "error" });
      }
    } catch {
      setStatus({ text: "전송 중 문제가 생겼습니다. 전화나 이메일로 연락 주세요.", kind: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  const err = (k: keyof Fields) =>
    fields[k] ? (
      <p id={`${k}-error`} className="mt-2 text-[15px] font-semibold text-accent">
        {fields[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-lg border border-line-strong bg-surface p-6 md:p-10">
      <h2 className="text-[26px] md:text-[30px]">문의 남기기</h2>
      <p className="mt-2 text-[16px] text-text-muted">남겨 주시면 담당자가 전화로 연락드립니다.</p>

      {/* honeypot: 화면·보조기기 모두에서 숨김 */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label>
          웹사이트
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold">
            이름
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            maxLength={30}
            autoComplete="name"
            aria-invalid={!!fields.name}
            aria-describedby={fields.name ? "name-error" : undefined}
            className={inputCls}
          />
          {err("name")}
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold">
            연락처
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            inputMode="tel"
            maxLength={14}
            autoComplete="tel"
            placeholder="010-0000-0000"
            aria-invalid={!!fields.phone}
            aria-describedby={fields.phone ? "phone-error" : undefined}
            className={inputCls}
          />
          {err("phone")}
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="font-semibold">문의 유형</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <label
              key={t}
              className={`inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border px-5 text-[16px] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-accent ${
                type === t ? "border-accent bg-accent-soft font-semibold text-accent" : "border-line-strong"
              }`}
            >
              <input
                type="radio"
                name="type"
                value={t}
                checked={type === t}
                onChange={() => setType(t)}
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>
      {type === "기도 요청" && (
        <p className="mt-4 rounded-md border-l-4 border-accent bg-accent-soft px-4 py-3 text-[16px]">
          기도 요청은 담임목사만 열람하고, 기도 후 90일이 지나면 지웁니다. 이름 칸에 &quot;익명&quot;이라고 적으셔도 됩니다.
        </p>
      )}
      {type === "헌금 영수증" && (
        <p className="mt-4 rounded-md border-l-4 border-accent bg-accent-soft px-4 py-3 text-[16px]">
          내용에 필요한 연도만 적어 주세요. 주민등록번호는 적지 마세요. 사무실에서 따로 확인 전화를 드립니다.
        </p>
      )}

      <div className="mt-6">
        <label htmlFor="message" className="font-semibold">
          내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={1000}
          placeholder="예: 이번 주일 2부 예배에 가족과 함께 가려고 합니다."
          aria-invalid={!!fields.message}
          aria-describedby={fields.message ? "message-error" : undefined}
          className={`${inputCls} min-h-[140px]`}
        />
        {err("message")}
      </div>

      <div className="mt-6 rounded-md border border-line-strong bg-bg p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="privacyConsent"
            required
            aria-invalid={!!fields.privacyConsent}
            aria-describedby="consent-desc"
            className="mt-1 h-5 w-5 shrink-0 accent-[#6b2a3d]"
          />
          <span className="font-semibold">
            개인정보 수집·이용에 동의합니다 <span className="text-accent">(필수)</span>
          </span>
        </label>
        <p id="consent-desc" className="mt-3 text-[15px] leading-relaxed text-text-muted">
          수집 항목: 이름, 연락처, 문의 유형, 문의 내용 · 목적: 새가족 등록·기도 요청·심방·영수증 신청 등 문의 응대 · 보유 기간: 문의 처리 완료 후 즉시
          파기. 동의하지 않으실 수 있으나, 이 경우 문의 접수가 어렵습니다. 자세한 내용은{" "}
          <Link href="/privacy" className="font-semibold text-accent underline underline-offset-2">
            개인정보처리방침
          </Link>
          을 확인해 주세요.
        </p>
        {err("privacyConsent")}
      </div>

      <button type="submit" disabled={submitting} className="btn btn-primary mt-8 w-full disabled:opacity-60">
        {submitting ? "보내는 중..." : "문의 보내기"}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`mt-4 min-h-[1.5em] text-[16px] ${status.kind === "error" ? "font-semibold text-accent" : "text-text"}`}
      >
        {status.text}
      </p>
    </form>
  );
}
