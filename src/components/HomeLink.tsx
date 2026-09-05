"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

export default function HomeLink() {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="Go to homepage"
      className="group inline-flex items-center gap-2.5 text-black"
    >
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-full bg-black text-sm font-bold text-white transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-105 sm:size-9 sm:text-base"
      >
        OE
      </span>
      {/* <span className="relative text-lg font-bold tracking-[0.15em] sm:text-xl">
        Ofure
        <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
      </span> */}
    </Link>
  );
}
