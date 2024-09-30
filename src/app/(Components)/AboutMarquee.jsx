"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa'; // Font Awesome icon for play button
import img1 from "../../../public/assets/services/2.jpg"
import img2 from "../../../public/assets/services/2a.jpg"
import img3 from "../../../public/assets/services/2b.jpg"
import img4 from "../../../public/assets/services/2c.jpg"
import img5 from "../../../public/assets/services/2d.jpg"
import img6 from "../../../public/assets/services/2e.jpg"
import img7 from "../../../public/assets/services/2f.jpg"
import img8 from "../../../public/assets/services/2g.jpg"
import img9 from "../../../public/assets/services/2h.jpg"
import img10 from "../../../public/assets/services/2i.jpg"

const AboutMarquee = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10
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
        <div className="relative overflow-hidden w-full bg-[#00111a]">
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
