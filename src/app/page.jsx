import Banner from "./(homeComponent)/Banner";
import OurServices from "./(homeComponent)/OurServices";
import Blogs from "./(homeComponent)/Blogs";
import Cross from "./(Components)/Cross";
import Faq from "./(homeComponent)/(FaqSection)/section";
import Footer from "./(Components)/Footer";
import WhyUs from "./(homeComponent)/Whyus";

export default function Home() {
  return (
    <main className="mt-[100px]">
      <Banner />
      <OurServices />
      <WhyUs />
      <Faq />
      <Blogs />
      <Cross />
      <Footer />
    </main>
  );
}
