import React from 'react'
import policyData from "./data"
import NewBanner from '../(Components)/NewBanner';
import Footer from "../(Components)/Footer";


const PrivacyPolicy = () => {
  return (
    <div className="bg-[#00111A]">
      <head>
      <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,t,r,u) {
          var f,n,i;
          w[u]=w[u]||[],f=function() {
            var o={ti:"187153115",enableAutoSpaTracking:true};
            o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
          },
          n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {
            var s=this.readyState;
            s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
          },
          i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
        })(window,document,"script","//bat.bing.com/bat.js","uetq");
      `,
    }}
  />
      </head>
      <NewBanner
        title={"Let Possesive Panda be Your Success Partner!"}
        desciption={"Possesive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."}
      />
      <div className='sm:px-[5.208vw] pb-[5vw] p-[30px]'>
        <div >
          <h1 className='font-bold text-white mt-[5vw] text-[2.5vw] text-left md:mt-[5vw] '>{policyData.title}</h1>
          {policyData.description.map((desc, index) => (

            <p className='mt-2 text-white text-[1.5vw] sm:text-[1.25vw] text-left' key={index}>{desc}</p>
          ))}
          <h2 className='mt-2 text-white font-bold text-[2.083vw] text-left'>Information Collection</h2>
          {policyData.information_collection.map((info, index) => (
            <div key={index}>
              <h3 className='mt-3 text-white font-bold text-[1.25vw] text-left'>
                {info.title}
              </h3>
              <p className='mt-2 text-white text-[1.25vw] text-left'>{info.description}</p>
            </div>

          ))}
          <p className='font-semibold text-white text-left'>Note : WE DO NOT save any payment details, including your financial details, credit card, or bank account details while processing any kind of payment.</p>
        </div>
        <div className='text-left mt-3'>
          <h2 className=' mt- 3 text-[2.083vw] text-white font-bold '>Use of Cookies :-</h2>
          <p className=' mt-3 text-left text-white text-[1.25vw] '>{policyData.use_of_cookies.description}</p>
          <p className=' mt-3 text-[1.5vw] text-white font-bold '>{policyData.use_of_cookies.data} :-</p>
          {policyData.use_of_cookies.types.map((cookie, index) => (
            <div key={index}>
              <h3 className='mt-3 text-white font-semibold text-[1.25vw] '>{cookie.type}-</h3>
              <p className='mt-3 text-white text-[1.25vw]'>{cookie.description}</p>
            </div>
          ))}
        </div>
        <div className='text-left'>
          <h2 className='mt- 3 font-bold text-white text-[2.083vw] mt-3'>Use of Information :- </h2>
          {policyData.use_of_information.map((info, index) => (
            <p className='mt-3 text-white text-[1.25vw]' key={index}>{info}</p>
          ))}
        </div>

        <h2 className='mt-3 text-white font-bold text-[1.5vw] text-left'>Saving Your Personal Information :</h2>
        <p className='text-left text-white mt-3 text-[1.25vw]'>{policyData.saving_personal_information}</p>
        <h2 className='mt-3 text-white font-bold text-[1.5vw] text-left'>Disclosing Your Data</h2>
        <p className='text-left text-white mt-3 text-[1.25vw] '>{policyData.disclosing_data}</p>
        <h2 className='mt-3 text-white font-bold text-[1.5vw] text-left'>Using Third Party Links or Websites:-</h2>
        <p className='text-left text-white mt-3 text-[1.25vw] '>{policyData.third_party_links}</p>
        <h2 className='mt-3 text-white font-bold text-[1.5vw] text-left'>Amendments to this Privacy Policy:-</h2>
        <p className='text-left text-white mt-3 text-[1.25vw]' >{policyData.amendments_to_policy}</p>
        <h2 className='mt-3 text-white font-bold text-[1.5vw]  text-left'>Your Acceptance of This Policy’s Terms and
          Conditions :-</h2>
        <p className='text-left text-white mt-2  text-[1.25vw] '>{policyData.acceptance_of_terms}</p>
      </div>
      <Footer />

    </div>

  );
};

export default PrivacyPolicy;
