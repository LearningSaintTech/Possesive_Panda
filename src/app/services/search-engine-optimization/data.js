import dynamic from "next/dynamic";
import img1 from '../../../../public/assets/image_1821.svg';
import img2 from '../../../../public/assets/image_1822.svg';
import img3 from '../../../../public/assets/image.svg';

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
  subText1: "Possesive Panda is not your average SEO Services and Solution Provider.",
  subText2:
    "At Possesive Panda, we're dedicated to creating enduring partnerships with our clients by using our extensive network of SEO specialists and industry expertise. We collaborate closely with you to create a tailored plan that will yield results over time since we understand that SEO is a marathon, not a sprint.",
  thumbnail: '/assets/services/e-commerce/thumbnail.png',
  listHeading:
    "When you work with us to increase the growth and organic rankings of your website, we make sure you receive:",
  titles: [
    { title: "A Committed Team of SEO Experts" },
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

export {
  faq,
  whyData,
  paragraphs,
  buttonData,
  hoverImageData,
  headingdata,
  testimonialsData
}

