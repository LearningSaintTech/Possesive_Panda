import React from 'react' ;
import Image from 'next/image';
import thank_you from "../../assets/thank_you/thank_you.jpeg";
import Link from 'next/link';


const Thanks = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#040104] text-white mt-8">
      <Image
        src={thank_you}
        alt="Page Not Found"
        height={350}
        width={550}
        className="mt-2 mb-4 rounded-lg shadow-lg " 
      />
      <h1 className="text-2xl font-bold mb-4">Thank You! For Contacting us</h1>
      <h2 className="text-xl font-bold mb-4 ">We will get Back to you soon </h2>
      
      <Link href="/" className="px-6 py-3 bg-[#60E2FF] text-white rounded-lg hover:bg-[#00AFF1] transition-all duration-300 mt-3">
       
          Go back to Home
       
      </Link>
    </div>
    ) ; 
} ;

export default Thanks ;