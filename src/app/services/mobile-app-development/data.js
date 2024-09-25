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
    title: `How long would it take to create an app for my business?`,
    description: `It can vary as per your business's needs. The app will be strategically planned out, which will decide its features, complexity, structure, and overall approach. Accordingly, mobile applications development with advanced requirements will take more time than basic apps, which get finished in 1-3 months.`,
  },
  {
    title: `How much does it cost to build a mobile app?`,
    description: `Cost of getting your mobile app built and ready depends on the structure, features, app development software and tools that are employed, and other such requirements of the application. Possesive Panda gives you the option to set your budget frame for the project, keeping everything open to discussion to ensure maximum satisfaction.`,
  },
  {
    title: `How do I decide the type of mobile app for my company?`,
    description: `The type of application you should get developed for your company, along with its structure, features, app development software etc are decisions that come under the strategic planning of your app. Before the development process begins, the requirements of your company as well as market trends are analyzed and taken under consideration while planning the app so as to optimize it for maximum efficiency and competence.`,
  },
  {
    title: `Why is mobile app development important?`,
    description: `It can vary as per your business's needs. The app will be strategically planned out, which will decide its features, complexity, structure, and overall approach. Accordingly, mobile applications development with advanced requirements will take more time than basic apps, which get finished in 1-3 months.`,
  },
  {
    title: `What are the different kinds of mobile apps?`,
    description: `There are majorly three kinds of mobile applications, namely native apps, hybrid apps and web apps. Native apps are specific to their operating system. Hybrid apps are ones that work across platforms with some of the features of native apps as well. However, they do not perform as well as native apps do. Web apps work on web browsers across platforms but are unable to offer hardware features that native or hybrid apps do.`,
  },
  {
    title: `Why choose Possesive Panda for mobile app development?`,
    description: `Possesive Panda is a dynamic IT service provider that offers a wide range of benefits for our customers. These are flexible pricing, dedicated project management and tracking, customized and innovative solutions, high-priority data security, qualified experts, and more. Additionally, we hand the source code of the project over to the client, so that they can make updates and maintenance through any developer of their choice.`,
  },
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
        "The best routes for deliveries",
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
const smallfaqdata = [
  {
    key: 1,
    title: "Dedicated Project Manager",
    data: "For immersive client satisfaction and transparent communication, we provide dedicated project managers so that you don’t have to worry about your project and lead to smooth service delivery. ",
  },
  {
    key: 2,
    title: "Cost-Effective Solutions",
    data: "Why waste time and money setting up your own eCommerce infrastructure when Possesive Panda can do it for you? Our streamlined processes get your online store up and running swiftly, allowing you to focus on what you do best.",
  },
  {
    key: 3,
    title: "Experienced Team",
    data: "Possesive Panda deliver outstanding dynamic pricing for reduced expenses. We work within the budget provided to give our clients services that don't compromise quality and performance. This makes sure that clients get the most optimal solution possible.",
  },
  {
    key: 4,
    title: " Customized Solutions",
    data: "We understand each project's requirement is different. Hence, our services are tailor-made and created exclusively in tune with the client's needs. This approach guarantees that the final output aligns with their project goals",
  },
 
  {
    key: 5,
    title: "Innovative Approach",
    data: "We keep researching new technologies and methodologies to apply in our service delivery, coming up with creative solutions that will let our clients stand out amongst the competition.",
  },
];
const testimonialsData = [
  {
      name: "Emily R.",
      role: "Owner of EcoTrend Boutique",
      text: "Possesive Panda transformed our online store into a user-friendly, eco-friendly platform, resulting in increased traffic and sales, a testament to their expertise and dedication.",
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
    text: "Possesive Panda demonstrated professionalism and creativity in creating a functional and visually appealing e-commerce platform, resulting in higher customer satisfaction scores.",
},
{
  name: "Mia S.",
  role: "Director of Luxe Living",
  text: "Possesive Panda's team expertly revamped our online store, enhancing its design and SEO, resulting in increased organic traffic and a strong client satisfaction",
},
];
 const headingdata={

      //testimonials
      heading:" What our clients have to say",
      description:"Join us on our inspiring journey as we thrive on challenges and celebrate our successes with our clients."



};const iconMapping1 = {
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
  heading: "Our Mobile App Services ",
  subHeading:
    "Possesive Panda brings success for mobile app development, building customized solutions designed and implemented to ignite your business growth and ensure long-term success. Our team of seasoned and visionary developers creates immersive, tailored experiences focusing on captivating your audience and propelling your business to be at the forefront.",
};
const servicesData22 = [
  {
    line: 1,
    services: [
      {
        icon: "GrSettingsOption",
        title: "iOS Development",
        description:
          "With the global talents of iOS developers, we take pride in building exceptional and outstanding apps of various sorts. Our passion lies in turning clients' visions into reality, combining creativity with cutting-edge technology.",
      },
      {
        icon: "PiTimerBold",
        title: "Android App Development",
        description:
          "Being versatile in nature, Android development requires remarkable technical prowess with ingenuity. Our Android developers excel at delivering Android apps that can boost your customer engagement and provide success to your business.",
      },
      {
        icon: "IoMdGitMerge",
        title: "Cross-Platform App Development",
        description:
          "Catering to your requirements, we build cross-platform apps that work exquisitely across Apple devices like iPhones & iPads, Android phones, and tablets. We employ reliable and new-age technologies like Flutter, Xamarin, React Native, etc., to build cross platform apps.",
      },
    ],
  },
  {
    line: 2,
    services: [
      {
        icon: "RiSeoLine",
        title: "eCommerce Mobile App Development",
        description:
          "Possesive Panda revels in eCommerce app development with a keen focus on clean interfaces, secure payment options, and a sleek customer experience. Get an interactive and user-friendly eCommerce app that keeps your customers running and your business elevating.",
      },
      {
        icon: "FaRegFile",
        title: "AR/VR App Development",
        description:
          "Possesive Panda delivers engaging AR/VR apps for various industries like real estate, education, gaming, etc. Our team of developers and industry experts excel at delivering immersive applications that blend virtual elements with real-life, which enhances the user experience up a notch.",
      },
      {
        icon: "BiCubeAlt",
        title: "IOT Integration",
        description:
          "Possesive Panda also provides the integration of IoT (Internet of Things) to your app, just like smart home appliances, healthcare applications, retail management, etc. This allows you to bond with your customers and provide them with modernized solutions.",
      },
    ],
  },
  {
    line: 3,
    services: [
      {
        icon: "VscCircuitBoard",
        title: "UI/UX Design for Mobile Apps",
        description:
          "Possesive Panda’s expert designers build UI/UX designs for your mobile apps for a better user experience and easy navigation. Well-crafted mobile app designs can lead to better customer engagement and high conversions.",
      },
      {
        icon: "IoEarthOutline",
        title: "App Store Optimization (ASO)",
        description:
          "Use Possesive Panda’s ASO services to encourage app installs on the Apple and Play Stores if you also provide your customers with a mobile app.",
      },
      {
        icon: "BsGraphUp",
        title: "Mobile App Support and Maintenance",
        description:
          "Whether it's a bug fix, UI/UX enhancement, operating system upgrade, or new feature integration, our team guarantees continuous, round-the-clock support and maintenance services that comply with industry requirements and user needs.",
      },
    ],
  },
];

