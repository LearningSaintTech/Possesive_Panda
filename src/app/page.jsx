import Banner from "./(homeComponent)/Banner";
import OurServices from "./(homeComponent)/OurServices";
import Blogs from "./(homeComponent)/Blogs";
import Cross from "./(Components)/Cross";
import Faq from "./(homeComponent)/(FaqSection)/section";

export default function Home() {
  return (
    <main className="mt-[100px]">
      <Banner />
      <OurServices />
      <Faq />
      <Blogs />
      <Cross />
    </main>
  );
}
