"use client";
import {
  articles,
  galleries,
  our_services,
  productions,
  testimonials,
  marqueeItems,
} from "@/lib/constants";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { StatsBand } from "@/components/ui/stats-band";
import { PressStrip } from "@/components/ui/press-strip";
import { Newsletter } from "@/components/ui/newsletter";
import { Gallery } from "@/components/ui/gallery";
import { TicketCard } from "@/components/ui/ticket-card";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";
import { CurtainDivider } from "@/components/ui/curtain-divider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <div className="w-full">
      {/* ---------- HERO — the curtain rises ---------- */}
      <header
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,17,15,0.72), rgba(22,17,15,0.82)), url('/assets/DAY75537.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="grain vignette relative flex min-h-[86vh] items-center bg-stage"
      >
        <CursorSpotlight />
        <div className="section-x relative z-10 w-full py-32">
          <p className="kicker mb-5">Entertain · Empower · Educate</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] text-white md:text-6xl xl:text-7xl">
            Where Kenyan stories
            <span className="block italic text-footlight">take the stage</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-paper-dim md:text-lg">
            Experience the magic of theatre with Millaz Productions. From
            timeless classics to groundbreaking new works, we deliver powerful
            performances that captivate, inspire, and give fresh talent a
            spotlight.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/about" size="lg" className="btn-sweep">
              Find out more
            </Button>
            <Button href="/our-productions" variant="outline-light" size="lg">
              Our Shows
            </Button>
          </div>
        </div>
      </header>

      {/* ---------- MARQUEE TICKER ---------- */}
      <Marquee items={marqueeItems} />

      {/* ---------- WHO WE ARE ---------- */}
      <Reveal
        as="section"
        className="section-x flex flex-col items-center justify-between gap-10 bg-paper py-20 md:flex-row"
      >
        <div className="w-full lg:w-6/12">
          <SectionHeading
            index="01"
            kicker="Who We Are"
            title="A home for"
            accent="bold storytelling"
            className="mb-5"
          />
          <p className="dropcap mb-4 text-sm text-ink-muted md:text-base">
            We are a passionate and dedicated team of artists and professionals
            committed to bringing high-quality, engaging stage productions to
            audiences of all ages. Founded on a deep love for the performing
            arts, our mission is to create unforgettable experiences that
            inspire, entertain, and connect people from diverse backgrounds.
          </p>
          <p className="text-sm text-ink-muted md:text-base">
            With a rich history of producing innovative and critically acclaimed
            shows, we push the boundaries of storytelling and provide a platform
            for emerging and established talent alike — blending traditional and
            contemporary styles into captivating performances.
          </p>
        </div>
        <div className="group relative h-[260px] w-full overflow-hidden rounded-tl-[28px] rounded-br-[28px] md:h-[420px] md:w-[560px]">
          <Image
            src="/assets/HDKC8377.JPG"
            alt="Millaz actors on stage"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Reveal>

      {/* ---------- UPCOMING PRODUCTIONS (dark stage) ---------- */}
      <section className="grain relative overflow-hidden bg-stage">
        <CurtainDivider />
        <div className="section-x py-20">
          <SectionHeading
            index="02"
            kicker="Now Booking"
            title="Upcoming"
            accent="Productions"
            tone="dark"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productions.map((production, i) => (
              <Reveal key={production.id} delay={i * 120}>
                <TicketCard production={production} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MISSION BAND (curtain red) ---------- */}
      <section className="bg-curtain py-16">
        <div className="section-x">
          <Quote className="mx-auto mb-4 h-8 w-8 rotate-180 stroke-white/70" />
          <p className="mx-auto max-w-4xl text-center font-display text-xl italic leading-relaxed text-white md:text-2xl">
            We bring captivating stories to life through innovative, memorable
            stage performances — crafted with artistic excellence and a
            commitment to unforgettable experiences for audiences of all ages.
          </p>
        </div>
      </section>

      {/* ---------- STATS / IMPACT BAND ---------- */}
      <StatsBand />

      {/* ---------- WHAT WE DO ---------- */}
      <section className="bg-paper py-20">
        <div className="section-x">
          <SectionHeading
            index="03"
            kicker="Our Craft"
            title="What"
            accent="We Do"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {our_services.map((service, i) => (
              <Reveal key={service.id} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image
                      src={service.image_url}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-5 py-5">
                    <h3 className="mb-2 text-lg font-bold text-ink">
                      {service.title}
                    </h3>
                    <p className="text-sm text-ink-muted">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRESS STRIP ---------- */}
      <PressStrip />

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section-x py-20">
        <SectionHeading
          kicker="Standing Ovation"
          title="What Our"
          accent="Audience Says"
          align="center"
          className="mb-12"
        />
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="!pb-14"
        >
          {testimonials.map((testimony) => (
            <SwiperSlide key={testimony.id} className="h-auto">
              <figure className="flex h-full min-h-[280px] flex-col justify-between rounded-xl border border-black/5 bg-paper p-6 shadow-sm">
                <blockquote className="text-sm leading-relaxed text-ink-muted md:text-base">
                  <Quote className="mb-2 h-6 w-6 rotate-180 stroke-footlight" />
                  {testimony.testimony}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-footlight/40">
                    <Image
                      src={testimony.image}
                      alt={testimony.client}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-semibold text-ink">
                    {testimony.client}
                  </span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ---------- GALLERIES ---------- */}
      <section className="section-x py-20">
        <SectionHeading
          kicker="In the Spotlight"
          title="Our"
          accent="Galleries"
          className="mb-12"
        />
        <Gallery items={galleries} />
      </section>

      {/* ---------- FEATURED ARTICLES ---------- */}
      <section className="section-x pb-8 pt-4">
        <div className="mb-10 flex items-end justify-between">
          <SectionHeading
            kicker="From the Press"
            title="Featured"
            accent="Articles"
          />
          <Link
            href="/featured-articles"
            className="hidden items-center gap-2 text-sm font-semibold text-curtain hover:text-curtain-dark md:inline-flex"
          >
            See more articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-4">
          {articles.slice(0, 4).map((article, i) => (
            <Reveal key={article.id} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    fill
                    alt={article.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 py-5">
                  <h3 className="text-lg font-bold text-ink">
                    {article.title.length > 60
                      ? `${article.title.substring(0, 60)}...`
                      : article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-muted">
                    {article.blog_content}
                  </p>
                  <Link
                    href={article.article_url || "/featured-articles"}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-curtain hover:underline"
                  >
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- NEWSLETTER ---------- */}
      <Newsletter />
    </div>
  );
};

export default Home;
