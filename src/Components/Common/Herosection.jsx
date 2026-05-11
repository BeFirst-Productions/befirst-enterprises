import React from 'react';
import Container from '../Layout/Container';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Subtle Gradient/Glow */}
      <Container className="relative">
        {/* Vertical Decorative Lines */}
        <div className="absolute top-0 left-[20%] xl:left-[22%] w-[1px] h-full bg-slate-200 z-0 hidden md:block" />
        <div className="absolute top-0 right-[20%] xl:right-[22%] w-[1px] h-full bg-slate-200 z-0 hidden md:block" />

        {/* Rotating Stars on Lines */}
        <div className="absolute top-[28%] left-[20%] xl:left-[22%] -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block animate-[spin_4s_linear_infinite]">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_164_224)">
              <path d="M25 1L26.8668 23.1332L49 25L26.8668 26.8668L25 49L23.1332 26.8668L1 25L23.1332 23.1332L25 1Z" fill="#7970FF" />
            </g>
            <defs>
              <filter id="filter0_f_164_224" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_164_224" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="absolute top-[28%] right-[20%] xl:right-[22%] translate-x-1/2 -translate-y-1/2 z-20 hidden md:block animate-[spin_4s_linear_infinite]">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_164_224_right)">
              <path d="M25 1L26.8668 23.1332L49 25L26.8668 26.8668L25 49L23.1332 26.8668L1 25L23.1332 23.1332L25 1Z" fill="#7970FF" />
            </g>
            <defs>
              <filter id="filter0_f_164_224_right" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_164_224" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-100/50 to-transparent -z-10 blur-3xl" />

        {/* Main Content Container */}
        <div className=" flex flex-col items-center text-center py-20 relative z-10">

          {/* Typography Section */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 flex flex-wrap justify-center gap-x-3">
              {"Empowering Businesses with Smart Consulting & Strategic Solutions".split(" ").map((word, index) => (
                <span 
                  key={index} 
                  className="animate-reveal-up inline-block" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-black text-md md:text-lg leading-relaxed max-w-2xl mx-auto animate-reveal-up" style={{ animationDelay: '0.8s' }}>
             We are Your Trusted Strategic Business Consultancy Specializing in Hr, Media Production, Education Consultancy, Events & Tourism.
            </p>
          </div>

          {/* Staggered Card Layout */}
          <div className="relative z-10 flex flex-wrap lg:flex-nowrap items-end justify-center gap-4 lg:gap-12 xl:gap-12 w-full">

            {/* Image Card 1 - High Stagger */}
            <div 
              className="w-64 h-80 rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-y-75 cursor-pointer ease-out origin-bottom animate-release opacity-0"
              style={{ animationDelay: '0.1s' }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400"
                alt="Team collaboration"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Stats Card - Black */}
            <div 
              className="hidden md:flex w-48 h-64 bg-black rounded-3xl p-8 flex-col justify-center items-center text-white shadow-xl transition-all duration-500 hover:scale-y-75 cursor-pointer ease-out origin-bottom animate-release opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-5xl font-bold mb-2">99+</span>
              <p className="text-xs uppercase tracking-widest text-center opacity-80">
                Our Esteemed Clients & Partners
              </p>
            </div>

            {/* Trusted Card */}
            <div 
              className="hidden md:flex w-44 h-64 bg-gradient-to-br from-[#0d0d2a] to-[#25254d] rounded-3xl p-7 flex-col justify-center gap-3 shadow-lg transform transition-all duration-500 hover:scale-y-75 cursor-pointer ease-out origin-bottom animate-release opacity-0"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="text-lg font-bold text-white">Trusted Enterprises</span>
              <p className="text-[10px] text-white/60 leading-relaxed uppercase tracking-wider">
                Reliable consulting and management services tailored for business growth.
              </p>
            </div>

            {/* Business Growth Card */}
            <div 
              className="hidden lg:flex w-52 h-72 bg-gray-50 rounded-3xl p-7 flex-col justify-between shadow-md transition-all duration-500 hover:scale-y-75 cursor-pointer ease-out origin-bottom border border-slate-100 animate-release opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <div>
                <span className="text-sm font-bold text-slate-900 block mb-1">Business Growth</span>
                <p className="text-[10px] text-slate-500 leading-tight">
                  Driving performance, expansion, and long-term corporate success.
                </p>
              </div>
              <div className="flex items-end gap-2 h-20 mt-4">
                <div className="w-full h-full bg-slate-900 rounded-t-lg" />
                <div className="w-full h-4/5 bg-indigo-500 rounded-t-lg" />
                <div className="w-full h-1/2 bg-slate-900 rounded-t-lg" />
                <div className="w-full h-full bg-indigo-400 rounded-t-lg" />
              </div>
            </div>

            {/* Image Card 2 - Low Stagger */}
            <div 
              className="hidden lg:block w-64 h-80 rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-y-75 cursor-pointer ease-out origin-bottom animate-release opacity-0"
              style={{ animationDelay: '0.5s' }}
            >
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400"
                alt="Professional at work"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </Container>

      {/* Bottom Decorative Wave - Full Width Fix */}
      <div className="z-0 absolute bottom-10 md:bottom-5 left-0 w-full overflow-visible leading-[0] pointer-events-none translate-y-[1px]">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1505 205"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[200px] md:h-[250px] overflow-visible"
        >
          <g filter="url(#filter0_f_244_1138)">
            <path d="M636.738 153C402.743 138 150.492 92 0 20V185H1505V164C1330.89 164.008 808.83 164.032 636.738 153Z" fill="#6464A4" />
          </g>
          <defs>
            <filter id="filter0_f_244_1138" x="0" y="0" width="1505" height="205" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_244_1138" />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;