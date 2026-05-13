import React from 'react';
import Container from '../Layout/Container';
import ShinyText from './ShinyText';

import businessConsultingLogo from '../../assets/images/logos/business-consultancy.png';
import hrConsultingLogo from '../../assets/images/logos/hr-management.png';
import mediaProductionLogo from '../../assets/images/logos/enterprises.png';
import trainingLogo from '../../assets/images/logos/elearning-training.png';
import educationConsultingLogo from '../../assets/images/logos/educational-consultancy.png';
import eventManagementLogo from '../../assets/images/logos/event-management.png';
import toursTravelsLogo from '../../assets/images/logos/tours-travels.png';
import accountingAuditingLogo from '../../assets/images/logos/accounting-auditing.png';
import mediaProduction from '../../assets/images/logos/media-production.png';


const LogoSection = () => {
  const mainLogo = {
    id: 5,
    alt: 'Befirst Enterprises',
    src: mediaProductionLogo
  };

  const subLogos = [
    {
      id: 1,
      alt: 'Befirst Business Consultancy',
      src: businessConsultingLogo
    },
    {
      id: 2,
      alt: 'Befirst Accounting & Auditing',
      src: accountingAuditingLogo
    },
    {
      id: 3,
      alt: 'Befirst Event Management',
      src: eventManagementLogo
    },
    {
      id: 4,
      alt: 'Befirst E-Learning & Training',
      src: trainingLogo
    },
    {
      id: 6,
      alt: 'Befirst HR & Management Consultancy',
      src: hrConsultingLogo
    },
    {
      id: 7,
      alt: 'Befirst Educational Consultancy',
      src: educationConsultingLogo
    },
    {
      id: 8,
      alt: 'Befirst Tours & Travels',
      src: toursTravelsLogo
    },
    {
      id: 9,
      alt: 'Befirst Media Production',
      src: mediaProduction
    }
  ];


  return (
    <div className="bg-white py-12 md:py-24">
      <Container>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Main Parent Logo Section */}
          <div className="mb-20 text-center w-full flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center justify-center w-64 md:w-80 h-36 md:h-44 p-8 bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-500 hover:-translate-y-2">
                <img
                  src={mainLogo.src}
                  alt={mainLogo.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="mt-12 flex items-center gap-4 w-full justify-center">
              <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gray-300"></div>
              <h2 className="m-0">
                <ShinyText 
                  text="Our Brand Divisions" 
                  speed={4} 
                  className="text-gray-500 font-semibold tracking-[0.2em] uppercase text-xs" 
                  color="#6B7280" 
                  shineColor="#374151" 
                  direction="left"
                />
              </h2>
              <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>


          </div>

          {/* Sub-brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 w-full">
            {subLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center h-28 md:h-36 p-5 md:p-7 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-50 hover:-translate-y-1 hover:border-indigo-100 group"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </Container>
    </div>
  );
};

export default LogoSection;