import React from 'react'
import  policyData from "./data"
import Banner from "../(Components)/Banner";
import banner from "../../assets/banners/privecy-&-policy-slider.png";
``
const PrivacyPolicy = () => {
  return (
  <div>
          <Banner title={"Privacy Policy"}
        desciption={"Know how your information will be utilized"}
        page={"privacy policy"}
        image={banner} />
    <div className='sm:px-24 pb-0 p-[30px]'>
    <div >
      <h1 className='font-bold mt-[5vw] text-[2.5vw] text-left md:mt-[5vw] '>{policyData.title}</h1>
      {policyData.description.map((desc, index) => (

        <p className='mt-2 text-[1.5vw] sm:text-[1.25vw] text-left' key={index}>{desc}</p>
      ))}
      <h2 className='mt-2 font-bold text-[2.083vw] text-left'>Information Collection</h2>
      {policyData.information_collection.map((info, index) => (
        <div key={index}>
          <h3 className='mt-3 font-bold text-[1.25vw] text-left'>
          {info.title} 
          </h3>
          <p className='mt-2  text-[1.25vw] text-left'>{info.description }</p> 
        </div>
        
      ))}
      <p className='font-semibold text-left'>Note : WE DO NOT save any payment details, including your financial details, credit card, or bank account details while processing any kind of payment.</p>
    </div>
    <div className='text-left mt-3'>
    <h2 className=' mt- 3 text-[2.083vw] font-bold '>Use of Cookies :-</h2>
      <p className=' mt-3 text-left text-[1.25vw] '>{policyData.use_of_cookies.description}</p>
      <p className=' mt-3 text-[1.5vw] font-bold '>{policyData.use_of_cookies.data} :-</p>
      {policyData.use_of_cookies.types.map((cookie, index) => (
        <div key={index}>
          <h3 className='mt-3 font-semibold text-[1.25vw] '>{cookie.type}-</h3>
          <p className='mt-3 text-[1.25vw]'>{cookie.description}</p>
        </div>
      ))}
    </div>
      <div className='text-left'>
      <h2 className='mt- 3 font-bold text-[2.083vw] mt-3'>Use of Information :- </h2>
      {policyData.use_of_information.map((info, index) => (
        <p className='mt-3 text-[1.25vw]' key={index}>{info}</p>
      ))}
      </div>
      
      <h2 className='mt-3 font-bold text-[1.5vw] text-left'>Saving Your Personal Information :</h2>
      <p className='text-left mt-3 text-[1.25vw]'>{policyData.saving_personal_information}</p>
      <h2 className='mt-3 font-bold text-[1.5vw] text-left'>Disclosing Your Data</h2>
      <p className='text-left mt-3 text-[1.25vw] '>{policyData.disclosing_data}</p>
      <h2  className='mt-3 font-bold text-[1.5vw] text-left'>Using Third Party Links or Websites:-</h2>
      <p className='text-left mt-3 text-[1.25vw] '>{policyData.third_party_links}</p>
      <h2  className='mt-3 font-bold text-[1.5vw] text-left'>Amendments to this Privacy Policy:-</h2>
      <p className='text-left mt-3 text-[1.25vw]' >{policyData.amendments_to_policy}</p>
      <h2  className='mt-3 font-bold text-[1.5vw]  text-left'>Your Acceptance of This Policy’s Terms and
      Conditions :-</h2>
      <p className='text-left mt-2  text-[1.25vw] '>{policyData.acceptance_of_terms}</p>
    </div>
  </div>

  );
};

export default PrivacyPolicy;
