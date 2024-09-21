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
import { FaArrowRight } from "react-icons/fa6";

const faq = [
  {
    title: "Why do I need E-commerce solutions?",
    description: `E-commerce solutions help in smooth-running of processes in setting up and managing an online store. They enable businesses to reach a wider audience and increase sales. They also help manage inventory, the payment process, and logistics. `,
  },
  {
    title: "Is your e-commerce target mobile-friendly?",
    description: `Each site we have worked on has been mobile-friendly. With our unique plans, strategies, we assure that the site works on a variety of screen sizes, from cell phones and tablets to large desktops.`,
  },
  {
    title: "How will I follow up on my e-commerce website development project?",
    description: `We regularly update you on the status of the tasks. Also, a project manager will be appointed to assist you with all the details of your project.`,
  },
  {
    title: "How long does it take to design and launch an e-commerce website?",
    description: `This depends upon how big and complex the project is. Our aim is to provide quick and effective solutions while making sure the work is done on time. When we plan the project our project manager gives a clear deadline. `,
  },
  {
    title: "How do I choose the right e-commerce platform?",
    description: `When choosing an e-commerce platform, consider factors such as ease of use, scalability, cost, customization options, and your business's specific needs.
`,
  },
  {
    title: "How do I increase traffic to my e-commerce website?",
    description: `By optimizing for search engines, running targeted ads, engaging on social media, and creating valuable content that attracts visitors.`,
  },
];

const servicesData = [
  {
    icon: (
      <GrSettingsOption className="text-[#04b7df] w-[1.406vw] h-[2.135vw] relative" />
    ),
    title: "eCommerce Consulting",
    description:
      "Possesive Panda delivers the best eCommerce solutions to improve your operational efficiency and user experience via consultancy from industry experts.",
  },
  {
    icon: (
      <PiTimerBold className="text-[#04b7df] w-[1.406vw] h-[2.135vw] relative" />
    ),
    title: "eCommerce Implementation",
    description:
      "Get cloud platforms, payment gateways, POS systems, and CRMs implemented to your eCommerce web stores and mobile applications.",
  },
  {
    icon: (
      <IoMdGitMerge className="text-[#04b7df] w-[1.406vw] h-[2.135vw] relative" />
    ),
    title: "eCommerce Marketing",
    description:
      "Be at the forefront of your industry with Possesive Panda’s eCommerce marketing team of experienced professionals dedicated to bespoke SEO, PPC, and social media marketing.",
  },
  {
    icon: (
      <IoMdGitMerge className="text-[#04b7df] w-[1.406vw] h-[2.135vw] relative" />
    ),
    title: "eCommerce SEO",
    description:
      "Possesive Panda delivers the best SEO professionals to boost up your sales and traffic to your eCommerce website, providing exceptional on-page, off-page, and local SEO strategies.",
  },
  {
    icon: (
      <IoMdGitMerge className="text-[#04b7df] w-[1.406vw] h-[2.135vw] relative" />
    ),
    title: " eCommerce Web Design",
    description:
      "At Possesive Panda, we conduct thorough research and invest time to make sure that you will get a tailored and customized eCommerce website design.",
  },
  {
    icon: (
      <IoMdGitMerge className="text-[#04b7df] w-[1.406vw] h-[2.135vw] relative" />
    ),
    title: " eCommerce Web Development",
    description:
      " With the use of new technologies and experienced developers, Possesive Panda’s eCommerce website development delivers scalable, secure, and well-performing solutions.",
  },
];

// arya intro dynamic

const introServicesData = {
  heading: "What are eCommerce Services and Solutions?",
  content: [
    "eCommerce refers to buying and selling goods and services using the Internet. It includes activities like selecting products and services to transactions and processes that include online shopping. In eCommerce, customers shop whenever they want; there is no time bound for shopping.",
    "eCommerce services and solutions comprise a wide range of tools and technologies that allow businesses to sell products and services on the internet.",
    "In order to sell your products and services, you have an eCommerce platform that attracts your targeted customers. We not only provide e-commerce solutions but also ensure that they run smoothly.",
  ],
};

