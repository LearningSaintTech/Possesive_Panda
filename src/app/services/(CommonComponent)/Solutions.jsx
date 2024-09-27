"use client"
import React, { useState } from 'react';
import { Inter } from 'next/font/google'
import Circle from '../../../../public/assets/Circle.svg'
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })

const Solutions = ({ paragraphs, buttonData,title }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const handleButtonClick = (index) => {
        if (!isSliding) {
            setIsSliding(true);
            setTimeout(() => {
                setSelectedIndex(index);
                setIsSliding(false);
            }, 500);
        }
    };
    const calculateButtonPosition = (index, totalButtons, radius) => {
        const angle = ((index / (totalButtons - 1)) - 0.5) * -Math.PI;
        var x = Math.cos(angle) * radius;
        var y = Math.sin(angle) * radius;
        if (index == 0) {
            x = x + 8;
            y = y - 8;
        }
        else if (index == 1) {
            x = x - 0;
            y = y - 8;
        }
        else if (index == 2) {

        }
        else if (index == 3) {
            y = y + 8;

        }
        else if (index == 4) {
            x = x + 8;
            y = y + 8;
        }



        return { x, y };
    };

    // Number of buttons
    const totalButtons = 5;
    const radius = 23.438;
    const buttonStyles = {

    };



    return (
        <div className='flex gap-[0vw] flex-col'>
                             
            <div className='bg-[#00111A] sm:flex hidden  h-[50vw] relative overflow-hidden ' >
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", height: "50vw", overflow: "hidden", position: "relative" }}>
                    <Image
                        src={Circle}
                        alt="circle"
                        style={{
                            height: "66.198vw", // Ensure the image covers the full height
                            width: "66.198vw",
                            left: "-33vw",
                            position: 'relative'

                        }}
                    />

                    {/* Buttons */}
                    {buttonData.map((text, index) => {
                        const { x, y } = calculateButtonPosition(index, totalButtons, radius);
                        return (
                            <button
                                key={index}
                                onClick={() => handleButtonClick(index)}

                                style={{
                                    ...buttonStyles,
                                    position: "absolute",
                                    left: `calc(5% + ${x}vw)`,
                                    top: `calc(50% - ${y}vw)`,
                                    transform: "translate(-50%, -50%)",
                                    background: selectedIndex === index ? "radial-gradient(106.41% 203.12% at 104.31% 15.71%, #00AFF1 0%, rgba(0, 0, 0, 0.00) 99.99%), radial-gradient(97.19% 184.2% at 0% 100%, #00AFF1 0%, rgba(0, 0, 0, 0.00) 99.99%), #050505" : "rgba(255, 255, 255, 0.05)", // Highlight selected button
                                    scale: selectedIndex === index ? "130%" : "100%",
                                    color: "#fff",
                                    borderRadius: "0.417vw",
                                    cursor: "pointer",
                                    fontSize: "0.833vw",
                                    paddingTop: "0.625vw",
                                    paddingBottom: "0.625vw",

                                    justifyContent: "center",
                                    textAlign: "center",
                                    paddingLeft: "2.188vw",
                                    paddingRight: "2.188vw",


                                    borderRadius: "8px",
                                    boxShadow: selectedIndex === index ? "0px 1.037px 41.44px 0px rgba(227, 222, 255, 0.05) inset, 0px 4.144px 18.647px 0px rgba(154, 146, 210, 0.05) inset, 0px 101.526px 103.598px -49.727px rgba(202, 172, 255, 0.05) inset, 0px -84.951px 70.447px -66.304px rgba(96, 68, 144, 0.05) inset, 0px 7.252px 11.395px -4.144px rgba(255, 255, 255, 0.10) inset, 0px 40.403px 58.015px -37.296px rgba(255, 255, 255, 0.02) inset" : "0px 1.037px 41.44px 0px rgba(227, 222, 255, 0.05) inset, 0px 4.144px 18.647px 0px rgba(154, 146, 210, 0.05) inset, 0px 101.526px 103.598px -49.727px rgba(202, 172, 255, 0.05) inset, 0px -84.951px 70.447px -66.304px rgba(96, 68, 144, 0.05) inset, 0px 7.252px 11.395px -4.144px rgba(255, 255, 255, 0.10) inset, 0px 40.403px 58.015px -37.296px rgba(255, 255, 255, 0.02) inset",
                                    backdropFilter: "blur(2.594594717025757px)",

                                }}
                            >
                                {text}
                            </button>
                        );
                    })}

                </div>
                <div className='flex flex-col' >
                <p className='text-white text-[0.833vw] ml-[-3vw]'>Possesive Panda</p>
                                    <p className='text-white text-[2.5vw] ml-[-20vw] '>{title}</p>
      
                    <div style={{ position: "relative", overflow: "visible", top: "3.813vw", left: "-19.271vw" }}>
                        <div style={{ position: "absolute", }}>
                            {paragraphs.map((paragraph, index) => (
                                <div
                                    key={index}
                                    style={{
                                        position: "absolute",


                                        display: "flex",
                                        flexDirection: "column",

                                        transition: "transform 0.5s ease, opacity 0.5s ease",
                                        opacity: selectedIndex === index ? 1 : 0,
                                        pointerEvents: selectedIndex === index ? "auto" : "none",
                                    }}
                                >
                                    <p
                                        style={{
                                            position: "absolute",
                                            top: "-3.646vw",
                                            left: "-29%",
                                            fontSize: "31.25vw",
                                            zIndex: 1,
                                            transition: "transform 0.5s ease",
                                            transform:
                                                selectedIndex === index
                                                    ? "translateY(0)"
                                                    : selectedIndex > index
                                                        ? "translateY(100%)"
                                                        : "translateY(-100%)",
                                            color: "#00111A",
                                            textShadow: "0px 0px 4.065vw rgba(121, 151, 206, 0.80)",
                                            WebkitTextStrokeWidth: "0.521vw",
                                            WebkitTextStrokeColor: "#00AFF1",
                                            fontStyle: "normal",
                                            fontWeight: 'bolder',
                                            lineHeight: "normal",
                                            fontFamily: selectedIndex === 3 ? " " : "Inter, sans-serif"


                                        }}
                                    >
                                        {paragraph.number}
                                    </p>
                                  <div className='flex flex-col'>
                                   <div
                                        className="text-white flex flex-col gap-[1.667vw]"
                                        style={{
                                            zIndex: 2,
                                            transition: "transform 0.5s ease, opacity 0.5s ease",
                                            transform:
                                                selectedIndex === index
                                                    ? "translateY(0)"
                                                    : selectedIndex > index
                                                        ? "translateY(-100%)"
                                                        : "translateY(100%)",
                                        }}
                                    >
                                        
                                        <div className="relative flex flex-col bg-[#131D22] border-none  rounded-[0.521vw] overflow-hidden justify-center gap-[0.833vw] py-[1.667vw] px-[1.615vw]"
                                            style={{

                                                background: "linear-gradient(180deg, rgba(135, 156, 196, 0.00) 0.16%, rgba(135, 156, 196, 0.25) 158.15%), linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), #131D22",

                                            }}
                                        >
                                            <div className="absolute rounded-[13.594vw] w-[16.594vw] h-[4.594vw] left-60 -top-5"
                                                style={{
                                                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 50%), radial-gradient(circle, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 70%)",
                                                    filter: 'blur(2.604vw)',
                                                    boxShadow: '0 0.417vw 0.833vw rgba(0, 0, 0, 0.2)',
                                                }}>
                                            </div>

                                            <p className="text-white font-medium text-[1.667vw]"
                                                style={{
                                                    background: "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.10) 45%)",
                                                    WebkitBackgroundClip: "text",
                                                    backgroundClip: "text",
                                                    color: "transparent",
                                                }}


                                            >

                                                {paragraph.heading1}</p>
                                            <p className="w-[41.354vw] text-white text-[1.042vw] opacity-[0.65]">{paragraph.text1}</p>
                                        </div>






                                        <div className="py-[1.667vw] bg-[#131D22] relative overflow-hidden border-none  rounded-[0.521vw] justify-center gap-[1.667vw] px-[1.615vw]"
                                            style={{

                                                background: "linear-gradient(180deg, rgba(135, 156, 196, 0.00) 0.16%, rgba(135, 156, 196, 0.25) 158.15%), linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), #131D22",

                                            }}
                                        >







                                            <div className="absolute rounded-[13.594vw] w-[16.594vw] h-[4.594vw] left-60 -top-8"
                                                style={{
                                                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 50%), radial-gradient(circle, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 70%)",
                                                    filter: 'blur(2.604vw)',
                                                    boxShadow: '0 0.417vw 0.833vw rgba(0, 0, 0, 0.2)',

                                                }}>
                                            </div>



                                            <p className="text-[1.667vw] font-medium text-white "
                                                style={{
                                                    background: "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.10) 45%)",
                                                    WebkitBackgroundClip: "text",
                                                    backgroundClip: "text",
                                                    color: "transparent",
                                                }}
                                            >{paragraph.heading2}</p>
                                            <p className="w-[41.354vw] mt-[1.667vw] text-white text-[1.042vw]  opacity-[0.65]">{paragraph.text2}</p>
                                            <ul className="gap-[0.417vw] ml-[1.667vw] mt-[1.667vw] flex list-disc	 flex-col">

                                                {paragraph.dotPoints.map((dot, i) => (
                                                    <li key={i}
                                                        className='opacity-[0.8] text-[1.042vw]'
                                                    >{dot}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



            </div>

            <div className='sm:hidden block'>
                {/* Flexbox container for all buttons */}
                <div className='flex flex-col text-center justify-center items-center'>
                <p className='text-white  text-[2.353vw] '>Possesive Panda</p>
                                    <p className='text-white w-[85.882vw] text-[7.529vw] '>{title}</p>
                                    </div>
                <div className='flex items-center flex-wrap justify-center gap-x-[1.941vw] gap-y-[1.941vw] '>
                    {buttonData.map((text, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            style={{
                                color: "#fff",
                                cursor: "pointer",
                                fontSize: "2.5vw",
                                padding: "3.353vw",
                                borderRadius: "8px",
                                boxShadow: "0px 1.037px 41.44px 0px rgba(227, 222, 255, 0.05) inset",
                                backdropFilter: "blur(2.594594717025757px)",
                                background: selectedIndex === index ? " #05B7DF" : "rgba(255, 255, 255, 0.05)",
                            }}
                        >
                            {text}
                        </button>
                    ))}
                </div>

                {/* Parent container for all paragraphs */}
                <div className="relative h-[80vw] overflow-hidden px-[7.059vw]">
                    {paragraphs.map((paragraph, index) => (
                        <div
                            key={index}
                            className={`absolute transition-transform duration-700 flex flex-col gap-[4vw] ease-in-out  ${selectedIndex === index
                                ? 'translate-x-0 opacity-100'
                                : selectedIndex < index
                                    ? 'translate-x-[100vw] opacity-0'
                                    : 'translate-x-[-100vw] opacity-0'
                                }`}
                            style={{
                                top: '11.765vw',
                            }}
                        >
                            {/* Paragraph content */}
                            <div className="relative flex flex-col bg-[#131D22] border-none rounded-[2.521vw] overflow-hidden justify-center gap-[0.833vw] py-[1.667vw] px-[1.615vw]"
                                style={{
                                    background: "linear-gradient(180deg, rgba(135, 156, 196, 0.00) 0.16%, rgba(135, 156, 196, 0.25) 158.15%), #131D22",
                                }}
                            >
                                <div className="absolute rounded-[13.594vw] w-[16.594vw] h-[4.594vw] left-60 -top-5"
                                    style={{
                                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 50%)",
                                        filter: 'blur(2.604vw)',
                                        boxShadow: '0 0.417vw 0.833vw rgba(0, 0, 0, 0.2)',
                                    }}
                                />
                                <p className="text-white font-medium text-[3.294vw]"
                                    style={{
                                        background: "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.10) 45%)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    {paragraph.heading1}
                                </p>
                                <p className="w-[80vw] text-white text-[2.353vw] opacity-[0.65]">{paragraph.text1}</p>
                            </div>
                            <div className="py-[1.667vw] bg-[#131D22] relative overflow-hidden border-none rounded-[2.521vw] justify-center gap-[1.667vw] px-[1.615vw]"
                                style={{
                                    background: "linear-gradient(180deg, rgba(135, 156, 196, 0.00) 0.16%, rgba(135, 156, 196, 0.25) 158.15%), linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), #131D22",
                                }}
                            >
                                <div className="absolute rounded-[13.594vw] w-[16.594vw] h-[4.594vw] left-60 -top-8"
                                    style={{
                                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 50%), radial-gradient(circle, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 70%)",
                                        filter: 'blur(2.604vw)',
                                        boxShadow: '0 0.417vw 0.833vw rgba(0, 0, 0, 0.2)',
                                    }}></div>
                                <p className="text-[3.294vw] font-medium text-white"
                                    style={{
                                        background: "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.10) 45%)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                    }}>{paragraph.heading2}</p>
                                <p className="w-[80vw] mt-[1.667vw] text-white text-[2.353vw]  opacity-[0.6]">{paragraph.text2}</p>
                                <ul className="gap-[0.802vw] ml-[3.529vw] text-white mt-[1.667vw] flex list-disc flex-col">

                                    {paragraph.dotPoints.map((dot, i) => (
                                        <li key={i}
                                            className='opacity-[0.8] text-[1.882vw]'
                                        >{dot}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>




        </div>
    );
};

export default Solutions;
