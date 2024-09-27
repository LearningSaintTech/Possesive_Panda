import img1 from '../../../../public/assets/image_1821.svg';
import img2 from '../../../../public/assets/image_1822.svg';
import img3 from '../../../../public/assets/image.svg';
import faqimg22 from "../../../../public/assets/assets/services/e-commerce/faq222.png";

const faq = [
  {
    title: `What is a virtual assistant?`,
    description: `A virtual assistant is a person who provides administrative, technical, or creative support to clients remotely.`,
  },
  {
    title: `What services can a virtual assistant provide?`,
    description: `Virtual assistants can handle a wide range of tasks, including email management, scheduling, data entry, customer service, social media management, content creation, research, and more.`,
  },
  {
    title: `What are the benefits of hiring virtual assistants?`,
    description: `Hiring virtual assistants can save time, reduce operational costs, increase productivity, and provide access to specialized skills without needing to hire a full-time employee.`,
  },
  {
    title: `How do I ensure effective communication with my virtual assistants?`,
    description: `Use tools like email, instant messaging, and video calls. Set clear expectations.`,
  },
  {
    title: `How can I track the work of my virtual assistant?`,
    description: `A dedicated project manager is provided to monitor progress and ensure tasks are completed on time.`,
  },
  {
    title: `How do I train a virtual assistant?`,
    description: `Provide clear instructions, access to necessary tools, and continuous feedback.`,
  },
];


const smallfaqimage = {
  img1: faqimg22
}
const testimonialsData = [
  {
    name: "Karen L.",
    role: "Entrepreneur",
    text: "Possesive Panda's skilled virtual assistants have been instrumental in my business, enabling me to concentrate on growth while managing administrative tasks. Highly recommended.",
  },
  {
    name: "Michael T.",
    role: "Small Business Owner",
    text: "I experienced a significant increase in productivity after hiring Possesive Panda, who efficiently managed my daily operations and allowed me to focus on strategic planning.",
  },
  {
    name: "Emily R.",
    role: "Freelance Consultant",
    text: "Possesive Panda provides exceptional support, with their virtual assistant being organized, anticipating needs, and understanding the business, making them a valuable addition to any team.",
  },
  {
    name: "David S.",
    role: "Marketing Director",
    text: "Possesive Panda's efficient, reliable, and resourceful virtual assistants have significantly improved my workload management, making my life easier and a fantastic investment.",
  },
  {
    name: "Sarah J.",
    role: "Nonprofit Founder",
    text: "Possesive Panda's exceptional virtual assistant services have greatly impacted our organization, allowing me to concentrate on my mission with their dedication and professionalism.",
  },
];



const headingdata = {

  //testimonials
  heading: " Hiring virtual assistants offers numerous benefits for your business growth:",
  description: "Join us on our inspiring journey as we thrive on challenges and celebrate our successes with our clients."



};


const smallfaqdata = [
  {
    key: 1,
    title: "Time Saving",
    data: "Hiring a virtual assistant (VA) can be effective and save you a lot of time for better productivity and efficiency. You can focus on strategies and growth initiatives rather than tasks like administrative operations.  ",
  },
  {
    key: 2,
    title: "Cost Efficiency",
    data: "If you compare in-house employees with virtual assistants, you will find that by hiring virtual assistants you can reduce expenses and don’t have to worry about employee turnover. ",
  },
  {
    key: 3,
    title: "Increased Productivity",
    data: "You can leverage virtual assistants for your higher priority tasks and projects, enhancing your productivity and leading your business’s path to success. You can find virtual assistants for every industry and domain. ",
  },
  {
    key: 4,
    title: "Access to Specialized Skills",
    data: "As mentioned above, you can find virtual assistants for every industry and domain, with their industry expertise and skillset, virtual assistants enable businesses to improve their operations without the worry of extensive hiring processes. ",
  },

  {
    key: 5,
    title: "Scalability ",
    data: "Based on your industry-led projects and requirements, virtual assistants can be a great asset in amplifying your business scale, whether it is a startup, a growing business, or an enterprise.",
  },

];


const hoverImageData = {
  text: {
    subheading: "Hire Virtual Assistants",
    heading: " Who can handle your tasks, so you can focus on core Business development. ",
    description:
      "Possesive Panda offers 360 virtual assistant services with dynamic pricing, tailored to your business needs and requirements. Covering 30+ services, we aim at delivering industry experts for your business’s overall success. If you want to check out our services, then just scroll up a little. With Possesive Panda’s cost-effective virtual assistant services, we are enabling current and future leaders to delegate tasks such as email handling, client handling, document management, digital marketing, eCommerce support, and more, so that they can focus on business strategy and growth. With pocket-friendly costs and long-term economic benefits, Possesive Panda offers an efficient and experienced solutions.",
  },
  images: {

    image1: img1,
    image2: img2,
    image3: img3,
  },
};

// arya data dynamic
// data.js
export const hoverDivData = {
  heading: "Why do you need Virtual Assistants?",
  paragraph: "Whether you are an entrepreneur, have a small business, or own a well-established organization, businesses of various sorts are relying on virtual assistants because of their accessibility and efficiency.  ",
  models: [
    {
      title: 'Entrepreneurs and Small Businesses',
      paragraph: 'Not everyone, but being new to business often requires your time and attention, and many entrepreneurs struggle with business operations. To overcome this challenge, successful entrepreneurs hire virtual assistants because they want to focus on core business functions and delegate tasks like administrative tasks and more to them.  '
    },
    {
      title: 'Startup and Growing Businesses',
      paragraph: 'Every founder or CEO wants his/her business to reach the top. If you are voting for the same, you can grow and scale your business with the help of virtual assistants. Before setting up in house teams, you can set up a virtual office consisting of virtual assistants of your requirements. They can help your startup grow by delivering various services like social media management, content creation, customer service, bookkeeping, and more. '
    },
    {
      title: 'Enterprises and Well-established Organizationss',
      paragraph: 'Virtual assistants deliver constant support for any demographic and any time. If you want productivity while handling in-house employees, you can hire virtual assistants for your professional needs. They also come in handy when it comes to regional or local client dealings of different sorts. '
    }
  ]
};


export {
  faq,
  hoverImageData,
  smallfaqdata,
  headingdata,
  testimonialsData,
  smallfaqimage,
};
