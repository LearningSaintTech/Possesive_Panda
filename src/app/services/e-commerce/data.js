import {
  feature,
  nums,
  panda,
  benefit,
  whyImages,
  processImages,
  inventoryImage,
} from "./images";

import banner from "../../../assets/services/banners/E-commerce-solutions-that-matches-your-needs.png";

const top = {
  title: "E-commerce solutions that match your needs",
  paragraph: [
    `E-commerce refers to buying and selling goods and services using the Internet. It includes activities like selecting products and services to transactions and processes that include online shopping. In E-commerce, customers shop whenever they want there is no time bound for shopping.`,
    `E-commerce services are platforms that help both small businesses and big businesses to create and manage online stores.`,
    `To survive in a competitive market, it is very essential to have an eye-catching online presence that matches your audience’s expectations and compels them to buy. To attract an audience, you need an e-commerce store that is visually attractive.`,
  ],
  highlight:
    "We not only provide e-commerce solutions but also ensure that they run smoothly.",
  image: banner,
};

const typesOfECommerce = [
  {
    num: "1",
    title: "Business-to-consumer",
    description: `Business-to-consumer or B2B refers to the situation where products and services sell directly to individual customers. Online marketplaces like Amazon and Flipkart have become major players.`,
  },
  {
    num: "2",
    title: "Business-to-Business",
    description: `B2B refers to transactions between business to business rather than consumers. One company provides a product or service, and the other company creates its own offerings. `,
  },
  {
    num: "3",
    title: "Consumers-to-Consumers",
    description: `C2C describes a business model where individual consumers sell goods and services directly to other consumers. Online marketplace like eBay, olx. Almost everything can be sold in a C2C marketplace.`,
  },
  {
    num: "4",
    title: "Consumer-to-Business",
    description: `Consumers contribute something of worth to a business. Bloggers, YouTubers, or social media influencers create content that businesses pay to sponsor. This helps them market their products `,
  },
];

const features = [
  {
    num: nums[0],
    title: "Dedicated Project Manager",
    description: `Every project is assigned a dedicated project manager to ensure smooth execution. The manager will be the point of contact for our client, overseeing the entire project from start to finish. This ensures that their project vision is well communicated and understood by everyone on our team.`,
    image: feature[0],
  },
  {
    num: nums[1],
    title: "Real-Time Project Tracking",
    description: `We openly trace projects in real-time. It allows clients to get in touch with the project manager at any time to get an update on the status of their project. This is to keep them informed of what is happening so that they can make timely decisions.`,
    image: feature[1],
  },
  {
    num: nums[2],
    title: "Cost-Effective Solutions",
    description: `At Possessive Panda, we deliver high-quality but at the same time cost-effective solutions. We work within the budget provided to give our clients services that don't compromise quality and performance. This makes sure that clients get the most optimal solution possible.`,
    image: feature[2],
  },
  {
    num: nums[3],
    title: "Experienced Team",
    description: `The professionals in our team are highly qualified with all the relevant industry experience. Everyone brings skills, expertise and knowledge to the table that, among other factors, assures excellent service delivery and complete client satisfaction.`,
    image: feature[3],
  },
  {
    num: nums[4],
    title: "Customized Solutions",
    description: `We understand each project's requirement is different. Hence, our services are tailor-made and created exclusively in tune with the client's needs. This approach guarantees that the final output aligns with their project goals.`,
    image: feature[4],
  },
  {
    num: nums[5],
    title: "Innovative Approach",
    description: `We keep researching new technologies and methodologies to apply in our service delivery, coming up with creative solutions that will let our clients stand out amongst the competition.`,
    image: feature[5],
  },
];

const mainSection = {
  title: "We have worked across different industries",
  description: `Our Possesive panda team are experts in designing e-commerce websites that adjust to all kinds of businesses. Our flexible and unique solutions are made to match the exact needs of your business.`,
  list: [
    "Food & Grocery",
    "Retails",
    "FMCG",
    "Real Estate",
    "Hotel",
    "Healthcare",
  ],
  logo: panda,
};

const statergy = {
  title: `Our E-Commerce Website Development Strategy`,
  cards: [
    {
      num: "1",
      title: "Strategic Planning",
      description: `We focus on learning about your business goals and competitors. This helps us plan and move forward with the project.`,
    },
    {
      num: "2",
      title: "Design concept",
      description: `We create a design that matches your brand and attracts your customers. Our designs are easy to use and reflect your brand. `,
    },
    {
      num: "3",
      title: "Development",
      description: `With the help of the latest technologies, we develop our solutions. Our team uses the best ways to add features. `,
    },
    {
      num: "4",
      title: "Development and Testing",
      description: `Before finalizing, we check our solutions on various devices and web browsers to make sure they work perfectly.`,
    },
    {
      num: "5",
      title: "Support and Upgrade",
      description: `We provide regular help and updates to improve your website's performance.`,
    },
  ],
};

const benefits = [
  {
    title: "Enhanced Accuracy",
    description: `Accurate Inventory management decreases the risk of stockout and overstocking.`,
    image: benefit[0],
  },
  {
    title: "Improved Financial Management",
    description: `With accurate inventory reports, we can manage our costs.`,
    image: benefit[1],
  },
  {
    title: "Increased Visibility",
    description: `Provide up-to-date information on sales performance and inventory level. Data helps businesses make quick decisions.`,
    image: benefit[2],
  },
  {
    title: "Customer satisfaction",
    description: `Timely order Fulfillment reduces shipping errors. With efficient return management and accurate stock, we can improve customer experience.`,
    image: benefit[3],
  },
];

