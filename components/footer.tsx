import React from "react";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t-4 border-footlight bg-stage py-16 text-paper-dim">
      <div className="section-x">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="w-full md:w-[460px]">
            <h3 className="mb-3 text-xl font-bold text-white">
              Millaz Productions <span className="text-footlight">Kenya</span>
            </h3>
            <p className="text-sm md:text-base">
              A theatre company dedicated to bringing captivating stories to
              life through innovative stage performances — here to entertain,
              empower, and educate.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold uppercase tracking-wide text-footlight">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    className="text-sm transition-colors hover:text-white md:text-base"
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="mr-3 h-5 w-5 stroke-footlight md:h-6 md:w-6" />
              <div>
                <p className="text-sm font-medium text-white md:text-base">
                  Main Support Line
                </p>
                <a
                  href="tel:+254701698534"
                  className="text-sm underline md:text-base"
                >
                  +254701698534
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="mr-3 h-5 w-5 stroke-footlight md:h-6 md:w-6" />
              <div>
                <p className="text-sm font-medium text-white md:text-base">
                  General Enquiries
                </p>
                <a
                  href="mailto:clarewahome@gmail.com"
                  className="text-sm underline md:text-base"
                >
                  clarewahome@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 h-px w-full bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm md:text-base">
            Copyright © {year} Millaz Productions Kenya® | All rights reserved
          </p>
          <div className="flex gap-4">
            {[
              {
                href: "https://www.facebook.com/millersproductionskenya",
                label: "Facebook",
                path: "M24.3302 30.1207V23.5426H26.9628L27.3541 20.9671H24.3302V19.3266C24.3302 18.5834 24.5759 18.0745 25.8412 18.0745H27.4446V15.7783C26.6648 15.7077 25.8802 15.674 25.0957 15.6764C22.7687 15.6764 21.1711 16.8739 21.1711 19.0722V20.9623H18.5557V23.5378H21.1768V30.1207H24.3302Z",
              },
              {
                href: "https://www.instagram.com/millazproductionskenya/",
                label: "Instagram",
                path: "M22.8785 19.4004C20.7071 19.4004 18.9453 21.1621 18.9453 23.3336C18.9453 25.5051 20.7071 27.2668 22.8785 27.2668C25.05 27.2668 26.8117 25.5051 26.8117 23.3336C26.8117 21.1621 25.05 19.4004 22.8785 19.4004ZM22.8785 25.8849C21.4698 25.8849 20.3271 24.7424 20.3271 23.3336C20.3271 21.9248 21.4698 20.7822 22.8785 20.7822C24.2873 20.7822 25.4299 21.9248 25.4299 23.3336C25.4299 24.7424 24.2873 25.8849 22.8785 25.8849Z",
              },
              {
                href: "https://x.com/Millazproducti1",
                label: "X",
                path: "M31.6374 18.0698C31.3861 18.1889 31.1277 18.2895 30.8636 18.3712C31.1762 17.9933 31.4146 17.5487 31.5601 17.0622C31.5927 16.9532 31.5589 16.8338 31.475 16.7625C31.3912 16.6911 31.2749 16.6825 31.1826 16.741C30.6219 17.0964 30.0169 17.3519 29.3825 17.5012C28.7434 16.8339 27.8755 16.4541 26.9783 16.4541C25.0844 16.4541 23.5435 18.1008 23.5435 20.1248C23.5435 20.2842 23.5529 20.4428 23.5716 20.5991C21.2214 20.3786 19.0365 19.144 17.5361 17.1771C17.4827 17.107 17.4003 17.0692 17.316 17.0764C17.2316 17.0835 17.1557 17.1343 17.1131 17.2125C16.8088 17.7706 16.6479 18.4088 16.6479 19.0583C16.6479 19.9428 16.9434 20.7819 17.4654 21.4377C17.3066 21.379 17.1526 21.3055 17.0056 21.2183C16.9267 21.1714 16.8304 21.1721 16.752 21.2201C16.6736 21.2682 16.6244 21.3565 16.6223 21.4531C16.6219 21.4694 16.6219 21.4857 16.6219 21.5022C16.6219 22.8224 17.2868 24.0111 18.3033 24.6589C18.216 24.6496 18.1287 24.6361 18.042 24.6184C17.9526 24.6001 17.8607 24.6336 17.8004 24.7065C17.74 24.7793 17.72 24.8808 17.7479 24.9734C18.1241 26.2289 19.0929 27.1523 20.2639 27.4339C19.2926 28.084 18.1819 28.4246 17.0159 28.4246C16.7725 28.4246 16.5279 28.4093 16.2884 28.379C16.1694 28.3639 16.0557 28.439 16.0151 28.5599C15.9746 28.6809 16.0176 28.8157 16.1188 28.8851C17.6167 29.9116 19.3488 30.4541 21.1276 30.4541C24.6246 30.4541 26.8122 28.6917 28.0316 27.2133C29.5521 25.3698 30.4241 22.9297 30.4241 20.5187C30.4241 20.418 30.4227 20.3163 30.4198 20.2149C31.0197 19.7318 31.5362 19.1473 31.9564 18.4754C32.0203 18.3733 32.0134 18.2384 31.9394 18.1445C31.8656 18.0504 31.7425 18.0201 31.6374 18.0698Z",
              },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-footlight hover:bg-footlight/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="14 14 20 20"
                  fill="none"
                  className="fill-white transition-colors group-hover:fill-footlight"
                >
                  <path d={social.path} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
