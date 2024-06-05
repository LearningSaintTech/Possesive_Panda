import Banner from "./(homeComponent)/Banner";
import OurServices from "./(homeComponent)/OurServices";
import Blogs from "./(homeComponent)/Blogs";
import Cross from "./(Components)/Cross";
import Faq from "./(homeComponent)/(FaqSection)/section";
import WhyUs from "./(homeComponent)/Whyus";
import Technologies from "./(homeComponent)/(Technologies)/Technologies";
import Portfolio from "./(homeComponent)/Portfolio";
import Contact from "./(Components)/Contact";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Portfolio />
      <OurServices />
      <WhyUs />
      <Faq />
      <Technologies />
      <Contact />
      <Blogs />
      <Cross />
    </main>
  );
}
