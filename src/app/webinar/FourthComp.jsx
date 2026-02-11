import React from 'react';
import { Image } from '@/lib/next-compat';
import Woman from '../../../public/assets/landing/woman.svg';
import Tele from '../../../public/assets/landing/tele.svg';
import Forsale from '../../../public/assets/landing/forsale.svg';
import Meeting from '../../../public/assets/landing/meeting.svg';
import Handshake from '../../../public/assets/landing/handshake.svg';

const challenges = [
  {
    title: "Finding the Right Virtual Assistant",
    description: "Finding efficient and expert real estate virtual assistants for your business can be formidable. With many options available, picking the right fit needs expertise and resilience to negate risks and detrimental aspects.",
    imageUrl: Woman
  },
  {
    title: "Generating Quality Leads",
    description: "Unfortunately, lead generation is one of the roadblocks for many realtors. A steady stream of leads of people, uninterested in buying or selling leads to no transactions. Ultimately, this can cause your real estate business to debase drastically.",
    imageUrl: Tele
  },
  {
    title: "Handling Market Fluctuations",
    description: "The dynamic nature of the real estate domain is unpredictable. You have to be one step ahead every time. Interest Rates, Economical Shifts, and Trends can significantly impact your real estate business operations.",
    imageUrl: Forsale
  },
  {
    title: "Beating the Competition",
    description: "It is a well-known fact that the real estate domain is crowded, and to be at the forefront is difficult. New realtors might struggle alongside industry veterans and even industry veterans are struggling in this technologically driven era.",
    imageUrl: Meeting
  },
  {
    title: "Handling Difficult Clients",
    description: "Primarily, converting leads into high-paying clients is difficult & then handling clients who are difficult to manage can take time and effort. Not knowing how to handle difficult clients can dramatically reduce your business & operation.",
    imageUrl: Handshake
  }
];

const DesktopCard = ({ index, imageUrl, title, description }) => {
  const isEven = index % 2 === 0;
  return (
    <div className="w-[71.354vw] h-[24.115vw] relative bg-[#00111a] rounded-[30px]">
      <div className={`w-[31.25vw] h-[24.115vw] absolute rounded-[1.25vw] overflow-hidden ${isEven ? 'left-0' : 'right-0'}`}>
        <Image
          src={imageUrl}
          alt="Virtual Assistant"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`w-[42.813vw] px-[2.9vw] py-[5.502vw] absolute bg-white rounded-[1.25vw] flex items-center ${isEven ? 'right-[0.625vw]' : 'left-[0.625vw]'} top-[0.625vw]`}>
        <div className="flex flex-col gap-[1.25vw]">
          <h2 className="text-black text-[1.875vw] font-bold font-['Times New Roman']">
            {title}
          </h2>
          <p className="text-[#5a5a5a] text-[1.25vw] font-normal font-['Open Sans']">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileCard = ({ imageUrl, title, description }) => {
  return (
    <div className="w-[85.882vw] h-[140vw] bg-[#152f2e] relative rounded-[3.765vw] mb-8">
      <div className="w-full h-[93.176vw] relative">
        <Image
          src={imageUrl}
          alt="Virtual Assistant"
          layout="fill"
          objectFit="cover"
          className='rounded-[3.765vw]'
        />
      </div>
      <div className="absolute w-[82.118vw] h-[66.647vw] top-[72.235vw] left-[1.882vw] py-[2.565vw] px-[3.765vw] bg-white rounded-[3.765vw] shadow-lg">
        <h2 className="text-[#152f2e] text-[8.471vw] font-bold leading-tight mb-[3vw]">
          {title}
        </h2>
        <p className="text-[#152f2e] text-[3.765vw] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

const RealEstateChallenges = () => {
  return (
    <div className="sm:mt-[5vw] mt-[14.118vw]">
      <h1 className="hidden sm:block text-center text-[#372e32] text-[3.333vw] font-bold mb-[2.5vw]  ml-[19.302vw] w-[70.344vw]">
        Challenges Faced While Hiring Real Estate Virtual Assistant Services
      </h1>
      <div className='px-[7.059vw] mb-[7.059vw] block sm:hidden'>
        <h1 className='text-[#152f2e] text-[7vw] font-bold'>Challenges Faced While Hiring Real Estate Virtual Assistant Services</h1>
      </div>
      {/* Desktop version */}
      <div className="hidden sm:block space-y-8 px-[17.323vw]">
        {challenges.map((challenge, index) => (
          <DesktopCard
            key={index}
            index={index}
            imageUrl={challenge.imageUrl}
            title={challenge.title}
            description={challenge.description}
          />
        ))}
      </div>

      {/* Mobile version */}
      <div className="sm:hidden block px-[7.11vw]">
        {challenges.map((challenge, index) => (
          <MobileCard
            key={index}
            imageUrl={challenge.imageUrl}
            title={challenge.title}
            description={challenge.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RealEstateChallenges;
