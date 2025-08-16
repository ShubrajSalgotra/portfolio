'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from 'next/image';

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20">
      <div className="section flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-white/90 hover:text-white">
        {/* <span className="flex flex-col">
        <Image src="/favicon.svg" alt='' width={25} height={25} /> Shubraj
        </span> */}
          {/* <span className="text-brand">▮</span> Shubraj */}
          Shubraj
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition">{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary">Hire me</a>
        </nav>
        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 bg-white/10 rounded-xl">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden section pb-4">
          <div className="flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-white/90 bg-white/10 rounded-xl px-4 py-3" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#contact" className="btn btn-primary w-full text-center" onClick={() => setOpen(false)}>Hire me</a>
          </div>
        </div>
      )}
    </header>
  );
}
