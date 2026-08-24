import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "문의",
  description: `${SITE_CONFIG.name}에 새가족 상담, 심방 요청 등을 문의하세요.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="문의" title="편하게 말씀해주세요" desc="새가족 상담, 심방 요청 등 무엇이든 남겨주세요." />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">직접 연락</p>
            <div className="mt-5 space-y-4 text-text-muted">
              <p>{SITE_CONFIG.addressFull}</p>
              <p>{SITE_CONFIG.contact.phone}</p>
              <p>{SITE_CONFIG.contact.email}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
