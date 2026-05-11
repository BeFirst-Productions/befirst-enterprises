import React from 'react';
import Container from '../Layout/Container';
import businessConsultingLogo from '../../assets/images/logos/business-consultancy.png';
import hrConsultingLogo from '../../assets/images/logos/hr-management.png';
import mediaProductionLogo from '../../assets/images/logos/enterprises.png';
import trainingLogo from '../../assets/images/logos/elearning-training.png';
import educationConsultingLogo from '../../assets/images/logos/educational-consultancy.png';
import eventManagementLogo from '../../assets/images/logos/event-management.png';
import toursTravelsLogo from '../../assets/images/logos/tours-travels.png';
import accountingAuditingLogo from '../../assets/images/logos/accounting-auditing.png';


const LogoSection = () => {
  // Update the 'src' paths here with the actual locations of your saved images
  const logos = [
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
      id: 5, 
      alt: 'Befirst Media Production', 
      src: mediaProductionLogo 
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
    }
  ];

  return (
    <div className="bg-white py-12 md:py-24">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Grid: 2 columns on mobile, 4 columns on md screens and up */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {logos.map((logo) => (
              <div 
                key={logo.id} 
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition-shadow duration-300 border border-gray-50"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  // Adjust max-w to fit your exact image dimensions
                  className="w-full max-w-[180px] h-auto object-contain" 
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