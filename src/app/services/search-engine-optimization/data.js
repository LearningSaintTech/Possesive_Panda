import dynamic from "next/dynamic";

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



export {
  faq,
  whyData
}

