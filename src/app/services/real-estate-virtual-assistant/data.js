import img1 from "../../../../public/assets/services/real-estate/1.jpg";
import img2 from "../../../../public/assets/services/real-estate/2.jpg";
import img3 from "../../../../public/assets/services/real-estate/3.jpg";

import { IoMdGitMerge } from "react-icons/io";
import { GrSettingsOption } from "react-icons/gr";
import { PiTimerBold } from "react-icons/pi";
import { RiSeoLine } from "react-icons/ri";
import { FaRegFile } from "react-icons/fa";
import { BiCubeAlt } from "react-icons/bi";
import { VscCircuitBoard } from "react-icons/vsc";
import { IoEarthOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { FaIoxhost } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";

const faq = [
  {
    title: `What is a real estate Virtual Assistant?`,
    description: `A real estate virtual assistant is a professional who provides administrative, marketing, and operational support to real estate agents.`,
  },
  {
    title: `How good are your resources at closing deals?`,
    description: `You will get a professional who is are expert in their field. We know how to close deals.`,
  },
  {
    title: `What tasks will my real estate virtual assistant be handling?`,
    description: `Your real estate Virtual assistant can handle all the tasks you assign. These include listing properties, managing tasks, managing emails, scheduling appointments, lead generation, data entry, and more.`,
  },
  {
    title: `How do I hire the right real estate virtual assistant for my business?`,
    description: `We hire great employees who can work smartly and efficiently without much supervision. You do not have to deal with a hiring process with our virtual assistant.`,
  },
  {
    title: `Can a real estate virtual assistant help with marketing?`,
    description: `Yes, virtual assistants can manage social media accounts, create marketing campaigns, and implement digital marketing strategies.`,
  },
  {
    title: `How do I check the performance of my real estate virtual assistant?`,
    description: `We regularly update you on the status of the tasks. Also, a project manager will be appointed to assist you with all the details of your project.`,
  },
  {
    title: `What are the real estate virtual assistant services Possesive Panda offers?`,
    description: `Possesive Panda delivers various real estate virtual assistant services. Here is the list: 

Real Estate ,
Research Lead Generation,
Property Listings ,
Setup 3D Tours ,
Expenses Management ,
Appointment Scheduling, 
Manage Bids ,
Manage Social Media Presence. 
`,
  },
];

const mobileData = {
  heading: "Why should you hire a Real Estate Virtual Assistant? ",
  sideImage: "/assets/aboutus/Side component.png",
  paragraphs: [
    "A virtual assistant is a remote professional who you can hire for your businesses or individualistic professional needs. If your work can be done remotely and especially on computers, then you can even set up your virtual offices, which can save your time and monetary resources. ",
    "Virtual assistants can manage various sorts of work and responsibilities for you and your businesses that can result in maximizing productivity and profits. At this moment, the virtual assistant industry is growing for two reasons: Easy Accessibility and Cost-Effectiveness",
    "They can perform various tasks ranging from your administrative tasks to closing deals. They are the individuals who can help you in your business growth by providing you professional assistance leading to better work-life balance and save your time and money.",
    "Many lack the resources to manage their company while expanding their business. Virtual assistants in real estate can help with marketing, listing coordination, lead generation, and follow-up. ",
    "Real estate virtual assistants are committed to helping agents achieve their goals and enjoy their industry more. By trusting their ability to handle tasks that agents don't have time for, agents can work less and make more money while enjoying themselves.",
    "Possesive Panda offers real estate virtual assistants who are pioneers of their industry and deliver the best client handling and property management and source the best available properties for your business growth and client acquisition.",
  ],
};

const testimonialsData = [
  {
    name: "Lisa M.",
    role: "Real Estate Agent",
    text: "Possesive Panda has significantly improved my real estate business by providing a virtual assistant to handle lead management and appointment scheduling, allowing me to concentrate on closing deals.",
  },
  {
    name: "Tom R.",
    role: "Real Estate Broker",
    text: "Possesive Panda's virtual assistants are highly knowledgeable about the real estate industry, enhancing productivity in marketing and client follow-ups, and making their services indispensable for businesses.",
  },
  {
    name: "Emily J.",
    role: "Property Manager",
    text: "Possesive Panda is a highly recommended virtual assistant for real estate professionals, enhancing property management tasks by handling tenant inquiries and paperwork efficiently.",
  },
  {
    name: "Mark T.",
    role: "Investment Property Owner",
    text: "Possesive Panda has revolutionized my investment properties portfolio by handling administrative tasks and research, allowing me to concentrate on portfolio growth with their extensive real estate expertise.",
  },
  {
    name: "Sarah W.",
    role: "Real Estate Team Leader",
    text: "Possesive Panda's team is exceptional, with a virtual assistant who understands the real estate market, ensuring organization and efficiency, and providing exceptional service.",
  },
];

const headingdata = {
  //testimonials
  heading: " What our clients have to say",
  description:
    "Join us on our inspiring journey as we thrive on challenges and celebrate our successes with our clients.",
};
const hoverImageData = {
  text: {
    subheading: "Thrive on Your Real Estate ",
    heading: "Business with Possesive Panda ",
    description:
      "The greatest help and support should be provided to all real estate businesses so that realtors like you can concentrate more on their areas of expertise. Hire Possesive Panda’s Real Estate Virtual Assistants to get started right now!",
  },
  images: {
    image1: img1,

    image2: img2,

    image3: img3,
  },
};
const iconMapping1 = {
  GrSettingsOption: <GrSettingsOption />,
  PiTimerBold: <PiTimerBold />,
  IoMdGitMerge: <IoMdGitMerge />,
  RiSeoLine: <RiSeoLine />,
  FaRegFile: <FaRegFile />,
  BiCubeAlt: <BiCubeAlt />,
  VscCircuitBoard: <VscCircuitBoard />,
  IoEarthOutline: <IoEarthOutline />,
  BsGraphUp: <BsGraphUp />,
  FaIoxhost: <FaIoxhost />,
  SiCoinmarketcap: <SiCoinmarketcap />,
  SiGooglemarketingplatform: <SiGooglemarketingplatform />,
};

const ourService = {
  heading: " Real Estate Virtual Assistant Services ",
  subHeading:
    "We offer real estate virtual assistants of various sorts for every realtor who wants to grow his/her business. With this wide range of virtual assistant services, we focus on client satisfaction and ensure your overall business success. ",
};
const servicesData22 = [
  {
    line: 1,
    services: [
      {
        icon: "GrSettingsOption",
        title: "Real Estate Research",
        description:
          "Our Real Estate virtual assistants offer property research and listing research for various types of properties, including retail, residence, and commercial, to improve market insights.",
      },
      {
        icon: "PiTimerBold",
        title: "Lead Generation",
        description:
          "Your virtual assistant for real estate will screen and track leads to maximize productivity and increase the chances of closing deals.",
      },
      {
        icon: "IoMdGitMerge",
        title: "Property Listings",
        description:
          "Our Virtual Assistance's Property Listing service provides comprehensive property information, updated by virtual assistants who upload and remove duplicate entries to enhance leads and data quality.",
      },
    ],
  },
  {
    line: 2,
    services: [
      {
        icon: "RiSeoLine",
        title: "Setup 3D Tours",
        description:
          "To be with the trend and cutting edge technologies, our real estate virtual assistant services also offer seting up of 3D tours of assorted properties like residential, commercial, hotel, and more.",
      },
      {
        icon: "FaRegFile",
        title: "Expenses Management",
        description:
          "Possesive Panda offers real estate assistants the expertise to maintain accurate and organized expense records, bills, reimbursements, and payments.",
      },
      {
        icon: "BiCubeAlt",
        title: "Appointment Scheduling ",
        description:
          "Possesive Panda offers virtual assistant services for real estate, streamlining workflows by handling emails, meetings, client interactions, and maintaining a calendar to ensure important information is not missed.",
      },
    ],
  },
  {
    line: 3,
    services: [
      {
        icon: "VscCircuitBoard",
        title: "Manage Bids",
        description:
          "Our real estate virtual assistants focus on managing online and offline bids for you so that you can invest your time and money at the right time and in the right place.",
      },
      {
        icon: "IoEarthOutline",
        title: "Manage Social Media Presence",
        description:
          "Possesive Panda offers a variety of virtual assistant services to make sure your business can grow and reach your potential customers. Leverage our SMM VA(s) for better digital presence. ",
      },
    ],
  },
];

export {
  faq,
  ourService,
  servicesData22,
  iconMapping1,
  testimonialsData,
  headingdata,
  hoverImageData,
  mobileData,
};
