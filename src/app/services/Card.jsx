import React from 'react';

const Card = ({ number, title, description }) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md bg-white">
      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
        {number}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default Card;
