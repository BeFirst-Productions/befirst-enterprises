import React, { useState } from 'react';
import Container from '../Layout/Container';

// Link data — hrefs match the id="" on each section in App.jsx
const navLinks = [
  { name: 'Home',         href: '#home' },
  { name: 'About',        href: '#about' },
  { name: 'Our Values',   href: '#values' },
  { name: 'Co-Founder',   href: '#founder' },
  { name: 'Services',     href: '#services' },
  { name: 'Why Us',       href: '#why-us' },
  { name: 'Contact',      href: '#contact' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    // Small delay so menu closes before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <header className="w-full bg-white relative z-50">
        <Container className="relative">
          {/* Vertical Decorative Lines */}
          <div className="absolute top-0 left-[20%] xl:left-[22%] w-[1px] h-full bg-slate-200 z-0 hidden md:block" />
          <div className="absolute top-0 right-[20%] xl:right-[22%] w-[1px] h-full bg-slate-200 z-0 hidden md:block" />

          <div className="flex items-center justify-between w-full py-4 lg:py-5 relative z-10">

            {/* Logo */}
            <div className="flex justify-start shrink-0">
              <img
                src="/befirst.svg"
                alt="beFirst Enterprises"
                className="h-12 md:h-16 xl:h-20 2xl:h-28 w-auto object-contain min-w-0"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#0d0d2a] rounded-full px-6 lg:px-8 xl:px-12 py-3 sm:py-4 items-center space-x-6 lg:space-x-8 xl:space-x-12 z-20">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-sm xl:text-base font-medium transition-colors whitespace-nowrap text-white/80 hover:text-white hover:border-b-2 hover:border-[#c49c5e] pb-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Hamburger button */}
            <div className="flex justify-end lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#0d0d2a] focus:outline-none p-2 z-[100]"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </Container>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#0d0d2a] flex flex-col lg:hidden">
          {/* Header row inside overlay: logo + close button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <img src="/Befirst-menu.svg" alt="beFirst Enterprises" className="h-16 w-auto object-contain" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2"
              aria-label="Close Menu"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links — left aligned */}
          <nav className="flex flex-col items-start w-full px-8 pt-10 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-2xl font-semibold text-white/80 hover:text-[#c49c5e] transition-colors w-full text-left py-3 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;