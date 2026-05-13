import React from 'react';
import Container from '../Layout/Container';
import ShinyText from './ShinyText';

import co_founder from '../../assets/images/founder/Anas.jpg';

const FounderMessage = () => {
  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left Column: Title & Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-10">
            <div className="text-center lg:text-left">

              <h2 className="flex flex-col m-0">
                <ShinyText 
                  text="Message from the" 
                  speed={4} 
                  startDelay={0}
                  delay={3}
                  className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight" 
                  color="#1E1E4F" 
                  shineColor="#7970FF" 
                  direction="left"
                  spread={90}
                />
                <ShinyText 
                  text="Co-Founder" 
                  speed={4} 
                  startDelay={3}
                  delay={0}
                  className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight" 
                  color="#1E1E4F" 
                  shineColor="#7970FF" 
                  direction="left"
                  spread={90}
                />
              </h2>

            </div>


            <div className="flex flex-col items-center lg:items-start space-y-6 w-full">

              {/* Portrait with Offset Background */}
              <div className="relative w-full max-w-[320px]">
                {/* Offset Box */}
                <div className="absolute -top-3 -right-3 w-full h-full bg-[#1E1E4F] rounded-[2rem] z-0"></div>

                {/* Image */}
                <div className="relative z-10 w-full aspect-[4/4.5] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src={co_founder}
                    alt="Mohammed Anas"
                    className="w-full h-full object-cover grayscale brightness-95"
                  />
                </div>
              </div>

              {/* Signature (Below Image) */}
              <div className="text-center lg:text-left pt-2">

                <h4 className="text-xl md:text-2xl font-bold text-[#1E1E4F]">Mohammed Anas</h4>
                <p className="text-[#DBBE77] font-semibold text-base md:text-lg">Co-Founder & MD</p>
                <p className=" font-medium">Befirst Enterprises Private Limited</p>
              </div>
            </div>
          </div>

          {/* Right Column: Message Content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start pt-12 lg:pt-0">
            {/* Quote Icon */}
            <div className="mb-6 text-center lg:text-left">

              <svg width="61" height="64" viewBox="0 0 61 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7637 35.6759C14.0241 28.6537 15.2981 23.1346 17.5813 19.1185C19.8686 15.1023 23.3428 12.1615 28 10.3041L22.4411 1.26562C14.5579 4.72777 8.75495 9.87638 5.02839 16.711C2.34419 21.6925 1 29.8388 1 41.1499V62.2656H25.8823V35.6759H13.7637Z" stroke="#D0BC6F" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M44.7637 35.6759C45.0241 28.6537 46.2982 23.1346 48.5813 19.1185C50.8686 15.1023 54.3428 12.1615 59 10.3041L53.4411 1.26562C45.5579 4.72777 39.7549 9.87638 36.0284 16.711C33.3442 21.6925 32 29.8388 32 41.1499V62.2656H56.8823V35.6759H44.7637Z" stroke="#D0BC6F" strokeWidth="2" strokeMiterlimit="10" />
              </svg>
            </div>

            <div className="space-y-6  text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-bold text-[#1E1E4F]">Befirst Enterprises</span> was founded with a simple yet powerful vision—to help businesses move forward with clarity, confidence, and competence. In today's fast-changing world, businesses need more than individual services; they need an ecosystem that understands their challenges and supports their ambitions.
              </p>
              <p>
                At Befirst, we bring together expertise across consultancy, media, training, education, finance, and experiential services to create meaningful impact. Our focus has always been on building long-term relationships, delivering value beyond transactions, and contributing to the growth of businesses across India and the GCC.
              </p>
              <p className="font-medium ">
                We believe in being partners in progress, not just service providers.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderMessage;
