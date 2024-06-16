import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const productions = [
    {
      id: 1,
      poster_url: "/assets/IMG-20240502-WA0001.jpg",
      start_date: "2024-06-14",
      end_date: "2024-06-16",
      name: "Backstreet",
      description: `"Backstreet" is a play  delving into the intricate and often challenging world of mental health. The narrative centers around a close-knit group of friends, each grappling with their own personal battles and emotional struggles. Through a series of heartfelt and dramatic scenes, the play explores themes of friendship, resilience, and the often unspoken pain of mental illness. Set against the backdrop of everyday life in Kenya, "Backstreet" poignantly portrays how mental health issues can affect anyone, regardless of age, gender, or social status. The characters' journeys reflect a range of experiences, from anxiety and depression to more severe mental health conditions. As they navigate their struggles, the friends offer each other support, sometimes falteringly, sometimes with profound empathy, highlighting the importance of community and understanding. The production is both an artistic endeavor and a social commentary, aiming to raise awareness about mental health issues and destigmatize seeking help. Through powerful performances and a thoughtful script, "Backstreet" challenges audiences to reflect on their own perceptions of mental health and the ways in which they can support those around them.`,
    },
    {
      id: 2,
      poster_url: "/assets/IMG-20240502-WA0001.jpg",
      start_date: "2024-06-14",
      end_date: "2024-06-16",
      name: "Backstreet",
      description: `"Backstreet" is a play  delving into the intricate and often challenging world of mental health. The narrative centers around a close-knit group of friends, each grappling with their own personal battles and emotional struggles. Through a series of heartfelt and dramatic scenes, the play explores themes of friendship, resilience, and the often unspoken pain of mental illness. Set against the backdrop of everyday life in Kenya, "Backstreet" poignantly portrays how mental health issues can affect anyone, regardless of age, gender, or social status. The characters' journeys reflect a range of experiences, from anxiety and depression to more severe mental health conditions. As they navigate their struggles, the friends offer each other support, sometimes falteringly, sometimes with profound empathy, highlighting the importance of community and understanding. The production is both an artistic endeavor and a social commentary, aiming to raise awareness about mental health issues and destigmatize seeking help. Through powerful performances and a thoughtful script, "Backstreet" challenges audiences to reflect on their own perceptions of mental health and the ways in which they can support those around them.`,
    },
    {
      id: 3,
      poster_url: "/assets/IMG-20240502-WA0001.jpg",
      start_date: "2024-06-14",
      end_date: "2024-06-16",
      name: "Backstreet",
      description: `"Backstreet" is a  play  delving into the intricate and often challenging world of mental health. The narrative centers around a close-knit group of friends, each grappling with their own personal battles and emotional struggles. Through a series of heartfelt and dramatic scenes, the play explores themes of friendship, resilience, and the often unspoken pain of mental illness. Set against the backdrop of everyday life in Kenya, "Backstreet" poignantly portrays how mental health issues can affect anyone, regardless of age, gender, or social status. The characters' journeys reflect a range of experiences, from anxiety and depression to more severe mental health conditions. As they navigate their struggles, the friends offer each other support, sometimes falteringly, sometimes with profound empathy, highlighting the importance of community and understanding. The production is both an artistic endeavor and a social commentary, aiming to raise awareness about mental health issues and destigmatize seeking help. Through powerful performances and a thoughtful script, "Backstreet" challenges audiences to reflect on their own perceptions of mental health and the ways in which they can support those around them.`,
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
        className="flex items-center px-[360px]"
      >
        <div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Millaz Productions Kenya
          </h1>
          <p className="max-w-3xl text-white text-lg">
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
      <div className="px-[360px] my-16 flex justify-between">
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
        <div className="relative h-[400px] w-[550px] rounded-xl">
          <Image
            src="/assets/students-rehashing-theater-class.jpg"
            alt="actors on stage"
            fill
            className="absolute object-cover rounded-tl-[100px] rounded-br-[100px]"
          />
        </div>
      </div>
      <div className="px-[360px] my-24">
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
      <div className="">
        <h2 className="text-4xl font-bold">What We Do</h2>
      </div>
    </div>
  );
};

export default Home;
