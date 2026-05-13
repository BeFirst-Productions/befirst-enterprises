import React, { useEffect, useRef } from 'react';
import Container from '../Layout/Container';
import ShinyText from './ShinyText';

import bussiness_consultancy from "../../assets/images/services/Business_consultancy.jpeg"
import hr_consultancy from "../../assets/images/services/HR_Management_ Consulting.jpeg"
import Media_Production from "../../assets/images/services/Media_Production.jpeg"
import training from "../../assets/images/services/training.jpeg"
import education from "../../assets/images/services/Education_Consultancy.jpeg"
import Event_Management from "../../assets/images/services/Event_Management.jpeg"
import Tours_Travels from "../../assets/images/services/Tours_Travels.jpeg"
import Accounting_Auditing from "../../assets/images/services/Accounting_Auditing.jpeg"

const services = [
  {
    id: "01",
    title: "Befirst Business Consultancy ",
    description: "We provide strategic and operational consulting services to startups, SMEs, and corporates.",
    points: [
      "Business setup & structuring",
      "Market entry strategy (India & GCC)",
      "Business planning & feasibility studies",
      "Growth, expansion & restructuring advisory",
      "Compliance & regulatory guidance",
      "Process optimization & operational strategy"
    ],
    image: bussiness_consultancy
  },
  {
    id: "02",
    title: "Befirst HR & Management Consulting",
    description: "Focused on building strong organizations through people and systems.",
    points: [
      "HR policy design & implementation",
      "Talent acquisition & workforce planning",
      "Organizational development",
      "Performance management systems",
      "Leadership & management consulting"
    ],
    image: hr_consultancy

  },
  {
    id: "03",
    title: "Media & Digital Marketing",
    description: "Comprehensive media solutions to build and scale your brand identity.",
    points: [
      "Brand strategy & identity design",
      "Social media management",
      "Content creation & video production",
      "Digital advertising (PPC/SEO)",
      "Public relations & communication"
    ],
    image: Media_Production
  },
  {
    id: "04",
    title: "Beﬁrst Training",
    description: "Empowering workforces with industry-relevant skills and certifications.",
    points: [
      "Corporate training programs",
      "Vocational skill development",
      "Leadership workshops",
      "Soft skills & communication",
      "Technical certifications"
    ],
    image: training
  },
  {
    id: "05",
    title: "Beﬁrst Education Consultancy",
    description: "Guiding students and institutions towards excellence in higher education.",
    points: [
      "Study abroad consultancy",
      "Institutional tie-ups & partnerships",
      "Career counseling & coaching",
      "Curriculum development advisory",
      "Skill-based education models"
    ],
    image: education
  },
  {
    id: "06",
    title: "Beﬁrst Event Management ",
    description: "Expert financial planning and investment strategies for sustainable growth.",
    points: [
      "Project financing & capital raising",
      "Investment portfolio management",
      "Financial risk assessment",
      "Taxation & auditing services",
      "Mergers & Acquisitions advisory"
    ],
    image: Event_Management
  },
  {
    id: "07",
    title: "Beﬁrst Tours & Travels",
    description: "Creating memorable brand experiences through high-impact events.",
    points: [
      "Corporate event management",
      "Brand launches & activations",
      "Exhibitions & trade shows",
      "Experiential marketing campaigns",
      "Conferences & seminars"
    ],
    image: Tours_Travels
  },
  {
    id: "08",
    title: "Beﬁrst Accounting & Auditing",
    description: "Digital transformation services to future-proof your business operations.",
    points: [
      "Custom software development",
      "Cloud infrastructure solutions",
      "Cybersecurity & data protection",
      "ERP & CRM implementation",
      "AI & Data analytics advisory"
    ],
    image: Accounting_Auditing
  }
];

const ServicesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cardWrappers = containerRef.current.querySelectorAll('.service-card-wrapper');
      const stickyTop = 180; // Should match the 'top' style in JSX

      cardWrappers.forEach((wrapper, index) => {
        const card = wrapper.querySelector('.service-card-inner');
        if (!card) return;

        const rect = wrapper.getBoundingClientRect();
        const nextWrapper = cardWrappers[index + 1];
        
        if (nextWrapper) {
          const nextRect = nextWrapper.getBoundingClientRect();
          // How much the next card has overlapped this one
          // When nextRect.top is at rect.bottom, overlap is 0
          // When nextRect.top is at stickyTop, overlap is full height
          const overlapStart = rect.bottom;
          const overlapEnd = stickyTop;
          
          const progress = Math.max(0, Math.min(1, (overlapStart - nextRect.top) / (overlapStart - overlapEnd)));
          
          // Apply zoom-out (scale) and darkening as it gets covered
          const scale = 1 - (progress * 0.1); // Scale down to 0.9
          const opacity = 1 - (progress * 0.4); // Fade slightly
          const brightness = 1 - (progress * 0.3); // Darken

          card.style.transform = `scale(${scale})`;
          card.style.opacity = `${opacity}`;
          card.style.filter = `brightness(${brightness})`;
        } else {
          // Last card stays at full size
          card.style.transform = 'scale(1)';
          card.style.opacity = '1';
          card.style.filter = 'brightness(1)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set positions
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#1E1E4B] pt-10 md:pt-20 pb-20 relative" ref={containerRef}>
      <Container>
        <div className="sticky top-0 z-[60] bg-[#1E1E4B]/90 backdrop-blur-md py-6 mb-12">
          <h2 className="flex flex-col m-0">
            <ShinyText 
              text="Our Business" 
              speed={4} 
              startDelay={0}
              delay={3}
              className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold" 
              color="#DBBE77" 
              shineColor="#FFF3D6" 
              direction="left"
              spread={90}
            />
            <ShinyText 
              text="Domains & Services" 
              speed={4} 
              startDelay={3}
              delay={0}
              className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold" 
              color="#DBBE77" 
              shineColor="#FFF3D6" 
              direction="left"
              spread={90}
            />
          </h2>
        </div>




        <div className="flex flex-col pb-[30vh]">
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                position: 'sticky',
                top: `180px`,
                zIndex: index + 1,
              }}
              className="mb-16 service-card-wrapper reveal reveal-fade-up"
            >
              <div
                className="service-card-inner flex flex-col md:flex-row rounded-[2rem] overflow-hidden bg-[#5151A7] border border-[#DBBE77]/30 shadow-2xl transition-all duration-300 ease-out min-h-[350px] 2xl:max-w-[1300px] 2xl:mx-auto w-full relative origin-top"
              >
                {/* Card Image */}
                <div className="relative w-full md:w-[42%] min-h-[250px] md:min-h-full overflow-hidden">
                  {/* Golden Corner Decoration */}
                  <div className="absolute top-0 left-0 z-10 opacity-90">
                    <svg width="172" height="129" viewBox="0 0 172 129" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-auto md:w-32 lg:w-40">
                      <path d="M25.2351 0.216391H172C73.1973 6.52775 7.57431 104.586 0.186417 129L0.186396 17.6409C-1.87199 0.16327 13.5474 -0.620594 25.2351 0.216391Z" fill="#DBBE77" />
                    </svg>
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>

                {/* Card Content */}
                <div className="relative w-full md:w-[58%] p-6 lg:p-10 flex flex-col justify-center">
                  {/* Large Background Number */}
                  <div className="absolute top-4 right-4 text-7xl lg:text-[6rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter">
                    {service.id}
                  </div>

                  {/* Content Header */}
                  <div className="relative z-10">
                    <h3 className="text-xl lg:text-[1.75rem] font-bold text-[#DBBE77] mb-4 pr-16 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white text-sm lg:text-lg font-light leading-relaxed mb-6 pr-10 opacity-90">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <p className="text-[#DBBE77] font-bold text-sm lg:text-base tracking-widest uppercase">
                        Core Expertise:
                      </p>
                      <ul className="grid grid-cols-1 gap-y-3">
                        {service.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-4 text-white/90 text-sm lg:text-base leading-snug">
                            <span className="mt-1 flex-shrink-0 text-[#DBBE77]">
                              <svg width="18" height="15" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 4.60345V1H1V12H9" stroke="currentColor" strokeWidth="2" />
                                <line x1="5.399" y1="5.85052" x2="7.42506" y2="8.53326" stroke="currentColor" />
                                <line x1="14.38" y1="3.38487" x2="7.34473" y2="9.21917" stroke="currentColor" />
                              </svg>
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Decorative Pattern (Bottom Right) */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-90 pointer-events-none">

                    <svg width="100%" height="100%" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">

                      <g opacity="0.639999">
                        <g opacity="0.6">
                          <path d="M17.6675 87.7196H35.3048L30.8446 79.963C28.1264 75.2358 23.0894 72.322 17.6367 72.322H0L4.45923 80.0775C7.17708 84.8051 12.2144 87.7196 17.6675 87.7196Z" fill="url(#paint0_linear_164_95)" />
                          <path d="M19.4671 63.2735L35.7619 70.0231L34.6096 61.15C33.9071 55.7426 30.3687 51.1229 25.3307 49.0363L9.03662 42.287L10.1886 51.1587C10.8907 56.5664 14.4295 61.1869 19.4671 63.2735Z" fill="url(#paint1_linear_164_95)" />
                          <path d="M42.9573 53.8456L45.2881 45.2072C46.7087 39.9423 45.2072 34.3201 41.3516 30.4645L28.8806 17.9935L26.5495 26.6309C25.1288 31.8958 26.6299 37.5183 30.4859 41.3742L42.9573 53.8456Z" fill="url(#paint2_linear_164_95)" />
                          <path d="M55.7954 41.654L61.2545 34.5651C64.5813 30.2448 65.3458 24.476 63.2592 19.4383L56.5099 3.14425L51.0512 10.232C47.7237 14.5523 46.9588 20.3212 49.0457 25.3596L55.7954 41.654Z" fill="url(#paint3_linear_164_95)" />
                          <path d="M72.3223 17.6678V35.3048L80.0785 30.8445C84.8057 28.1263 87.7196 23.089 87.7196 17.6363V0L79.964 4.45886C75.2365 7.17707 72.3223 12.2148 72.3223 17.6678Z" fill="url(#paint4_linear_164_95)" />
                        </g>
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_164_95" x1="-0.00015241" y1="80.0207" x2="35.3049" y2="80.0207" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F4D976" />
                          <stop offset="1" stopColor="#62481A" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_164_95" x1="9.03679" y1="56.155" x2="35.7618" y2="56.155" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F4D976" />
                          <stop offset="1" stopColor="#62481A" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_164_95" x1="26.023" y1="35.9196" x2="45.8145" y2="35.9196" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F4D976" />
                          <stop offset="1" stopColor="#62481A" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_164_95" x1="47.8858" y1="22.3991" x2="64.4192" y2="22.3991" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F4D976" />
                          <stop offset="1" stopColor="#62481A" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_164_95" x1="72.3222" y1="17.6523" x2="87.7197" y2="17.6523" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F4D976" />
                          <stop offset="1" stopColor="#62481A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
