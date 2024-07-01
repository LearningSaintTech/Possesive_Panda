import { feature, nums, panda, benefit } from "./images";

const top = {
  title: "E-commerce solutions that matches your needs",
  paragragh: [
    `E-commerce refers to buying and selling goods and services using the Internet. It includes activities like selecting products and services to transactions and processes that include online shopping. In E-commerce, customers shop whenever they want there is no time bound for shopping.`,
    `E-commerce services are platforms that help both small businesses and big businesses to create and manage online stores.
`,
    `To survive in a competitive market, it is very essential to have an eye-catching online presence that matches your audience’s expectations and compels them to buy. To attract an audience, you need an e-commerce store that is visually attractive.`,
  ],
  highlight:
    "We not only provide e-commerce solutions but also ensure that they run smoothly.",
};

const typesOfECommerce = [
  {
    num: "1",
    title: "Business-to-Consumer",
    description: `Business-to-consumer or B2B refers to the situation where products and services sell directly to individual customers. The internet has made B2C easier. Online marketplaces like Amazon and Flipkart have become major players.`,
  },
  {
    num: "2",
    title: "Business-to-Business",
    description: `B2B refers to transactions between business to business rather than consumers. One company provides a product or service, and the other company creates its own offerings.`,
  },
  {
    num: "3",
    title: "Consumers-to-Consumers",
    description: `C2C describes a business model where individual consumers sell goods and services directly to other consumers. Online marketplace like eBay, olx. Almost everything can be sold in a C2C marketplace.`,
  },
  {
    num: "4",
    title: "Consumer-to-Business",
    description: `Consumers contribute something of worth to a business. Freelancers offering services to businesses.`,
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
    description: `We openly trace projects in real time. It allows clients to get in touch with the project manager at any time to get an update on the status of their project. This is to keep them informed of what is happening so that they can make timely decisions.`,
    image: feature[1],
  },
  {
    num: nums[2],
    title: "Cost-Effective Solutions",
    description: `What we deliver at Possessive Panda are high-quality but cost-effective solutions. We work within the budget provided to give our clients solutions that don't compromise quality and performance.`,
    image: feature[2],
  },
  {
    num: nums[3],
    title: "Experienced Team",
    description: `The professionals in our team are highly qualified. Everyone brings expertise and knowledge that, among other factors, assures par excellence service delivery.`,
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

const statergy = [
  {
    title: "Strategic Planning",
    description: `We focus on learning about your business goals and competitors. This helps us plan and move forward with the project.`,
  },
  {
    title: "Design concept:",
    description: `We create a design that matches your brand and attracts your customers. This involves initial design sketches. Our designs are easy to use and reflect your brand.`,
  },
  {
    title: "Development",
    description: `With the help of the latest technologies, we develop our solutions. Out team uses the best ways to add features.`,
  },
  {
    title: "Development and Testing",
    description: `Before finalizing, we check our solutions on various devices and web browsers to make sure they works perfectly. With successful testing we launch your e-commerce website`,
  },
  {
    title: "Support and Upgrade",
    description: `We provide regular help and updates to improve your website's performance`,
  },
];

const benefits = [
  {
    title: "Enhanced Accuracy",
    description: `Accurate Inventory management decreases the risk of stockout and overstocking`,
    image: benefit[0],
  },
  {
    title: "Improved Financial Management",
    description: `With accurate inventory reports, we can manage our costs`,
    image: benefit[1],
  },
  {
    title: "Increased Visibility",
    description: `Provide up-to-date information on sales performance and inventory level. Data helps businesses make quick decisions`,
    image: benefit[2],
  },
  {
    title: "Customer satisfaction:",
    description: `Timely order Fulfillment reduces shipping errors. With efficient return management and accurate stock, we can improve customer experience`,
    image: benefit[3],
  },
];

const businessToGrow = [
  {
    num: "01",
    title: "Global Reach",
    description: `E-commerce platforms allow businesses to reach customers beyond the geographical area`,
  },
  {
    num: "02",
    title: "24/7 availability",
    description: `E-commerce sites are always open, and customers can shop at any time, which helps to increase sales.`,
  },
  {
    num: "03",
    title: "Cost-effective",
    description: `E-commerce helps reduce costs like physical stores, rent, and in-store staff`,
  },
  {
    num: "04",
    title: "Customer Insights and Analytics",
    description: `E-commerce platforms help provide dataaccording to customer behavior, preferences, and buying patterns. With  this data, marketers can create marketing campaigns that improve and focus on customer engagement`,
  },
  {
    num: "05",
    title: "Increased sales opportunity",
    description: `E-commerce platforms suggest related products with the help of customer's past data of the customers to increase sales. Implementation of discount and loyalty programs to encourage customers to purchase again.`,
  },
  {
    num: "06",
    title: "Effective Advertising and Marketing",
    description:
      "Marketing efforts and ROI allow for the continuous optimization of strategies",
  },
  {
    num: "07",
    title: "Competitive Advantage",
    description: `Providing unique features for products and services can set businesses apart from the competition, and quickly adapting to market trends and customer demand helps businesses grow in a competitive market`,
  },
];

// On hold
const process = [
  {
    title: "Initial mapping",
    description: ``,
  },
];

const inventory = [
  {
    title: "Inventory Tracking",
    description: `Monitor stock level in real-time, making sure inventory count is accurate.`,
  },
  {
    title: "Automatic reordering",
    description: `Automatic reorder alerts when the stock level goes below a certain limit`,
  },
  {
    title: "Warehouse management",
    description: `We support multiple warehouse locations and track inventory movement`,
  },
  {
    title: "Order management",
    description: `Simplifies order from receipt and delivery. Track everything, like order status, and handle refunds`,
  },
  {
    title: "Analysis and reporting",
    description: `Generate reports of every detail like sales trends and inventory levels. It helps in data analysis of the movements of products`,
  },
];

const whyUs = [
  {
    title: "Professional expertise",
    description: `E-commerce service providers specialized expertise in managing and optimizing online stores. They ensure the E-commerce site is effective and able to stand in a competitive market`,
  },
  {
    title: "Time and cost Efficiency",
    description: ` E-commerce reduces the need for in-house resources to create e-commerce platforms. In E-commerce service, we quickly launch an online store, which helps in time-saving as compared to building from scratch`,
  },
  {
    title: "Technical support and maintenance",
    description: `With the help of regular updates and maintenance services it is easy to keep site secure, and up-to-date with latest features`,
  },
  {
    title: "Competitive Advantage",
    description: `E-commerce solution providers stay updated with the latest trending industry update and technology, which help businesses to grow and to stay in a competitive environment`,
  },
  {
    title: "Flexibility",
    description: `E-commerce supports various business models, like B2B, B2C, C2B, and according to the market needs. We can easily add new products and services to your store and quickly adaption to market needs`,
  },
];

const faq = [
  {
    title: "Why do I need E-commerce solutions?",
    description: `E-commerce solutions help in smooth-running of process in setting up and managing an online store. They enable businesses to reach to a wider audience, and increase sales. They also help manage inventory, the payment process, and logistics.`,
  },
  {
    title: "Is your e-commerce target mobile-friendly?",
    description: `Each site we have worked on has been mobile-friendly. With our unique plans, startegies, we asure that the site work on a variety of screen sizes, from cell phones and tablets to large desktop.`,
  },
  {
    title: "How will I follow up on my e-commerce website development project?",
    description: `We regularly update you on the status of the tasks. Also, a project manager will be appointed of your project to assist you with all the details.`,
  },
  {
    title: "How long does it take to design and launch an e-commerce website?",
    description: `This depends upon how big and complex the project is. Our aim is to provide quick and effective solutions while making sure the work is done on time. When we plan the project our project manager gives a clear deadline.`,
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
  inventory,
  whyUs,
  faq,
};
