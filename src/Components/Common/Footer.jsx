import React from 'react';
import Container from '../Layout/Container';

const Footer = () => {
  return (
    <footer className="relative w-full bg-white overflow-hidden pt-20">
      {/* Top Striped Border - Thicker and more prominent */}
      <div 
        className="w-full h-12 md:h-16 mb-8 md:mb-12" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(-45deg, #CDB373, #CDB373 10px, transparent 10px, transparent 20px)' 
        }}
      ></div>

      {/* Side Decorative Rectangles (Behind the card) */}
      {/* FIX: Increased width for 2xl and beyond to ensure connection to the card */}
      <div className="absolute left-0 top-[55%] -translate-y-1/2 w-16 md:w-32 lg:w-48 xl:w-64 2xl:w-[30%] h-20 md:h-28 z-0" 
           style={{ background: 'linear-gradient(90deg, #CDB373 0%, #775C28 100%)' }}></div>
      <div className="absolute right-0 top-[55%] -translate-y-1/2 w-16 md:w-32 lg:w-48 xl:w-64 2xl:w-[30%] h-20 md:h-28 z-0" 
           style={{ background: 'linear-gradient(270deg, #CDB373 0%, #775C28 100%)' }}></div>

      <Container className="relative z-10 px-4 mb-16">
        {/* Main Central Card */}
        <div className="bg-[#F8F9FA] border border-[#E5E5E5] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 relative overflow-hidden shadow-sm max-w-7xl mx-auto">
          
          {/* Vertical Decorative Lines & Rotating Stars (Matching HeroSection) */}
          <div className="absolute left-[15%] md:left-[10%] top-0 bottom-0 w-[1px] bg-[#E5E5E5] hidden sm:block">
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 animate-[spin_4s_linear_infinite]">
              <HeroStar idSuffix="footer-left" />
            </div>
          </div>
          <div className="absolute right-[15%] md:right-[10%] top-0 bottom-0 w-[1px] bg-[#E5E5E5] hidden sm:block">
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 animate-[spin_4s_linear_infinite]">
              <HeroStar idSuffix="footer-right" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#0d0d2a]">
            {/* Logo */}
            <div className="mb-8 md:mb-10">
              <img 
                src="/befirst.svg" 
                alt="beFirst Enterprises" 
                className="h-16 sm:h-20 md:h-32 w-auto object-contain" 
              />
            </div>

            {/* Contact Details */}
            <div className="flex flex-col items-start sm:items-center space-y-6 sm:space-y-5 text-sm md:text-base font-medium text-[#333] w-full sm:w-auto">
              
              {/* Row 1: Website & Email */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-12 w-full sm:w-auto">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <IconWrapper>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </IconWrapper>
                  <span className="tracking-wide break-all sm:break-normal">www.befirstenterprises.com</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <IconWrapper>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </IconWrapper>
                  <span className="tracking-wide break-all sm:break-normal">hello@befirstenterprises.com</span>
                </div>
              </div>

              {/* Row 2: Address */}
              <div className="flex items-start gap-3 w-full sm:w-auto max-w-md">
                <IconWrapper>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </IconWrapper>
                <div className="flex flex-col leading-tight text-left">
                  <span>Near Kannankandy e-store, Thondayad jn, Calicut, Kerala India</span>
                </div>
              </div>

              {/* Row 3: Phone */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <IconWrapper>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </IconWrapper>
                <span className="font-semibold">+91 80867 36161</span>
              </div>

            </div>
          </div>
        </div>
      </Container>
      
      {/* Copyright Bar */}
      <div className="w-full  py-6">
        <Container>
          <div className="flex flex-col items-center justify-center text-center gap-2 text-[#1E1E4B] text-xs md:text-sm tracking-widest uppercase">
            <p>© {new Date().getFullYear()} Befirst Enterprises. All rights reserved.</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

// Helper Components
const IconWrapper = ({ children }) => (
  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0d0d2a] text-white shrink-0">
    {children}
  </div>
);

// Rotating Star component (Matching HeroSection design)
const HeroStar = ({ idSuffix = 'footer-star' }) => (
  <svg width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter={`url(#filter_${idSuffix})`}>
      <path d="M25 1L26.8668 23.1332L49 25L26.8668 26.8668L25 49L23.1332 26.8668L1 25L23.1332 23.1332L25 1Z" fill="#7970FF" />
    </g>
    <defs>
      <filter id={`filter_${idSuffix}`} x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
);

export default Footer;
