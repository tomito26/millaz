import React from "react";
import Image from "next/image";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { Mail, Phone, Facebook } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-warning-dark py-20">
      <div className="md:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[160px]">
        <div className="flex justify-between gap-[20]">
          <div className="w-[500px]">
            <h3 className="text-white font-semibold mb-4">
              Millaz Productions Kenya
            </h3>
            <p className="text-white text-base">
              Millaz Production Kenya is a theater company dedicated to bringing
              captivating stories to life through innovative stage performances.
            </p>
          </div>
          <div className="">
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link className="text-base text-white" href={link.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="flex items-center">
              <Phone className="mr-3 h-6 w-6 stroke-white" />
              <div>
                <p className="text-base text-white font-medium">
                  Main Support Line
                </p>
                <p className="underline text-white">+254701698534</p>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <Mail className="h-6 w-6 mr-3 stroke-white" />
              <div>
                <p className="text-base text-white font-medium">
                  General Enquiries
                </p>
                <p className="underline text-white">clarewahome@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-white my-6" />
        <div>
          <p className="text-white text-base">
            Copyright © 2024 Millaz Production Kenya® | All rights reserved
          </p>
          <div>
            {/* <div>
              <FaFacebookF style={{ color: "#fff" }} className="text-white  stroke-white" />
            </div>
            <div>
              <FaTwitter style={{ color: "#fff" }} />
            </div>
            <div>
              <FaInstagram style={{ color: "#fff" }} />
            </div>
            <div>
              <FaLinkedinIn style={{ color: "#fff" }} />
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;