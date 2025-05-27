import React from 'react'

const CategoryItems = ({categoryItems})=>{
const Items = [categoryItems]
  return(
    <div>
    {Items.map ((tag,index) => {
      return (
        <div key={index}
        className=" text-white text-[1vw] font-normal leading-[normal] tracking-[0.015rem] w-full   text-start pl-[0.5vw] flex justify-between  hover:bg-sky-500 hover:text-black items-center duration-300 hover:duration-300 "
        >{tag}</div>
      )
    })}
    </div>
  );
};
export default CategoryItems;


// import React, { useState } from 'react';

// const CategoryItems = ({ categoryItems }) => {

//   const categoryItem = [categoryItems]

//   // Ensure categoryItems is an array; default to empty array if not
//   const items = Array.isArray(categoryItem) ? categoryItem : [];
//   console.log('new categoryItems:', items);

//   // Remove duplicates based on case-insensitive name
//   const uniqueItems = items.filter(
//     (item, index, self) =>
//       item &&
//       typeof item === 'string' &&
//       index ===
//       self.findIndex(
//         (t) =>
//           t &&
//           typeof t === 'string' &&
//           t === item
//       )
//   );

//   console.log('Processed uniqueItems:', uniqueItems);

//   // State to track the selected item (optional, for showing content)
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Handle item click to show related content (optional)
//   const handleItemClick = (item) => {
//     console.log('Clicked item:', item);
//     setSelectedItem(item);
//   };

//   // If no valid items, render a fallback UI
//   if (uniqueItems.length === 0) {
//     return (
//       <div className="p-4 text-red-500 text-[1rem]">
//         No valid categories available. Check the data structure.
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 bg-gray-900 min-h-[100px]">
//       {/* Category Items List */}
//       <div
//         className="
//           flex
//           flex-wrap
//           gap-2
//           text-white
//           text-[1vw]
//           font-normal
//           leading-normal
//           tracking-[0.015rem]
//           w-full
//           pl-[0.5vw]
//         "
//       >
//         {uniqueItems.map((item, index) => (
//           <div
//             key={item.id || index} // Prefer item.id if available
//             className="
//               px-2
//               py-1
//               rounded-md
//               cursor-pointer
//               flex
//               justify-between
//               items-center
//               hover:bg-sky-500
//               hover:text-black
//               transition
//               duration-300
//             "
//             onClick={() => handleItemClick(item)}
//           >
//             {item.name || 'Unnamed Item'}
//           </div>
//         ))}
//       </div>

//       {/* Related Content Display (optional) */}
//       {selectedItem && (
//         <div className="mt-4 p-4 bg-gray-800 text-white rounded-md">
//           <h2 className="text-[1.2rem] font-semibold mb-2">
//             {selectedItem.name || 'Unnamed Item'}
//           </h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryItems;



