import React from "react";
import NewBanner from "../(Components)/NewBanner";
import Footer from "../(Components)/Footer";


const TermsandCondition = () => {
  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Let Possesive Panda be Your Success Partner!"}
        desciption={"Possesive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."}
      />
      <div className=" px-[5.208vw] text-center">
        <h1 className="px-[5.208vw] text-white mb-[2vw] mt-[5vw] font-bold text-[2.5vw] text-center">Terms & Conditions</h1>
        <p className=" text-left text-white text-[1.25vw]">
          We welcome you to Possesive Panda, owned and operated by Abhishek
          International Pvt Ltd. (“company”, “we”, or “us”). By using this
          website, any and every individual or organization becomes legally bound
          to adhere to these terms and conditions.
        </p>
        <p className="mt-2 text-white text-left text-[1.25vw]">
          The contents of this website are, by all means, intellectual property of
          Abhishek International Pvt Ltd. (unless mentioned otherwise), including
          copyright, trademark, patent, trade secret and other proprietary rights.
          Any commercial use of this website’s content by an unknown third party
          without taking written permission from the company will result in legal
          action against the said third party. However, links from websites not
          owned by our subsidiaries that are contained in this site are not under
          our control and we are not responsible for their content, terms, privacy
          policies, or practices. Users may provide comments or feedback on the
          designated spaces of this website dedicated for the public. By doing so,
          user grants us a worldwide, non-exclusive, royalty-free right to use,
          reproduce, modify, adapt, publish, and distribute their content on and
          through this website.
        </p>
        <p className="mt-2 text-white text-left text-[1.25vw]">
          All content available on this website is purely for general information
          and use. This website and its contents have been provided by Abhishek
          International Pvt Ltd. on an ‘as is’ basis without any warranties. No
          entity shall use this website for illegal or unauthorized purposes. This
          entails violating any laws or third party rights, hacking attempts,
          introducing viruses or malware, data mining, or conducting any unethical
          activities. To the extent allowed by the law, the company holds no
          liability for any kind of damages incurred by the use of this website.
          The usage of this website and any personal information provided by a
          given user is regulated by our Privacy Policy. These terms & conditions
          shall be governed and interpreted with alignment to the constitution of
          the United States of America. The company reserves all rights to
          terminate or suspend any individual or organization’s usage of this
          website without any prior notice.
        </p>
        <p className="mt-2 text-white text-left text-[1.25vw] mb-[3vw] ">
          The above given terms and conditions can be updated by us at any time
          without any explicit notice. Continued use of this website implies
          acceptance of any and every change made. For any further queries,
          contact us at <b>hello@possesivepanda.com</b>.
        </p>
      </div>
      <Footer />

    </div>
  );
};

export default TermsandCondition;
