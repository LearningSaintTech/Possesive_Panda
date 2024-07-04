import React from "react";
import "../../../src/app/globals.css"; 

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
      <div className="flex justify-center items-center space-x-2">
        <div className="loader-dot bg-blue-500"></div>
        <div className="loader-dot bg-red-500"></div>
        <div className="loader-dot bg-green-500"></div>
        <div className="loader-dot bg-yellow-500"></div>
        <div className="loader-dot bg-purple-500"></div>
      </div>
    </div>
  );
};
export default Loader;
