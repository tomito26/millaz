"use client";
import {
  galleries,
  our_services,
  productions,
  testimonials,
} from "@/lib/constants";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const news_updates = [
    {
      title: "Young script writers map out violence on the stage",
      blog_content:
        "There's a new generation of scriptwriters at Millaz Production, prepared to speak out bluntly, frankly, even ferociously about injustices they have witnessed in Kenyan society.Not that Xavier Nato, founder and chief playwright for the troupe was conservative by any means. But a play like 'I know rights'  is bound to shock a few Kenyans who have grown up knowing the wisdom or at least the tried-and-true survival tactic called self-censorship.There is no censoring of the youth's attitudes towards the cops in Millaz' stunning drama that premiered this past weekend at Kenya Cultural Centre's Ukumbi Mdogo.Co-scripted by Brian Irungu and Saumu Kombo, 'I know My Rights'",
      image: ""
    },
  ];

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
        <div className="w-full md:w-6/12">
          <h2 className="md:text-4xl text-2xl text-monochrome font-bold mb-3">
            Who <span className="text-warning-dark">We Are</span>
          </h2>
          <p className="text-tundora text-sm md:text-base mb-4">
            We are a passionate and dedicated team of artists and professionals
            committed to bringing high-quality, engaging stage productions to
            audiences of all ages. Founded on a deep love for the performing
            arts, our mission is to create unforgettable experiences that
            inspire, entertain, and connect people from diverse backgrounds.
          </p>
          <p className="text-tundora text-sm md:text-base">
            With a rich history of producing innovative and critically acclaimed
            shows, we are driven by a desire to push the boundaries of
            storytelling and to provide a platform for emerging and established
            talent alike. Our productions are carefully crafted to showcase the
            best of local and international talent, blending traditional and
            contemporary styles to create unique and captivating performances.
          </p>
        </div>
        <div className="relative md:h-[300px] h-[240px] w-full md:w-[560px] rounded ">
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
                  <p className="text-tundora text-base font-normal break-all">
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
        <div className="flex flex-wrap gap-3">
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              className="h-[240px] w-full md:w-[360px] xl:h-[300px] xl:w-[360px] 2xl:w-[350px] 3xl:w-[450px] rounded-md relative"
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
    </div>
  );
};

export default Home;
