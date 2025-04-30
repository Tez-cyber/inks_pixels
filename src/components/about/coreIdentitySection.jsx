import React, { useState, useEffect } from 'react';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BrushIcon from '@mui/icons-material/Brush';
import AdjustIcon from '@mui/icons-material/Adjust';
import Skeleton from '@mui/material/Skeleton';

export const CoreIdentitySection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const gridDetails = [
    {
      icon: <BrushIcon />,
      title: 'Creative Excellence',
      text: `We deliver visually captivating and strategically crafted products that help our clients stand out.`,
    },
    {
      icon: <AdjustIcon />,
      title: 'Strategic Vision',
      text: `Our vision is to be the leading creative partner in Nigeria, driving our clients' success through exceptional design.`,
    },
    {
      icon: <HandshakeIcon />,
      title: 'Client Partnership',
      text: `We work closely with businesses and individuals to establish a strong, memorable presence in their respective markets.`,
    },
  ];

  useEffect(() => {
    // Simulate image loading
    const img = new Image();
    img.src =
      "https://readdy.ai/api/search-image?query=professional%20creative%20team%20working%20in%20modern%20design%20studio%2C%20diverse%20group%20collaborating%20on%20branding%20projects%2C%20printing%20and%20design%20materials%20visible%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20high%20end%20professional%20photography&width=800&height=1000&seq=team-img-1&orientation=portrait";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // Consider error as loaded to prevent infinite loading
  }, []);

  return (
    <section className="py-20 bg-veryLightBlue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-darkBlue mb-4 md:text-4xl">
            Our Core Identity
          </h2>
        </div>

        <div className="grid gap-12 items-center md:grid-cols-2">
          {/* Image section */}
          <div className="relative overflow-hidden rounded-lg shadow-xl h-[500px]">
            {!imageLoaded && (
              <Skeleton 
                variant='rounded' 
                animation="wave"
                height={500}
                className="w-full h-[500px]" 
            /> 
            )}
            <img
              src="https://readdy.ai/api/search-image?query=professional%20creative%20team%20working%20in%20modern%20design%20studio%2C%20diverse%20group%20collaborating%20on%20branding%20projects%2C%20printing%20and%20design%20materials%20visible%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20high%20end%20professional%20photography&width=800&height=1000&seq=team-img-1&orientation=portrait"
              alt="Our creative team"
              className={`w-full h-full object-cover object-top ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-500`} // Fade in when loaded
              onLoad={() => setImageLoaded(true)} // Set loaded on load
            />
          </div>

          {/* Description section */}
          <div>
            <h3 className="text-2xl font-bold text-[#000028] mb-6 md:text-3xl">
              A Dynamic Creative Agency
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ink and Pixels Nigeria Limited is a dynamic and innovative creative
              agency specializing in comprehensive branding, design, packaging, and
              printing solutions.
            </p>

            <div className="space-y-6">
              {gridDetails.map((detail, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-darkBlue p-3 rounded-full text-[#FFD700]">
                    <i>{detail.icon}</i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#000028] mb-2">
                      {detail.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {detail.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
