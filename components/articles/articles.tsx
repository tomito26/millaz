import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

const Articles = () => {
  return (
    <div>
      {/* ---------- HERO ---------- */}
      <header
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,17,15,0.72), rgba(22,17,15,0.82)), url('/assets/EQGJ1018.JPG')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="grain vignette relative flex min-h-[58vh] items-center bg-stage"
      >
        <CursorSpotlight />
        <div className="section-x relative z-10 w-full py-28">
          <p className="kicker mb-4">From the Press</p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            Featured <span className="text-footlight">Articles</span>
          </h1>
          <p className="max-w-2xl text-sm text-paper-dim md:text-base">
            Explore behind-the-scenes stories, interviews with cast and crew,
            and articles about our latest and upcoming shows.
          </p>
        </div>
      </header>

      {/* ---------- ARTICLE GRID ---------- */}
      <section className="section-x py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {articles.map((article, i) => (
            <Reveal key={article.id} delay={(i % 4) * 90}>
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
                    {article.title.length > 70
                      ? `${article.title.substring(0, 70)}...`
                      : article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-muted md:text-base">
                    {article.blog_content}
                  </p>
                  <Link
                    href={article.article_url || "#"}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-curtain hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Articles;
