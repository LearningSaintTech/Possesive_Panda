import dynamic from "next/dynamic";
import img1 from "../../../../public/assets/image_1821.svg";
import img2 from "../../../../public/assets/image_1822.svg";
import img3 from "../../../../public/assets/image.svg";
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
    title: `What is Search Engine Optimization (SEO)?`,
    description: `Search engine optimization is most usually abbreviated as SEO. Optimization is the foundation of all SEO techniques. When your brand's presence (website, content, and social media platforms) is maximized across the internet, it gains online visibility. Your website will rank on the first page of search engine results pages (SERPs). Your online customers will also find your business far more quickly.`,
  },
  {
    title: `What benefits will SEO provide?`,
    description: `When your website is on top, you can expect more traffic and queries from your potential clients, allowing you to do business with them.`,
  },
  {
    title: `What impacts your business SEO?`,
    description: `SEO ranking is directly influenced by three factors: page load time, keyword selection, and content creation. Slow page load time can lead to visitors bouncing and going to competitors. The Core Web Vitals update in March 2021 will focus on these aspects, ensuring a higher ranking. Careful keyword selection ensures your website is listed under the right search terms. Quality content increases dwell time, boosting SEO rankings.`,
  },
  {
    title: `What are the SEO services and solutions Possesive Panda provides?`,
    description: `Possesive Panda provides various SEO services and solutions, below is the list: 

Our SEO Services:

Enterprise SEO,
On-page SEO,
Off-page SEO,
Technical SEO,
Local SEO,
Mobile SEO,
eCommerce SEO,
Multilingual SEO,
Content Marketing Services,
Conversion Rate Optimization,
Google Penalty Assessment and Recovery,
Reporting and Analysis.

Our SEO Solutions: 

Audit and Optimization,
Traffic Generation, 
Keyword Research, 
Competitor Analaysis, 
Google Analytics Configuration.`,
  },
  {
    title: `How do I measure SEO growth?`,
    description: `SEO success can be measured by measuring organic traffic growth, keyword rankings, and conversion rates. Tools like Google Analytics and Search Console provide valuable insights into these metrics.`,
  },
  {
    title: `How does Possesive Panda help you with SEO services and solutions?`,
    description: `Possesive Panda is a dedicated SEO services provider that focuses on enduring partnerships with clients. They use a network of specialists and industry expertise to create tailored plans, ensuring quality control, data security, 24/7 assistance, frequent updates, dynamic pricing, store evaluation, and prompt completion of projects.`,
  },
  {
    title: `Why has my organic growth dropped?`,
    description: `There may be several reasons for that, but the most important aspect considered is AI-curated or poor quality content, poor SEO implementation, and outdated content. `,
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
    name: "Sarah T.",
    role: "Small Business Owner",
    text: "Possesive Panda's SEO strategy significantly improved my online presence, resulting in a 150% increase in website traffic within months. Highly recommend.",
  },
  {
    name: "Mark R.",
    role: "E-commerce Manager",
    text: "Possesive Panda's exceptional SEO services significantly improved our product pages, leading to a significant sales boost, demonstrating their expertise and dedication as a true partner in our digital marketing efforts.",
  },
  {
    name: "Lisa M.",
    role: "Digital Marketing Specialist",
    text: "Possesive Panda's comprehensive SEO approach improved search rankings, educated the team, and led to higher visibility, increased leads, and a solid ROI, making them a must-have for serious businesses.",
  },
  {
    name: "James K.",
    role: "Startup Founder",
    text: "Possesive Panda's strategic analysis and recommendations significantly improved organic traffic within months, making it a crucial decision for a startup's competitive landscape.",
  },
  {
    name: "Emily W.",
    role: "Blogger",
    text: "Partnering with Possesive Panda significantly improved blog traction, optimizing content and providing keyword strategies, leading to a significant increase in readership and engagement.",
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
    subheading: "With Possesive Panda",
    heading: "Implement Data-driven SEO Strategies to Boost Sales",
    description:
      "We aim for enhanced revenue for your businesses by implementing the best SEO strategies involving improved website ranking, expanding brand awareness, and generating qualified leads.With Possesive Panda, staying updated with industry innovations and understanding search engine operations, businesses can develop effective strategies for their clients. A data-driven approach ensures a user-friendly website with relevant information, generating more traffic and boosting brand recall.",
  },
  images: {
    image1: img1,

    image2: img2,

    image3: img3,
  },
};
const buttonData = [
  "Audit and Optimization ",
  "Traffic Generation",
  "Keyword Research",
  "Competitor Analaysis",
  "GA4 Configuration",
];

