import React from 'react';

const PremiumServicesDropdown = ({ premiumServices, onSelect, selectedService }) => {
    return (
      <div className='absolute left-0 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 shadow-md z-20'>
        <ul className='flex flex-col space-y-2 p-4'>
          {premiumServices.map((service, index) => (
            <li 
              key={index} 
              onClick={() => onSelect(service)}
              className={`cursor-pointer p-2 ${selectedService && selectedService.name === service.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default PremiumServicesDropdown;
