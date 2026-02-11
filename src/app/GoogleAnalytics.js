// ./components/GoogleAnalytics.js
import React from 'react';
import { Head, Script } from '@/lib/next-compat';

const GoogleAnalytics = () => {
  return (
    <>
      <Head>
      <meta name="google-site-verification" content="your verification string"/>
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5VEQ1BPQLS"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5VEQ1BPQLS');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