const paragraphs = [
  {
    number: "1",
    heading1: "What we Provide?",
    text1:
      "Website audit and optimization are very crucial for website performance and better ranking on search engines. Our SEO experts assess your website and identify issues that are holding your website back from ranking. ",
    heading2: "How we Provide? ",
    text2:
      "We evaluate your website on various core web vitals and resolve every SEO-related issue, including the implementation of strategies of technical SEO, content optimization, and link building.  ",
    dotPoints: [
      "Resolving Broken Link Issues",
      "Indexing and Database Structure Issue Resolution",
    ],
  },
  {
    number: "2",
    heading1: "What we Provide?",
    text1:
      "Our SEO experts utilize various marketing tools, including social media, PR, mobile SEO, multimedia SEO, and local and international search optimization, to effectively generate high online traffic. ",
    heading2: "How we Provide? ",
    text2:
      "After evaluation of your existing website, we craft strategies for traffic generation that are personalized and improve your public relations, including landing page creation, business promotions, local SEO reputation, and many more. ",
    dotPoints: [
      "Paid Advertising Solutions",
      "Top-notch Utilization of Marketing Tools",
    ],
  },
  {
    number: "3",
    heading1: "What we Provide?",
    text1:
      "Our team of SEO experts uses a variety of tools and techniques to deliver comprehensive, industry-relevant keyword research to help your website rank higher in search results, leading to high-quality and lasting traffic.",
    heading2: "How we Provide? ",
    text2:
      "At Possesive Panda, we utilize the best keyword research strategies, including analysis of your business and target audience, search volume and competition, optimizing various sorts of contents according to the trending keywords, and regular monitoring and updating.  ",
    dotPoints: [
      "Industry-relevant Keyword Research",
      "Google Updates Oriented Content",
    ],
  },
  {
    number: "4",
    heading1: "What we Provide?",
    text1:
      "As a leading SEO service provider, we conduct competitor analysis to help your business improve your search engine ranking and implement best practices to make you reach new heights. ",
    heading2: "How we Provide? ",
    text2:
      "We perform competitor analysis on various aspects for better results, including the utilization of tools like Ahrefs, SEMrush, or platforms alike, keyword and content analysis, backlink analysis, technical SEO assessments, and many more. ",
    dotPoints: [
      "Benchmarking Performance for Better Results",
      "Identifying Content Gaps",
    ],
  },
  {
    number: "5",
    heading1: "What we Provide?",
    text1:
      "Possesive Panda provides a smooth and seamless Google Analytics configuration to enhance website performance and better search engine rankings, delivering actionable insights.",
    heading2: "How we Provide? ",
    text2:
      "Our SEO experts deliver GA configuration solutions that deliver comprehensive Google Analytics setup, account structure, data validation, quality assurance, and integration of other tools like Google Tag Manager, Google Ads, and CRM systems.",
    dotPoints: ["Custom Reports and Analysis ", "GA4 and GTM Support"],
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
  heading: "SEO Services & Solutions",
  subHeading:
    "Possesive Panda excels in crafting top-tier SEO strategies that not only drive enhanced engagement and boost website traffic but also amplify sales and build a formidable brand reputation. Our team of seasoned SEO specialists are dedicated to delivering cutting-edge solutions that fuel your business’s growth and success, blending expertise with innovation to elevate your online presence and achieve remarkable results.",
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

const cardList = {
  subHeading: "Agile Approach",
  heading: "SEO Services Delivery Approach",
  paragraph:
    "We have crafted an SEO services and solutions delivery process, keeping client satisfaction and result-oriented outcomes in mind.",
};

const cardData = [
  {
    title: "Explore ",
    step: "Step 1",
    description:
      "Our SEO experts conduct a thorough discovery phase, including client meetings, site reviews, KPI identification, conversion path determination, & keyword research, to gain a comprehensive understanding of your business.",
  },
  {
    title: "Analysis",
    step: "Step 2",
    description:
      "The analysis stage involves competitive benchmarking, site audit, & link risk assessment to determine factors affecting digital presence, analyze traffic patterns, technical issues, competitor strategies, & link building tactics.",
  },
  {
    title: "Strategy ",
    step: "Step 3",
    description:
      "Our SEO experts create an aggressive strategic plan for online marketing plan, prioritizing critical aspects for immediate, targeted results, after identifying marketing gaps and opportunities, ensuring successful campaign completion.",
  },
  {
    title: "Implement ",
    step: "Step 4",
    description:
      "In this phase, we optimize your web pages & blog posts with high-performing keywords, improve your site structure, & manage your business listings. We implement SMM campaigns & reach out to third-party websites integrations.",
  },
  {
    title: "Monitor",
    step: "Step 5",
    description:
      "Our SEO experts establish a tracking system to monitor online progress, analyze analytics, keyword rankings, KPIs, organic traffic, bounce rate, conversion rate, local visibility, & CTR(s), providing actionable insights for optimization strategies.",
  },
  {
    title: "Review ",
    step: "Step 6",
    description:
      "Our SEO team schedules regular consultations & monthly reports with your project managers to keep you updated with your campaign progress. Afterwards, we present reports for your performance enhancement.",
  },
  {
    title: "Support",
    step: "Step 7",
    description:
      "Our SEO team constantly adjusts strategies based on algorithm updates and market trends to ensure your website ranks high in search results, keeping you informed of campaign progress.",
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
  testimonialsData,
};
