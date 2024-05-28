import Banner from "./(homeComponent)/Banner";
import OurServices from "./(homeComponent)/OurServices";
import Blogs from "./(homeComponent)/Blogs";

export default function Home() {
  return (
    <main className="mt-[100px]">
      <Banner />
      <OurServices />
      <Blogs />
    </main>
  );
}
