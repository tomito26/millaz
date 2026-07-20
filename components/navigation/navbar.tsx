"use client";
import React, { useState } from "react";
import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="section-x absolute z-30 flex w-full items-center justify-between">
      <Link href="/" className="relative h-[110px] w-[110px] shrink-0">
        <Image
          src="/assets/millaz.svg"
          alt="Millaz Productions Kenya"
          fill
          priority
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-6">
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="block rounded-md p-2 text-white md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
        <ul
          className={cn(
            isOpen ? "flex" : "hidden",
            "absolute left-0 right-0 top-full flex-col gap-1 border-t border-white/10 bg-stage p-4 md:relative md:top-auto md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0"
          )}
        >
          {navLinks.map((link) => {
            const active = pathname === link.link;
            return (
              <li key={link.title}>
                <Link
                  href={link.link}
                  onClick={closeMenu}
                  data-active={active}
                  className={cn(
                    "nav-underline inline-block py-2 text-sm font-medium tracking-wide transition-colors md:py-0",
                    active
                      ? "text-footlight"
                      : "text-white/90 hover:text-footlight"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
          <li className="mt-2 md:mt-0">
            <Link
              href="/about#contact"
              onClick={closeMenu}
              className="inline-flex rounded-md bg-curtain px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-curtain-dark"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
