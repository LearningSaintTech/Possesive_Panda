import React from 'react'
import { BsArrowRight } from 'react-icons/bs'; // Ensure BsArrowRight is imported

const CategoryItems = ({categoryItems}) => {
    const matchedItems = {};
    const items = ["App Development", "Website Development", "Virtual Assistant", "Digital Marketing", "Cybersecurity", "E-commerce", "Uncategory"];
    const matchItems = items.filter((item) => item.toLowerCase() === categoryItems.toLowerCase());
    
    if (matchItems.length > 0) {
        matchItems.forEach(item => {
            matchedItems[item] = (matchedItems[item] || 0) + 1;
        });
    } else {
        matchedItems["Uncategory"] = (matchedItems["Uncategory"] || 0) + 1;
    }

    return (
        <button className=" text-white text-[1vw] font-normal leading-[normal] tracking-[0.015rem] w-full   text-start pl-[0.5vw] flex justify-between  hover:bg-sky-500 hover:text-black items-center duration-300 hover:duration-300">
            {Object.entries(matchedItems).map(([item, count]) => `${item} (${count})`).join(', ')} <BsArrowRight className="size-[2vw] ml-6" />
        </button>
    );
}

export default CategoryItems;










