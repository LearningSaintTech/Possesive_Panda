import img1 from '../../../../public/assets/image_1821.svg';
import img2 from '../../../../public/assets/image_1822.svg';
import img3 from '../../../../public/assets/image.svg';

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

const growthData = {
  heading: "Impact of Digital Marketing on Business Growth",
  description:
    "Digital marketing services enable companies of all sizes to effectively promote their brands, broaden market reach, and offer products and services to target customers.",
  cards: [
    {
      id: 1,
      title: "Enhanced Brand Visibility",
      category: "Online Presence",
      description:
        "Digital marketing services enhance brand visibility through search engine optimization (SEO), enabling businesses to achieve higher rankings in search results, crucial for consumers search engine discovery.",
    },
    {
      id: 2,
      title: 'Targeted Audience Engagement',
      category: 'Customer Interaction',
      description:
        'Digital marketing services enable businesses to target specific audience segments based on demographics, interests, and behaviors, ensuring marketing resonates with the right people and increasing conversions.',
    },
    {
      id: 3,
      title: 'Cost-Effective Marketing',
      category: 'Maximized ROI',
      description:
        'Digital marketing offers cost-effective alternatives to traditional methods, enabling businesses to reach a larger audience through channels like social media, email, and PPC advertising.',
    },
    {
      id: 4,
      title: 'Flexibility and Scalability',
      category: 'No Boundation',
      description:
        'Digital marketing services provide flexibility, enabling businesses to adapt strategies based on market conditions and customer feedback, ensuring growth in a fast-paced digital environment.',
    },
    {
      id: 5,
      title: 'Results and Insights',
      category: 'Performance Benchmarking',
      description:
        'Digital marketing offers accurate measurement of results through real-time tracking of KPIs like website traffic, conversion rates, and ROI, enabling continuous optimization & effective resource allocation.',
    },
  ],
};

const faq = [
  {
    title: `What is Digital Marketing?`,
    description: `Digital marketing refers to all parts and actions of marketing an organization, business, or brand via digital channels on the internet. Digital marketing strategies and approaches are designed to reach specific online audiences via a wide range of internet-connected devices.
Digital marketing comprises search engine optimization (e.g., Google and Bing), social media visibility and interaction, email marketing communications, website design and development, and integrated applications for connecting and engaging with prospects and consumers.`,
  },
  {
    title: `Why is Digital Marketing important for my business?`,
    description: `Digital marketing offers you the opportunity to captivate new customers and clients by strategies and marketing campaigns. You can monitor and enhance your ROI (s) and market campaign and be sure that you are investing your money and time for the right customer or audience. `,
  },
  {
    title: `How does Digital Marketing help my business grow?`,
    description: `Digital marketing directly correlates with business growth by enabling your businesses to have brand value. It also helps increase brand awareness among valuable customers through engagement.`,
  },
  {
    title: `What services and solutions does Possesive Panda provide?`,
    description: `Ultimately, we offer a plethora of digital marketing services and solutions, to name a few. Below is the list: 

Search Engine Optimization (SEO),
Social Media Marketing (SMM),
Copywriting & Content Marketing,
Conversion Rate Optimization (CRO),
App Store Management (ASO),
Email Marketing,
Influencer Marketing,
Website Design & Development,
Online Reputation Management,
Youtube Optimization and Video Marketing,
Affiliate Marketing ,
Web Hosting.

And we also provide outstanding digital marketing solutions to make your business at the forefront of your industry. Below is the list: 

Brand Building, 
Content and Web Personalization, 
B2B Marketing, 
Analytics and Data Insights, 
Voice Search Optimization.
`,
  },
  {
    title: `What are the latest trends in digital marketing?`,
    description: `Current trends include video marketing, influencer marketing, personalized marketing, content marketing, and the use of chatbots.`,
  },
  {
    title: `Why to choose Possesive Panda for your Digital Marketing Success? `,
    description: `Possesive Panda is one of the leading digital marketing companies, providing onshore and offshore digital marketing services and solutions. With the primary intent of getting your business or brand at the top of your domain. `,
  },
  {
    title: `How cost-effective is digital marketing as compared to traditional marketing?`,
    description: `Digital marketing is cost-effective since it allows you to directly reach your target audience. Consider how traditional marketing reaches a broad audience. In contrast, digital marketing employs a targeted strategy, engaging the consumer with the appropriate message at the appropriate moment. You can quickly measure your digital marketing activities and associated costs, reducing wasteful spending. This is far more challenging in typical marketing campaigns.`,
  },
];


