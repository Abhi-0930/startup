"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X, Folder, Users, LayoutGrid, MessageSquare } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  // Desktop Hover Dropdown state
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const dropdownTimer = useRef<any>(null);

  const handleMouseEnter = (linkName: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    dropdownTimer.current = setTimeout(() => {
      setHoveredLink(null);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Company", hasDropdown: true, icon: LayoutGrid },
    { name: "Projects", icon: Folder, href: "#" },
    { name: "About us", icon: Users, href: "#" },
    { name: "Contact", icon: MessageSquare, href: "/contact" },
  ];

  return (
    <nav className={`fixed top-6 inset-x-0 z-50 ${scrolled ? 'top-4' : 'top-6'}`}>
      {/* Full Screen Blur Overlay: ONLY RENDER ON MOBILE */}
      <div 
        className={`fixed inset-0 bg-black/10 backdrop-blur-[3px] transition-all duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto z-40' : 'opacity-0 pointer-events-none -z-50'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className="max-w-[1200px] mx-auto px-4 overflow-visible">
        {/* The main Navbar Pill */}
        <div 
          className={`relative z-50 bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-visible ${
            isMobileMenuOpen 
              ? 'rounded-[24px] p-5' 
              : 'rounded-full md:rounded-[32px] px-3.5 md:px-6 py-2 md:py-2.5'
          }`}
        >
          {/* Header row (Logo + Toggle) */}
          <div className="flex items-center justify-between h-9 md:h-8">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group/logo relative">
                {/* Desktop Full Logo */}
                <Image
                  src="/zerogrid-logo-bg-remove.png"
                  alt="Zerogrid Logo"
                  width={120}
                  height={30}
                  className="h-7 w-auto object-contain hidden md:block"
                  priority
                />
                
                {/* Mobile Icon Logo (Stylized Z) */}
                <div className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white font-black text-lg shadow-lg shadow-black/20 hover:scale-105 transition-transform">
                  Z
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links: USING CSS HOVER (group) */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative py-2 group/nav"
                >
                  <Link 
                    href={link.href || "#"} 
                    className="flex items-center gap-1 text-[15px] font-[550] text-black hover:bg-zinc-100/80 px-3.5 py-2 rounded-full cursor-pointer transition-colors leading-none"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown 
                        size={14} 
                        className="opacity-70 transition-transform duration-300 group-hover/nav:rotate-180" 
                      />
                    )}
                  </Link>
                  
                  {link.hasDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[100] opacity-0 invisible translate-y-2 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-200 ease-out">
                      <div className="flex bg-white border border-zinc-100 rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.1)] overflow-hidden min-w-[580px]">
                        {/* Left Column: Company */}
                        <div className="flex-1 p-6 flex flex-col gap-6 text-left">
                          <div className="text-[12px] font-bold text-zinc-400 tracking-wider uppercase px-2 text-left">Company</div>
                          
                          <div className="flex flex-col gap-2">
                            <Link href="#" className="flex items-center justify-between p-2 rounded-2xl hover:bg-zinc-50 transition-colors group/item">
                              <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full border border-zinc-100 flex items-center justify-center bg-white shadow-sm group-hover/item:border-zinc-200 transition-colors">
                                  <Folder size={20} className="text-zinc-600" />
                                </div>
                                <div className="flex flex-col text-left">
                                  <span className="text-[15px] font-semibold text-black">Projects</span>
                                  <span className="text-[13px] text-zinc-500 mt-0.5">See our work that we've built.</span>
                                </div>
                              </div>
                              <ArrowRight size={20} className="text-zinc-400 opacity-0 group-hover/item:opacity-100 -translate-x-4 group-hover/item:translate-x-0 transition-all duration-300 mr-2" />
                            </Link>

                            <Link href="#" className="flex items-center justify-between p-2 rounded-2xl hover:bg-zinc-50 transition-colors group/item">
                              <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full border border-zinc-100 flex items-center justify-center bg-white shadow-sm group-hover/item:border-zinc-200 transition-colors">
                                  <Users size={20} className="text-zinc-600" />
                                </div>
                                <div className="flex flex-col text-left">
                                  <span className="text-[15px] font-semibold text-black">About us</span>
                                  <span className="text-[13px] text-zinc-500 mt-0.5">About our amazing team.</span>
                                </div>
                              </div>
                              <ArrowRight size={20} className="text-zinc-400 opacity-0 group-hover/item:opacity-100 -translate-x-4 group-hover/item:translate-x-0 transition-all duration-300 mr-2" />
                            </Link>
                          </div>

                          <div className="mt-2 px-2">
                            <Link 
                              href="/book" 
                              className="group/btn flex items-center justify-between bg-[#09090b] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-[15px] hover:bg-black transition-all w-full relative overflow-hidden"
                            >
                              <span className="relative z-10">Book A Call</span>
                              <div className="bg-white/10 p-2 rounded-full transition-all flex items-center justify-center group-hover/btn:w-[48px] group-hover/btn:rounded-[18px]">
                                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Right Column: Pages */}
                        <div className="w-[220px] bg-zinc-50/80 p-6 flex flex-col gap-6 border-l border-zinc-100 text-left">
                          <div className="text-[12px] font-bold text-zinc-400 tracking-wider uppercase px-2 text-left">Pages</div>
                          
                          <div className="flex flex-col gap-1">
                            {["Contact us", "Career", "Privacy Policy", "Terms of Service"].map((page) => (
                              <Link key={page} href={page === "Contact us" ? "/contact" : "#"} className="group/page flex items-center justify-between px-2 py-2 text-[15px] font-medium text-black hover:bg-white/50 rounded-lg transition-all">
                                <span className="group-hover/page:translate-x-1 transition-transform">{page}</span>
                                <ArrowRight size={18} className="text-zinc-400 opacity-0 group-hover/page:opacity-100 -translate-x-2 group-hover/page:translate-x-0 transition-all" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link 
                href="/book" 
                className="group flex items-center bg-[#09090b] text-white pl-5 pr-1.5 py-1 rounded-full font-bold text-[13px] hover:bg-black transition-all"
              >
                <div className="flex items-center gap-3">
                  <span>Book a 30-Min call</span>
                  <div className="bg-white/10 h-[28px] w-[28px] rounded-full transition-all duration-300 flex items-center justify-center group-hover:w-[40px] group-hover:rounded-full overflow-hidden">
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle - MORPHING HAMBURGER */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="group relative flex flex-col items-center justify-center w-10 h-10 bg-black rounded-full text-white shadow-xl transition-all duration-300 active:scale-95 border border-white/10"
              >
                <div className="relative w-5 h-4 flex flex-col justify-between">
                  {/* Staggered Lines */}
                  <span 
                    className={`h-[1.5px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${
                      isMobileMenuOpen ? 'w-5 translate-y-[7.5px]' : 'w-5'
                    }`} 
                  />
                  <span 
                    className={`h-[1.5px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${
                      isMobileMenuOpen ? 'w-5 opacity-0 scale-x-0' : 'w-3 self-end'
                    }`} 
                  />
                  <span 
                    className={`h-[1.5px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${
                      isMobileMenuOpen ? 'w-5 -translate-y-[7.5px]' : 'w-5'
                    }`} 
                  />
                </div>
                
                {/* Subtle outer glow when active */}
                <div className={`absolute inset-0 rounded-full bg-white/20 blur-md transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
              </button>
            </div>
          </div>

          {/* Instant Mobile Content Display (Zero morphing) */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-5 overflow-hidden flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                <div 
                  key={link.name}
                  className="animate-slide-up-fade"
                  style={{ animationDelay: `${i * 90 + 50}ms`, animationFillMode: 'both' }}
                >
                  {link.hasDropdown ? (
                    <div className={`flex flex-col transition-colors duration-300 ${isCompanyOpen ? 'bg-zinc-100 rounded-[24px] pb-5' : ''}`}>
                      <div className={`flex items-center justify-between rounded-t-[24px] text-[16px] ${isCompanyOpen ? 'text-black px-4 pt-4 pb-1' : 'text-zinc-600 px-2 py-2'}`}>
                        <div className="flex items-center gap-3">
                          {Icon && <Icon size={20} className="text-zinc-400 stroke-[1.5]" />}
                          <Link href="#" className="flex-1 hover:text-black transition-colors">{link.name}</Link>
                        </div>
                        <button 
                          onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                          className="p-1.5 hover:bg-zinc-100 rounded-full transition-colors flex items-center justify-center -mr-1"
                        >
                          <ChevronDown size={18} className={`opacity-60 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      
                      {isCompanyOpen && (
                        <div className="mt-3 px-4 flex flex-col gap-6 animate-slide-up-fade" style={{ animationDelay: '50ms' }}>
                          {/* Company Sub-Group */}
                          <div className="flex flex-col gap-3">
                            <div className="text-[13px] font-medium text-zinc-400 px-1">Company</div>
                            <div className="flex flex-col gap-1.5">
                              <Link href="#" className="flex items-start gap-4 p-2 hover:bg-white rounded-xl transition-all group">
                                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-zinc-100/50 shrink-0 transition-all">
                                  <Folder size={18} className="text-zinc-400" />
                                </div>
                                <div className="flex flex-col pt-0.5">
                                  <span className="font-medium text-[15px] text-zinc-900 leading-none">Projects</span>
                                  <span className="text-[12px] text-zinc-500 mt-1 leading-snug">See our work that we've built.</span>
                                </div>
                              </Link>
                              
                              <Link href="#" className="flex items-start gap-4 p-2 hover:bg-white rounded-xl transition-all group">
                                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-zinc-100/50 shrink-0 transition-all">
                                  <Users size={18} className="text-zinc-400" />
                                </div>
                                <div className="flex flex-col pt-0.5">
                                  <span className="font-medium text-[15px] text-zinc-900 leading-none">About us</span>
                                  <span className="text-[12px] text-zinc-500 mt-1 leading-snug">About our amazing team.</span>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Pages Sub-Group */}
                          <div className="flex flex-col gap-2">
                            <div className="text-[13px] font-medium text-zinc-400 px-1">Pages</div>
                            <div className="flex flex-col gap-0.5">
                              <Link href="/contact" className="py-2 px-1 text-[15px] text-zinc-800 hover:text-black">Contact us</Link>
                              <Link href="#" className="py-2 px-1 text-[15px] text-zinc-800 hover:text-black">Career</Link>
                              <Link href="#" className="py-2 px-1 text-[15px] text-zinc-800 hover:text-black">Privacy Policy</Link>
                              <Link href="#" className="py-2 px-1 text-[15px] text-zinc-800 hover:text-black">Terms of Service</Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={link.href || "#"} 
                      className="flex items-center gap-3 px-2 py-2.5 hover:bg-zinc-50 rounded-lg text-black text-[16px] font-[550]"
                    >
                      {Icon && <Icon size={20} className="text-zinc-400 stroke-[1.5]" />}
                      {link.name}
                    </Link>
                  )}
                </div>
              );
              })}
              <div 
                className="animate-slide-up-fade"
                style={{ animationDelay: `${navLinks.length * 90 + 50}ms`, animationFillMode: 'both' }}
              >
                <div className="h-[1px] bg-zinc-100/50 my-1.5" />
                <Link 
                  href="/book" 
                  className="group flex items-center justify-between bg-[#09090b] text-white pl-5 pr-1 py-1 rounded-full font-medium text-[15px] hover:bg-black w-full leading-relaxed"
                >
                  <span>Book a 30-Min call</span>
                  <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 flex items-center justify-center">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
