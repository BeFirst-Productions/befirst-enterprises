import React, { useEffect, useRef } from 'react';
import Container from '../Layout/Container';
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
        <div className="sticky top-0 z-[60] bg-[#1E1E4B]/90 backdrop-blur-md py-6 mb-12 reveal reveal-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#DBBE77]">
            Our Business <br /> Domains & Services
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
                  <div className="absolute top-4 right-8 text-7xl lg:text-[8rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter">
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
                  <div className="absolute bottom-4 right-4 w-24 h-24 opacity-20 pointer-events-none">
                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6675 87.7196H35.3048L30.8446 79.963C28.1264 75.2358 23.0894 72.322 17.6367 72.322H0L4.45923 80.0775C7.17708 84.8051 12.2144 87.7196 17.6675 87.7196Z" fill="#DBBE77" />
                      <path d="M72.3223 17.6678V35.3048L80.0785 30.8445C84.8057 28.1263 87.7196 23.089 87.7196 17.6363V0L79.964 4.45886C75.2365 7.17707 72.3223 12.2148 72.3223 17.6678Z" fill="#DBBE77" />
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
