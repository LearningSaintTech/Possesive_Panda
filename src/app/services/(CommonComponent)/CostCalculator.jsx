import React, { useState } from 'react';

const CostCalculator = () => {
  const [teamSize, setTeamSize] = useState(1);
  const [location, setLocation] = useState('US');

  // Cost values based on location
  const costData = {
    US: { inHouseCost: 7000, infrastructureCost: 2000 },
    UK: { inHouseCost: 6500, infrastructureCost: 1800 },
    India: { inHouseCost: 3000, infrastructureCost: 1000 },
  };

  const PPHiringCost = 960;

  // Get costs based on selected location
  const { inHouseCost, infrastructureCost } = costData[location];

  // Calculation logic
  const totalSavings = (inHouseCost - PPHiringCost) * teamSize;

  return (
    <div className="container mx-auto bg-[#1f97d7] p-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Let's calculate how much you can save per employee!</h1>
      
      {/* Location Selection */}
      <div className="mb-8">
        <label className="block text-xl mb-2">Select Your Team Location:</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="India">India</option>
        </select>
      </div>

      {/* Hiring Sections */}
      <div className="flex justify-between gap-8">
        {/* In-house Hiring */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-1">
          <h2 className="text-green-600 font-semibold text-lg">In-House Hiring</h2>
          <div className="flex justify-between">
            <p>Salary & Benefits</p>
            <p>${inHouseCost}</p>
          </div>
          <div className="flex justify-between">
            <p>Cost of Infrastructure</p>
            <p>${infrastructureCost}</p>
          </div>
        </div>

        {/* Acelera Hiring */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-1">
          <h2 className="text-blue-600 font-semibold text-lg">Possesive Panda Hiring</h2>
          <div className="flex justify-between">
            <p>Salary & Benefits</p>
            <p>${PPHiringCost}</p>
          </div>
          <div className="flex justify-between">
            <p>Cost of Infrastructure</p>
            <p>ZERO</p>
          </div>
        </div>
      </div>

      {/* Slider Input */}
      <div className="my-8">
        <label className="block text-xl mb-2">How many people you want to hire?</label>
        <input
          type="range"
          min="1"
          max="100"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className="w-full"
        />
        <p className="text-center mt-2 text-2xl">{teamSize} People</p>
      </div>

      {/* Savings */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold">Total Savings per Month</h2>
        <p className="text-4xl font-bold text-orange-600 transition-all duration-300">
          ${totalSavings}
        </p>
      </div>
    </div>
  );
};

export default CostCalculator;