const businessToGrow = [
  {
    num: "01",
    title: "Global Reach",
    description: `E-commerce platforms allow businesses to reach customers beyond the geographical area.`,
  },
  {
    num: "02",
    title: "24/7 availability",
    description: `E-commerce sites are always open, and customers can shop at any time, which helps to increase sales.`,
  },
  {
    num: "03",
    title: "Cost-effective",
    description: `E-commerce helps reduce costs like physical stores, rent, and in-store staff.`,
  },
  {
    num: "04",
    title: "Effective Advertising and Marketing",
    description:
      "Marketing efforts and Return On Investment allow for the continuous optimization of strategies.",
  },
  {
    num: "05",
    title: "Increased sales opportunity",
    description: `Providing discount and loyalty programs to encourage customers to purchase again. `,
  },
  ,
  {
    num: "06",
    title: "Customer Insights and Analytics",
    description: `E-commerce platforms help provide data according to customer behavior, preferences, and buying patterns.`,
  },
  {
    num: "07",
    title: "Competitive Advantage",
    description: `Unique features for products and services can set businesses apart from the competition.`,
  },
];

const process = [
  {
    num: "01",
    title: "Initial mapping",
    list: [
      ` Understanding e-commerce web development needs and performing research to meet your business goals.`,
      `Decide the business model (B2B, B2C, C2B, and more) and the products and services that you will offer.`,
    ],
    image: processImages[0],
  },
  {
    num: "02",
    title: "E-commerce platforms",
    list: [
      `Choosing the right platform that fits your business needs.`,
      `Choose the domain name that you want.`,
    ],
    image: processImages[1],
  },
  {
    num: "03",
    title: "Website design",
    list: [
      `Ensuring the website is accessible on all devices like desktops, tablets, and smartphones.`,
      `Easy navigation, clean and attractive layout, and giving final design for impressive UI/UX.`,
    ],
    image: processImages[2],
  },
  {
    num: "04",
    title: "Product Management",
    list: [
      `Giving a detailed product description, high-quality images, videos, specifications, and pricing.`,
      `Tracking stock levels, taking updates, and checking notifications to avoid failure of low stock.`,
    ],
    image: processImages[3],
  },
  {
    num: "05",
    title: "Shopping cart",
    list: [
      `Taking care of a user-friendly and secure cart that allows users to add, remove, and view items.`,
      `Taking care of secure payment processing through gateways, like PhonePay, Gpay, or direct credit card processing.`,
    ],
    image: processImages[4],
  },
  {
    num: "06",
    title: "Security Features",
    list: [
      `Ensuring providing a secure channel for data exchange between website and users by encrypting it.`,
      `Protecting Storage and handling customer data adheres to regulations like GDPR.`,
    ],
    image: processImages[5],
  },
  {
    num: "07",
    title: "Customer Service",
    list: [
      `Easily accessible customer details like contact numbers, emails, and physical addresses. Real-time support through chatbot or live chat.`,
      `FAQs section`,
    ],
    image: processImages[6],
  },
];

const inventory = [
  {
    title: "Inventory Tracking",
    description: `Monitor stock level in real-time, making sure inventory count is accurate.`,
    image: inventoryImage[0],
  },
  {
    title: "Automatic reordering",
    description: `Automatic reorder alerts when the stock level goes below a certain limit. `,
    image: inventoryImage[1],
  },
  {
    title: "Warehouse management",
    description: `We support multiple warehouse locations and track inventory movement.`,
    image: inventoryImage[2],
  },
  {
    title: "Order management",
    description: `Simplifies order from receipt and delivery. Track everything, like order status, and handle refunds.`,
    image: inventoryImage[3],
  },
  {
    title: "Analysis and reporting",
    description: `Generate reports of every detail like sales trends and inventory levels. It helps in data analysis of the movements of products. `,
    image: inventoryImage[4],
  },
];

const whyUs = [
  {
    title: "Professional expertise",
    description: `E-commerce service providers specialized expertise in managing and optimizing online stores. They ensure the  E-commerce site is effective and able to stand in a competitive market.`,
    image: whyImages[0],
  },
  {
    title: "Time and cost Efficiency",
    description: `E-commerce reduces the need for in-house resources to create e-commerce platforms. In E-commerce service, we quickly launch an online store, which helps in time-saving.`,
    description: `E-commerce reduces the need for in-house resources to create e-commerce platforms. In E-commerce service, we quickly launch an online store, which helps in time-saving.`,
    image: whyImages[1],
  },
  {
    title: "Technical support and maintenance",
    description: `Regular updates and maintenance services help keep the site secure and up-to-date with the latest features, allowing us to easily match the competitive environment.`,
    description: `Regular updates and maintenance services help keep the site secure and up-to-date with the latest features, allowing us to easily match the competitive environment.`,
    image: whyImages[2],
  },
  {
    title: "Competitive Advantage",
    description: `E-commerce solution providers stay updated with the latest trending industry update and technology, which help businesses to grow and to stay in a competitive environment.`,
    image: whyImages[3],
  },
  {
    title: "Flexibility",
    description: `E-commerce supports various business models, like B2B, B2C, C2B, and according to the market needs. We can easily add new products and services to your store and quickly adaption to market needs. `,
    image: whyImages[4],
  },
];

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

export {
  top,
  typesOfECommerce,
  features,
  mainSection,
  statergy,
  benefits,
  businessToGrow,
  process,
  inventory,
  whyUs,
  faq,
};
