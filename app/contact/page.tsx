import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";
import { PHOTOS, unsplash } from "@/data/photos";

export const metadata: Metadata = {
  title: "문의",
  description: `${SITE_CONFIG.name}에 새가족 상담, 심방 요청 등을 문의하세요.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="문의"
        title="편하게 물어보세요"
        desc="처음 방문이 망설여지실 때, 심방이 필요하실 때. 무엇이든 남겨 주시면 담당자가 연락드립니다."
        image={{ src: unsplash(PHOTOS.backlitTree.id, 2400), alt: PHOTOS.backlitTree.alt }}
        position="50% 30%"
      />

      <section className="section bg-bg">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
          <RevealOnScroll className="lg:col-span-4">
            <h2 className="text-[24px] md:text-[28px]">바로 연락하기</h2>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="flex min-h-16 items-center gap-4 rounded-lg border border-line bg-surface p-5 hover:border-accent"
                >
                  <Icon name="phone" size={22} className="text-accent" />
                  <span>
                    <span className="block text-[14px] text-text-faint">전화</span>
                    <span className="block font-display text-[21px] font-semibold">{SITE_CONFIG.contact.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex min-h-16 items-center gap-4 rounded-lg border border-line bg-surface p-5 hover:border-accent"
                >
                  <Icon name="mail" size={22} className="text-accent" />
                  <span className="min-w-0">
                    <span className="block text-[14px] text-text-faint">이메일</span>
                    <span className="block break-all font-semibold">{SITE_CONFIG.contact.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4 rounded-lg border border-line bg-surface p-5">
                <Icon name="pin" size={22} className="mt-1 text-accent" />
                <span>
                  <span className="block text-[14px] text-text-faint">주소</span>
                  <span className="block">{SITE_CONFIG.addressFull}</span>
                </span>
              </li>
              <li className="flex items-start gap-4 rounded-lg border border-line bg-surface p-5">
                <Icon name="clock" size={22} className="mt-1 text-accent" />
                <span>
                  <span className="block text-[14px] text-text-faint">사무실 전화 가능 시간</span>
                  <span className="block">{SITE_CONFIG.contact.officeHours}</span>
                </span>
              </li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08} className="lg:col-span-8">
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