const buttonData= [
  "Brand Building",
  "User-Specific Content",
  "B2B Marketing",
  "Analytical Insights ",
  "Voice Search Optimization"
];

 const paragraphs=[
  {
      number: "1",
      heading1: "What we Provide?",
      text1: "Possesive Panda offers complete, comprehensive digital marketing solutions for brand building. From domain structure to your digital success, we thrive on each and every digital marketing service and solution that will elevate your brand’s online visibility.  ",
      heading2: "How we Provide? ",
      text2: "With tailored digital marketing solutions, we excel at making your business reach in the minds of your targeted customers, eventually increasing sales with your business upliftment.  ",
      dotPoints: [
        "Customized Digital Marketing Solutions",
        "Enhanced Customer Reach, Ultimately Advanced Business Growth",
      ]

  },
  {
      number: "2",
      heading1: "What we Provide?",
      text1: "We offer custom content development of various sorts for your website, social media, youtube, ad-campaigns, etc. We aim at taking your business to new heights via personalized content creation and content marketing.  ",
      heading2: "How we Provide? ",
      text2: "We have dedicated teams for content writing, copywriting, video creation, anchoring, and development consisting of experts with a view to providing optimum services for your business growth. ",
      dotPoints: [
        "Tailored Content Development  ",
        "Personalized Web-App Development",
       
      ]
  }, {
      number: "3",
      heading1: "What we Provide?",
      text1: "Keeping in mind that B2B marketing is important for digital marketing, Possesive Panda  delivers solutions for establishing trust, increasing revenue, and addressing unique needs for your customers. ",
      heading2: "How we Provide? ",
      text2: "With the use of new-age technologies and tools, we embrace your digital presence and success. We track user behavior and conversion rates and analyze audiences to understand demographics and interest. ",
      dotPoints: [
        "Personalized CRM Platforms",
        "Omnichannel Marketing Solutions",
       
      ]
  }, {
      number: "4",
      heading1: "What we Provide?",
      text1: "Possesive Panda offers various analytics models like descriptive analytics, predictive analytics, and prescriptive analytics, enabling businesses to make informed decisions, optimize strategies, and enhance customer engagement.",
      heading2: "How we Provide? ",
      text2: "Our team of expert digital marketers uses tools like GA4, Google Search Console, etc., to monitor website performance, social media analytics, and email marketing analytics for better outcomes.  ",
      dotPoints: [
        "Data Visualization Monitoring ",
        "Campaign Performance Monitoring  ",
        
      ]
  }, {
      number: "5",
      heading1: "What we Provide?",
      text1: "To maximize your reach, we also offer voice search optimization encompassing prioritization of local SEO, using conversation language, and implementation of schema markup. These processes involve Natural Language and centralized local SEO to capture voice search queries. ",
      heading2: "How we Provide? ",
      text2: "In order to provide you with high visibility, high CTR, and an enhanced user experience, our digital marketing experts use the latest technologies and incorporate customized voice search optimization tactics. ",
      dotPoints: [
        "Natural Language Processing",
        "Prioritized Semantics of Search",
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
    data: "Possesive Panda delivers outstanding dynamic pricing for reduced expenses. We work within the budget provided to give our clients services that don't compromise quality and performance. This makes sure that clients get the most optimal solution possible.",
  },
  {
    key: 3,
    title: "Experienced Team",
    data: "The professionals in our team are highly qualified with all the relevant industry experience. Everyone brings skills, expertise, and knowledge to the table that, among other factors, assure excellent service delivery and complete client satisfaction.",
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
const servicesData1 = [
  { title: "Variety of services", description: "Make sure a digital marketing services provider has a comprehensive service suite before deciding to work with them." },
  { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },
  { title: "Harmony", description: "Determine whether the agency's work ethic is consistent with yours. Do know about the company in detail in order to make sure about the authenticity." },
  { title: "Encouragement", description: "Multiple actions are frequently carried out in parallel during digital marketing. That’s why, the agency you select needs to provide ongoing assistance." },
  { title: "Safety", description: "Working together with a digital marketing provider will provide them access to private data. Continuously check for data misuse and security lapses." },

];

const sectionContent = {
  title: "How to Choose a Digital Marketing Service Provider for Your Business",
  description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements."
};
const hoverImageData = {
  text: {
    subheading: "With Possesive Panda",
    heading: "Generate Leads and Maximize Your ROI",
    description:
      "Digital marketing can only be successful if it generates a return on investment. We are committed to helping your business achieve long-term revenue development. With our  expertise as digital marketing consultants and exposure to cross-industry knowledge, we select the marketing mix and overall approach that best meet your demands and goals.",
      description1:"We maximize your marketing investment by excelling at what we do: using various tools and digital platforms to increase campaign effectiveness and developing plans that produce outstanding results. Customer growth is always a key priority for us; our values and skills ensure that we provide excellent ROI to our customers.",
      description2:"We value open communication and feedback, and we'd like to hear what your short- and long-term goals are, whether they're new customer acquisition, increased engagement, or creating awareness, loyalty, and affinity. We plan, strategize, execute, and review properly.",
  },
  images: {
    
      image1: img1,
     
    
    
        image2: img2,
     
   
        image3: img3,
    
    },
  };

  const testimonialsData = [
    {
      name: "Emili C.",
      role: "Ed-Tech Firm Owner",
      text: "Possesive Panda has transformed our online presence! Their team crafted a comprehensive digital marketing strategy that significantly boosted our website traffic and engagement. I’m thrilled with the results and the ongoing support they provide.",
    },
    {
      name: "Mark R.",
      role: "E-commerce Manager",
      text: "The expertise of Possesive Panda in digital marketing is unmatched. They helped us optimize our ad campaigns, leading to a substantial increase in conversions. Their data-driven approach and creativity have made a huge impact on our bottom line.",
    },
    {
      name: "Emily S.",
      role: "Nonprofit Director",
      text: "I cannot recommend Possesive Panda enough! They understood our mission and created a digital marketing plan that resonated with our audience. Their ability to engage supporters through social media and email campaigns has been invaluable for our fundraising efforts.",
    },
    {
      name: "Ryan K.",
      role: "Startup Founder",
      text: "Possesive Panda has been instrumental in launching our brand. From SEO to content marketing, their tailored strategies helped us build a solid online foundation. Their team is responsive, innovative, and truly invested in our success.",
    },
    {
      name: "Sarah H.",
      role: "Marketing Coordinator",
      text: "Working with Possesive Panda has been a fantastic experience! They took the time to understand our goals and crafted a digital marketing strategy that delivered results. Their professionalism and dedication to our success are second to none.",
    },
  ];
  
  const headingdata={

    //testimonials
    heading:" What our clients have to say",
    description:"Join us on our inspiring journey as we thrive on challenges and celebrate our successes with our clients."



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
  heading: "Digital Marketing Services",
  subHeading:
    "With Possesive Panda’s result-driven Digital Marketing Services and Solutions, be the pinnacle of your domain. Via our digital marketing services, you can leverage seamless product and service marketing across every digital platform. We solely aim at building your lasting and credible online presence for your business success.",
};

const servicesData22 = [
  {
    line: 1,
    services: [
      {
        icon: "GrSettingsOption",
        title: "Search Engine Optimization (SEO)",
        description:
          "Possesive Panda offers SEO services to make your website rank higher. With white hat SEO practices, we enable you to get organic traffic, which ultimately leads to higher conversions. Our SEO experts employ on-page SEO, off-page SEO, and technical SEO for high-quality lead generation.",
      },
      {
        icon: "PiTimerBold",
        title: "Social Media Marketing (SMM)",
        description:
          "Our social media marketing services cater to building strategies for customer reach and engagement. We identify your requirements, perform competitor analysis, and evaluate your customer digital behavior to enhance organic reach and create social media marketing campaigns that enhance getting leads and elevate revenue.",
      },
      {
        icon: "IoMdGitMerge",
        title: "Copywriting & Content Marketing",
        description:
          "Possesive Panda offers content marketing services for enhanced business authenticity and credibility. Our content and copywriting experts deliver top-notch content for your business so that you can engage with your audience and customers and also elevate your brand identity.",
      },
    ],
  },
  {
    line: 2,
    services: [
      {
        icon: "RiSeoLine",
        title: "Conversion Rate Optimization (CRO)",
        description:
          "Our digital marketing services do not just increase your traffic, we also optimize your website for a high conversion rate. With our top-notch CRO services, you can drive more website visits to the bottom of the sales funnel and raise your conversion rate. Also, we provide a secure payment gateway, design uncluttered landing pages, and streamline your site’s navigation.",
      },
      {
        icon: "FaRegFile",
        title: "App Store Management (ASO)",
        description:
          "Use Possesive Panda’s ASO services to encourage app installs on the Apple and Play Stores if you also provide your customers with a mobile app. We thrive on optimizing your app on various criteria, such as SEO, easy accessibility, and user-friendliness, leading to higher ranking on various app stores.",
      },
      {
        icon: "BiCubeAlt",
        title: "Email Marketing",
        description:
          "Successful online marketing campaigns need to have optimum email marketing for better results. Our email marketing services enable you to reach potential customers. Our email marketing experts build strategies and email templates for promoting and marketing your products and services.",
      },
    ],
  },
  {
    line: 3,
    services: [
      {
        icon: "VscCircuitBoard",
        title: "Influencer Marketing",
        description:
          "Right now, influencer marketing has a buzz all over the world. Possesive Panda provides influencer marketing services that include promotion of your brand, products, and services across various social media platforms by the influencers who can captivate and attract a larger audience.",
      },
      {
        icon: "IoEarthOutline",
        title: "Web Design & Development",
        description:
          "With Possesive Panda’s website design and development services and solution, you can leverage building an innovative, SEO-friendly, and user-friendly website. With our dedicated developers of various sorts, you can capture your target audience with professional website design and development.",
      },
      {
        icon: "BsGraphUp",
        title: "Online Reputation Management",
        description:
          "With Possesive Panda’s online reputation management, make your brand credible. We thrive on enhancing your brand’s online visibility and making it intuitive and persuasive. Our ORM solutions comprise creating a positive and lasting image of your business or brand on various review platforms.",
      },
    ],
  },
  {
    line: 4,
    services: [
      {
        icon: "FaIoxhost",
        title: "Youtube Optimization and Video Marketing",
        description:
          "The new-age digital marketing solutions encompass video marketing, resulting in enhanced customer engagement. We deliver video marketing solutions that will captivate your targeted customer’s attention and create your brand’s hype, also focusing on Youtube optimization from scriptwriting to delivering engaging visual content for your brand.",
      },
      {
        icon: "SiCoinmarketcap",
        title: "Affiliate Marketing",
        description:
          "With Possesive Panda’s affiliate marketing strategies and solutions, we enable you to increase your brand awareness, reach a wider audience, and most importantly, derive sales. We build customized and maximized ROI strategies that will promote your brand and your products and services.",
      },
      {
        icon: "SiGooglemarketingplatform",
        title: "Web Hosting",
        description:
          "Our web-hosting services and solutions deal with network monitoring, system backup and restoration, malware scanning and removal, file management, and website acceleration. In order to increase the security of your website, we also provide free Secure Sockets Layer (SSL) certificates, limitless bandwidth, and data transfer.",
      },
    ],
  },
];

export { faq, 
  growthData, 
  paragraphs,
  buttonData,
  smallfaqdata,
  sectionContent,
  servicesData1,
  hoverImageData,
  testimonialsData,
  headingdata,
  iconMapping1, 
  ourService, 
  servicesData22 
};
