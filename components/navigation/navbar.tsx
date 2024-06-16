import React from "react";
import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[340px] absolute w-full">
      <div className="h-[120px] w-[120px] relative">
        <Image
          src="/assets/millaz.svg"
          alt="millaz production"
          fill
          className="object-cover absolute"
        />
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex list-none">
          {navLinks.map((link) => (
            <li key={link.title} className="mr-8">
              <Link href={link.link} className="text-white">{link.title}</Link>
            </li>
          ))}
        </ul>
        <button className="px-5 py-2.5 bg-warning-dark rounded-lg text-white text-base text-semibold hover:bg-warning-dark/85">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
