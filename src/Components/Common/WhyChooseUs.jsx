import React from 'react';
import Container from '../Layout/Container';

const WhyChooseUs = () => {
  const cards = [
    {
      title: 'Data-Driven Strategy',
      description: 'Transform insights into action',
      position: 'col-span-1 md:col-start-2 md:col-end-4'
    },
    {
      title: 'Innovative Technology Solutions',
      description: 'Future-proof your business model',
      position: 'col-span-1 md:col-start-4 md:col-end-6'
    },
    {
      title: 'Personalized Client Care',
      description: 'Tailored support for unique goals',
      position: 'col-span-1 md:col-start-1 md:col-end-3'
    },
    {
      title: 'Agile & Flexible Delivery',
      description: 'Adapting swiftly to market changes',
      position: 'col-span-1 md:col-start-3 md:col-end-5'
    },
    {
      title: 'Measurable ROI & Performance',
      description: 'Trackable growth and value',
      position: 'col-span-1 md:col-start-5 md:col-end-7'
    },
    {
      title: 'Cross-Functional Expertise',
      description: 'Unified multi-disciplinary teams',
      position: 'col-span-1 md:col-start-2 md:col-end-4'
    },
    {
      title: 'Integrity & Trust-Based Partnerships',
      description: 'Clear processes and ethical standards',
      position: 'col-span-1 md:col-start-4 md:col-end-6'
    }
  ];

  return (
    <div className="relative bg-white py-10 md:py-20 font-sans overflow-hidden">
      <Container>
        {/* Background Floral Graphic */}
        <div className="absolute inset-0 hidden md:flex items-end justify-center pb-8 opacity-50 pointer-events-none">
          {/* Changed sizing from 'max-w-4xl w-full h-full' to 'w-full max-w-lg md:max-w-2xl' */}
          <svg className="w-full max-w-md md:max-w-xl" viewBox="0 0 439 439" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <mask id="mask0_164_7" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="439" height="439">
                <path d="M0 0.00012207H438.041V438.042H0V0.00012207Z" fill="white" />
              </mask>
              <g mask="url(#mask0_164_7)">
                <g opacity="0.639999">
                  <path d="M197.949 389.77V438.042L219.176 425.836C232.116 418.397 240.092 404.61 240.092 389.684V341.41L218.863 353.618C205.924 361.058 197.949 374.845 197.949 389.77Z" fill="url(#paint0_linear_164_7)" />
                  <path d="M134.215 368.716L115.742 413.315L140.024 410.162C154.826 408.241 167.472 398.555 173.183 384.765L191.657 340.167L167.371 343.321C152.571 345.243 139.926 354.928 134.215 368.716Z" fill="url(#paint1_linear_164_7)" />
                  <path d="M123.734 314.09C109.324 310.202 93.9361 314.311 83.3831 324.865L49.2493 358.999L72.8903 365.378C87.2995 369.267 102.69 365.159 113.244 354.604L147.378 320.47L123.734 314.09Z" fill="url(#paint2_linear_164_7)" />
                  <path d="M69.4095 303.807L114.009 285.334L94.6056 270.392C82.7817 261.286 66.9919 259.192 53.2035 264.904L8.60596 283.377L28.0055 298.318C39.8304 307.426 55.6211 309.519 69.4095 303.807Z" fill="url(#paint3_linear_164_7)" />
                  <path d="M48.3568 240.093H96.6312L84.4232 218.863C76.9833 205.924 63.1968 197.949 48.2724 197.949H0L12.2051 219.176C19.644 232.116 33.4315 240.093 48.3568 240.093Z" fill="url(#paint4_linear_164_7)" />
                  <path d="M53.2822 173.183L97.8818 191.657L94.7279 167.371C92.8051 152.571 83.1204 139.926 69.331 134.215L24.7334 115.742L27.8863 140.024C29.8081 154.825 39.4939 167.472 53.2822 173.183Z" fill="url(#paint5_linear_164_7)" />
                  <path d="M117.576 147.378L123.956 123.735C127.844 109.324 123.734 93.9362 113.181 83.3832L79.0476 49.2493L72.6671 72.8903C68.7789 87.3006 72.8873 102.69 83.4413 113.244L117.576 147.378Z" fill="url(#paint6_linear_164_7)" />
                  <path d="M152.715 114.009L167.657 94.6068C176.762 82.7819 178.855 66.9922 173.144 53.2038L154.671 8.60622L139.73 28.0058C130.622 39.8307 128.529 55.6204 134.241 69.4107L152.715 114.009Z" fill="url(#paint7_linear_164_7)" />
                  <path d="M197.949 48.358V96.6313L219.178 84.4233C232.117 76.9834 240.092 63.196 240.092 48.2716V0.000190735L218.865 12.2043C205.925 19.6442 197.949 33.4326 197.949 48.358Z" fill="url(#paint8_linear_164_7)" />
                  <path d="M303.829 69.3311L322.303 24.7345L298.019 27.8864C283.218 29.8082 270.573 39.493 264.861 53.2823L246.386 97.8818L270.673 94.728C285.473 92.8052 298.118 83.1204 303.829 69.3311Z" fill="url(#paint9_linear_164_7)" />
                  <path d="M314.307 123.956C328.717 127.844 344.105 123.735 354.658 113.182L388.792 79.0487L365.152 72.6682C350.742 68.779 335.352 72.8875 324.798 83.4415L290.663 117.576L314.307 123.956Z" fill="url(#paint10_linear_164_7)" />
                  <path d="M368.634 134.241L324.034 152.714L343.438 167.657C355.263 176.764 371.051 178.855 384.841 173.144L429.438 154.671L410.039 139.73C398.213 130.622 382.423 128.529 368.634 134.241Z" fill="url(#paint11_linear_164_7)" />
                  <path d="M389.685 197.949H341.41L353.618 219.179C361.058 232.117 374.845 240.093 389.769 240.093H438.041L425.836 218.865C418.397 205.925 404.61 197.949 389.685 197.949Z" fill="url(#paint12_linear_164_7)" />
                  <path d="M384.766 264.861L340.166 246.388L343.32 270.673C345.243 285.474 354.928 298.119 368.717 303.83L413.315 322.303L410.162 298.02C408.24 283.218 398.555 270.573 384.766 264.861Z" fill="url(#paint13_linear_164_7)" />
                  <path d="M320.47 290.663L314.09 314.308C310.202 328.717 314.312 344.105 324.865 354.658L358.997 388.792L365.378 365.152C369.267 350.742 365.159 335.352 354.605 324.798L320.47 290.663Z" fill="url(#paint14_linear_164_7)" />
                  <path d="M285.334 324.034L270.391 343.438C261.286 355.263 259.193 371.052 264.904 384.84L283.377 429.438L298.319 410.039C307.426 398.214 309.519 382.423 303.807 368.634L285.334 324.034Z" fill="url(#paint15_linear_164_7)" />
                </g>
              </g>
            </g>
            <defs>
              <linearGradient id="paint0_linear_164_7" x1="197.949" y1="389.726" x2="240.092" y2="389.726" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint1_linear_164_7" x1="115.742" y1="376.741" x2="191.657" y2="376.741" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint2_linear_164_7" x1="49.2491" y1="339.735" x2="147.378" y2="339.735" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint3_linear_164_7" x1="8.60572" y1="284.356" x2="114.009" y2="284.356" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint4_linear_164_7" x1="-0.000417154" y1="219.021" x2="96.6314" y2="219.021" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint5_linear_164_7" x1="24.7339" y1="153.699" x2="97.8817" y2="153.699" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint6_linear_164_7" x1="71.2263" y1="98.3139" x2="125.397" y2="98.3139" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint7_linear_164_7" x1="131.066" y1="61.3078" x2="176.319" y2="61.3078" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint8_linear_164_7" x1="197.949" y1="48.3155" x2="240.092" y2="48.3155" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint9_linear_164_7" x1="246.387" y1="61.308" x2="322.302" y2="61.308" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint10_linear_164_7" x1="290.663" y1="98.3118" x2="388.792" y2="98.3118" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint11_linear_164_7" x1="324.035" y1="153.693" x2="429.438" y2="153.693" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint12_linear_164_7" x1="341.41" y1="219.021" x2="438.042" y2="219.021" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint13_linear_164_7" x1="340.167" y1="284.345" x2="413.314" y2="284.345" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint14_linear_164_7" x1="312.649" y1="339.728" x2="366.82" y2="339.728" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
              <linearGradient id="paint15_linear_164_7" x1="261.729" y1="376.736" x2="306.982" y2="376.736" gradientUnits="userSpaceOnUse"><stop stopColor="#F4D976" /><stop offset="1" stopColor="#62481A" /></linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-left">
          <header className="mb-10 md:mb-16 reveal reveal-fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#1E1E4B] leading-tight">
              Why Choose<br />Befirst Enterprises
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-x-6 md:gap-y-10 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative bg-[#1E1E4B] p-6 rounded-xl shadow-xl transform transition-transform hover:scale-105 ${card.position} text-left reveal reveal-fade-up`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Gold Accent border on left and bottom */}
                <div className="absolute inset-0 rounded-xl border-l-4 border-b-4 border-[#EAD06F] opacity-80 pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-[#EAD06F] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white text-base font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;