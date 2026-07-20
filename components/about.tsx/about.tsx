import React from "react";
import Image from "next/image";
import { Crosshair, Handshake, Telescope } from "lucide-react";
import { teams, values } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

const pillars = [
  {
    icon: Telescope,
    title: "Our Vision",
    body: "Inspire and entertain audiences through innovative, high-quality productions that celebrate the human experience.",
  },
  {
    icon: Crosshair,
    title: "Our Mission",
    body: "To create unforgettable stage experiences that showcase the best of local and international talent, while promoting community engagement, social responsibility, and artistic excellence.",
  },
  {
    icon: Handshake,
    title: "Our Commitment",
    body: "We are committed to creating a safe, inclusive, and respectful environment for all our artists, staff, and audience members.",
  },
];

const inputClasses =
  "w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-ink outline-none transition-colors focus:border-curtain focus:ring-2 focus:ring-curtain/20";

const About = () => {
  return (
    <div>
      {/* ---------- HERO ---------- */}
      <header
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,17,15,0.7), rgba(22,17,15,0.82)), url('/assets/EIUM2366.JPG')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="grain vignette relative flex min-h-[62vh] items-center bg-stage"
      >
        <CursorSpotlight />
        <div className="section-x relative z-10 w-full py-28">
          <p className="kicker mb-4">Our Story</p>
          <h1 className="mb-4 max-w-3xl text-4xl font-bold text-white md:text-6xl">
            Proudly part of the <span className="text-footlight">Nairobi</span>{" "}
            theatre scene
          </h1>
          <p className="max-w-2xl text-sm text-paper-dim md:text-base">
            Bringing world-class productions to the Kenya National Theatre and
            beyond.
          </p>
        </div>
      </header>

      {/* ---------- STORY ---------- */}
      <Reveal
        as="section"
        className="section-x flex flex-col items-center justify-between gap-10 py-20 md:flex-row"
      >
        <div className="w-full lg:w-6/12">
          <SectionHeading
            index="01"
            kicker="Est. 2016"
            title="Our"
            accent="Story"
            className="mb-5"
          />
          <p className="dropcap mb-4 text-sm text-ink-muted md:text-base">
            Millaz Productions Kenya started off as Millers Productions Kenya in
            2016 but underwent a name change in 2018 in respect to registration
            logistics. An idea crafted by Senator Cleophas Malala and Xavier
            Jerry Nato, the two thespians set out to revive a theatre company
            they had back in 2008, Next Level Productions, under a new name.
            Xavier embarked on a recruiting exercise and settled on the name
            Millers, coined by Allan Lumumba and Emmanuel Chindia.
          </p>
          <p className="text-sm text-ink-muted md:text-base">
            We are a passionate and dedicated team of artists and professionals
            committed to bringing high-quality, engaging stage productions to
            audiences of all ages. Founded on a deep love for the performing
            arts, our mission is to create unforgettable experiences that
            inspire, entertain, and connect people from diverse backgrounds.
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

      {/* ---------- PILLARS ---------- */}
      <section className="grain vignette relative overflow-hidden bg-stage py-16">
        <div className="section-x relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              key={title}
              delay={i * 120}
              className="rounded-xl bg-stage-800 p-6 ring-1 ring-white/5"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-curtain/15">
                <Icon className="h-7 w-7 stroke-footlight" />
              </div>
              <h3 className="my-4 text-center text-xl font-bold text-white">
                {title}
              </h3>
              <p className="text-center text-sm text-paper-dim md:text-base">
                {body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="section-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row">
        <SectionHeading
          kicker="What We Stand For"
          title="Our"
          accent="Values"
          className="md:w-4/12"
        />
        <div className="w-full md:w-8/12">
          {values.map((value, index) => (
            <Reveal
              key={index}
              delay={(index % 2) * 100}
              className="mb-6 flex w-full flex-col-reverse items-center gap-6 md:flex-row"
            >
              <div className="group relative h-[220px] w-full shrink-0 overflow-hidden rounded-lg md:h-[160px] md:w-[240px]">
                <Image
                  src={value.path}
                  alt={value.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-curtain">
                  {value.title}
                </h3>
                <p className="text-sm text-ink-muted md:text-base">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section className="bg-paper py-20">
        <div className="section-x">
          <SectionHeading
            kicker="The Ensemble"
            title="Our"
            accent="Team"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {teams.map((team, index) => (
              <Reveal
                key={index}
                delay={(index % 3) * 100}
                className="flex w-full flex-col items-center text-center"
              >
                <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full ring-2 ring-footlight/50">
                  <Image
                    src={team.profile_url}
                    fill
                    alt={team.names}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-ink">{team.names}</h3>
                <p className="mb-3 font-semibold text-curtain">{team.title}</p>
                <p className="text-sm text-ink-muted md:text-base">
                  {team.profile}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="section-x scroll-mt-24 py-20">
        <SectionHeading
          kicker="Get in Touch"
          title="Contact"
          accent="Us"
          align="center"
          className="mb-12"
        />
        <div className="flex justify-center">
          <form className="w-full md:w-[640px]">
            <div className="mb-6 flex flex-col gap-2">
              <label htmlFor="first_name" className="font-medium text-ink">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className={inputClasses}
                placeholder="e.g. John"
              />
            </div>
            <div className="mb-6 flex flex-col gap-2">
              <label htmlFor="last_name" className="font-medium text-ink">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className={inputClasses}
                placeholder="e.g. Doe"
              />
            </div>
            <div className="mb-6 flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-ink">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={inputClasses}
                placeholder="e.g. johndoe@gmail.com"
              />
            </div>
            <div className="mb-8 flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-ink">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className={`${inputClasses} h-[120px] resize-none`}
                placeholder="Your message"
              ></textarea>
            </div>
            <Button type="submit" size="lg" className="btn-sweep w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
