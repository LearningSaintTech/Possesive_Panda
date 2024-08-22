import Image from 'next/image';
import React from 'react';
import accenturewhite from '../../assets/aboutus/brands/accenturewhite.png';
import capgeminiwhite from '../../assets/aboutus/brands/capgeminiwhite.png';
import cognizantwhite from '../../assets/aboutus/brands/cognizantwhite.png';
import hclwhite from '../../assets/aboutus/brands/hclwhite.png';
import ibmwhite from '../../assets/aboutus/brands/ibmwhite.png';
import tcswhite from '../../assets/aboutus/brands/tcswhite.png';

const Marquee = () => {
  const images = [
    accenturewhite,
    capgeminiwhite,
    cognizantwhite,
    hclwhite,
    ibmwhite,
    tcswhite,
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee">
        {images.map((src, index) => (
          <div key={index} className="flex-none mx-4">
            <Image src={src} alt={`Marquee Image ${index + 1}`} width={150} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
