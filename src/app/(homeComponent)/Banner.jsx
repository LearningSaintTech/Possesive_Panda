import React, { useRef, useState, useEffect } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';

const Banner = ({ whyUsRef }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); 
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(videoRef.current, {
        videoId: '3_N67lsN_Uc',
        events: {
          onReady: (event) => {
            event.target.mute(); 
            event.target.setPlaybackQuality('hd1080');
            event.target.playVideo();
            setPlayer(event.target);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          },
        },
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          loop: 1,
          iv_load_policy: 3,
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    const handleScroll = () => {
      if (videoRef.current) {
        const bannerBottom = videoRef.current.getBoundingClientRect().bottom;
        if (bannerBottom < 0 && player) {
          player.mute();
          setIsMuted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (player) {
        player.destroy();
      }
    };
  }, [player]);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute(); 
      } else {
        player.mute(); 
      }
      setIsMuted(!isMuted); 
    }
  };

  const handleScrollToWhyUs = () => {
    if (whyUsRef.current) {
      whyUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-auto sm:h-[55.417vw] sm:overflow-hidden">
      {/* Text Content */}
      <div className="sm:bg-transparent bg-[#00111A] px-[7.69vw] sm:px-[5.208vw] relative w-full z-10 sm:w-[43.333vw] mt-[18vw] sm:mt-[13.958vw] flex flex-col gap-[5vw] md:gap-[6vw] lg:gap-[1.042vw]">
        <h1 className="sm:w-[46.875vw] text-center lg:text-left text-white text-[7.5vw] lg:text-[3.333vw] mt-[14.545vw] sm:mt-0 font-semibold tracking-wide lg:w-[50vw] md:w-[40vw] md:text-[2.5vw] md:text-start">
          Boost Your <span className="text-[#60e2ff]">Business</span> With Powerful IT Technology
        </h1>
        <p className="text-white text-[4.103vw] lg:text-[1.25vw] font-normal leading-[150%] lg:tracking-[0.015rem] tracking-[0.033vw] lg:w-[46.875vw] text-center lg:text-start md:text-[1.5vw] md:text-start md:w-[30vw] md:-mt-7 lg:mt-[1vw]">
          Elevate your business with our cutting-edge IT services and solutions, designed to meet every need and fuel your tech-driven dreams.
        </p>

        <button
          className="w-full lg:w-fit bg-[#05B7DF] sm:bg-[#05B7DF] text-[3.59vw] md:text-[1.5vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white tracking-[0.015rem] py-[2.821vw] sm:px-[3vw] sm:py-[2.821vw] md:py-[1vw] hover:text-black sm:hover:bg-[#05B7DF] hover:border-none duration-500 hover:duration-500 hover:shadow-md sm:mt-[1.4vw] mt-[1vw] lg:mb-0 mb-[8vw] font-medium md:w-[17vw] md:-mt-6 lg:mt-[3.125vw]"
          onClick={handleScrollToWhyUs}
        >
          Why Us
          <GoArrowRight className="ml-2 md:ml-5 size-[3.5vw] sm:size-[1.5vw]" />
        </button>
      </div>

      {/* YouTube Video Background */}
      <div className="sm:absolute sm:top-0 sm:left-0 w-full sm:h-full z-0 sm:mt-0 mt-2">
        <div ref={videoRef} className="w-full h-[60vw] sm:h-full object-cover sm:scale-125"></div>
      </div>

      {/* Overlay */}
      <div className="sm:absolute sm:top-0 sm:left-0 w-full h-full bg-black/50 z-1"></div>

      {/* Mute/Unmute Button */}
      <div className="absolute sm:bottom-[6.833vw] sm:left-[5.458vw] bottom-[10vw] left-[5vw] z-10 flex items-center gap-2">
        {isMuted ? (
          <MdVolumeOff
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMute}
          />
        ) : (
          <MdVolumeUp
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMute}
          />
        )}
      </div>

      {/* Second Div Content Positioned at the Bottom Right */}
      <div className="absolute bottom-4 sm:bottom-[9vw] sm:px-2 px-[7.69vw] z-10 sm:text-left py-2 sm:right-[4vw]">
        <h1 className='sm:w-[15.208vw] w-[85vw] text-white text-[3.3vw] sm:text-left sm:text-[1.406vw] font-normal sm:font-extralight sm:leading-[2.083vw]'>
          Trust us to keep your technology running smoothly,
          <span className='text-[#60e2ff] font-normal'> so you can focus on what truly matters</span>—growing your business.
        </h1>
        <div className="hidden sm:block w-[14.688vw] overflow-hidden z-10">
          <div className="whitespace-nowrap animate-marquee text-white text-[0.938vw] font-normal leading-[35px] mt-[20px]">
            <span className="mx-4">Scroll down to discover how it works</span>
            <span className="mx-4">Scroll down to discover how it works</span>
            <span className="mx-4">Scroll down to discover how it works</span>
            <span className="mx-4">Scroll down to discover how it works</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;