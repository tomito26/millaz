import React from "react";
import Image from "next/image";
import { Crosshair, Handshake, Telescope } from "lucide-react";
import { teams, values } from "@/lib/constants";

const About = () => {


  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/EIUM2366.JPG')",
          height: "80vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex items-center md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] px-4"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About</h1>
          <p className="max-w-3xl text-white text-sm md:text-base">
            We are proud to be part of the vibrant Nairobi theatre scene,
            bringing world-class productions to the Kenya National Theatre and
            beyond
          </p>
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] px-4 my-16 flex md:flex-row flex-col justify-between items-center gap-5">
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
      <div className="bg-[#f1f1f1] py-12 flex flex-col md:flex-row gap-20 md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] px-4">
        <div className="bg-white w-full md:w-[400px] px-4 py-5 shadow-md rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="h-12 w-12 bg-[#f1f1f1] flex justify-center items-center rounded-full">
              <Telescope className="h-6 w-6 stroke-warning-dark" />
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-xl text-warning-dark font-bold text-center my-4">
              Our Vision
            </h2>
            <p className="text-sm md:text-base text-tundora text-center">
              Inspire and entertain audiences through innovative, high-quality
              productions that celebrate the human experience.
            </p>
          </div>
        </div>
        <div className="bg-white w-full md:w-[400px] shadow-md rounded-lg px-4 py-5">
          <div className="flex justify-center">
            <div className="h-12 w-12 bg-[#f1f1f1] rounded-full flex justify-center items-center">
              <Crosshair className="h-6 w-6 stroke-warning-dark" />
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-xl text-warning-dark font-bold text-center my-4">
              Our Mission
            </h2>
            <p className="text-sm md:text-base text-tundora text-center">
              To create unforgettable stage experiences that showcase the best
              of local and international talent, while promoting community
              engagement, social responsibility, and artistic excellence.
            </p>
          </div>
        </div>
        <div className="bg-white w-full md:w-[400px] shadow-md rounded-lg px-4 py-5">
          <div className="flex justify-center">
            <div className="h-12 w-12 bg-[#f1f1f1] rounded-full flex justify-center items-center">
              <Handshake className="h-6 w-6 stroke-warning-dark" />
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-xl text-warning-dark font-bold text-center my-4">
              Our Commitment
            </h2>
            <p className="text-tundora text-sm md:text-base text-center">
              We are committed to creating a safe, inclusive, and respectful
              environment for all our artists, staff, and audience members.
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] w-full 3xl:px-[160px] py-12 px-4 flex flex-col md:flex-row items-center justify-between gap-5">
        <h2 className="text-2xl md:text-4xl text-monochrome font-bold">
          Our <span className="text-warning-dark">Values</span>
        </h2>
        <div className="w-full md:w-8/12">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col-reverse justify-start md:flex-row items-center shrink-0 grow-0 mb-6 gap-6 w-full"
            >
              <div className="relative h-[240px] md:h-[160px] w-full md:w-[240px] shrink-0 rounded-lg">
                <Image
                  src={value.path}
                  alt={value.title}
                  fill
                  className="absolute object-cover rounded-lg"
                />
              </div>
              <div className="">
                <h2 className="md:text-lg text-base text-warning-dark font-bold">
                  {value.title}
                </h2>
                <p className="text-tundora text-sm md:text-base">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] px-4 w-full 3xl:px-[160px] my-10">
        <h2 className="text-2xl md:text-4xl text-monochrome font-bold mb-8 text-center">
          Our <span className="text-warning-dark">Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teams.map((team, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className="relative h-28 w-28 rounded-full mb-4">
                <Image
                  src={team.profile_url}
                  fill
                  alt={team.names}
                  className="absolute object-cover rounded-full"
                />
              </div>
              <div className="w-full">
                <h3 className="text-base md:text-lg text-monochrome text-center font-bold">
                  {team.names}
                </h3>
                <p className="text-base md:text-lg text-warning-dark text-center font-bold mb-3">
                  {team.title}
                </p>
                <p className="text-sm md:text-base text-center">{team.profile}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] w-full 3xl:px-[160px] my-12 px-4">
        <h2 className="text-monochrome font-bold text-2xl md:text-4xl mb-8 text-center">Contact <span className="text-warning-dark">Us</span></h2>
        <div className="flex justify-center">
          <form className="md:w-[640px] w-full">
            <div className="flex flex-col mb-8">
              <label htmlFor="first_name" className="text-base text-monochrome">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="border border-stroke-color w-full h-10 outline-none px-2 rounded-md"
                placeholder="ie. John"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="first_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="first_name"
                className="border border-stroke-color w-full h-10 outline-none px-2 rounded-md"
                placeholder="ie. Doe"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="first_name">Email</label>
              <input
                type="email"
                name="email"
                id="first_name"
                className="border border-stroke-color w-full h-10 outline-none px-2 rounded-md"
                placeholder="ie. johndoe@gmail.com"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="border border-stroke-color w-full h-[100px] outline-none px-2 rounded-md resize-none"
                placeholder="message"
              ></textarea>
            </div>
            <div>
              <button className="w-full bg-monochrome text-base font-semibold text-white rounded-md py-3 hover:bg-monochrome/90">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
