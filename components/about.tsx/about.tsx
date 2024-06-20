import React from "react";
import Image from "next/image";
import { Crosshair, Handshake, Telescope } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Artistic Excellence",
      description:
        "We strive for the highest standards of artistic quality in all our productions, performances, and creative endeavors.",
      path: "/assets/IMG-20190826-WA0094.jpg",
    },
    {
      title: "Community Engagement",
      description:
        "We believe in the power of the arts to bring people together and foster a sense of community. We are committed to engaging with our audience and the wider community through our productions.",
      path: "/assets/20240512211232_IMG_4575.JPG",
    },
    {
      title: "Collaboration",
      description:
        "We believe that collaboration is key to creating innovative and high-quality productions. We foster a culture of cooperation and mutual respect among our artists, staff, and partners.",
      path: "/assets/IMG-20190826-WA0094.jpg",
    },
    {
      title: "Social Responsibility",
      description:
        "We recognize the impact that our work can have on the world and are committed to using our platform to promote positive change and social responsibility.",
      path: "/assets/20240511211639_IMG_3375-01.jpeg",
    },
    {
      title: "Creativity",
      description:
        "We encourage and celebrate creativity in all its forms, from scriptwriting and directing to design and performance.",
      path: "/assets/different-moments-theater-class.jpg",
    },
    {
      title: "Integrity",
      description:
        "We operate with integrity, honesty, and transparency in all our dealings, both on and off stage.",
      path: "/assets/students-rehashing-theater-class.jpg",
    },
  ];
  const teams = [
    {
      names: "Mr James Miller",
      title: "Creative Director",
      profile:
        "James brings over 15 years of experience in theatre production and direction to Millaz Production Company. With a passion for storytelling and a keen eye for detail, he oversees the creative aspects of each stage production, ensuring artistic integrity and innovation in every project.",
      profile_url: "/assets/young-handsome-man-posing-with-hat.jpg",
    },
    {
      names: "Miss Sarah Collins",
      title: "Production Manager",
      profile:
        "Sarah is a seasoned production manager with a strong background in stage logistics and operations. With a meticulous attention to detail and exceptional organizational skills, she ensures that every production at Millaz Production Company runs smoothly from inception to curtain call.",
      profile_url:
        "/assets/portrait-cute-african-american-curly-young-woman-studio.jpg",
    },
    {
      names: "Mr David Lee",
      title: "Lead Set Designer",
      profile:
        "David is a talented set designer known for his innovative approach and ability to transform creative visions into captivating stage environments. With a degree in theatrical design and years of hands-on experience, he collaborates closely with directors and producers to bring their concepts to life.",
      profile_url: "/assets/handsome-adult-male-posing.jpg",
    },
    {
      names: "Mrs Emily Johnson",
      title: "Marketing and Communications Manager",
      profile:
        "Emily is a dynamic marketing professional with a specialization in the arts and entertainment industry. She brings a strategic mindset and creative flair to Millaz Production Company, overseeing all aspects of marketing campaigns and communications strategies.",
      profile_url: "/assets/front-view-smiley-woman-posing.jpg",
    },
    {
      names: "Mr Michael Thompson",
      title: "Technical Director",
      profile:
        "Michael is an experienced technical director with a passion for the seamless integration of sound, lighting, and special effects in live performances. With a background in technical theater and event production, he oversees the technical aspects of productions at Millaz Production Company",
      profile_url: "/assets/close-up-smiley-man-with-glasses.jpg",
    },
    {
      names: "Mrs Rachel Carter",
      title: "Costume Designer",
      profile:
        "Rachel is a versatile costume designer known for her ability to evoke character and narrative through wardrobe choices. With a background in fashion design and costume history, she collaborates closely with directors and actors to develop costumes that enhance storytelling and character development on stage.",
      profile_url: "/assets/beautiful-afro-american-woman-smiling.jpg",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/different-moments.jpg')",
          height: "500px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex items-center md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px]"
      >
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">About</h1>
          <p className="max-w-3xl text-white text-base">
            We are proud to be part of the vibrant Nairobi theatre scene,
            bringing world-class productions to the Kenya National Theatre and
            beyond
          </p>
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
          <p className="text-tundora text-base mb-4">
            With a rich history of producing innovative and critically acclaimed
            shows, we are driven by a desire to push the boundaries of
            storytelling and to provide a platform for emerging and established
            talent alike. Our productions are carefully crafted to showcase the
            best of local and international talent, blending traditional and
            contemporary styles to create unique and captivating performances.
          </p>
          <p className="text-tundora text-base">
            Millaz Productions Kenya started of as Millers Productions Kenya in
            2016 but had to undergo a name change in 2018 in respect to
            registration logistics. An idea crafted by Senator Cleophas Malala
            and Xavier Jerry Nato, the two thespians had the idea to revive a
            theatre company they had back in 2008, Next Level productions, but
            give it a new name. Xavier embarked in a recruiting exercise and
            settled on the name Millers, a name coined by Allan Lumumba and
            Emmanuel Chindia.
          </p>
        </div>
        <div className="relative h-[400px] w-[560px] rounded-xl">
          <Image
            src="/assets/HDKC8377.JPG"
            alt="actors on stage"
            fill
            className="absolute object-cover rounded-tl-[100px] rounded-br-[100px]"
          />
        </div>
      </div>
      <div className="bg-[#f1f1f1] py-12 flex gap-20 md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px]">
        <div className="bg-white w-[400px] px-4 py-5 shadow-md rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="h-12 w-12 bg-[#f1f1f1] flex justify-center items-center rounded-full">
              <Telescope className="h-6 w-6 stroke-warning-dark" />
            </div>
          </div>
          <div>
            <h2 className="text-xl text-warning-dark font-bold text-center my-4">
              Our Vision
            </h2>
            <p className="text-base text-tundora text-center">
              Inspire and entertain audiences through innovative, high-quality
              productions that celebrate the human experience.
            </p>
          </div>
        </div>
        <div className="bg-white w-[400px] shadow-md rounded-lg px-4 py-5">
          <div className="flex justify-center">
            <div className="h-12 w-12 bg-[#f1f1f1] rounded-full flex justify-center items-center">
              <Crosshair className="h-6 w-6 stroke-warning-dark" />
            </div>
          </div>
          <div>
            <h2 className="text-xl text-warning-dark font-bold text-center my-4">
              Our Mission
            </h2>
            <p className="text-base text-tundora text-center">
              To create unforgettable stage experiences that showcase the best
              of local and international talent, while promoting community
              engagement, social responsibility, and artistic excellence.
            </p>
          </div>
        </div>
        <div className="bg-white w-[400px] shadow-md rounded-lg px-4 py-5">
          <div className="flex justify-center">
            <div className="h-12 w-12 bg-[#f1f1f1] rounded-full flex justify-center items-center">
              <Handshake className="h-6 w-6 stroke-warning-dark" />
            </div>
          </div>
          <div>
            <h2 className="text-xl text-warning-dark font-bold text-center my-4">
              Our Commitment
            </h2>
            <p className="text-tundora text-base text-center">
              We are committed to creating a safe, inclusive, and respectful
              environment for all our artists, staff, and audience members.
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] w-full 3xl:px-[160px] py-12 flex items-center justify-between">
        <h2 className="text-4xl text-monochrome font-bold">
          Our <span className="text-warning-dark">Values</span>
        </h2>
        <div className="w-8/12">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-center shrink-0 grow-0 mb-6 gap-6"
            >
              <div className="relative h-[160px] w-[240px] shrink-0 rounded-lg">
                <Image
                  src={value.path}
                  alt={value.title}
                  fill
                  className="absolute object-cover rounded-lg"
                />
              </div>
              <div className="">
                <h2 className="text-lg text-warning-dark font-bold">
                  {value.title}
                </h2>
                <p className="text-tundora text-base">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] w-full 3xl:px-[160px] my-10">
        <h2 className="text-4xl text-monochrome font-bold mb-8 text-center">
          Our <span className="text-warning-dark">Team</span>
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {teams.map((team, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-28 w-28 rounded-full mb-4">
                <Image
                  src={team.profile_url}
                  fill
                  alt={team.names}
                  className="absolute object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg text-monochrome text-center font-bold">
                  {team.names}
                </h3>
                <p className="text-lg text-warning-dark text-center font-bold mb-3">
                  {team.title}
                </p>
                <p className="text-base text-center">{team.profile}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] w-full 3xl:px-[160px] my-12">
        <h2 className="text-monochrome font-bold text-4xl mb-8 text-center">Contact <span className="text-warning-dark">Us</span></h2>
        <div className="flex justify-center">
          <form>
            <div className="flex flex-col mb-8">
              <label htmlFor="first_name" className="text-base text-monochrome">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="border border-stroke-color w-[640px] h-10 outline-none px-2 rounded-md"
                placeholder="ie. John"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="first_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="first_name"
                className="border border-stroke-color w-[640px] h-10 outline-none px-2 rounded-md"
                placeholder="ie. Doe"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="first_name">Email</label>
              <input
                type="email"
                name="email"
                id="first_name"
                className="border border-stroke-color w-[640px] h-10 outline-none px-2 rounded-md"
                placeholder="ie. johndoe@gmail.com"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="border border-stroke-color w-[640px] h-[100px] outline-none px-2 rounded-md resize-none"
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