const titleData = {
  heading: "Choose Possesive Panda as Your eCommerce Success Partner",
  title: [
    "Delivered 50+ eCommerce websites across industries",
    "Live Video Consultation",
    "Expertise with all eCommerce development platforms.",
    "Voice-Assisted Shopping",
    "Enhanced traffic and sales",
    "Decentralized Marketplaces",
    "Google Partnership",
    "Interactive User Manuals",
    "Provide eCommerce solutions powered by AI/AR",
    "IOT-Powered eCommerce Operations",
  ],
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

const ourService = 
  {
    heading: "Our E-commerce Services",
    subHeading:"At Possesive Panda, we deliver a unique and personalized eCommerce experience for your business. For eCommerce design, eCommerce development platforms, eCommerce SEO, shopping campaigns, analytics, and hosting, we integrate our experience and expertise to make your business at the forefront.",
  
};
const servicesData22 = [
  {
    line: 1,
    services: [
      {
        icon: "GrSettingsOption",
        title: "eCommerce Consulting",
        description:
          "Possesive Panda delivers the best eCommerce solutions to improve your operational efficiency and user experience via consultancy from industry experts.",
      },
      {
        icon: "PiTimerBold",
        title: "eCommerce Implementation",
        description:
          "Get cloud platforms, payment gateways, POS systems, and CRMs implemented to your eCommerce web stores and mobile applications.",
      },
      {
        icon: "IoMdGitMerge",
        title: "eCommerce Marketing",
        description:
          "Be at the forefront of your industry with Possesive Panda’s eCommerce marketing team of experienced professionals dedicated to bespoke SEO, PPC, and social media marketing.",
      },
    ],
  },
  {
    line: 2,
    services: [
      {
        icon: "RiSeoLine",
        title: "eCommerce SEO",
        description:
          "Possesive Panda delivers the best SEO professionals to boost up your sales and traffic to your eCommerce website, providing exceptional on-page, off-page, and local SEO strategies.",
      },
      {
        icon: "FaRegFile",
        title: "eCommerce Web Design",
        description:
          "At Possesive Panda, we conduct thorough research and invest time to make sure that you will get a tailored and customized eCommerce website design.",
      },
      {
        icon: "BiCubeAlt",
        title: "eCommerce Web Development",
        description:
          "With the use of new technologies and experienced developers, Possesive Panda’s eCommerce website development delivers scalable, secure, and well-performing solutions.",
      },
    ],
  },
  {
    line: 3,
    services: [
      {
        icon: "VscCircuitBoard",
        title: "eCommerce Migration",
        description:
          "With proactive support, smart updates for business evolution, and continuous performance and security, our team makes sure you have a seamless eCommerce platform.",
      },
      {
        icon: "IoEarthOutline",
        title: "App Store Optimization (ASO)",
        description:
          "Use Possesive Panda’s ASO services to encourage app installs on the Apple and Play Stores if you also provide your customers with a mobile app.",
      },
      {
        icon: "BsGraphUp",
        title: "Conversion Rate Optimization",
        description:
          "Possesive Panda also provides CRO services to amplify your eCommerce website visitors and maximize your product and service sales.",
      },
    ],
  },
  {
    line: 4,
    services: [
      {
        icon: "FaIoxhost",
        title: "eCommerce Hosting",
        description:
          "Possesive Panda’s experienced professionals have eCommerce hosting mastery that will drive your website's performance and the shopping experience of the users.",
      },
      {
        icon: "SiCoinmarketcap",
        title: "Marketplace Integration",
        description:
          "Possesive Panda’s, Amazon, eBay, and marketplace integrations provide smooth synchronization, instantaneous data access, and improved user experiences.",
      },
      {
        icon: "SiGooglemarketingplatform",
        title: "B2B and B2C Portal Development",
        description:
          "Our team specializes in creating B2B and B2C portals, catering to your requirements that will improve the user experience, enhance client relationships, and increase customer satisfaction.",
      },
    ],
  },
];


const cardList ={
  subHeading: "Agile Approach",
  heading: " Our eCommerce Services Delivery Process",
  paragraph: "With Possessive Panda’s eCommerce Services, we aim to deliver exemplary experiences that will have a long-lasting impression on our clients and their customers.",
}

const cardData = [
  {
      title: "Initial Mapping",
      step: "Step 1",
      description: "For better client satisfaction, understanding clients requirements is necessary. To facilitate this, we conduct client meetings in which all the wants and needs are discussed and planned.",
  },
  {
      title: "Web Designing & Development",
      step: "Step 2",
      description: "This stage necessitates custom eCommerce website design and development, keeping user-friendliness, responsiveness, intuitive navigation, and high-converting product page stores in mind.",
  },
  {
      title: "Payment Processing",
      step: "Step 3",
      description: "At this stage, the integration of secure payment gateways is done to facilitate smooth transactions, offering various payment methods and options to cater to customer preferences.",
  },
  {
      title: "Logistics and Shipping",
      step: "Step 4",
      description: "This stage solely deals with managing logistics involving order fulfillment, shipping, and returns. We have a tie with shipping carriers to ensure timely delivery, and we offer real-time order tracking.",
  },
  {
      title: "Digital Marketing",
      step: "Step 5",
      description: "At this stage, we focus on establishing your eCommerce brand as a pioneer on the internet and maximizing the traffic and sales via audience engagement, including services like PPC and SEO, advertising, SMM, etc.",
  },
  {
      title: "Customer Support",
      step: "Step 6",
      description: "This stage facilitates the 24/7 customer support services, including live chat and multichannel support, to assist customers with their queries and inquiries to enhance customer satisfaction.",
  },
  {
      title: "Maintenance and Support",
      step: "Step 7",
      description: "Last but not least, we provide ongoing support and maintenance to ensure that your eCommerce platform remains functional, updated, and secure with cutting edge technology and industry best practices.",
  },
];

export {
  faq,
  servicesData,
  introServicesData,
  titleData,
  iconMapping1,
  servicesData22,
  ourService,
  cardData,
  cardList,
};
