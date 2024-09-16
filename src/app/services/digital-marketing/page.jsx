import React from "react";
import Footer from "../../(Components)/Footer";
import NewBanner from "@/app/(Components)/NewBanner";
import Faq from "../(Components)/(Faq)/Faq";
import Growth from "./Growth";

import Head from 'next/head';
import Script from 'next/script';

import {
  faq,
} from "./data";



export const metadata = {
  title: 'Digital Marketing Services | Best Digital Marketing Agency',
  description: ' Possesive Panda provides digital marketing services to companies across the U.S. & U.K. contact us today to learn more about what services can help your business grow.',
  alternates: {
    canonical: 'https://www.possesivepanda.com/services/e-commerce'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.possesivepanda.com/services/e-commerce',
    title: 'Best B2B E-commerce Solutions Platform | E-commerce Website Management Service',
    description: 'Finding the best B2B e-commerce solutions platform for seamless e-commerce business services. Enhance your business operations with Possesive Panda on top-notch tools and support.',
    images: [
      {
        url: 'https://www.possesivepanda.com/path-to-image.jpg',
        width: 800,
        height: 600,
        alt: 'E-commerce Service Banner',
      },
    ],
  },

};


const page = () => {
  return (
    <div className="bg-[#00111A]">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <Script id="application/ld+json">
        {`{
         "@context": "https://schema.org",
         "@type": "Organization",
         "name": "Digital Marketing Service",
        "alternateName": "PPC SEO Services Agency",
        "url": "https://possesivepanda.com/services/digital-marketing",
         "logo": "https://possesivepanda.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav-logo.8084e162.png&w=384&q=75"

          }`}
      </Script>

      <Script id="application/ld+json">
        {`
        {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is Digital Marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital marketing is also known as online marketing. We use marketing over online platforms and technologies to promote products, services, and brands. It includes strategies like social media marketing, content marketing, Search Engine Optimization, Pay-Per-Click, and email marketing."
                }
              },{
                "@type": "Question",
                "name": "Why is Digital Marketing important for my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital marketing is crucial as it enables us to reach a global customer base and engage with potential and existing customers at a cost-effective rate, allowing us to expand our business and target specific audiences efficiently."
                }
              },{
                "@type": "Question",
                "name": "How does Digital Marketing help my business grow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital Marketing helps increase brand visibility, drive traffic to your website, and generate leads. It also helps increase brand awareness among valuable customers through engagement."
                }
              },{
                "@type": "Question",
                "name": "What are the components of Digital Marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital Marketing components include Social Media Marketing, SEO (Search Engine Optimization), SEM (Search Engine Marketing), PPC ( Pay Per Click), Content Marketing, Email Marketing."
                }
              }]
            }

          `}
      </Script>


      <NewBanner
        title={"Welcome to Possesive Panda We’re Possesive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      />
      <Growth />
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
