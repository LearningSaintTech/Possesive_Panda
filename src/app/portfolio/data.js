import Learningsaint from "../../../public/assets/portfolio/1.jpg";
import HRMS from "../../../public/assets/portfolio/2.jpg";
import Hawkins from "../../../public/assets/portfolio/3.jpg";
import Recess from "../../../public/assets/portfolio/4.jpg";
import MTG from "../../../public/assets/portfolio/5.jpg";

import saint from "../../assets/portfolio/Saint.png";
import hawkins from "../../assets/portfolio/Hawkins.png";

const projects = [
  {
    image: Learningsaint,
    moto: "Leading EdTech Course Provider",
    title: "Learning Saint",
    description:
      "A leading provider of educational technology, Learning Saint offers a range of courses with a 100% job guarantee in subjects including data science, cyber security, digital marketing, and SAP.",
    url: "https://learningsaint.com",
  },
  {
    image: HRMS,
    moto: "Human Resource Management System",
    title: "HRMS",
    description:
      "Human Resource Management System (HRMS) enables organizations to handle all human resource functions in one system, hence reducing the expense and manpower needed to monitor employee performance.",
    url: "https://www.pplazyhr.com/login",
  },
  {
    image: Hawkins,
    moto: "Professional Course and Program Provider",
    title: "hawkins university",
    description:
      "Hawkins University, based in Austin, Texas, offers exemplary education through modern amenities and technology, offering online classes, study programs, and degree programs, focusing on transforming lives and communities",
    url: "https://hawkinsuniversity.com",
  },
  {
    image: Recess,
    moto: "Non-alcoholic Beverage Brand",
    title: "RECESS",
    description:
      "Recess is a brand offering non-alcoholic beverages designed to help individuals relax and unwind, addressing the stress caused by having too many tabs open in both browsers and minds.",
    url: "https://takearecess.com/",
  },
  {
    image: MTG,
    moto: "Professional Transport Service Provider",
    title: "Montgomery Transport Group",
    description:
      "Montgomery Transport Group, a UK-based privately owned company, operates under Ballyvesey Holdings, a family-owned conglomerate with over forty companies and an annual turnover exceeding £850 million.",
    url: "https://montgomerytransportgroup.com/",
  },
  // REPEATED CARDS TEST PAGINATION 
];

const cards = [
  {
    image: saint,
    percent: "55%",
    num: "3.9",
    title: "Learningsaint.com",
  },
  {
    image: hawkins,
    percent: "40%",
    num: "2.9",
    title: "Hawkinsuniversity.com",
  },
  {
    image: saint,
    percent: "80%",
    num: "4.7",
    title: "Learningsaint.in",
  },
];

export { projects, cards };
