"use client"
import React, { useRef } from 'react';
import BannerComp from './BannerComp';
import SecondComp from './SecondComp';
import ThirdComp from './ThirdComp';
import FourthComp from './FourthComp';
import FifthComp from './FifthComp';
import SixthComp from './SixthComp';
import SeventhComp from './SeventhComp';
import EightethComp from './EightethComp';
import Footer from '../(Components)/Footer';
import Timer3 from './Timer';
 

const Page = () => {
    const thirdCompRef = useRef(null);
    const eightethCompRef = useRef(null);

    const scrollToThirdComp = () => {
        thirdCompRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToEightethComp = () => {
        eightethCompRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '536379559281294');
                            fbq('track', 'PageView');
                        `,
                    }}
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=536379559281294&ev=PageView&noscript=1"
                        alt="fb-pixel"
                    />
                </noscript>
            </head>
            <BannerComp scrollToThirdComp={scrollToThirdComp} />
            <Timer3/>
            <SecondComp />
            <div ref={thirdCompRef}>
                <ThirdComp />
            </div>
            <FourthComp />
            <FifthComp scrollToEightethComp={scrollToEightethComp} />
            <SixthComp />
            <SeventhComp />
            <div ref={eightethCompRef}>
                <EightethComp />
            </div>
            <div className='mt-[12.25vw]'>
                <Footer />
            </div>
        </div>
    );
};

export default Page;
