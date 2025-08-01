import React from 'react';
import blackMagicVideo from "@/assets/black_magic.mp4";

const BlackMagicSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Black Magic Removal
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Are you feeling the effects of black magic? We offer powerful Islamic solutions to remove evil spells and protect you from harm. Our expert, Molana Sahil Khan, uses ancient Islamic practices to cleanse your life of negative energy and restore peace and happiness.
              </p>
              <a 
                href="https://wa.me/918829922256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-golden text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors duration-300"
              >
                Consult on WhatsApp
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="relative" style={{paddingTop: "56.25%"}}>
              <video 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={blackMagicVideo}
                controls
                autoPlay
                muted
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackMagicSection;
