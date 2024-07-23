import Link from 'next/link';
import Image from 'next/image';
import not_found from "../assets/not-found/not_found.jpeg";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white mt-8 mb-8">
      <Image
        src={not_found}
        alt="Page Not Found"
        height={350}
        width={550}
        className="mt-2 mb-4 rounded-lg shadow-lg" 
      />
      <h1 className="text-2xl font-bold mb-4">Oops! The page you are looking for does not exist.</h1>
      
      <Link href="/" className="px-6 py-3 bg-[#60E2FF] text-white rounded-lg hover:bg-[#00AFF1] transition-all duration-300">
       
          Go back to Home
       
      </Link>
    </div>
  );
};

