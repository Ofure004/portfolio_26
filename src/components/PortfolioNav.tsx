"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";

const linkClass =
  "relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:text-black hover:after:scale-x-100";

export default function PortfolioNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col items-end gap-1.5 text-base font-bold uppercase tracking-wide text-[#666]/70 sm:gap-2 sm:text-xl">
        <li>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className={`${linkClass} uppercase ${pathname === "/about" ? "text-black" : ""}`}
          >
            About
          </Link>
        </li>
        <li>
          {isHome ? (
            <button
              onClick={() => scrollTo("work")}
              className={`${linkClass} uppercase`}
            >
              Work
            </button>
          ) : (
            <Link href="/#work" className={`${linkClass} uppercase`}>
              Work
            </Link>
          )}
        </li>
        <li>
          {isHome ? (
            <button
              onClick={() => scrollTo("contact")}
              className={`${linkClass} cursor-pointer uppercase`}
            >
              Contact
            </button>
          ) : (
            <Link href="/#contact" className={`${linkClass} uppercase`}>
              Contact
            </Link>
          )}
        </li>
        <li>
          <a
            href="/EHIREMHEN_OFURE_RESUME.pdf"
            download
            className={`${linkClass} flex cursor-pointer gap-1 text-black lowercase`}
          >
            resume
            <Download size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
