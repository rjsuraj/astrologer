import React from 'react';
import lostLoveVideo from "@/assets/lost_love.mp4";

export const LostLoveSection = () => {
    const phoneNumber = "+91 8829922256";
    const message = "Hello, I would like to know more about the Lost Love Back services.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <div className="relative" style={{ paddingTop: "56.25%" }}>
                            <video
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                src={lostLoveVideo}
                                controls
                                autoPlay
                                muted
                                loop
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                                Get Your Lost Love Back
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Are you heartbroken over a lost love? Do you long to reunite with your ex-partner? Our powerful and effective Islamic astrology solutions can help you mend your broken heart and bring your lost love back into your life. We offer sincere prayers and proven remedies to resolve misunderstandings and reignite the spark of love.
                            </p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-golden text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors duration-300"
                            >
                                Consult on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
