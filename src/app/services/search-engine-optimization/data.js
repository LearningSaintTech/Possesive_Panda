import dynamic from "next/dynamic";
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
import { FaArrowRight } from "react-icons/fa6";

const faq = [
  {
    title: `How does SEO work?`,
    description: `It works by optimizing various aspects of a website and content to improve its visibility and ranking. During this process, the website's keywords, content, links, user experience, and technical aspects are optimized.`,
  },
  {
    title: `What benefits will SEO provide?`,
    description: `When your website is on top, you can expect more traffic and queries from your potential clients, allowing you to do business with them.`,
  },
  {
    title: `What is the difference between on-page and off-page SEO?`,
    description: `On-page SEO refers to changes that are made directly to your website. On the other hand, off-page SEO refers to activities performed on other websites to benefit your website.`,
  },
  {
    title: `How long does SEO take to show results?`,
    description: `With consistent effort and strategic optimization, significant improvements in rankings and traffic can be seen within 4-6 months.`,
  },
  {
    title: `How do I measure SEO growth?`,
    description: `SEO success can be measured by measuring organic traffic growth, keyword rankings, and conversion rates. Tools like Google Analytics and Search Console provide valuable insights into these metrics.`,
  },
  {
    title: `What are backlinks in SEO?`,
    description: `Backlinks are also called inbound links because they represent another website's traffic coming to your website. The quality and quantity of your backlinks can help you rank higher in search engines such as Google and Bing.`,
  },
  {
    title: `Why has my organic traffic dropped?`,
    description: `Poor-quality content, outdated information, or content that doesn't match user intent can lead to a drop in organic traffic as search engines prioritize high-quality, valuable content.`,
  },
];

