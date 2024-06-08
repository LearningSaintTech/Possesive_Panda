import React from "react";

const OurJourney = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between mt-10 lg:mt-32 gap-8 lg:gap-16 mx-auto w-[90%] items-start ">
      <div className="lg:w-1/2 ">
        <h2 className="text-sky-500 mb-6 md:text-xl text-lg lg:text-2xl font-medium ">
          Our journey started
        </h2>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium leading-[62.40px] tracking-wide">
          Possessive Panda journey was inspired by a passion for Panda
          possessiveness to work
        </h1>
      </div>
      <div className="lg:w-1/2">
        <p className="lg:text-2xl  md:text-xl text-lg font-normal lg:mt-14 text-zinc-900 leading-[38.40px] tracking-tight">
          Possessive Panda is a global powerhouse, renowned for its innovation
          and expertise. Our diverse team, from around the world, brings varied
          knowledge and perspectives. This cultural richness fuels our
          cutting-edge solutions and industry leadership. Our commitment to
          excellence keeps us at the forefront, meeting clients' evolving needs
          globally.
        </p>
        <button className="flex gap-2 md:text-xl text-lg lg:text-2xl mt-9 justify-center items-center border rounded-full lg:py-3 py-2 px-6 lg:px-8 text-zinc-900" >
          Read More
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-5"
          >
            <rect width="19" height="14" fill="#A19F9F" />
            <g id="Mainb" clipPath="url(#clip0_1_2)">
              <rect
                width="1920"
                height="13752"
                transform="translate(-306 -11429)"
                fill="white"
              />
              <g id="main text">
                <g id="button">
                  <path
                    id="Rectangle 49"
                    d="M-193 7C-193 -15.0914 -175.091 -33 -153 -33H27C49.0914 -33 67 -15.0914 67 7V7C67 29.0914 49.0914 47 27 47H-153C-175.091 47 -193 29.0914 -193 7V7Z"
                    stroke="#4D4D4D"
                    strokeWidth="2"
                  />
                  <path
                    id="Vector"
                    d="M0 6.02357C0.078006 6.02697 0.156012 6.03378 0.234018 6.03378C5.44482 6.03378 9.77189 6.03378 14.9827 6.03378C15.0568 6.03378 15.1309 6.03378 15.244 6.03378C13.3719 4.40027 11.5309 2.79398 9.70169 1.20131C10.1775 0.782724 10.6339 0.384556 11.0785 0C13.7151 2.30053 16.3634 4.61126 19 6.90839C16.3673 9.20551 13.7151 11.5162 11.0785 13.8202C10.6378 13.4356 10.1853 13.0409 9.72119 12.6359C11.5465 11.0432 13.3914 9.43352 15.2362 7.82724C15.2284 7.81362 15.2167 7.79661 15.2089 7.783C15.1426 7.783 15.0724 7.783 15.0061 7.783C9.7836 7.783 5.44092 7.783 0.218417 7.783C0.148211 7.783 0.0780059 7.7898 0.00780058 7.79321C-1.81066e-08 7.20106 0 6.61231 0 6.02357Z"
                    fill="#1A1A1A"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect
                  width="1920"
                  height="13752"
                  fill="white"
                  transform="translate(-306 -11429)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OurJourney;
