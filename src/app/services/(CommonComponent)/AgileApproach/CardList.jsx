import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const cardData = [
    {
        title: "Initial Mapping",
        step: "Step 1",
        description: "For better client satisfaction, understanding clients requirements is necessary. To facilitate this, we conduct client meetings in which all the wants and needs are discussed and planned.",
    },
    {
        title: "Web Designing & Development",
        step: "Step 2",
        description: "This stage necessitates custom eCommerce website design and development, keeping user-friendliness, responsiveness, intuitive navigation, and high-converting product page stores in mind.",
    },
    {
        title: "Payment Processing",
        step: "Step 3",
        description: "At this stage, the integration of secure payment gateways is done to facilitate smooth transactions, offering various payment methods and options to cater to customer preferences.",
    },
    {
        title: "Logistics and Shipping",
        step: "Step 4",
        description: "This stage solely deals with managing logistics involving order fulfillment, shipping, and returns. We have a tie with shipping carriers to ensure timely delivery, and we offer real-time order tracking.",
    },
    {
        title: "Digital Marketing",
        step: "Step 5",
        description: "At this stage, we focus on establishing your eCommerce brand as a pioneer on the internet and maximizing the traffic and sales via audience engagement, including services like PPC and SEO, advertising, SMM, etc.",
    },
    {
        title: "Customer Support",
        step: "Step 6",
        description: "This stage facilitates the 24/7 customer support services, including live chat and multichannel support, to assist customers with their queries and inquiries to enhance customer satisfaction.",
    },
    {
        title: "Maintenance and Support",
        step: "Step 7",
        description: "Last but not least, we provide ongoing support and maintenance to ensure that your eCommerce platform remains functional, updated, and secure with cutting edge technology and industry best practices.",
    },
];

const CardList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [visibleCards, setVisibleCards] = useState(4); // default to 4 cards for larger screens

    // Detect screen size and adjust the number of visible cards
    const updateVisibleCards = () => {
        const isMobile = window.innerWidth <= 640; // Mobile breakpoint, adjust if necessary
        setVisibleCards(isMobile ? 2 : 4); // Show 2 cards on mobile and 4 cards on larger screens
    };

    useEffect(() => {
        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards); // Adjust on resize

        return () => {
            window.removeEventListener("resize", updateVisibleCards);
        };
    }, []);

    // Function to handle the next button click
    const handleNext = () => {
        setHoveredIndex((prevIndex) => Math.min(prevIndex + 1, cardData.length - 1));
        scrollToCard(hoveredIndex + 1);
    };

    // Function to handle the previous button click
    const handlePrev = () => {
        setHoveredIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        scrollToCard(hoveredIndex - 1);
    };

    // Function to scroll to the selected card smoothly
    const scrollToCard = (index) => {
        const cardWidth = scrollContainerRef.current.offsetWidth / visibleCards; // Dynamically use the visibleCards state
        scrollContainerRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
        });
    };

    // Automatic scrolling effect when dragging or scrolling manually
    const calculateCenteredCard = () => {
        const container = scrollContainerRef.current;
        const scrollCenter = container.scrollLeft + container.offsetWidth / 2;

        const cardElements = container.querySelectorAll(".card-item");
        let closestCardIndex = 0;
        let minDistance = Infinity;

        cardElements.forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(scrollCenter - cardCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestCardIndex = index;
            }
        });

        setHoveredIndex(closestCardIndex);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;

        const handleScroll = () => {
            calculateCenteredCard();
        };

        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isDragging) {
            calculateCenteredCard();
        }
    }, [isDragging]);

    return (
        <div className="px-[7.059vw] sm:px-[5.208vw] bg-[#00111A] sm:rounded-[5.172vw] shadow-inner relative">
            <div className="flex flex-col gap-[3.765vw] sm:gap-[1.25vw] items-center justify-center">
                <h5 className="text-center text-[#00aff1] text-[3.765vw] sm:text-[1.136vw] sm:font-semibold sm:leading-[1.759vw]">
                    Agile Approach
                </h5>
                <h5 className="text-center text-[#fbfbfc] text-[7.529vw] sm:w-[46.51vw] sm:text-[3.504vw] font-semibold sm:font-medium leading-tight sm:leading-[4.104vw]">
                    Our eCommerce Services Delivery Process
                </h5>
                <p className="text-center text-[#b9babf] text-[3.765vw] sm:text-[1.25vw] font-light sm:leading-[2.345vw] sm:w-[57vw]">
                    With Possessive Panda’s eCommerce Services, we aim to deliver exemplary experiences that will have a long-lasting impression on our clients and their customers.
                </p>
            </div>

            {/* Next and Prev Buttons */}
            <div className="flex items-center justify-center mt-[3.5vw] space-x-[2vw] sm:space-x-[0.521vw]">
                <div className="w-[10vw] sm:w-[2.931vw] h-[10vw] sm:h-[2.931vw] pl-[0.586vw] pr-[0.586vw] py-[0.586vw] bg-white/10 rounded-[520.781vw] justify-center items-center inline-flex">
                    <button
                        className="w-[4vw] h-[4vw] relative flex-col justify-center items-center flex text-white"
                        onClick={handlePrev}
                        disabled={hoveredIndex === 0}
                    >
                        <FaChevronLeft className="size-[9vw] sm:size-[1vw]" />
                    </button>
                </div>
                <div className="w-[10vw] sm:w-[2.931vw] h-[10vw] sm:h-[2.931vw] p-[0.586vw] bg-white/10 rounded-[520.781vw] justify-center items-center inline-flex">
                    <button
                        className="w-[4vw] h-[4vw] relative flex-col justify-center items-center flex text-white"
                        onClick={handleNext}
                        disabled={hoveredIndex === cardData.length - 1}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className="relative mt-4">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto py-[1.25vw] no-scrollbar cursor-grab active:cursor-grabbing select-none"
                    style={{ maxWidth: '100vw', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
                >
                    <div className="flex space-x-[1vw] w-max">
                        {cardData.map((card, index) => (
                            <div key={index} className="snap-center flex-shrink-0 card-item" style={{ width: `${100 / visibleCards}vw` }}>
                                <Card
                                    data={card}
                                    index={index}
                                    hoveredIndex={hoveredIndex}
                                    isDragging={isDragging}
                                    setHoveredIndex={setHoveredIndex}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardList;
