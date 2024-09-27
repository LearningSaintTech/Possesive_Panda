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
      <div className="w-[12.656vw] h-[12.656vw] rounded-[6.25vw] border-[0.104vw] border-white flex-col justify-start items-start inline-flex relative shadow-lg">
        {/* Clock face */}
        <div className=" transform"></div>
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className=""
            style={{ transform: `translateX(-50%) rotate(${i * 30}deg) translateY(0.104vw)` }}
          ></div>
        ))}
        {/* Hour hand */}
        <div
          className="w-[0.162vw] h-[3vw] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom"
          style={{ transform: `translateX(-50%) translateY(-100%) rotate(${hoursDegrees}deg)` }}
        ></div>
        {/* Minute hand */}
        <div
          className="w-[0.092vw] h-[4.192vw] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom"
          style={{ transform: `translateX(-50%) translateY(-100%) rotate(${minutesDegrees}deg)` }}
        ></div>
        {/* Second hand */}
        <div
          className="w-[0.092vw] h-[5.129vw] bg-[#05b7df] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom"
          style={{ transform: `translateX(-50%) translateY(-100%) rotate(${secondsDegrees}deg)` }}
        ></div>
      </div>
      <p className="opacity-70 text-white text-[1.25vw] font-medium capitalize mt-[2.5vw]">{city}</p>
    </div>
  );
};

const WorldClocks = () => {
  return (
    <div className="bg-gray-800 p-8 flex justify-around items-center">
      {cities.map((city) => (
        <Clock key={city.name} city={city.name} timezone={city.timezone} />
      ))}
    </div>
  );
};

export default WorldClocks;