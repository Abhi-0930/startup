"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'}`}>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-[40px] px-8 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/zerogrid-logo-bg-remove.png"
              alt="Zerogrid Logo"
              width={140}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group/menu">
              <button className="flex items-center gap-1 text-[15px] font-medium text-zinc-600 hover:text-black transition-colors cursor-pointer">
                Company <ChevronDown size={14} className="opacity-50 group-hover/menu:rotate-180 transition-transform duration-300" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-4 w-48 bg-white border border-zinc-100 rounded-2xl shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 translate-y-2 group-hover/menu:translate-y-0 p-2">
                <Link href="#" className="block px-4 py-2 text-[14px] text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-xl transition-colors">About Us</Link>
                <Link href="#" className="block px-4 py-2 text-[14px] text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-xl transition-colors">Our Team</Link>
                <Link href="#" className="block px-4 py-2 text-[14px] text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-xl transition-colors">Careers</Link>
              </div>
            </div>
            <Link href="#" className="text-[15px] font-medium text-zinc-600 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="#" className="flex items-center gap-2 text-[15px] font-medium text-zinc-600 hover:text-black transition-colors">
              Projects 
            </Link>
            <Link href="#" className="text-[15px] font-medium text-zinc-600 hover:text-black transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-[15px] font-medium text-zinc-600 hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="#" className="group flex items-center bg-[#09090b] text-white pl-6 pr-1.5 py-1.5 rounded-full font-medium text-[14px] hover:bg-black transition-all">
            <div className="flex items-center gap-3">
              <span>Book a Call</span>
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-all flex items-center justify-center">
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
