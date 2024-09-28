"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./(Components)/(NavBar)/Nav";
import { createContext, useContext, useState, useCallback } from "react";
import Icon from "./(Components)/(Input Form)/Icon";


const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
});

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export default function RootLayout({ children }) {
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNavbar = useCallback((isVisible) => {
    setShowNavbar(isVisible);
  }, []);

  return (
    <html lang="en" className={poppins.className}>
    <head>
        <meta
          name="google-site-verification"
          content="Qi5NT1J6yKJpoaXZALZWAqKGg8qgKHGQeSsbgcHxqo0"
        />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5K4LFW6H');
          `,
        }} />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16645945747"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16645945747');
          `,
        }} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5VEQ1BPQLS"
        />
        <script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5VEQ1BPQLS');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '380882334679792');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript><img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=380882334679792&ev=PageView&noscript=1"
        /></noscript>
        {/* Meta tags and scripts */}
      </head>
      <body>
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5K4LFW6H"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <NavbarContext.Provider value={{ toggleNavbar }}>
          {showNavbar && <Nav />}
          {children}
        </NavbarContext.Provider>
        <Icon />

      </body>
    </html>
  );
}
