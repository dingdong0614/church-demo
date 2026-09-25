import Image from "next/image";
import Link from "next/link";

function Crumb({ crumb, light }: { crumb: string; light?: boolean }) {
  return (
    <nav aria-label="현재 위치" className={`text-[15px] ${light ? "text-white/85" : "text-text-faint"}`}>
      <Link href="/" className={`inline-flex min-h-11 items-center ${light ? "hover:text-white" : "hover:text-text"}`}>
        홈
      </Link>
      <span aria-hidden className="mx-2">
        /
      </span>
      <span aria-current="page">{crumb}</span>
    </nav>
  );
}

/** 하위 페이지 머리: 사진이 있으면 화면 폭 사진 위에 제목, 없으면 담백한 종이 배경. 애니메이션 없음. */
export default function PageHero({
  crumb,
  title,
  desc,
  image,
  position = "50% 50%",
}: {
  crumb: string;
  title: string;
  desc: string;
  image?: { src: string; alt: string };
  position?: string;
}) {

  if (image) {
    return (
      <section className="relative h-[52svh] min-h-[380px] overflow-hidden bg-night md:h-[60svh] md:max-h-[640px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        <div className="wrap absolute inset-x-0 bottom-0 pb-10 md:pb-14">
          <Crumb crumb={crumb} light />
          <h1 className="mt-1 max-w-3xl text-[36px] leading-[1.28] text-white md:text-[54px]">{title}</h1>
          <p className="mt-3 max-w-[36rem] text-[18px] text-white/90">{desc}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-line bg-bg-alt">
      <div className="wrap py-12 md:py-20">
        <Crumb crumb={crumb} />
        <h1 className="mt-2 max-w-3xl text-[36px] leading-[1.28] md:text-[54px]">{title}</h1>
        <p className="mt-4 max-w-[36rem] text-[18px] text-text-muted md:text-[19px]">{desc}</p>
      </div>
    </section>
  );
}
