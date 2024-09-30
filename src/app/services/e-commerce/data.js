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
import { IoMdGitMerge } from "react-icons/io";
import img1 from '../../../../public/assets/image_1821.svg';
import img2 from '../../../../public/assets/image_1822.svg';
import img3 from '../../../../public/assets/image.svg';
import Img1 from "../../../../public/assets/wordpress.svg"
import Img2 from "../../../../public/assets/wix.svg"
import Img3 from "../../../../public/assets/sellfy.svg"
import Img4 from "../../../../public/assets/woocommerce.svg"
import Img5 from "../../../../public/assets/weebly.svg"
import Img6 from "../../../../public/assets/shopify.svg"
import Img7 from "../../../../public/assets/magento.svg"
import Img8 from "../../../../public/assets/sap.svg"
import Img9 from "../../../../public/assets/salesforce.svg"

const faq = [
  {
    title: "Why should you choose Possesive Panda as your eCommerce partner?",
    description: `Possesive Panda is a reliable and reputable eCommerce service and solutions provider, catering to each and every need of the clients. We deliver eCommerce solutions in their totality, ranging from building an eCommerce platform to delivering your products seamlessly.`,
  },
  {
    title: "How much will it cost to build an eCommerce platform?",
    description: `Depending on the features required, the intricacy of the platform, and the resources and experience of the development team, the price of creating an eCommerce website can vary greatly. Working with an experienced development team that can provide accurate estimates and milestones is crucial. If you want to know about this, then have a quick meeting with our consultant and resolve every doubt of yours.`,
  },
  {
    title: "Do we integrate third-party tools and services into your eCommerce site?",
    description: `Yes, we incorporate necessary third-party solutions to improve your online store. We can help with everything from payments (Stripe, PayPal) and marketing automation (Mailchimp, Klaviyo) to shipping (ShipStation, EasyPost), analytics (Google Analytics), and shipment.`,
  },
  {
    title: "Why do I need eCommerce solutions?",
    description: `E-commerce solutions help in the smooth running of processes in setting up and managing an online store. They enable businesses to reach a wider audience and increase sales. They also help manage inventory, the payment process, and logistics.`,
  },
  {
    title: "How do I choose the right eCommerce platform?",
    description: `When choosing an e-commerce platform, consider factors such as ease of use, scalability, cost, customization options, and your business's specific needs.`,
  },
  {
    title: "How will I follow up on my eCommerce website development project?",
    description: `We regularly update you on the status of the tasks. Also, a project manager will be appointed to assist you with all the details of your project.`,
  },
  {
    title: "How long does it take to design and launch an eCommerce website?",
    description: `This depends upon how big and complex the project is. Our aim is to provide quick and effective solutions while making sure the work is done on time. When we plan the project our project manager gives a clear deadline.`,
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
    "In order to sell your products and services, you have an eCommerce platform that attracts your targeted customers. We not only provide e-commerce solutions but also ensure that they run smoothly."
  ]
};

