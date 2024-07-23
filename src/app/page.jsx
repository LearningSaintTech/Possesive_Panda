import React from 'react';
import Head from 'next/head';
import MainPage from './MainPage';
import Script from "next/script";

export const metadata = {
  title: 'Leading Software Development Company - Possessive Panda',
  description: 'Possessive Panda is a global IT service company in the US, UAE & UK. We offer digital marketing, mobile application development, web design & development and more to startups and enterprises clients across.',
  alternates: {
    canonical: 'https://www.possesivepanda.com'
  },
  openGraph: {
    title: 'Leading Software Development Company - Possessive Panda',
    siteName: 'Possessive Panda',
    url: 'https://www.possesivepanda.com/',
    description: 'Possessive Panda is a global IT service company in the US, UAE & UK. We offer digital marketing, mobile application development, web design & development and more to startups and enterprises clients across.',
    type: 'website',
    images: [
      {
        url: 'https://www.possesivepanda.com/path-to-image.jpg',
        
      },
    ],},
  breadcrumbList: {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Possessive Panda", "item": "https://possesivepanda.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://possesivepanda.com/about" },
      { "@type": "ListItem", "position": 3, "name": "Portfolio", "item": "https://possesivepanda.com/portfolio" },
      { "@type": "ListItem", "position": 4, "name": "Contact Us", "item": "https://possesivepanda.com/contact" },
      { "@type": "ListItem", "position": 5, "name": "Blog", "item": "https://possesivepanda.com/blog" }
    ]
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Possessive Panda",
    "url": "https://possesivepanda.com/",
    "logo": "https://possesivepanda.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav-logo.8084e162.png&w=384&q=75",
    "sameAs": [
      "https://www.facebook.com/people/Possessive-Panda/61559502103126/",
      "https://www.instagram.com/possesivepanda/",
      "https://www.linkedin.com/company/102720317/admin/dashboard/",
      "https://x.com/possesivepanda",
      "https://possesivepanda.com/"
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What technologies are used in web development?", "acceptedAnswer": { "@type": "Answer", "text": "HTML, CSS, JavaScript, PHP, React, and Angular are some technologies used in web development. We use many more to deliver services based on clients’ needs." }},
      { "@type": "Question", "name": "Does Possessive Panda provide services for startups?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely, yes. We have Startup Bundle Services for aspiring entrepreneurs and startup businesses, through which they can achieve great heights." }},
      { "@type": "Question", "name": "How can your IT services benefit our business?", "acceptedAnswer": { "@type": "Answer", "text": "Our IT services can help improve your business operations, efficacy, and satisfaction of customers. We also help maintain security and effectively achieve digital goals." }},
      { "@type": "Question", "name": "Is there any Customer support available here?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our customers are our priority. Our customer support is always available to handle customer queries and provide timely phone, email, and chat assistance." }},
      { "@type": "Question", "name": "What services does Possessive Panda offer?", "acceptedAnswer": { "@type": "Answer", "text": "Possessive Panda offers multiple IT services, such as software development, app development, cloud services, web development, and digital marketing. We also provide a range of services to suit your business needs." }},
      { "@type": "Question", "name": "How do you guarantee the security of my business data?", "acceptedAnswer": { "@type": "Answer", "text": "The security of your business data is our responsibility. We implement standard cybersecurity measures, such as encryption, firewalls, intrusion detection systems, and regular security audits in accordance with data protection regulations." }}
    ]
  },
 
};

const Home = () => (
  <main>
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="canonical" href={metadata.canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />

     
    </Head>
    <Script
      id="google-analytics-script"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-5VEQ1BPQLS`}
    />
    <Script id="google-analytics-inline-script">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5VEQ1BPQLS');
      `}
    </Script>
     {/* Breadcrumb List Schema Markup */}
     <Script id="application/ld+json">
        {JSON.stringify(metadata.breadcrumbList)}
      </Script>

      {/* Organization Schema Markup */}
      <Script id="application/ld+json">
        {JSON.stringify(metadata.organization)}
      </Script>

      {/* FAQ Schema Markup */}
      <Script id="application/ld+json">
        {JSON.stringify(metadata.faq)}
      </Script>

    <MainPage />
  </main>
);

export default Home;
