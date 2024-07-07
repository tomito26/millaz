import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/constants";

const Articles = () => {

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url('/assets/EQGJ1018.JPG')",
          height: "80vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex items-center   md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] px-4"
      >
        <div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Featured Articles
          </h1>
          <p className="max-w-3xl text-white text-sm md:text-base">
            Explore behind-the-scenes stories, interviews with cast and crew,
            and articles about our latest and upcoming shows.
          </p>
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px]  px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-5">
          {articles.map((article) => (
            <div
              key={article.id}
              className=" w-full border rounded-b-md shadow-sm"
            >
              <div className="w-full h-[240px] rounded-md relative">
                <Image
                  src={article.image}
                  fill
                  alt="millaz"
                  className="absolute object-cover rounded-t-md"
                />
              </div>
              <div className="px-4 py-4">
                <h3 className="text-lg text-monochrome font-bold break-all">
                  {article && article.title.length > 60
                    ? `${article.title.substring(0, 60)}...`
                    : article.title}
                </h3>
                <p className="text-tundora text-sm md:text-base mt-2 break-all">
                  {article && article.blog_content.length > 100
                    ? `${article.blog_content.substring(0, 100)}...`
                    : ""}
                </p>
                <Link href={article.article_url}>
                  <button className="flex text-sm  text-warning-dark gap-2 items-center mt-3">
                    Read more
                    <ArrowRight className="h-4 w-4 stroke-warning-dark" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
