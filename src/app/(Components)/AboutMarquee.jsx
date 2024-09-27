"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa'; // Font Awesome icon for play button
import blowout from '../../../public/assets/aboutus/blowout.png';
import car from '../../../public/assets/aboutus/car.png';
import hair from '../../../public/assets/aboutus/hair.png';
import lens from '../../../public/assets/aboutus/lens.png';
import reiki from '../../../public/assets/aboutus/reiki.png';

const AboutMarquee = () => {
    const images = [
        blowout,
        car,
        hair,
        lens,
        reiki,
        blowout,
        car,
        hair,
        lens,
        reiki,
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let start = 0;

        const smoothScroll = (timestamp) => {
            if (container) {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;

                // Adjust the speed to achieve a 10,000ms (10s) scroll duration
                const speed = container.clientWidth / 10000;
                const scrollX = (elapsed * speed) % container.clientWidth;

                container.style.transform = `translateX(-${scrollX}px)`;

                requestAnimationFrame(smoothScroll);
            }
        };

        requestAnimationFrame(smoothScroll);

        return () => {
            cancelAnimationFrame(smoothScroll);
        };
    }, []);

    return (
        <div className="relative overflow-hidden w-full pb-[7.813vw] mt-[2.4vw] bg-[#00111a]">
            <div
                ref={containerRef}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    whiteSpace: 'nowrap',
                }}
            >
                {/* Render images twice for smooth looping */}
                {images.concat(images).map((src, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: '0 0 auto',
                            width: '27.813vw',
                            height: '15.625vw',
                            marginRight: '1.5svw',
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Marquee Image ${index + 1}`}
                            layout="responsive"
                            width={150}
                            height={50}
                            objectFit="contain"
                        />
                    </div>
                ))}
            </div>

            {/* Watch the film button */}
            <div className="absolute ml-[6.25vw] pt-[2.188vw] flex items-center">
                <a
                    href="https://www.youtube.com/watch?v=RlRhHwoSw9A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white bg-transparent hover:text-gray-300"
                >
                    <FaPlayCircle className="mr-2 text-gray-400  md:text-[2.8vw] lg:text-[1.25vw]" /> {/* Icon */}
                    Watch the film
                </a>
            </div>
        </div>
    );
};

export default AboutMarquee;
