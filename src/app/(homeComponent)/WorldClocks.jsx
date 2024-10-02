import React, { useState, useEffect } from 'react';

const cities = [
  { name: 'California(USA)', timezone: 'America/Los_Angeles' },
  { name: 'Manila(Philippines)', timezone: 'Asia/Manila' },
  { name: 'Noida(India)', timezone: 'Asia/Kolkata' },
  { name: 'London(UK)', timezone: 'Europe/London' },
];

const Clock = ({ city, timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    }).format(date);
  };

  const [hours, minutes, seconds] = formatTime(time).split(':');
  const secondsDegrees = seconds * 6;
  const minutesDegrees = minutes * 6 + seconds * 0.1;
  const hoursDegrees = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="flex flex-col items-center">
      <div className="w-[28.235vw] h-[28.235vw] md:w-[12.656vw] md:h-[12.656vw] rounded-full border border-white flex-col justify-start items-start inline-flex relative shadow-lg">
        {/* Clock face */}
        <div className="w-full h-full rounded-full"></div>
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className=""
            style={{
              top: '5px',
              left: '50%',
              transform: `translateX(-50%) rotate(${i * 30}deg) translateY(0.104vw)`
            }}
          ></div>
        ))}
        {/* Hour hand */}
        <div
          className="w-[0.471vw] h-[7.059vw] md:w-[0.162vw] md:h-[3vw] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom"
          style={{ transform: `translateX(-50%) translateY(-100%) rotate(${hoursDegrees}deg)` }}
        ></div>
        {/* Minute hand */}
        <div
          className="w-[0.235vw] h-[9.412vw] md:w-[0.092vw] md:h-[4.192vw] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom"
          style={{ transform: `translateX(-50%) translateY(-100%) rotate(${minutesDegrees}deg)` }}
        ></div>
        {/* Second hand */}
        <div
          className="w-[0.235vw] h-[11.765vw] md:w-[0.092vw] md:h-[5.129vw] bg-[#05b7df] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom"
          style={{ transform: `translateX(-50%) translateY(-100%) rotate(${secondsDegrees}deg)` }}
        ></div>
      </div>
      <p className="opacity-70 text-white text-[3.294vw] md:text-[1.25vw] font-medium capitalize mt-[3.529vw] md:mt-[2.5vw]">{city}</p>
    </div>
  );
};

const WorldClocks = () => {
  return (
    <div className='bg-[#00111A] px-[7.059vw] sm:px-0 sm:py-0'>
      <div className="bg-white/10 sm:px-[12.396vw] px-[7.059vw] sm:py-[2.813vw] rounded-[2.353vw] sm:rounded-none py-[13.412vw] sm:w-full w-[85.882vw] grid grid-cols-2 gap-y-[10vw] sm:flex sm:justify-around sm:items-center sm:gap-[5.647vw]">
        {cities.map((city) => (
          <Clock key={city.name} city={city.name} timezone={city.timezone} />
        ))}
      </div>
    </div>
  );
};

export default WorldClocks;