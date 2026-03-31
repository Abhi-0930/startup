"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X, LayoutGrid, Folder, Briefcase, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Company", icon: <LayoutGrid size={20} />, hasDropdown: true },
    { name: "Services", icon: <Briefcase size={20} /> },
    { name: "Projects", icon: <Folder size={20} /> },
    { name: "Contact", icon: <User size={20} /> },
  ];

  return (
    <>
      <nav className={`fixed top-6 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'}`}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-full md:rounded-[40px] px-4 md:px-8 py-2 md:py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/menu">
                  <Link href="#" className="flex items-center gap-1 text-[15px] font-medium text-zinc-600 hover:text-black hover:bg-zinc-100/80 px-4 py-2 rounded-full transition-all cursor-pointer">
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} className="opacity-50 group-hover/menu:rotate-180 transition-transform duration-300" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 mt-4 w-48 bg-white border border-zinc-100 rounded-2xl shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 translate-y-2 group-hover/menu:translate-y-0 p-2">
                      <Link href="#" className="block px-4 py-2 text-[14px] text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-xl transition-colors">About Us</Link>
                      <Link href="#" className="block px-4 py-2 text-[14px] text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-xl transition-colors">Our Team</Link>
                      <Link href="#" className="block px-4 py-2 text-[14px] text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-xl transition-colors">Careers</Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link href="#" className="group flex items-center bg-[#09090b] text-white pl-6 pr-1.5 py-1.5 rounded-full font-medium text-[14px] hover:bg-black transition-all">
                <div className="flex items-center gap-3">
                  <span>Book a Call</span>
                  <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-all flex items-center justify-center">
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-[#09090b] rounded-full text-white shadow-lg flex items-center justify-center w-10 h-10 transition-all active:scale-95"
              >
                {isMobileMenuOpen ? (
                  <X size={20} strokeWidth={2.5} />
                ) : (
                  <Menu size={20} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-20 inset-x-4 z-[60] overflow-hidden"
          >
            <div className="bg-white rounded-[24px] p-4 shadow-xl border border-zinc-100 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href="#" 
                  className="flex items-center justify-between px-4 py-3 hover:bg-zinc-50 rounded-xl transition-colors font-medium text-zinc-600 hover:text-black"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="opacity-50" />}
                </Link>
              ))}
              <div className="h-[1px] bg-zinc-100 my-2" />
              <Link href="#" className="flex items-center justify-between bg-[#09090b] text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition-all">
                <span>Book a Call</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
