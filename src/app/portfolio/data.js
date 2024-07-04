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
      "Design brings ideas, messages, and emotions to life. Design helps us communicate and connect in purpose-filled ways. Design influences what we think and feel. Design informs the decisions we make. ",
    reverse: false,
  },
  {
    image: banner_2,
    title: "Learningsaint.in",
    description:
      "Design brings ideas, messages, and emotions to life. Design helps us communicate and connect in purpose-filled ways. Design influences what we think and feel. Design informs the decisions we make. ",
    reverse: true,
  },
  {
    image: banner_3,
    title: "Hawkinsuniversity.com",
    description:
      "Design brings ideas, messages, and emotions to life. Design helps us communicate and connect in purpose-filled ways. Design influences what we think and feel. Design informs the decisions we make. ",
    reverse: false,
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
