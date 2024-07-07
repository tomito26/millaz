"use client";
import {
  articles,
  galleries,
  our_services,
  productions,
  testimonials,
} from "@/lib/constants";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/DAY75537.jpg')",
          height: "800px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="flex items-center md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] px-4"
      >
        <div>
          <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Millaz Productions Kenya
          </h1>
          <p className="max-w-3xl text-white text-sm md:text-base">
            Experience the magic of theatre with Millaz Productions. From
            timeless classics to groundbreaking new works, we are dedicated to
            delivering powerful performances that captivate and inspire
          </p>
          <div className="mt-6 space-x-6">
            <Link href="/about">
              <button className="bg-warning-dark py-2.5 px-5 md:px-8  text-sm md:text-base text-white rounded-md hover:bg-warning-dark/85 font-medium">
                Find out more
              </button>
            </Link>
            <button className="text-white py-2.5 px-5 md:px-8 border-white border-2 rounded-md text-sm md:text-base hover:bg-white hover:text-warning-dark font-medium">
              Our Shows
            </button>
          </div>
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] my-16 flex justify-between flex-col md:flex-row px-4 gap-5">
      <div className="lg:w-6/12 w-full">
          <h2 className="text-2xl md:text-4xl text-monochrome font-bold mb-3">
            Who <span className="text-warning-dark">We Are</span>
          </h2>
          <p className="text-tundora text-sm md:text-base mb-4">
            Millaz Productions Kenya started of as Millers Productions Kenya in
            2016 but had to undergo a name change in 2018 in respect to
            registration logistics. An idea crafted by Senator Cleophas Malala
            and Xavier Jerry Nato, the two thespians had the idea to revive a
            theatre company they had back in 2008, Next Level productions, but
            give it a new name. Xavier embarked in a recruiting exercise and
            settled on the name Millers, a name coined by Allan Lumumba and
            Emmanuel Chindia.
          </p>
          <p className="text-tundora text-sm md:text-base mb-4">
            We are a passionate and dedicated team of artists and professionals
            committed to bringing high-quality, engaging stage productions to
            audiences of all ages. Founded on a deep love for the performing
            arts, our mission is to create unforgettable experiences that
            inspire, entertain, and connect people from diverse backgrounds.
          </p>
        </div>
        <div className="relative md:h-[400px] h-[230px] w-full md:w-[560px] rounded-xl">
          <Image
            src="/assets/HDKC8377.JPG"
            alt="actors on stage"
            fill
            className="absolute object-cover rounded-tl-[20px] rounded-br-[20px]"
          />
        </div>
      </div>
      <div className="md:px-[60px] xl-px-[80px] 2xl:px-[100px] 3xl:px-[160px] px-4 my-24">
        <h2 className="text-2xl md:text-4xl font-bold  text-monochrome mb-8">
          Upcoming <span className="text-warning-dark">Productions</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {productions.map((production) => (
            <div key={production.id}>
              <div className="relative h-[360px] md:h-[400px] w-full md:w-[330px] rounded-lg">
                <Image
                  src={production.poster_url}
                  alt={production.name}
                  fill
                  className="absolute object-cover rounded-lg"
                />
              </div>
              <div className="w-[330px]">
                <h2 className="text-lg font-semibold mt-3 text-monochrome">
                  {production.name}
                </h2>
                <p className="text-tundora text-base font-medium mb-2">
                  <span>
                    {new Date(production.start_date).toLocaleString("en", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  -{" "}
                  <span>
                    {new Date(production.end_date).toLocaleString("en", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </p>
                <p className="text-sm text-tundora break-all mb-5">
                  {production.description.length > 100
                    ? `${production.description.substring(0, 200)}...`
                    : production.description}
                </p>
                <button className="bg-dark-green py-2.5 px-8 text-base text-white rounded-md hover:bg-dark-green/85 font-medium">
                  Buy Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-warning-dark py-12">
        <p className="text-white text-base md:text-lg md:px-[60px] xl:px-[80px] 2xl:[100px] 3xl:px-[160px] px-4 text-center">
          We are dedicated to bringing captivating stories to life through
          innovative and memorable stage performances. Our passion for theater
          drives us to create dynamic productions that resonate with audiences
          of all ages. From classic tales to contemporary narratives, each of
          our plays is crafted with artistic excellence and a commitment to
          delivering unforgettable experiences.
        </p>
      </div>
      <div className="bg-[#f1f1f1] py-16">
        <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[200px] px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-monochrome mb-6">
            What <span className="text-warning-dark">We Do</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {our_services.map((service) => (
              <div
                className="shadow-md w-full md:w-[350px] bg-white rounded-b-md"
                key={service.id}
              >
                <div className="relative w-full h-[250px] rounded-t-md">
                  <Image
                    src={service.image_url}
                    alt={service.title}
                    fill
                    className="absolute object-cover rounded-t-md"
                  />
                </div>
                <div className="px-3 py-5">
                  <h3 className="font-bold text-base text-tundora">
                    {service.title}
                  </h3>
                  <p className="text-tundora text-base font-normal">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] px-4 py-16">
        <h2 className="text-2xl md:text-4xl text-monochrome font-bold">
          Our Clients <span className="text-warning-dark">Testimonials</span>
        </h2>
        <div className="flex justify-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={10}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {testimonials.map((testimony, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-[300px] p-4 my-10 bg-warning-dark/5 rounded-lg">
                  <div className="w-full xl:w-12/12 rounded-lg">
                    <div>
                      <p className="w-full text-gray mb-5 text-base">
                        <Quote className="rotate-180 mb-px stroke-warning-dark  mr-2" />
                        {testimony.testimony}
                        <Quote className="stroke-warning-dark inline-block mt-px  ml-2" />
                      </p>
                      <div className="flex justify-end">
                        <div className="flex justify-center items-center flex-col">
                          <div className="h-[60px] w-[60px] rounded-full relative">
                            <Image
                              src={testimony.image}
                              alt={testimony.client}
                              fill
                              className="absolute object-cover rounded-full"
                            />
                          </div>
                          <h3 className="text-base font-semibold mt-3 text-body-gray text-right">
                            {testimony.client}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] py-16 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-monochrome mb-8">
          Our <span className="text-warning-dark">Galleries</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              className="h-[240px] w-full  xl:h-[300px] rounded-md relative"
            >
              <Image
                src={gallery.path}
                fill
                alt="millaz"
                className="absolute object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px]  px-4 ">
        <div className="flex justify-between">
          <h1 className="text-2xl md:text-4xl font-bold text-monochrome mb-8">
            Featured <span className="text-warning-dark">Articles</span>
          </h1>
          <Link
            href="/featured-articles"
            className="text-base text-warning-dark hidden md:inline-block font-medium"
          >
            See more articles
          </Link>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {articles.slice(0, 4).map((article) => (
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
                <h3 className="text-lg text-monochrome font-bold">
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
                  <button className="flex text-sm hover:underline  text-warning-dark gap-2 items-center mt-3">
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

export default Home;
