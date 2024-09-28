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

const testimonialsData = [
  {
    name: "Alex J.",
    role: "Startup Founder",
    text: "Possesive Panda exceeded our expectations by transforming our concept into a fully functional web app, with their knowledgeable and responsive team guiding us through every step.",
  },
  {
    name: "Maya T.",
    role: "E-commerce Manager",
    text: "Possesive Panda provided a comprehensive web app for our online store, showcasing their attention to detail and commitment to our timeline, resulting in a visually appealing and functional product.",
  },
  {
    name: "Ryan K.",
    role: "Digital Marketing Specialist",
    text: "Possesive Panda has significantly improved our web app development by integrating innovative features and ensuring user-friendly design, leading to a significant increase in client engagement.",
  },
  {
    name: "Lisa G.",
    role: "Nonprofit Director",
    text: "Possesive Panda's team successfully implemented our vision with a web app, enhancing our outreach efforts with their professionalism and creativity.",
  },
  {
    name: "Sam W.",
    role: "Product Manager",
    text: "Possesive Panda revolutionized web app development with a scalable solution, seamless project management, and ongoing support, setting the standard for business goals. Highly recommended.",
  },
];


const headingdata = {
  //testimonials
  heading: " What our clients have to say",
  description: "Join us on our inspiring journey as we thrive on challenges and celebrate our successes with our clients."

};
const buttonData = [
  "Web Designing ",
  "API Development ",
  "CMS Development ",
  "AI/ML Web Solutions",
  "Upgrade and Migration "
];

const paragraphs = [
  {
    number: "1",
    heading1: "What we Provide?",
    text1: "We offer exceptional web-design services customized to your needs. With the keen focus on user experience and client satisfaction, our UI/UX designers create web designs that are visually stunning and highly interactive. ",
    heading2: "How we Provide? ",
    text2: "Possesive Panda’s team of expert UI/UX designers and developers dedicatedly build layout design for websites and visual elements such as logos, images, vectors, and color schemes, for better customer experience and lasting engagement.   ",
    dotPoints: [
      "User Centric, Custom Design ",
      "Responsive Layouts with SEO Friendliness",
    ]

  },
  {
    number: "2",
    heading1: "What we Provide?",
    text1: "Our API development and integration services involve creating and managing APIs, enabling efficient communication and data sharing between software applications, streamlining operations, and improving user experiences. ",
    heading2: "How we Provide? ",
    text2: "Our team of experienced developers builds tailored APIs designed to meet your business-specific needs, allowing seamless interaction between different web apps. We deliver API management solutions, testing services, integration services, and security solutions. ",
    dotPoints: [
      "Custom API Solutions  ",
      "Realtime Data Access",
    ]
  }, {
    number: "3",
    heading1: "What we Provide?",
    text1: "Our Content Management System (CMS) development solutions include building and customizing web applications for enabling potential and current customers success by allowing managing, creating, and modifying content on your own. ",
    heading2: "How we Provide? ",
    text2: "Possesive Panda offers tailored CMS platforms, designed to meet your business needs. This includes building systems from scratch or customizing existing platforms like Wordpress, Drupal, or Joomla.  ",
    dotPoints: [
      "CMS Integration and Migration ",
      "Plugin and Module Development ",
    ]
  }, {
    number: "4",
    heading1: "What we Provide?",
    text1: "Our AI/ML web solutions enable enhanced functionality, improve customer experience and automate processes by employing the integration of artificial intelligence (AI) and machine learning technologies to web applications.  ",
    heading2: "How we Provide? ",
    text2: "Our AI/ML web solutions are revolutionizing businesses by integrating intelligent technologies to improve decision-making, enhance customer interactions, and automate processes across various industries. ",
    dotPoints: [
      "IoT Analytics and Chatbot Development",
      "Predictive Analysis and Genrative AI",
    ]
  }, {
    number: "5",
    heading1: "What we Provide?",
    text1: "With our web application upgrade and migration services, we enable businesses to seamlessly transition their outdated and legacy applications to modern, scalable and secure platforms.",
    heading2: "How we Provide? ",
    text2: "Our experienced professionals assess and analyze the application’s architecture, identifying areas for improvement and potential issues.",
    dotPoints: [
      "Platform Migration and Performance Optimization",
      "Data Integrity Assurance",
    ]
  },
];
const faq = [
  {
    title: `How long does it take to make a website?`,
    description: `It can vary as per the business's needs. The site will be strategically planned out, which will decide its features, complexity, structure, and overall approach. Accordingly, website development with advanced requirements will take more time than basic websites, which get finished in 1-3 months.`,
  },
  {
    title: `How much do web development services cost?`,
    description: `Cost of getting your website built and ready depends on the structure, features, web development and design software and tools that are employed, and other such requirements of the website. Possesive Panda gives you the option to set your budget frame for the project, keeping everything open to discussion to ensure maximum satisfaction.`,
  },
  {
    title: `Why should you choose Possesive Panda for making your website?`,
    description: `Possesive Panda is a dynamic IT service provider that offers a wide range of benefits for our customers. These are flexible pricing, dedicated project management and tracking, customized and innovative solutions, high-priority data security, qualified experts, and more. Additionally, we hand the source code of the project over to the client, so that they can make updates and maintenance through any web developer of their choice.`,
  },
  {
    title: `What are web development frameworks?`,
    description: `Web development frameworks, web application frameworks or web frameworks are sets of resources and tools used by developers in order to build and maintain websites, web applications, web services and also to develop APIs.`,
  },

  {
    title: `What is the website development process?`,
    description: `Web development and design is a complex and integrated process that commences with defining and planning the project before designing the layout and structure of the website. The content of the website is then created in alignment with the project planning, after which developers code the website into life. Testing of the site is done thoroughly before its final deployment, and regular maintenance is performed afterwards.`,
  },
  {
    title: `Why is website development important?`,
    description: `Having a website for your business is not a luxury, but a necessity in today’s age where businesses exist online more than they do traditionally. It helps you deliver information about your business offerings to the audience of your site, and market them by showing their importance and unique selling points.`,
  },
];