// arya data dynamic
const whyData = {
  mainHeading: "Why Choose Possesive Panda as Your SEO Service Partner?",
  subText1:
    "Possesive Panda is not your average SEO Services and Solution Provider.",
  subText2:
    "At Possesive Panda, we're dedicated to creating enduring partnerships with our clients by using our extensive network of SEO specialists and industry expertise. We collaborate closely with you to create a tailored plan that will yield results over time since we understand that SEO is a marathon, not a sprint.",
  thumbnail: "/assets/services/e-commerce/thumbnail.png",
  listHeading:
    "When you work with us to increase the growth and organic rankings of your website, we make sure you receive:",
  titles: [
    { title: "A Committed Team of SEO Experts " },
    { title: "Outstanding white-hat connections" },
    { title: "Quality Control and Data security" },
    { title: "24/7 Assistance" },
    { title: "Frequent Updates on the Project" },
    { title: "Dynamic Pricing" },
    { title: "A Complimentary Store Evaluation" },
    { title: "Prompt completion of the project" },
  ],
};

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



};
const hoverImageData = {
  text: {
    subheading: "With Possessive Panda",
    heading: "Generate Leads and Maximize Your ROI",
    description:
      "Digital marketing can only be successful if it generates a return on investment. We are committed to helping your business achieve long-term revenue development. With our expertise as digital marketing consultants and exposure to cross-industry knowledge, we select the marketing mix and overall approach that best meets your demands and goals.",
  },
  images: {
    
      image1: img1,
     
    
    
        image2: img2,
     
   
        image3: img3,
    
    },
  };
  const buttonData= [
    "Audit and Optimization ",
    "Traffic Generation",
    "Keyword Research",
    "Competitor Analaysis",
    "GA4 Configuration"
  ];
  
   const paragraphs=[
    {
        number: "1",
        heading1: "What we Provide?",
        text1: "Website audit and optimization are very crucial for website performance and better ranking on search engines. Our SEO experts assess your website and identify issues that are holding your website back from ranking. ",
        heading2: "How we Provide? ",
        text2: "We evaluate your website on various core web vitals and resolve every SEO-related issue, including the implementation of strategies of technical SEO, content optimization, and link building.  ",
        dotPoints: [
          "Resolving Broken Link Issues",
          "Indexing and Database Structure Issue Resolution",
        ]
  
    },
    {
        number: "2",
        heading1: "What we Provide?",
        text1: "Our SEO experts utilize various marketing tools, including social media, PR, mobile SEO, multimedia SEO, and local and international search optimization, to effectively generate high online traffic. ",
        heading2: "How we Provide? ",
        text2: "After evaluation of your existing website, we craft strategies for traffic generation that are personalized and improve your public relations, including landing page creation, business promotions, local SEO reputation, and many more. ",
        dotPoints: [
          "Paid Advertising Solutions",
          "Top-notch Utilization of Marketing Tools",
        ]
    }, {
        number: "3",
        heading1: "What we Provide?",
        text1: "Our team of SEO experts uses a variety of tools and techniques to deliver comprehensive, industry-relevant keyword research to help your website rank higher in search results, leading to high-quality and lasting traffic.",
        heading2: "How we Provide? ",
        text2: "At Possesive Panda, we utilize the best keyword research strategies, including analysis of your business and target audience, search volume and competition, optimizing various sorts of contents according to the trending keywords, and regular monitoring and updating.  ",
        dotPoints: [
          "Industry-relevant Keyword Research",
          "Google Updates Oriented Content",
        ]
    }, {
        number: "4",
        heading1: "What we Provide?",
        text1: "As a leading SEO service provider, we conduct competitor analysis to help your business improve your search engine ranking and implement best practices to make you reach new heights. ",
        heading2: "How we Provide? ",
        text2: "We perform competitor analysis on various aspects for better results, including the utilization of tools like Ahrefs, SEMrush, or platforms alike, keyword and content analysis, backlink analysis, technical SEO assessments, and many more. ",
        dotPoints: [
          "Benchmarking Performance for Better Results",
          "Identifying Content Gaps",
        ]
    }, {
        number: "5",
        heading1: "What we Provide?",
        text1: "Possesive Panda provides a smooth and seamless Google Analytics configuration to enhance website performance and better search engine rankings, delivering actionable insights.",
        heading2: "How we Provide? ",
        text2: "Our SEO experts deliver GA configuration solutions that deliver comprehensive Google Analytics setup, account structure, data validation, quality assurance, and integration of other tools like Google Tag Manager, Google Ads, and CRM systems",
        dotPoints: [
          "Custom Reports and Analysis ",
          "GA4 and GTM Support",
        ]
    },
  ];

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
  heading: "Our SEO Services",
  subHeading:
    "Possessive Panda excels in crafting top-tier SEO strategies that not only drive enhanced engagement and boost website traffic but also amplify sales and build a formidable brand reputation. Our team of seasoned SEO specialists are dedicated to delivering cutting-edge solutions that fuel your business’s growth and success, blending expertise with innovation to elevate your online presence and achieve remarkable results.",
};
const servicesData22 = [
  {
    line: 1,
    services: [
      {
        icon: "GrSettingsOption",
        title: "Enterprise SEO",
        description:
          "For an enterprise to establish a strong online presence on the web, search engine optimization services are necessary. To increase your market worth, we provide internal link building and corporate SEO services. We solely aim to make your business a pioneer of your industry.",
      },
      {
        icon: "PiTimerBold",
        title: "On-page SEO",
        description:
          "At Possesive Panda, our SEO experts focus on building your online presence with various on-page SEO, including content optimization, URL optimization, internal and external linking, HTML tag optimization, image optimization, meta tags, etc., on relevant keywords for better organic ranking and traffic.",
      },
      {
        icon: "IoMdGitMerge",
        title: "Off-page SEO",
        description:
          "Our team of SEO experts ultimately emphasizes increasing domain authority, credibility, and relevancy of your website by developing and implementing exquisite off-page strategies and solutions, including link-building (do-follow, anchor, and braned links), PR outreach, directory, blog, profile, and article submissions.",
      },
    ],
  },
  {
    line: 2,
    services: [
      {
        icon: "RiSeoLine",
        title: "Technical SEO",
        description:
          "To make your website perform better, we audit your site to keep it in check. We optimize your site on core vitals and optimize it for better crawability, indexing, and user-friendliness. This will include the site's page and speed optimization, canonical optimization, schema markup, Robot.txt file setup, and verification, etc.",
      },
      {
        icon: "FaRegFile",
        title: "Local SEO",
        description:
          "Possesive Panda delivers local SEO services that focus on enhanced local SEO rankings of your website with first-rate Google My Business (GMB) optimization that leads to drawing attention to your potential customers and eventually captivating better ranking, high traffic, and a high conversion rate.",
      },
      {
        icon: "BiCubeAlt",
        title: "Mobile SEO",
        description:
          "Our team of SEO experts will examine your site's performance on various devices and execute improvement strategies and operations, including AMP implementation, mobile responsiveness, and elevated user experience. Not just that, we also offer Mobile App SEO to rank your mobile app better on the App Store (iOS) and Google Play Store (iOS).",
      },
    ],
  },
  {
    line: 3,
    services: [
      {
        icon: "VscCircuitBoard",
        title: "eCommerce SEO",
        description:
          "For better visibility, high CTR, and conversions, our SEO experts boost your eCommerce platform’s SEO. We enhance the customer experience by launching targeted email marketing campaigns, optimizing mobile and voice search, and our eCommerce SEO services cover Shopify SEO, Amazon SEO, Magento SEO, eBay SEO, etc.",
      },
      {
        icon: "IoEarthOutline",
        title: "Multilingual SEO",
        description:
          "We provide multinigual SEO for enabling you to capture a national and international potential audience, leading to increased audience engagement and higher sales dynamics. We optimize your websites and apps for multiple languages targeting regional consumers.",
      },
      {
        icon: "BsGraphUp",
        title: "Content Marketing Services",
        description:
          "Our content writers and copywriting specialists curate SEO friendly and engaging content for your business. The need for unique and human-written content, especially at this time when AI has overpowered, allows your website, mobile apps, and social media to grasp traffic and engagement. Afterwards, we perform content marketing to build yourself a credible and authentic brand.",
      },
    ],
  },
  {
    line: 4,
    services: [
      {
        icon: "FaIoxhost",
        title: "Conversion Rate Optimization",
        description:
          "Better SEO strategies can make your business more effective for SERP(s) and traffic, but we monitor and deliver best practices for converting audiences into paying customers and clients. Also, we provide a secure payment gateway, design uncluttered landing pages, and streamline your site’s navigation.",
      },
      {
        icon: "SiCoinmarketcap",
        title: "Algorithmic Penalty Resolution",
        description:
          "Our team of SEO experts analyzes websites for keyword stuffing, cloaking, or spammy backlinks, preventing Google penalties. They help recover sites by identifying penalties, auditing backlinks, removing spammy content, and submitting for review.",
      },
      {
        icon: "SiGooglemarketingplatform",
        title: "Reporting and Analysis",
        description:
          "Our SEO experts use Google Analytics, also known as GA4, to track traffic and user behavior, optimizing SEO strategies. Regular reports show rankings and backlinks, including organic search visibility, conversion rate, CTR, average session duration, keyword rankings, and referring domains.",
      },
    ],
  },
];

