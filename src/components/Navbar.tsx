"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X, Folder, Users, LayoutGrid } from "lucide-react";
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
    { name: "Company", hasDropdown: true, icon: LayoutGrid },
    { name: "Projects", icon: Folder },
    { name: "About us", icon: Users },
  ];

  return (
    <nav className={`fixed top-6 inset-x-0 z-50 ${scrolled ? 'top-4' : 'top-6'}`}>
      {/* Full Screen Blur Overlay (Activates heavily when mobile menu opens) */}
      <div 
        className={`fixed inset-0 -z-10 bg-black/10 backdrop-blur-[4px] transition-all duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className="max-w-[1200px] mx-auto px-4">
        {/* The main Navbar Pill that expands - NO ANIMATION AT ALL */}
        <div 

          className={`bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] ${
            isMobileMenuOpen 
              ? 'rounded-[24px] p-5' 
              : 'rounded-full md:rounded-[32px] px-3.5 md:px-6 py-2 md:py-2.5'
          }`}
        >
          {/* Header row (Logo + Toggle) */}
          <div className="flex items-center justify-between h-9 md:h-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/zerogrid-logo-bg-remove.png"
                alt="Zerogrid Logo"
                width={120}
                height={30}
                className="h-7 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/nav py-2">
                  <Link href="#" className="flex items-center gap-1 text-[15px] font-medium text-black hover:bg-zinc-100/80 px-3.5 py-2 rounded-full cursor-pointer transition-colors leading-none">
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} className="opacity-70 group-hover/nav:rotate-180 transition-transform" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="absolute top-full left-[-150px] pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200">
                      <div className="flex bg-white border border-zinc-100 rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.1)] overflow-hidden min-w-[580px]">
                        {/* Left Column: Company */}
                        <div className="flex-1 p-6 flex flex-col gap-6">
                          <div className="text-[12px] font-bold text-zinc-400 tracking-wider uppercase px-2">Company</div>
                          
                          <div className="flex flex-col gap-2">
                            <Link href="#" className="flex items-start gap-4 p-2 rounded-2xl hover:bg-zinc-50 transition-colors group/item">
                              <div className="w-11 h-11 rounded-full border border-zinc-100 flex items-center justify-center bg-white shadow-sm group-hover/item:border-zinc-200 transition-colors">
                                <Folder size={20} className="text-zinc-600" />
                              </div>
                              <div className="flex flex-col">
                                  <span className="text-[15px] font-semibold text-black">Projects</span>
                                <span className="text-[13px] text-zinc-500 mt-0.5">See our work that we've built.</span>
                              </div>
                            </Link>

                            <Link href="#" className="flex items-start gap-4 p-2 rounded-2xl hover:bg-zinc-50 transition-colors group/item">
                              <div className="w-11 h-11 rounded-full border border-zinc-100 flex items-center justify-center bg-white shadow-sm group-hover/item:border-zinc-200 transition-colors">
                                <Users size={20} className="text-zinc-600" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[15px] font-semibold text-black">About us</span>
                                <span className="text-[13px] text-zinc-500 mt-0.5">About our amazing team.</span>
                              </div>
                            </Link>
                          </div>

                          {/* Nested "Book A Call" style button */}
                          <div className="mt-2 px-2">
                            <Link href="#" className="group/btn flex items-center justify-between bg-[#09090b] text-white pl-6 pr-1.5 py-1.5 rounded-full font-semibold text-[15px] hover:bg-black transition-all w-full">
                              <span>Book A Call</span>
                              <div className="bg-white/10 p-2 rounded-full group-hover/btn:bg-white/20 transition-all flex items-center justify-center">
                                <ArrowRight size={16} />
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Right Column: Pages */}
                        <div className="w-[220px] bg-zinc-50/80 p-6 flex flex-col gap-6 border-l border-zinc-100">
                          <div className="text-[12px] font-bold text-zinc-400 tracking-wider uppercase px-2">Pages</div>
                          
                          <div className="flex flex-col gap-1">
                            <Link href="#" className="group/page flex items-center justify-between px-2 py-2 text-[15px] font-medium text-black hover:bg-white/50 rounded-lg transition-all">
                              <span className="group-hover/page:translate-x-1 transition-transform">Contact us</span>
                              <ArrowRight size={18} className="text-zinc-400 opacity-0 group-hover/page:opacity-100 -translate-x-2 group-hover/page:translate-x-0 transition-all" />
                            </Link>
                            <Link href="#" className="group/page flex items-center justify-between px-2 py-2 text-[15px] font-medium text-black hover:bg-white/50 rounded-lg transition-all">
                              <span className="group-hover/page:translate-x-1 transition-transform">Career</span>
                              <ArrowRight size={18} className="text-zinc-400 opacity-0 group-hover/page:opacity-100 -translate-x-2 group-hover/page:translate-x-0 transition-all" />
                            </Link>
                            <Link href="#" className="group/page flex items-center justify-between px-2 py-2 text-[15px] font-medium text-black hover:bg-white/50 rounded-lg transition-all">
                              <span className="group-hover/page:translate-x-1 transition-transform">Privacy Policy</span>
                              <ArrowRight size={18} className="text-zinc-400 opacity-0 group-hover/page:opacity-100 -translate-x-2 group-hover/page:translate-x-0 transition-all" />
                            </Link>
                            <Link href="#" className="group/page flex items-center justify-between px-2 py-2 text-[15px] font-medium text-black hover:bg-white/50 rounded-lg transition-all">
                              <span className="group-hover/page:translate-x-1 transition-transform">Terms of Service</span>
                              <ArrowRight size={18} className="text-zinc-400 opacity-0 group-hover/page:opacity-100 -translate-x-2 group-hover/page:translate-x-0 transition-all" />
                            </Link>
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
              <Link href="#" className="group flex items-center bg-[#09090b] text-white pl-5 pr-1.5 py-1 rounded-full font-medium text-[13px] hover:bg-black">
                <div className="flex items-center gap-2.5">
                  <span>Book a 30-Min call</span>
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
                className="bg-[#09090b] rounded-full text-white shadow-lg flex items-center justify-center w-[44px] h-[32px] overflow-hidden"
              >
                <img 
                  src="/hamburger.png" 
                  alt="Open Menu" 
                  className={`object-contain w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                />
                <img 
                  src="/hamburger-close.png" 
                  alt="Close Menu" 
                  className={`object-contain w-[18px] h-[18px] ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                  style={{ filter: 'invert(1) brightness(2)' }}
                />
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
                    <div className="flex flex-col">
                      <div className={`flex items-center justify-between px-2 py-2 rounded-lg text-[16px] ${isCompanyOpen ? 'text-black' : 'text-zinc-600'}`}>
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
                        <div className="mt-1 bg-zinc-100 rounded-xl p-4 flex flex-col gap-6 animate-slide-up-fade" style={{ animationDelay: '50ms' }}>
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
                              <Link href="#" className="py-2 px-1 text-[15px] text-zinc-800 hover:text-black">Contact us</Link>
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
                      href="#" 
                      className="flex items-center gap-3 px-2 py-2.5 hover:bg-zinc-50 rounded-lg text-black text-[16px]"
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
                <Link href="#" className="group flex items-center justify-between bg-[#09090b] text-white pl-5 pr-1 py-1 rounded-full font-medium text-[15px] hover:bg-black w-full leading-relaxed">
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
