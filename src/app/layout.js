import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./(Components)/(NavBar)/Nav";
// import Footer from "./(Components)/Footer";
import Line from "./(Components)/Line";
import Icon from "./(Components)/(Input Form)/Icon";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata = {
  // Add your metadata here if needed
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Qi5NT1J6yKJpoaXZALZWAqKGg8qgKHGQeSsbgcHxqo0"
        />
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
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=380882334679792&ev=PageView&noscript=1"
        /></noscript>
      </head>
      <body className={poppins.className}>
        <Nav />
        {children}
        {/* <Line /> */}
        <Icon />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