// arya data dynamic

const growthData = {
  heading: "Our Web Application Development Process",
  description:
    "Possesive Panda follows a standard yet dynamic process to deliver its services. It ensures that our solutions align with our clients’ specific needs. ",
  cards: [
    {
      id: 1,
      title: 'Understanding Client Needs',
      category: 'Client Satisfaction ',
      description:
        "Our initial consultation involves understanding clients' business goals, target audience, and requirements, followed by detailed discussions and competitor analysis to identify industry standards, opportunities, and threats.",
    },
    {
      id: 2,
      title: 'Planning and Strategy ',
      category: 'Bespoke Implementation',
      description:
        'The phase involves mapping out website architecture, creating a structure, layout, and functionality blueprint, and developing a content strategy for clear, concise, and engaging messaging.',
    },
    {
      id: 3,
      title: 'Intuitive UI/UX Design ',
      category: 'Enhanced CX',
      description:
        'This phase involves combining creativity and strategy to create visually appealing, intuitive interfaces for clients, incorporating feedback for customer satisfaction through interactive development.',
    },
    {
      id: 4,
      title: 'Coding the Website',
      category: 'Agile Development',
      description:
        'At this stage, our well-experienced web developers proceed to the development of the web applications. They employ best practices for frontend and backend development to create intuitive and scalable web applications.',
    },
    {
      id: 5,
      title: 'Testing and Quality Assurance',
      category: 'Performance Tracking',
      description:
        'We conduct thorough testing before launching a website, including features, interactivity, cross-browser compatibility, and optimal device experience, to ensure optimal SEO and website visibility.',
    },
    {
      id: 6,
      title: 'Successful & Scalable Launch',
      category: 'New Heights',
      description:
        ' Once testing is complete and any necessary adjustments are made, we prepare for the official launch. Deployment is done on Amazon Web Services (AWS) and our live site monitoring approach ensures everything runs smoothly after launch.',
    },
    {
      id: 7,
      title: 'Post Launch Support ',
      category: 'Further Maintenance',
      description:
        'Our commitment to client success extends beyond website launch, transferring source code for web development support and maintenance, and providing regular updates, performance monitoring, and content updates.',
    },
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

const ourService = {
  heading: "Web Application  Development Services",
  subHeading:
    "We offer tailored web application development services, including web designing, web application crafting, maintenance, and support for web applications, also involving seamless and scalable testing, debugging, and deployment. ",
};
const servicesData22 = [
  {
    line: 1,
    services: [
      {
        icon: "GrSettingsOption",
        title: "Custom Web Application Development",
        description:
          "Possesive Panda offers customized, bespoke web application development via industry experts and experienced developers. We prioritize client satisfaction over quantitative work. Our developers build intuitive, user-friendly, and secure web applications for your businesses.",
      },
      {
        icon: "PiTimerBold",
        title: "Enterprise Web Application Development",
        description:
          "Possesive Panda’s experienced web application developers specialize in the development of enterprise applications, focusing on dynamic CRM, ERP, cost management, and project management for your business.",
      },
      {
        icon: "IoMdGitMerge",
        title: "Web Portal Solutions",
        description:
          "Possesive Panda offers flawless web portal solutions, enabling businesses to have immersive connectivity and user engagement. Our developers use advanced, cutting edge technologies and functionalities.",
      },
    ],
  },
  {
    line: 2,
    services: [
      {
        icon: "RiSeoLine",
        title: "Progressive Web Application Development",
        description:
          "Our team of expert developers delivers top-notch progressive web applications (PWA) development with interactive UI/UX and seamless navigation aligning with your business tailored needs.",
      },
      {
        icon: "FaRegFile",
        title: "Cross Platform Web Application Development",
        description:
          "Possesive Panda offers cross platform web application development services catering to responsiveness, compatibility, and scalability using best-suited tools and technologies, ensuring an immersive customer experience (CX).",
      },
      {
        icon: "BiCubeAlt",
        title: "eCommerce Web Application Development",
        description:
          "From building your online stores to managing your marketplace, Possesive Padna offers a wide range of eCommerce services and solutions. Our eCommerce web app development services include building eCommerce websites on various platforms like Shopify or Magento.",
      },
    ],
  },
  {
    line: 3,
    services: [
      {
        icon: "VscCircuitBoard",
        title: "SaaS Application Development Services",
        description:
          "Possesive Panda’s SaaS developers are proficient in a variety of technologies, they write excellent code, and our PMO uses well-established KPIs to ensure that engineers are producing their best work.",
      },
      {
        icon: "IoEarthOutline",
        title: "Web Application Integration Services",
        description:
          "Possesive Panda excels at delivering top-notch web application integration services, from simple database updates to intricate web application integration. Our team of expert professionals drives data-driven cooperation for better results.",
      },
      {
        icon: "BsGraphUp",
        title: "Web Application Modernization Services",
        description:
          "Possesive Panda offers web application modernization services consisting upgrading web apps to new technologies and enhance performance with the integration of Internet of Things (IoT), machine learning and artificial intelligence (AI).",
      },
    ],
  },
];

const whyData = {
  mainHeading: "Partner with Possesive Panda for Your Web Application Development Success",
  subText1: "Possesive Panda is a professional web application development company that specializes in creating customized, innovative web apps for various industries, including eCommerce, finance, and e-learning. ",
  subText2:
    "Our team of developers is skilled in creating generic and native apps with enthusiasm and dexterity. We offer long-term support contracts for our work, ensuring that our clients' imaginations are shaped perfectly.",
  thumbnail: '/assets/services/e-commerce/thumbnail.png',
  listHeading:
    "Possesive Panda is a pioneer IT solution provider and deliver outstanding web application development services:",
  titles: [
    { title: "Dynamic Pricing " },
    { title: "SEO Integration" },
    { title: "24/7 Assistance" },
    { title: "Scalable Solutions" },
    { title: "Maximized ROI(s)" },
    { title: "DEffective applications" },
    { title: "Customer Interaction & Business Automation" },
    { title: "Cross-platform Capability" },
  ],
};



export {
  faq,
  growthData,
  whyData,
  paragraphs,
  buttonData,
  headingdata,
  testimonialsData,
  iconMapping1,
  ourService,
  servicesData22,
};
