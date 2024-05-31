import Banner from "./(homeComponent)/Banner";
import OurServices from "./(homeComponent)/OurServices";
import Blogs from "./(homeComponent)/Blogs";
import Cross from "./(Components)/Cross";
import Faq from "./(homeComponent)/(FaqSection)/section";
import WhyUs from "./(homeComponent)/Whyus";
import Technologies from "./(homeComponent)/(Technologies)/Technologies";
import Portfolio from "./(homeComponent)/Portfolio";

export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* <Banner /> */}
      {/* <Portfolio /> */}
      {/* <OurServices /> */}
      {/* <WhyUs /> */}
      {/* <Faq /> */}
      <Technologies />
      {/* <Blogs /> */}
      {/* <Cross /> */}
    </main>
  );
}
