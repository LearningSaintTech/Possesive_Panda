import React, { useEffect, useRef } from 'react';

const TextAnimation = () => {
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const firstTextElement = firstLineRef.current;
      const secondTextElement = secondLineRef.current;
      
      if (firstTextElement && secondTextElement) {
        const { top: firstTop, height: firstHeight } = firstTextElement.getBoundingClientRect();
        const { top: secondTop, height: secondHeight } = secondTextElement.getBoundingClientRect();
        const windowHeight = window.innerHeight - 300;

        const firstScrollProgress = Math.min(1, Math.max(0, (windowHeight - firstTop) / firstHeight));
        const secondScrollProgress = Math.min(1, Math.max(0, (windowHeight - secondTop) / secondHeight));

        firstTextElement.style.backgroundImage = linear-gradient('to right, white ${firstScrollProgress * 100}%, grey ${firstScrollProgress * 100}%');
        firstTextElement.style.webkitBackgroundClip = 'text';
        firstTextElement.style.backgroundClip = 'text';
        firstTextElement.style.color = 'transparent';

        if (firstScrollProgress === 1) {
          secondTextElement.style.backgroundImage = linear-gradient('to right, white ${secondScrollProgress * 100}%, grey ${secondScrollProgress * 100}%');
          secondTextElement.style.webkitBackgroundClip = 'text';
          secondTextElement.style.backgroundClip = 'text';
          secondTextElement.style.color = 'transparent';
        }
      }
    };

    // Listen to scroll event
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center bg-[#00111A]">
      <div className="text-center">
        <h1
          ref={firstLineRef}
          className="text-[3rem] md:text-[5rem] font-medium max-w-[90vw] leading-tight"
        >
          24/7 Professional Assistance -
        </h1>
      </div>
      <div className="text-center mt-4">
        <h1
          ref={secondLineRef}
          className="text-[3rem] md:text-[5rem] font-medium max-w-[90vw] leading-tight"
        >
          Wherever You Are, Whenever You Need
        </h1>
      </div>
    </div>
  );
};

export default TextAnimation;