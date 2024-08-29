import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import montgmery from '../../assets/banners/montgmery.png';
import pands from '../../assets/banners/pands.png';
import learningsaint from '../../assets/banners/learningsaint.png';
import hawkins from '../../assets/banners/hawkins.png';
import separator from '../../assets/banners/separator.png';

const Marquee = () => {
  const images = [
    hawkins,
    learningsaint,
    pands,
    montgmery,
    hawkins,
    learningsaint,
    pands,
    montgmery,
    hawkins,
    learningsaint,
    pands,
    montgmery,
    hawkins,
    learningsaint,
    pands,
    montgmery,
  ];

  const containerRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setMarqueeWidth(containerRef.current.scrollWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const animationDuration = 30; 

      const updateScroll = () => {
        container.style.transform = `translateX(-${scrollWidth}px)`;
        container.style.transition = `transform ${animationDuration}s linear`;
      };

      const resetScroll = () => {
        container.style.transform = 'translateX(0)';
        container.style.transition = 'none';
        container.offsetHeight;
        requestAnimationFrame(updateScroll);
      };

      updateScroll();
      container.addEventListener('transitionend', resetScroll);

      return () => {
        container.removeEventListener('transitionend', resetScroll);
      };
    }
  }, [marqueeWidth]);

  return (
    <div className="hidden sm:block relative overflow-hidden w-full pb-[7.813vw]">
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          whiteSpace: 'nowrap',
          transform: 'translateX(0)',
          transition: 'none',
        }}
      >
        {/* First copy of images with separator */}
        {images.map((src, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                flex: '0 0 auto',
                width: '10vw',
                marginRight: '2vw', 
                transform: src === montgmery ? 'translateY(20px)' : 'none',
              }}
            >
              <Image
                src={src}
                alt={`Marquee Image ${index + 1}`}
                layout="responsive"
                width={150}
                height={50}
                objectFit="cover"
              />
            </div>
            {/* Insert separator image between images */}
            <div
              style={{
                flex: '0 0 auto',
                width: '0.206vw',
                height: '1vw',
                marginRight: '2vw', 
              }}
            >
              <Image
                src={separator}
                alt={`Separator ${index + 1}`}
                layout="responsive"
                width={150}
                height={50}
                objectFit="contain"
              />
            </div>
          </React.Fragment>
        ))}

        {/* Separator after the last image */}
        <div
          style={{
            flex: '0 0 auto',
            width: '0.206vw',
            height: '1vw',
            marginRight: '2vw', 
          }}
        >
          <Image
            src={separator}
            alt="Final Separator"
            layout="responsive"
            width={150}
            height={50}
            objectFit="contain"
          />
        </div>

        {/* Duplicate the images with separator for smooth infinite scroll */}
        {images.map((src, index) => (
          <React.Fragment key={index + images.length}>
            <div
              style={{
                flex: '0 0 auto',
                width: '10vw',
                marginRight: '2vw', 
                transform: src === montgmery ? 'translateY(20px)' : 'none',
              }}
            >
              <Image
                src={src}
                alt={`Marquee Image ${index + 1}`}
                layout="responsive"
                width={150}
                height={50}
                objectFit="cover"
              />
            </div>
            {/* Insert separator image between images */}
            <div
              style={{
                flex: '0 0 auto',
                width: '0.206vw',
                height: '1vw',
                marginRight: '2vw',
              }}
            >
              <Image
                src={separator}
                alt={`Separator ${index + images.length + 1}`}
                layout="responsive"
                width={150}
                height={50}
                objectFit="contain"
              />
            </div>
          </React.Fragment>
        ))}

        {/* Separator after the last duplicated image */}
        <div
          style={{
            flex: '0 0 auto',
            width: '0.206vw',
            height: '1vw',
            marginRight: '2vw', 
          }}
        >
          <Image
            src={separator}
            alt="Final Separator Duplicate"
            layout="responsive"
            width={150}
            height={50}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