const titleData = {
  heading: "Choose Possesive Panda as Your eCommerce Success Partner",
  title: [
    "Delivered 50+ eCommerce Websites across Industries",
    "Expertise with all eCommerce Development Platforms",
    "Enhanced Traffic and Sales",
    "Google Partnership",
    "Live Video Consultation",
    "Voice-Assisted Shopping ",
    "Decentralized Marketplaces",
    "Interactive User Manuals",
    "Provide eCommerce Solutions Powered by AI/AR",
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
    heading: "eCommerce Services",
    subHeading:"At Possesive Panda, we deliver a unique and personalized eCommerce experience for your business. For eCommerce design, eCommerce development platforms, eCommerce SEO, shopping campaigns, analytics, and hosting, we integrate our experience and expertise to make your business at the forefront. ",
  
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
        title: "Conversion Rate Optimization (CRO)",
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
  heading: "Our eCommerce Services Delivery Process",
  paragraph: "With Possesive Panda’s eCommerce Services, we aim to deliver exemplary experiences that will have a long-lasting impression on our clients and their customers.",
}

const cardData = [
  {
      title: " Initial Mapping ",
      step: "Step 1",
      description: "For better client satisfaction, understanding clients requirements is necessary. To facilitate this, we conduct client meetings in which all the wants and needs are discussed and planned.",
  },
  {
      title: "Web Designing and Development",
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
      description: "This stage facilitates 24/7 customer support services, including live chat and multichannel support, to assist customers with their queries and inquiries to enhance customer satisfaction.",
  },
  {
      title: "Maintenance and Support ",
      step: "Step 7",
      description: "Last but not least, we provide ongoing support and maintenance to ensure that your eCommerce platform remains functional, updated, and secure with cutting edge technology and industry best practices.",
  },
];

// pushkar data dynamic
const testimonialsData = [
  {
    name: "Emily R.",
    role: "Owner of EcoTrend Boutique",
    text: "Possesive Panda transformed our online store into a user-friendly one, resulting in increased traffic and sales, a testament to their expertise and dedication.",
  },
  {
    name: "Jake M.",
    role: "Founder of Urban Gear Co.",
    text: "Possesive Panda's innovative e-commerce solutions exceeded expectations, optimizing our site and providing valuable market trends insights, leading to increased conversion rates.",
  },
  {
    name: "Lisa K.",
    role: "CEO of Artisan Delights",
    text: "Possesive Panda demonstrated professionalism and creativity in creating a functional and visually appealing e-commerce platform, resulting in higher customer satisfaction scores.",
  },
  {
    name: "Carlos T.",
    role: "Founder of Gadget Galaxy",
    text: "Possesive Panda revitalized our outdated online store with modern, responsive design, proactive issue resolution, and efficient support, resulting in increased sales and improved user experience.",
  },
  {
    name: "Mia S.",
    role: "Director of Luxe Living",
    text: "Possesive Panda's team expertly revamped our online store, enhancing its design and SEO, resulting in increased organic traffic and a strong client satisfaction.",
  },
];

 const headingdata={

      //testimonials
      heading:" What our clients have to say",
      description:"Join us on our inspiring journey as we thrive on challenges and celebrate our successes with our clients."



};


const smallfaqdata = [
  {
    key: 1,
    title: "Expert Guidance with Industry Expertise",
    data: "Possesive Panda encompasses experienced eCommerce professionals and industry experts. With top-notch technologies and strategies, we transform online stores into powerful assets ensuring your digital presence is nothing short of extra-ordinary. ",
  },
  {
    key: 2,
    title: "Time and Cost Efficiency",
    data: "Why waste time and money setting up your own eCommerce infrastructure when Possesive Panda can do it for you? Our streamlined processes get your online store up and running swiftly, allowing you to focus on what you do best.",
  },
  {
    key: 3,
    title: "Technical support and maintenance",
    data: "We provide ongoing support and maintenance, keeping your site secure and running smoothly. Possesive Panda’s technical support ensures your online store adapts to new trends and features seamlessly, keeping you ahead of the curve.",
  },
  {
    key: 4,
    title: " Competitive Advantage",
    data: "With Possesive Panda’s eCommerce solution, stay ahead in your industry. We design and strategize our eCommerce solutions in order to outshine your competitors and make you at the forefront. ",
  },
 
  {
    key: 5,
    title: "Flexibility",
    data: "Whether you are B2B, B2C, C2B, or something unique, Possesive Panda has you covered. We can easily add new products and services to your store and quickly adapt to market needs.",
  },
];


 const hoverImageData = {
  text: {
    subheading: "With Possessive Panda",
    heading: "Implement a Data-driven SEO Strategy to Boost Sales",
    description:
      "We aim for enhanced revenue for your businesses by implementing the best SEO strategies involving improved website ranking, expanding brand awareness, and generating qualified leads.With Possesive Panda, staying updated with industry innovations and understanding search engine operations, businesses can develop effective strategies for their clients. A data-driven approach ensures a user-friendly website with relevant information, generating more traffic and boosting brand recall.",
  },
  images: {
    
      image1: img1,
     
    
    
        image2: img2,
     
   
        image3: img3,
    
    },
  };

   const servicesData1 = [
    { title: "Variety of services", description: "Make sure a digital marketing services provider has a comprehensive service suite before deciding to work with them." },
    { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },
    { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },
    { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },
    { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },
    { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },

];

 const sectionContent = {
    title: "How to Choose a Digital Marketing Service Provider for Your Business",
    description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements."
};
 const buttonData= [
  "eCommerce Stores ",
  "eCommerce Portals ",
  "Logistics Software",
  "eCommerce CRM",
  "Inventory Management"
];

 const paragraphs=[
  {
      number: "1",
      heading1: "What we Provide?",
      text1: "We create eCommerce stores of various sorts, i.e., Business-to-Business, Business-to-Consumers, and Consumers-to-Consumers offering features like product cataloging, product reviews, shipping, and optimum customer service for a better experience. ",
      heading2: "How we Provide? ",
      text2: "Ensuring seamless and a user-friendly shopping experience from browsing to checkout is the goal of developing responsive online eCommerce stores. Our emphasis on simple checkout procedures and easy navigation, together with the integration of necessary retail tools. ",
      dotPoints: [
        "Instinctive Navigation",
        "Streamlined checkout procedures",
        "Combination with key retail instruments",
      ]

  },
  {
      number: "2",
      heading1: "What we Provide?",
      text1: "Our eCommerce portal development solutions involve robust infrastructure for order management, payment integration, and inventory management that enhance brand visibility and sales. ",
      heading2: "How we Provide? ",
      text2: "Possesive Panda’s expertise lies in exceptional eCommerce portals equipped with powerful analytics tailored to customer needs, resulting in more successful consumer engagement and individualized shopping experiences.",
      dotPoints: [
        "Strong Analytics Planning ",
        "Bespoke Strategies",
        "Captivating UI/UX",
      ]
  }, {
      number: "3",
      heading1: "What we Provide?",
      text1: "Possesive Panda aims to deliver the logistic software development, that will reduce cost, improve efficiency, and enhance customer satisfaction. We deliver automated solutions like order tracking, routing, and delivery planning for better business outcomes.",
      heading2: "How we Provide? ",
      text2: "We provide specialized logistics software to improve the efficiency of your online storefront. Our solutions are made with the goal of improving overall logistics efficiency, with a particular emphasis on the best delivery routes, real-time status tracking, and effective invoice creation. ",
      dotPoints: [
        "The best routes for deliveries",
        "Tracking conditions in real-time",
        "Effective creation of invoices",
      ]
  }, {
      number: "4",
      heading1: "What we Provide?",
      text1: "We provide reliable and secure customer relationship management (CRM) systems to store your customer details, information, and leads that will be leveraged for better sale opportunities.  ",
      heading2: "How we Provide? ",
      text2: "With the help of our CRM solutions, businesses can offer individualized shopping experiences by gaining comprehensive insights into their customers. They are intended to increase client interactions and sales efficiency. ",
      dotPoints: [
        "Cutomized Shopping Experience",
        "Optimization of Sales Campaign",
        "Enhanced Pipeline Management",
      ]
  }, {
      number: "5",
      heading1: "What we Provide?",
      text1: "Possesive Panda’s inventory management solutions include the management of various supplies and processes. We focus on managing the flow of raw materials from production to finished goods. ",
      heading2: "How we Provide? ",
      text2: "Our real-time stock tracking capabilities in inventory management systems help to streamline the supply chain, avoid stock-outs, and give better merchandising tactics. The main objective is to enhance the overall efficiency of inventory and shipping procedures.",
      dotPoints: [
        "Preventing shortages of inventory",
        "Optimization of the supply chain",
        "Improved shipping and merchandise techniques"
      ]
  },
];

const platformsData = [
  {
    images: [
      {
        imageSrc: Img1,  // Ensure `platformImg1` is defined or imported
        altText: "WordPress"
      },
      {
        imageSrc:Img2,  // Ensure `platformImg2` is defined or imported
        altText: "wix"
      },
      {
        imageSrc: Img3,  // Ensure `platformImg3` is defined or imported
        altText: "sellfy"
      },
      {
        imageSrc: Img4,  // Ensure `platformImg1` is defined or imported
        altText: "woocommerce"
      },
      {
        imageSrc: Img5,  // Ensure `platformImg2` is defined or imported
        altText: "weebly"
      },
      {
        imageSrc: Img6,  // Ensure `platformImg3` is defined or imported
        altText: "shopify"
      },
      {
        imageSrc: Img7,  // Ensure `platformImg1` is defined or imported
        altText: "magento"
      },
      {
        imageSrc: Img8,  // Ensure `platformImg2` is defined or imported
        altText: "sap"
      },
      {
        imageSrc: Img9,  
        altText: "salesforce"
      },
    ],
    text: {
      heading: "eCommerce Platforms we worked with",
      paragraph: "We've collaborated with various eCommerce platforms, each with its own unique strengths. These platforms have enabled us to optimize eCommerce solutions, boost sales, and enhance customer experiences."
    }
  }
];
const StrategyData = [
  {
      num: "01",
      title: "Strategic Planning",
      description:
          "We focus on learning about your business goals and competitors. This helps us plan and move forward with the project.",
  },
  {
      num: "02",
      title: "Design Concept",
      description:"We create a design that matches your brand and attracts your customers. Our designs are easy to use and reflect your brand. "
    },
  {
      num: "03",
      title: "Development",
      description:
          "With the help of the latest technologies, we develop our solutions. Our team uses the best ways to add features.",
  },
  {
      num: "04",
      title: "Testing and QA",
      description:
          "Before finalizing, we check our solutions on various devices and web browsers to make sure they work perfectly.",
  },
  {
      num: "05",
      title: "Support and Upgrade",
      description:
          "We provide regular help and updates to improve your website's performance.",
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
  paragraphs,
  buttonData,
  sectionContent,
  servicesData1,
  hoverImageData,
  smallfaqdata,
  headingdata,
  testimonialsData,
  platformsData,
  StrategyData

};
