"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Company", hasDropdown: true },
    { name: "Services" },
    { name: "Projects" },
    { name: "Contact" },
  ];

  return (
    <nav className={`fixed top-6 inset-x-0 z-50 ${scrolled ? 'top-4' : 'top-6'}`}>
      <div className="max-w-[1200px] mx-auto px-4">
        {/* The main Navbar Pill that expands - NO ANIMATION AT ALL */}
        <div 
          className={`bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden ${
            isMobileMenuOpen 
              ? 'rounded-[24px] p-5 h-auto' 
              : 'rounded-full md:rounded-[32px] px-4 md:px-6 py-1.5 md:py-2 h-[52px]'
          }`}
        >
          {/* Header row (Logo + Toggle) */}
          <div className="flex items-center justify-between h-9 md:h-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/zerogrid-logo-bg-remove.png"
                alt="Zerogrid Logo"
                width={100}
                height={24}
                className="h-6 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/menu">
                  <Link href="#" className="flex items-center gap-1 text-[14px] font-medium text-zinc-600 hover:text-black hover:bg-zinc-100/60 px-3 py-1.5 rounded-full cursor-pointer">
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={12} className="opacity-40" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 mt-3 w-44 bg-white border border-zinc-100 rounded-xl shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible p-1.5">
                      <Link href="#" className="block px-3 py-1.5 text-[13px] text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg">About Us</Link>
                      <Link href="#" className="block px-3 py-1.5 text-[13px] text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg">Our Team</Link>
                      <Link href="#" className="block px-3 py-1.5 text-[13px] text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg">Careers</Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link href="#" className="group flex items-center bg-[#09090b] text-white pl-5 pr-1.5 py-1 rounded-full font-medium text-[13px] hover:bg-black">
                <div className="flex items-center gap-2.5">
                  <span>Book a Call</span>
                  <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 flex items-center justify-center">
                    <ArrowRight size={14} className="group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle - Static Hamburger/X */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-[#09090b] rounded-full text-white shadow-lg flex items-center justify-center w-9 h-9"
              >
                {isMobileMenuOpen ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
              </button>
            </div>
          </div>

          {/* Morphing Mobile Content - Instant Display (ZERO ANIMATION) */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="flex flex-col">
                      <button 
                        onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                        className="flex items-center justify-between px-2 py-2 hover:bg-zinc-50 rounded-lg font-medium text-zinc-600 hover:text-black text-[15px] w-full"
                      >
                        {link.name}
                        <ChevronDown size={12} className={`opacity-40 ${isCompanyOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isCompanyOpen && (
                        <div className="flex flex-col pl-4 gap-0.5 mt-0.5 pb-1.5">
                          <Link href="#" className="py-1.5 text-[14px] text-zinc-500 hover:text-black">About Us</Link>
                          <Link href="#" className="py-1.5 text-[14px] text-zinc-500 hover:text-black">Our Team</Link>
                          <Link href="#" className="py-1.5 text-[14px] text-zinc-500 hover:text-black">Careers</Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href="#" 
                      className="flex items-center justify-between px-2 py-2 hover:bg-zinc-50 rounded-lg font-medium text-zinc-600 hover:text-black text-[15px]"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="h-[1px] bg-zinc-100/50 my-1.5" />
              <Link href="#" className="group flex items-center justify-between bg-[#09090b] text-white pl-5 pr-1 py-1 rounded-full font-semibold text-[15px] hover:bg-black w-full leading-relaxed">
                <span>Book a Call</span>
                <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 flex items-center justify-center">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
