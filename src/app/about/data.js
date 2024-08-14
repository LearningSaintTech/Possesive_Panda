import accentureblack from "../../assets/aboutus/brands/accentureblack.png";
import accenturewhite from "../../assets/aboutus/brands/accenturewhite.png";
import capgeminiblack from "../../assets/aboutus/brands/capgeminiblack.png";
import capgeminiwhite from "../../assets/aboutus/brands/capgeminiwhite.png";
import cognizantblack from "../../assets/aboutus/brands/cognizantblack.png";
import cognizantwhite from "../../assets/aboutus/brands/cognizantwhite.png";
import delloiteblack from "../../assets/aboutus/brands/delloiteblack.png";
import delloitewhite from "../../assets/aboutus/brands/delloitewhite4.png";
import hclblack from "../../assets/aboutus/brands/hclblack.png";
import hclwhite from "../../assets/aboutus/brands/hclwhite.png";
import ibmblack from "../../assets/aboutus/brands/ibmblack.png";
import ibmwhite from "../../assets/aboutus/brands/ibmwhite.png";
import infosysblack from "../../assets/aboutus/brands/infosysblack.png";
import infosyswhite from "../../assets/aboutus/brands/infosyswhite.png";
import tcsblack from "../../assets/aboutus/brands/tcsblack.png";
import tcswhite from "../../assets/aboutus/brands/tcswhite.png";
import wiproblack from "../../assets/aboutus/brands/wiproblack.png";
import wiprowhite from "../../assets/aboutus/brands/wiprowhite.png";
import techmahindrawhite from "../../assets/aboutus/brands/techmahindrawhite.png";
import TechMahindrablack from "../../assets/aboutus/brands/TechMahindrablack.png";
import mission from "../../assets/accordion/mission.png";
import ourstory from "../../assets/accordion/our-story.png";
import vision from "../../assets/accordion/vision.png";


const data = [
  { black: accentureblack, white: accenturewhite },
  { black: capgeminiblack, white: capgeminiwhite },
  { black: cognizantblack, white: cognizantwhite },
  { black: delloiteblack, white: delloitewhite },
  { black: hclblack, white: hclwhite },
  { black: ibmblack, white: ibmwhite },
  { black: infosysblack, white: infosyswhite },
  { black: tcsblack, white: tcswhite },
  { black: wiproblack, white: wiprowhite },
  { black: TechMahindrablack, white: techmahindrawhite },
];


const accordian = [
  {
    question: "Our Story",
    answer:
      "At the heart of our agency lies a passion for excellence, spanning continents and industries. We work with Fortune 500 companies, innovative startups, visionary founders, and even governments and investment funds. But what truly defines Creative Curve is our unwavering commitment to bringing visions to life, no matter how big or small.",
    image: ourstory,
  },
  {
    question: "Our Vision",
    answer:
      "At Possesive Panda, we don't just aim to be at the top of the global IT services industry; we aspire to be a game-changer. Our vision is to lead digital innovation and shape the pathway of the IT industry. Join Possesive Panda on this exciting journey towards a digital future.",
    image: vision,
  },
  {
    question: "Our Mission",
    answer:
      "Our goal is to provide dedicated and complete IT Solutions that result in client satisfaction. We understand our clients’ challenges and goals and create customized technology solutions to improve efficiency, enhance security, and unlock new opportunities. Furthermore, we aim to be a reliable partner in your digital transformation journey through collaboration and our expertise.",
    image: mission,
  },
];

export { data, accordian };
