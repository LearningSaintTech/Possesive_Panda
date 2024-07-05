import banner_1 from "../../assets/portfolio/banner-1.png";
import banner_2 from "../../assets/portfolio/banner-2.png";
import banner_3 from "../../assets/portfolio/banner-3.png";
import saint from "../../assets/portfolio/Saint.png";
import hawkins from "../../assets/portfolio/Hawkins.png";

const projects = [
  {
    image: banner_1,
    title: "Learningsaint.com",
    description:
      "Possesive Panda has designed the entire online platform of learningsaint.com, an ed-tech platform launched to train students with the latest technology and trends worldwide. It has been designed to upskill individuals for a flourishing future. ",
    reverse: false,
    url: "https://learningsaint.com",
  },
  {
    image: banner_2,
    title: "Learningsaint.in",
    description:
      "We have also worked for learningsaint.in, a platform that stands out with its exemplary education for NEET aspirants across India. It aims to educate aspiring students who want to crack these entrance exams successfully in one go, and we are proud to have been a part of this unique initiative.",
    reverse: true,
    url: "https://learningsaint.in",
  },
  {
    image: banner_3,
    title: "Hawkinsuniversity.com",
    description:
      "With the complete support of Possesive Panda, a prestigious institution’s website was developed and designed successfully. This University provides Undergraduate, Graduate, and Doctrate programs globally, and we are proud to have played a significant role in its success.",
    reverse: false,
    url: "https://hawkinsuniversity.com",
  },
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
