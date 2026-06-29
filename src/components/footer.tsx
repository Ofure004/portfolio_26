import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white px-8 pt-16 md:pt-24 overflow-hidden"
    >
      {/* CTA */}
      <div className="mb-16 md:mb-24 border-t border-white/20 pt-10">
        <a
          href="mailto:ehiremhenosefure@gmail.com"
          className="text-8xl md:text-[200px] font-bold tracking-tight"
        >
          Say hi!
        </a>
      </div>

      {/* Links & Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-12">
        {/* Get in Touch */}
        <div className="flex flex-col gap-3">
          <p className="text-lg sm:text-xl uppercase tracking-widest mb-1 sm:mb-2 text-white/70">
            Get in Touch
          </p>
          <p className="text-base sm:text-lg h-16 sm:h-24 text-white mb-2">
            Got a project idea, want to collaborate, or just want to build
            something cool together? I&apos;d love to hear from you! Don&apos;t
            be shy, get in touch
          </p>
          <a
            href="mailto:ehiremhenosefure@gmail.com"
            className="w-44 flex items-center gap-1 relative text-base after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 font-bold uppercase tracking-wide cursor-pointer"
          >
            Send me an email <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Resume */}
        <div className="flex flex-col gap-3">
          <p className="text-lg sm:text-xl  uppercase tracking-widest mb-2 text-white/70">
            Resume
          </p>
          <p className="text-base sm:text-lg h-12 sm:h-24 text-white mb-2">
            For a deeper look at my experience, skills, and background, check
            out my resume.
          </p>
          <a
            href="/EHIREMHEN OFURE RESUME.pdf"
            download
            className="w-33.75 flex items-center gap-1 relative text-base after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 font-bold uppercase tracking-wide cursor-pointer"
          >
            View resume <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-3">
          <p className="text-lg sm:text-xl uppercase tracking-widest mb-2 text-white/70">
            Socials
          </p>
          <p className="text-base sm:text-lg h-16 sm:h-24 text-white mb-2">
            Feel free to reach out through any of my socials below or send me a
            message. Always happy to connect, chat, or exchange ideas.
          </p>
          <div className="flex gap-10">
            <a
              href="https://github.com/Ofure004"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 flex items-center gap-1 relative text-base after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 font-bold uppercase tracking-wide cursor-pointer"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/ofureehiremhen/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 flex items-center gap-1 relative text-base after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 font-bold uppercase tracking-wide cursor-pointer"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a
              href="https://x.com/EhiremhenO"
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 flex items-center gap-1 relative text-base after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 font-bold uppercase tracking-wide cursor-pointer"
            >
              Twitter <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row w-full justify-center items-center mt-28 text-xs text-white/70">
        {/* <p>&copy; {new Date().getFullYear()} Ehiremhen Ofure</p> */}
        <p className="text-xl">Made with love by Ehiremhen Ofure</p>
      </div>
    </footer>
  );
}
