import React from "react";

const ListItem = ({ name, clickFunction, selected }) => {
  const isSelected = selected === name;
  const normalWidth = "w-[18vw]";
  const subWidth = "w-[21vw]";
  const baseClasses =
    "flex gap-[0.4vw] pl-[2.083vw] items-center py-[0.5vw] text-neutral-800";
  const hoverClasses =
    "hover:bg-cyan-300 hover:border-l-[0.4vw] hover:border-sky-500 hover:text-white";
  const selectedClasses =
    "bg-cyan-300 border-l-[0.4vw] border-sky-500 text-white";
  const headClasses =
    "text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem]";
  const childClasses =
    "text-[1.04vw] font-medium leading-[normal] tracking-[0.013rem]";
  return (
    <button
      className={`${baseClasses} ${
        isSelected ? selectedClasses : hoverClasses
      } ${
        name === "Premium Services" || name === "Services"
          ? normalWidth
          : subWidth
      }`}
      onClick={clickFunction}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="size-[1.25wv] text-black"
      >
        <path
          d="M6.616 21C6.15533 21 5.771 20.846 5.463 20.538C5.155 20.23 5.00067 19.8457 5 19.385V4.615C5 4.155 5.15433 3.771 5.463 3.463C5.77167 3.155 6.156 3.00067 6.616 3H17.385C17.845 3 18.2293 3.15433 18.538 3.463C18.8467 3.77167 19.0007 4.156 19 4.616V19.385C19 19.845 18.846 20.2293 18.538 20.538C18.23 20.8467 17.8453 21.0007 17.384 21H6.616ZM6.616 20H17.385C17.5383 20 17.6793 19.936 17.808 19.808C17.9367 19.68 18.0007 19.5387 18 19.384V4.616C18 4.462 17.936 4.32067 17.808 4.192C17.68 4.06333 17.5387 3.99933 17.384 4H16V10.116L14 8.923L12 10.116V4H6.616C6.462 4 6.32067 4.064 6.192 4.192C6.06333 4.32 5.99933 4.461 6 4.615V19.385C6 19.5383 6.064 19.6793 6.192 19.808C6.32 19.9367 6.461 20.0007 6.615 20"
          fill="#2A2A2A"
        />
      </svg>
      <h5
        className={
          name === "Premium Services" || name === "Services"
            ? headClasses
            : childClasses
        }
      >
        {name}
      </h5>
      {name === "Premium Services" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="size-[1.25vw]"
        >
          <path d="M5 8L12.5 16L20 8H5Z" fill="#2A2A2A" />
        </svg>
      )}
    </button>
  );
};

export default ListItem;