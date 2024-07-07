"use client"
import React, { useState } from "react";
import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  console.log(pathname)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn("flex justify-between items-center md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px] absolute w-full bg-white md:bg-transparent")}>
      <div className="h-[120px] w-[120px] relative">
        <Image
          src="/assets/millaz.svg"
          alt="millaz production"
          fill
          className="object-cover absolute"
        />
      </div>
      <div className="flex items-center gap-6">
        <button
          className="block md:hidden px-5 py-2.5 text-white text-base"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={cn(
            isOpen ? "block" : "hidden",
           "absolute md:relative md:flex list-none bg-white md:bg-transparent top-[100%] left-0 right-0 md:top-auto md:left-auto md:right-auto p-4 md:p-0 z-10")}
        >
          {navLinks.map((link) => (
            <li key={link.title} className="md:mr-8 my-4 md:my-0">
              <Link href={link.link} className={cn(pathname === link.link ? "text-warning-dark" : "text-black text-sm md:text-white"," block hover:text-warning-dark")} onClick={toggleMenu}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hidden md:block px-5 py-2.5 bg-warning-dark rounded-lg text-white text-base font-semibold hover:bg-warning-dark/85">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