const cardList ={
  subHeading: "Agile Approach",
  heading: "Our SEO Process",
  paragraph: "We have crafted an SEO services and solutions delivery process, keeping client satisfaction and result-oriented outcomes in mind.",
}

const cardData = [
  {
      title: "Explore ",
      step: "Step 1",
      description: "Our search engine optimization experts conduct a thorough discovery phase, including client meetings, site reviews, KPI identification, conversion path determination, and keyword research, to gain a comprehensive understanding of your business needs.",
  },
  {
      title: "Analysis",
      step: "Step 2",
      description: "The analysis stage involves competitive benchmarking, site audit, analytics review, and link risk assessment to determine factors affecting digital presence, analyze historical traffic patterns, technical issues, competitor strategies, and link building tactics.",
  },
  {
      title: "Strategy ",
      step: "Step 3",
      description: "Our SEO experts create an aggressive strategic plan for online marketing plan, prioritizing critical aspects for immediate, targeted results, after identifying marketing gaps and opportunities, ensuring successful campaign completion.",
  },
  {
      title: "Implement ",
      step: "Step 4",
      description: "In this phase, we optimize your web pages and blog posts with high-performing keywords, improve your site structure, and manage your business listings. We implement social media management campaigns and reach out to third-party websites to increase your online reach.",
  },
  {
      title: "Monitor",
      step: "Step 5",
      description: "Our SEO experts establish a tracking system to monitor online progress, analyze analytics, keyword rankings, KPIs, organic traffic, bounce rate, conversion rate, local visibility, and click-through rates, providing actionable insights for optimization strategies.",
  },
  {
      title: "Review ",
      step: "Step 6",
      description: "Our SEO team schedules regular consultations and monthly reports with your project managers to keep you up-to-date with your campaign progress. During our consultation, we present a comprehensive report that provides an overview of your site performance.",
  },
  {
      title: "Support",
      step: "Step 7",
      description: "Our SEO team constantly adjusts strategies based on algorithm updates and market trends to ensure your website ranks high in search results, keeping you informed of campaign progress.",
  },
];

export { 
  faq, 
  whyData, 
  ourService, 
  servicesData22, 
  iconMapping1,
  cardList,
  cardData,
  paragraphs,
  buttonData,
  hoverImageData,
  headingdata,
  testimonialsData
};
