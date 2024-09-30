"use client";
import React, { useState, useEffect } from 'react';

const StatsBox = ({ value, label }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [suffix, setSuffix] = useState('');
  const [isPercentage, setIsPercentage] = useState(false);

  useEffect(() => {
    const isPercentageValue = value.includes('%');
    setIsPercentage(isPercentageValue);

    const numericValue = parseFloat(value);
    const sign = value.replace(numericValue, '');
    setSuffix(sign);

    if (!isNaN(numericValue)) {
      const duration = 2000;
      const increment = numericValue / (duration / 50);

      const interval = setInterval(() => {
        setCurrentValue(prevValue => {
          if (prevValue >= numericValue) {
            clearInterval(interval);
            return numericValue;
          }
          return Math.min(prevValue + increment, numericValue);
        });
      }, 50);

      return () => clearInterval(interval);
    } else {
      setCurrentValue(value);
    }
  }, [value]);

  return (
    <div className="bg-white/10 rounded-md sm:rounded-[0.26vw] shadow w-full sm:w-[11.927vw] flex flex-col justify-start items-start p-4 sm:px-[1.25vw] sm:py-[1.25vw]">
      <h2 className="text-white text-2xl sm:text-[1.324vw] font-semibold">
        {typeof currentValue === 'number'
          ? `${isPercentage ? currentValue.toFixed(2) : Math.floor(currentValue)}${suffix}`
          : value}
      </h2>
      <p className="text-white text-sm sm:text-[1.042vw] font-medium">{label}</p>
    </div>
  );
};

const ReviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: '10+', label: 'Industries Served' },
    { value: '97.50%', label: 'Satisfied Clients' },
    { value: '20+', label: 'Clients Catered' },
    { value: '80+', label: 'CPA (s)' },
    { value: '60%', label: 'Enhanced ROI(s)' },
  ];

  return (
    <div className='bg-[#00111a] px-4 sm:px-[13.802vw] py-8 sm:pt-[6.094vw]'>
      <div className='bg-white/10 rounded-lg sm:rounded-[0.625vw] flex flex-col justify-center items-center gap-6 sm:gap-[1.667vw] w-full sm:w-[71.927vw] py-6 sm:py-[1.563vw]'>
        <div className={`px-4 sm:px-[7.01vw] transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h6 className='text-center text-white text-xl sm:text-[1.25vw] font-light sm:w-[41.042vw] sm:px-[2vw] mb-4'>
            Possesive Panda is pioneering Finance and Accounting Services, Delivering Financial Success Across the Globe
          </h6>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-[1.25vw] px-4 sm:px-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StatsBox value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;