const cardList ={
  subHeading: "Agile Approach",
  heading: "Our Mobile Application Development Process",
  paragraph: "Companies do rely on us when it comes to Mobile App Development Services, because we incorporate well-established agile methodologies for intuitive app development.",
}

const cardData = [
  {
      title: "Strategy",
      step: "Step 1",
      description: "This stage defines the client's needs and wants. The initial step involves defining app’s goal and understanding the market scenarios. At Possesive Panda, we begin by learning more about your vision and project requirements.",
      point1:"Competitor Analysis",
      point2:"Choosing the Right Platform",
    },
  {
      title: "Planning ",
      step: "Step 2",
      description: "This stage deals with the analysis of researched data to create a detailed plan for the development of the app, keeping clients in the loop to enable transparency and identify practical details and functionalities essential for the app.",
      point1:"Project Roadmap Creation",
      point2:"Scope and Resource Allocation",
    },
  {
      title: "Designing",
      step: "Step 3",
      description: "This stage deals with the analysis of researched data to create a detailed plan for the development of the app, keeping clients in the loop to enable transparency and identify practical details and functionalities essential for the app.",
      point1:"UI/UX Design and Wireframing",
      point2:"Prototyping and Approval",
    },
  {
      title: "Development ",
      step: "Step 4",
      description: "We take your design and make it a reality with our skilled developers. We provide you with milestone deliverables and frequent progress reports to keep you updated throughout the process.",
      point1:"Full Stack Development",
      point2:"QA and Further Maintenance",
    },
  {
      title: "Testing ",
      step: "Step 5",
      description: "We use cutting-edge tools and techniques for iterative testing, which permits constant feedback and improvement based on client input, which is one of the key activities. Utilizing UAT to ensure quality assurance.",
      point1:"Identifying and fixing bugs",
      point2:"Functionality and security testing",
    },
  {
      title: "Deployment",
      step: "Step 6",
      description: "Once testing is completed and the client is satisfied with the built mobile app, the deployment process will start by choosing distributing channels like Apple App Store, Google Play Store, etc.",
      point1:"Implement marketing strategies",
      point2:"Further Modification and Evaluation",
    },
  {
      title: "Maintenance",
      step: "Step 7",
      description: "The final step of our mobile app development process is further maintenance and support for better results and client satisfaction. We provide regular updates to introduce features and fix bugs for better outcomes.",
      point1:"Monitoring user feedback",
      point2:"Post Delivery Support",
    },
];

export { faq, ourService, 
  servicesData22, 
  iconMapping1,
  cardList,
  cardData,

  StrategyData,
  paragraphs,
  buttonData,
  smallfaqdata,
  headingdata,
  testimonialsData,
};
