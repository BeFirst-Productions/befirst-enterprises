import shape01 from '../../assets/images/shapes/shape-01.png';
import Container from '../Layout/Container';

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 md:py-20 no-scrollbar">

      {/* Background Shape - positioned relative to section, outside container */}
      <div className="absolute -left-20 md:top-20 top-30 z-0 h-full w-full max-w-[250px] opacity-70 md:opacity-90 pointer-events-none">
        <img
          src={shape01}
          alt="Background Shape"
          className="h-full w-full object-contain object-left-top"
        />
      </div>

      <Container>
        <div className="w-full">
          {/* Main Content Grid */}
          <div className="relative z-10 grid w-full gap-8 md:gap-x-12 md:grid-cols-12 items-start reveal reveal-fade-up">
            {/* Section Heading */}
            <div className="col-span-12 md:col-span-3">
              <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-[#1E1E4F] lg:text-5xl">
                About Us
              </h1>
            </div>

            {/* Description Text */}
            <div className="col-span-12 space-y-6 text-[#333333] md:col-span-9 md:pr-12 lg:text-[1.1rem] leading-relaxed break-words min-w-0">
              <p>
                Befirst Enterprises Private Limited is a multi-domain business solutions company
                headquartered in Calicut (Kozhikode), India, with a strategic vision to serve
                businesses across India and the GCC countries.
              </p>
              <p>
                Founded with the objective of creating a complete business ecosystem, Befirst
                Enterprises brings together consulting, advisory, creative, operational,
                educational, and experiential services under one integrated corporate umbrella.
                Our approach is built on the belief that modern businesses require end-to-end
                solutions, not fragmented services.
              </p>
              <p>
                By combining deep market knowledge, professional expertise, and global exposure,
                Befirst Enterprises supports startups, SMEs, corporates, institutions, and
                entrepreneurs at every stage of their business journey—from ideation and
                setup to growth, branding, compliance, talent management, and expansion.
              </p>
            </div>
          </div>

          {/* 2. MISSION & VISION BOXES */}
          <div className="max-w-7xl mx-auto relative z-10 mt-20 flex flex-col items-stretch justify-center gap-8 md:flex-row">

            {/* Mission Box */}
            <div className="relative flex-1 overflow-hidden rounded-[2rem] border-2 border-[#D1B478] bg-[#2B2B6B] p-10 shadow-xl h-full min-h-[250px] reveal reveal-fade-in" style={{ transitionDelay: '0.2s' }}>
              {/* Gold Accent SVG Shape */}
              <div className="absolute left-0 top-0">
                <svg width="149" height="106" viewBox="0 0 149 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8491 0.0993496H149C63.4016 5.28927 6.54854 85.9241 0.147982 106V20.0663C-1.63532 5.69423 13.1177 -0.904424 21.8491 0.0993496Z" fill="#DBBE77" />
                </svg>
              </div>

              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <h2 className="mb-6 text-4xl font-bold text-[#D1B478]">
                  Mission
                </h2>
                <p className="max-w-md text-base leading-relaxed text-white">
                  To build a trusted ecosystem of professional products and services that
                  empower businesses to start, scale, and succeed sustainably across India
                  and GCC markets.
                </p>
              </div>
            </div>

            {/* Vision Box */}
            <div className="relative flex-1 overflow-hidden rounded-[2rem] border-2 border-[#D1B478] bg-[#2B2B6B] p-10 shadow-xl h-full min-h-[250px] reveal reveal-fade-in" style={{ transitionDelay: '0.4s' }}>
              {/* Gold Accent SVG Shape */}
              <div className="absolute left-0 top-0">
                <svg width="149" height="106" viewBox="0 0 149 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8491 0.0993496H149C63.4016 5.28927 6.54854 85.9241 0.147982 106V20.0663C-1.63532 5.69423 13.1177 -0.904424 21.8491 0.0993496Z" fill="#DBBE77" />
                </svg>
              </div>

              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <h2 className="mb-6 text-4xl font-bold text-[#D1B478]">
                  Vision
                </h2>
                <p className="max-w-md text-base leading-relaxed text-white">
                  To become a leading multi-vertical enterprise group, recognized for
                  delivering integrated, ethical, and future-ready business solutions
                  that create long-term value for businesses and society.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;