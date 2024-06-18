"use client"
import React, { useState } from 'react';

const servicesData = [
  { name: "Web Development & Design" },
  { name: "Mobile App Development" },
  { name: "Software Development" },
  { name: "Cloud Services" },
  { name: "Cyber Security" },
  { name: "Managed IT Services" },
  { name: "Data Analytics And Business" },
  { name: "Digital Marketing" },
  { name: "E-Commerce Solutions" }
];

const premiumServicesData = [
  { name: "Startup Bundle Service" },
  { name: "Virtual Assistant Service" },
  { name: "IT & Non IT Recruitment" },
  { name: "BPO & Call Center Services" },
  { name: "Revenue Cycle Management" }
];

const subServiceData = {
  "Web Development & Design": ["Frontend Development", "Backend Development", "UI/UX Design"],
  "Mobile App Development": ["iOS Development", "Android Development", "Cross-Platform Development"],
  "Software Development": ["Custom Software", "Enterprise Software", "SaaS Development"],
  "Cloud Services": ["AWS", "Azure", "Google Cloud"],
  "Cyber Security": ["Penetration Testing", "Vulnerability Assessment", "Security Audit"],
  "Managed IT Services": ["IT Support", "Network Management", "Server Management"],
  "Data Analytics And Business": ["Data Visualization", "Business Intelligence", "Data Warehousing"],
  "Digital Marketing": ["SEO", "Content Marketing", "Social Media Marketing"],
  "E-Commerce Solutions": ["E-Commerce Platforms", "Payment Gateway Integration", "Custom E-Commerce Development"],
  "Startup Bundle Service": ["Business Plan", "Market Analysis", "Financial Projections"],
  "Virtual Assistant Service": ["Administrative Support", "Customer Service", "Personal Assistant"],
  "IT & Non IT Recruitment": ["Technical Recruitment", "Non-Technical Recruitment", "Executive Search"],
  "BPO & Call Center Services": ["Inbound Services", "Outbound Services", "Customer Support"],
  "Revenue Cycle Management": ["Medical Billing", "Claims Processing", "Payment Posting"]
};

const ServiceItem = ({ service }) => (
  <div className="w-full p-2">
    <div className="border p-4">
      <p>{service}</p>
    </div>
  </div>
);

const Page = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPremiumServicesOpen, setIsPremiumServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsPremiumServicesOpen(false);
    setSelectedService(null); 
  };

  const togglePremiumServicesDropdown = () => {
    setIsPremiumServicesOpen(!isPremiumServicesOpen);
    setIsServicesOpen(false); 
    setSelectedService(null); 
  };

  return (
    <div className="flex mt-[50px] p-4">
      <div className="w-1/4 p-4">
        <h1 className="text-xl font-bold">Browse Our Services</h1>
        <div>
          <p
            onClick={toggleServicesDropdown}
            className="cursor-pointer font-bold text-blue-500 mt-4"
          >
            Services
          </p>
          {isServicesOpen && (
            <div className="ml-4 mt-2">
              {servicesData.map((service, index) => (
                <p
                  key={index}
                  onClick={() => handleServiceSelect(service.name)}
                  className="cursor-pointer mt-2"
                >
                  {service.name}
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <p
            onClick={togglePremiumServicesDropdown}
            className="cursor-pointer font-bold text-blue-500 mt-4"
          >
            Premium Services
          </p>
          {isPremiumServicesOpen && (
            <div className="ml-4 mt-2">
              {premiumServicesData.map((service, index) => (
                <p
                  key={index}
                  onClick={() => handleServiceSelect(service.name)}
                  className="cursor-pointer mt-2"
                >
                  {service.name}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-3/4 p-4 grid grid-cols-3 gap-4">
        {selectedService && subServiceData[selectedService]?.map((subService, index) => (
          <ServiceItem key={index} service={subService} />
        ))}
      </div>
    </div>
  );
};

export default Page;

