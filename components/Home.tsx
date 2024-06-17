"use client";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const productions = [
    {
      id: 1,
      poster_url: "/assets/IMG-20240502-WA0001.jpg",
      start_date: "2024-06-14",
      end_date: "2024-06-16",
      name: "Backstreet",
      description: `Backstreet is a play  delving into the intricate and often challenging world of mental health. The narrative centers around a close-knit group of friends, each grappling with their own personal battles and emotional struggles. Through a series of heartfelt and dramatic scenes, the play explores themes of friendship, resilience, and the often unspoken pain of mental illness. Set against the backdrop of everyday life in Kenya, "Backstreet" poignantly portrays how mental health issues can affect anyone, regardless of age, gender, or social status. The characters' journeys reflect a range of experiences, from anxiety and depression to more severe mental health conditions. As they navigate their struggles, the friends offer each other support, sometimes falteringly, sometimes with profound empathy, highlighting the importance of community and understanding. The production is both an artistic endeavor and a social commentary, aiming to raise awareness about mental health issues and destigmatize seeking help. Through powerful performances and a thoughtful script, "Backstreet" challenges audiences to reflect on their own perceptions of mental health and the ways in which they can support those around them.`,
    },
    {
      id: 2,
      poster_url: "/assets/IMG-20240502-WA0001.jpg",
      start_date: "2024-06-14",
      end_date: "2024-06-16",
      name: "Backstreet",
      description: `Backstreet is a play  delving into the intricate and often challenging world of mental health. The narrative centers around a close-knit group of friends, each grappling with their own personal battles and emotional struggles. Through a series of heartfelt and dramatic scenes, the play explores themes of friendship, resilience, and the often unspoken pain of mental illness. Set against the backdrop of everyday life in Kenya, "Backstreet" poignantly portrays how mental health issues can affect anyone, regardless of age, gender, or social status. The characters' journeys reflect a range of experiences, from anxiety and depression to more severe mental health conditions. As they navigate their struggles, the friends offer each other support, sometimes falteringly, sometimes with profound empathy, highlighting the importance of community and understanding. The production is both an artistic endeavor and a social commentary, aiming to raise awareness about mental health issues and destigmatize seeking help. Through powerful performances and a thoughtful script, "Backstreet" challenges audiences to reflect on their own perceptions of mental health and the ways in which they can support those around them.`,
    },
    {
      id: 3,
      poster_url: "/assets/IMG-20240502-WA0001.jpg",
      start_date: "2024-06-14",
      end_date: "2024-06-16",
      name: "Backstreet",
      description: `Backstreet is a  play  delving into the intricate and often challenging world of mental health. The narrative centers around a close-knit group of friends, each grappling with their own personal battles and emotional struggles. Through a series of heartfelt and dramatic scenes, the play explores themes of friendship, resilience, and the often unspoken pain of mental illness. Set against the backdrop of everyday life in Kenya, "Backstreet" poignantly portrays how mental health issues can affect anyone, regardless of age, gender, or social status. The characters' journeys reflect a range of experiences, from anxiety and depression to more severe mental health conditions. As they navigate their struggles, the friends offer each other support, sometimes falteringly, sometimes with profound empathy, highlighting the importance of community and understanding. The production is both an artistic endeavor and a social commentary, aiming to raise awareness about mental health issues and destigmatize seeking help. Through powerful performances and a thoughtful script, "Backstreet" challenges audiences to reflect on their own perceptions of mental health and the ways in which they can support those around them.`,
    },
  ];
  const our_services = [
    {
      id: 1,
      title: "Stage Performances",
      image_url: "/assets/IMG-20190826-WA0094.jpg",
      description:
        "We organize and perform captivating stage plays that showcase the talents of our skilled cast and crew.",
    },
    {
      id: 2,
      title: "Film Production",
      image_url: "/assets/students-rehashing-theater.jpg",
      description:
        "We are involved in the production of films, covering scriptwriting, direction, and other aspects of the filmmaking process.",
    },
    {
      id: 3,
      title: "Consultation",
      image_url: "/assets/students-rehashing-theater-class.jpg",
      description:
        "Our team of experienced professionals offers expert consultation services to individuals and organizations within the film and theatre industries",
    },
    {
      id: 4,
      title: "Training",
      image_url: "/assets/IMG-20190826-WA0094.jpg",
      description:
        "We provide training programs designed to develop the skills and expertise of aspiring artists and professionals in the field.",
    },
  ];
  const testimonials = [
    {
      id: 1,
      testimony:
        "The play was a thrilling experience. The cast did an excellent job of bringing the characters to life. I loved the way the story unfolded, keeping me on the edge of my seat",
      client: "John Mwangi",
      image: "/assets/blank-profile-picture-973460_1280.png",
    },
    {
      id: 2,
      testimony:
        "I was blown away by the talent on display. The music, the acting, and the direction all came together to create an unforgettable evening",
      client: "Nancy Wanjiru",
      image: "/assets/blank-profile-picture-973460_1280.png",
    },
    {
      id: 3,
      testimony:
        "I was impressed by the young talent on display. The direction, scriptwriting, and acting were all top-notch. The play was a true thriller, keeping me guessing until the very end.",
      client: "James Mwangi",
      image: "/assets/blank-profile-picture-973460_1280.png",
    },
    {
      id: 4,
      testimony:
        "The play was a wild ride from start to finish. The way it balanced humor and suspense was impressive. I loved the way the characters interacted and the twists that kept me on my toes",
      client: "Lilian Muthoni",
      image: "/assets/blank-profile-picture-973460_1280.png",
    },
  ];
  const galleries = [
    {
      id: 1,
      path: "/assets/IMG-20190826-WA0177.jpg",
    },
    {
      id: 2,
      path: "/assets/IMG-20240518-WA0016.jpg",
    },
    {
      id: 3,
      path: "/assets/IMG-20240518-WA0011.jpg",
    },
    {
      id: 4,
      path: "/assets/IMG-20190826-WA0094.jpg",
    },
    {
      id: 5,
      path: "/assets/IMG-20190826-WA0094.jpg",
    },
    {
      id: 6,
      path: "/assets/IMG-20190826-WA0094.jpg",
    },
    {
      id: 7,
      path: "/assets/IMG-20190826-WA0094.jpg",
    },
    {
      id: 8,
      path: "/assets/IMG-20190826-WA0094.jpg",
    },
    {
      id: 9,
      path: "/assets/different-moments.jpg",
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
        }}
        className="flex items-center md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px]"
      >
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Millaz Productions Kenya
          </h1>
          <p className="max-w-3xl text-white text-base">
            Experience the magic of theatre with Millaz Productions. From
            timeless classics to groundbreaking new works, we are dedicated to
            delivering powerful performances that captivate and inspire
          </p>
          <div className="mt-6 space-x-6">
            <button className="bg-warning-dark py-2.5 px-8 text-base text-white rounded-md hover:bg-warning-dark/85 font-medium">
              Find out more
            </button>
            <button className="text-white py-2.5 px-8 border-white border-2 rounded-md text-base hover:bg-white hover:text-warning-dark font-medium">
              Our Shows
            </button>
          </div>
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] my-16 flex justify-between">
        <div className="w-6/12">
          <h2 className="text-4xl text-monochrome font-bold mb-3">
            Who <span className="text-warning-dark">We Are</span>
          </h2>
          <p className="text-tundora text-base mb-4">
            We are a passionate and dedicated team of artists and professionals
            committed to bringing high-quality, engaging stage productions to
            audiences of all ages. Founded on a deep love for the performing
            arts, our mission is to create unforgettable experiences that
            inspire, entertain, and connect people from diverse backgrounds.
          </p>
          <p className="text-tundora text-base mb-10">
            With a rich history of producing innovative and critically acclaimed
            shows, we are driven by a desire to push the boundaries of
            storytelling and to provide a platform for emerging and established
            talent alike. Our productions are carefully crafted to showcase the
            best of local and international talent, blending traditional and
            contemporary styles to create unique and captivating performances.
          </p>
          <Link
            href="/about"
            className="bg-warning-dark py-2.5 px-8 text-base text-white rounded-md hover:bg-warning-dark/85 font-medium"
          >
            Learn More
          </Link>
        </div>
        <div className="relative h-[380px] w-[500px] rounded-xl">
          <Image
            src="/assets/students-rehashing-theater-class.jpg"
            alt="actors on stage"
            fill
            className="absolute object-cover rounded-tl-[100px] rounded-br-[100px]"
          />
        </div>
      </div>
      <div className="md:px-[60px] xl-px-[80px] 2xl:px-[100px] 3xl:px-[160px] my-24">
        <h2 className="text-4xl font-bold  text-monochrome mb-8">
          Upcoming <span className="text-warning-dark">Productions</span>
        </h2>
        <div className="flex gap-10">
          {productions.map((production) => (
            <div key={production.id}>
              <div className="relative h-[400px] w-[330px] rounded-lg">
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
                <p className="text-sm text-tundora break-all mb-3">
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
        <p className="text-white text-lg px-[60px] xl:px-[80px] 2xl:[100px] 3xl:px-[160px] text-center">
          We are dedicated to bringing captivating stories to life through
          innovative and memorable stage performances. Our passion for theater
          drives us to create dynamic productions that resonate with audiences
          of all ages. From classic tales to contemporary narratives, each of
          our plays is crafted with artistic excellence and a commitment to
          delivering unforgettable experiences.
        </p>
      </div>
      <div className="bg-[#f1f1f1] py-16">
        <div className="px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[200px]">
          <h2 className="text-4xl font-bold text-monochrome mb-6">
            What <span className="text-warning-dark">We Do</span>
          </h2>
          <div className="flex gap-6">
            {our_services.map((service) => (
              <div
                className="shadow-md w-[350px] bg-white rounded-b-md"
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
                <div className="px-3 py-4">
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
      <div className="px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] py-16">
        <h2 className="text-4xl text-monochrome font-bold">
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
                      <p className="w-full text-gray mb-5 text-sm">
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
                          <h3 className="text-base md:text-lg font-semibold mt-3 text-body-gray text-right">
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
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] py-16">
        <h1 className="text-4xl font-bold text-monochrome mb-8">
          Our <span className="text-warning-dark">Galleries</span>
        </h1>
        <div className="flex flex-wrap gap-3">
          {galleries.map((gallery) => (
            <div key={gallery.id} className="h-[360px] w-[360px] xl:h-[300px] xl:w-[360px] 2xl:w-[350px] 3xl:w-[450px] rounded-md relative">
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
