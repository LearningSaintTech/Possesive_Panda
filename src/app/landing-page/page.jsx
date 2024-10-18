"use client"
import React, { useRef } from 'react';
import BannerComp from './bannercomp';
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