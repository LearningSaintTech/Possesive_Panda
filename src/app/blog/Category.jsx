// import React from "react";
// import { BsArrowRight } from "react-icons/bs";

// const Category = ({ category }) => {
//   const items = ["App Development", "Website Development", "Virtual Assistance", "Digital Marketing", "Cybersecurity", "E-commerce", "Uncategory"];
//   const matchedItems = {};

//   category.forEach(item => {
//     const matchedTag = items.find(tag => tag.toLowerCase() === item.toLowerCase());
//     if (matchedTag) {
//       matchedItems[matchedTag] = (matchedItems[matchedTag] || 0) + 1;
//     } else {
//       matchedItems["Uncategory"] = (matchedItems["Uncategory"] || 0) + 1;
//     }
//   });

//   console.log(matchedItems);

//   return (
//     <div>
//       {Object.entries(matchedItems).map(([item, count]) => (
//         <button
//           key={item}
//           className="bg-[#00111A] text-white text-[1vw] font-normal leading-[normal] tracking-[0.015rem] w-10/12 border border-opacity-50 rounded-[0.3125rem] py-[0.8vw] text-start pl-[1.458vw] flex justify-between pr-[0.781vw] hover:bg-sky-500 hover:text-black items-center duration-300 hover:duration-300"
//         >
//           {item} ({count}) <BsArrowRight className="size-[2vw]" />
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Category;



import React from 'react';

const TagFilter = ({ allTags, selectedTag, onTagSelect }) => {
  const uniqueTags = [...new Set(allTags.map(tag => tag.toLowerCase()))];

  return (
    <div className="flex flex-wrap gap-2">
      {uniqueTags.map((tag, index) => (
        <div
          key={index}
          className={`px-3 py-1 rounded-md cursor-pointer ${
            selectedTag === tag
              ? 'bg-sky-500 text-black'
              : 'hover:bg-sky-500 hover:text-black text-white'
          }`}
          onClick={() => onTagSelect(tag === selectedTag ? null : tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagFilter;
