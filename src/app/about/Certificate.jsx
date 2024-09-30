import Image from "next/image";
import React from "react";
import photo_1 from "../../assets/aboutus/photo-1.png";
import photo_2 from "../../assets/aboutus/photo-2.png";
import photo_3 from "../../assets/aboutus/photo-3.png";

const Certificate = () => {
  return (
    <div className="bg-[rgba(0,175,241,0.25)] px-[7.692vw] lg:px-0 flex flex-col  items-center relative z-[10] overflow-hidden gap-[3vw] lg:gap-[1.25vw] lg:min-h-[100vh] lg:max-h-[180vh] lg:mb-[4vw] mt-[7.5vw]">
      <h6 className="text-[5.128vw] md:text-[3vw] lg:text-[1.25vw] font-medium tracking-[0.015rem] text-[#00AFF1] mt-[10vw] lg:mt-[5.417vw]">
        Our Certificates
      </h6>
      <h3 className="text-white text-[6.154vw] md:text-[4vw] lg:text-[2.5vw] font-medium leading-[130%] tracking-[0.03rem]">
        Accreditations
      </h3>
      <p className="text-white text-[3.846vw] md:text-[2vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[160%] text-center  lg:w-[66vw]">
        Our clients trust us not just for our reliable product delivery but for our unwavering commitment to their satisfaction. With tailored services and bespoke solutions, we’ve earned a place of distinction in their eyes. Our dedication is further validated by the prestigious certifications we hold.
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 119 124"
        fill="none"
        className="size-[12vw] sm:size-[6vw]"
      >
        <path
          d="M59.5423 0.000789877C47.5359 0.000789877 36.6704 0.751635 28.6818 1.9919C24.688 2.6119 21.4277 3.33721 18.974 4.23759C17.7472 4.68778 16.7183 5.16298 15.8232 5.84195C14.9707 6.48881 14.0724 7.51635 13.9882 8.93537H13.7907C13.7907 11.5891 13.886 14.2066 14.0709 16.7842H7.25006C7.21847 14.6907 7.25085 12.5924 7.34905 10.4987L0.290267 8.84533C-1.95911 36.9288 8.97974 64.2625 29.1104 83.7284L33.2319 75.9372C32.1348 75.0286 31.0674 74.0847 30.0313 73.1071C31.5878 71.4807 33.2865 69.9967 35.1072 68.6728C38.6529 72.1406 42.5266 74.8768 46.6418 76.7434C52.4637 81.4148 48.7619 84.4751 40.4549 86.2869C55.9518 89.0775 50.7088 102.68 36.7363 110.59C36.1729 110.661 35.6158 110.728 35.0829 110.804C31.9113 111.256 29.3236 111.781 27.3412 112.449C26.35 112.784 25.5094 113.134 24.7333 113.675C23.9566 114.216 22.9888 115.177 22.9888 116.678C22.9888 118.179 23.9569 119.132 24.7333 119.673C25.5094 120.214 26.3497 120.564 27.3412 120.899C29.3236 121.567 31.9116 122.092 35.0829 122.544C41.4262 123.449 50.0324 124 59.5423 124C69.0521 124 77.6584 123.449 84.0016 122.544C87.1735 122.092 89.7611 121.567 91.7436 120.899C92.7345 120.564 93.5751 120.214 94.3512 119.673C95.1274 119.132 96.0954 118.179 96.0954 116.678C96.0954 115.177 95.1274 114.216 94.3512 113.675C93.5751 113.134 92.7348 112.783 91.7433 112.449C89.7609 111.781 87.1729 111.256 84.0011 110.804C83.4711 110.728 82.9164 110.661 82.3556 110.59C68.3823 102.68 63.1396 89.0781 78.6369 86.2869C70.326 84.474 66.624 81.4106 72.4585 76.7355C76.6024 74.8531 80.5006 72.0874 84.0666 68.582C85.8168 69.8386 87.447 71.2247 88.9292 72.7206C87.8446 73.8252 86.7279 74.8978 85.5804 75.937L89.8422 83.7282C110.672 64.7846 120.433 36.4634 118.81 8.69632L111.611 10.7946C111.73 12.7981 111.78 14.7936 111.759 16.784H105.021C105.208 14.1718 105.302 11.5537 105.301 8.93485H105.104C105.019 7.51582 104.113 6.48828 103.261 5.84143C102.365 5.16219 101.336 4.68752 100.109 4.23732C97.6558 3.33642 94.3955 2.61111 90.4014 1.99111C82.4133 0.751108 71.5479 0 59.5409 0L59.5423 0.000789877ZM59.5423 4.92077C71.3425 4.92077 82.0323 5.67214 89.6456 6.85396C93.4524 7.445 96.5064 8.15241 98.4159 8.85323C98.6897 8.9538 98.8832 9.05068 99.1069 9.14941C98.8832 9.24814 98.691 9.34476 98.4159 9.44559C96.5066 10.1464 93.4522 10.862 89.6456 11.453C82.0323 12.6351 71.3425 13.3865 59.5423 13.3865C47.7425 13.3865 37.0525 12.6348 29.439 11.4528C25.6321 10.8617 22.5781 10.1461 20.6689 9.44532C20.3925 9.3437 20.2029 9.2484 19.9778 9.14915C20.2024 9.05016 20.393 8.95433 20.6689 8.85297C22.5781 8.15214 25.6323 7.44448 29.4392 6.8537C37.0525 5.67162 47.7423 4.92077 59.5423 4.92077ZM7.61232 23.843H14.8112C16.9323 39.0805 22.2433 52.4947 29.6038 62.3462C27.7677 63.8574 26.0741 65.497 24.5521 67.2662C14.3773 55.0357 9.00818 39.7158 7.61232 23.843ZM104.282 23.843H111.39C109.92 39.5426 104.082 54.4226 94.2607 66.7067C92.8132 65.098 91.2427 63.6042 89.5634 62.239C96.885 52.398 102.167 39.0252 104.282 23.8433V23.843Z"
          fill="white"
        />
      </svg>
      <div className="flex flex-col md:flex-row justify-between items-center border-x-2 lg:border-x-4 border-black border-opacity-10 bg-white relative z-[10] mb-[10vw] md:mb-4">
        <Image
          src={photo_1}
          alt="photo-1"
          className="lg:px-[2.8vw] py-[2vw] lg:py-[1.62vw] lg:w-[20.5vw] lg:h-[7.917vw] relative z-[10] border-b-4 border-black border-opacity-10 lg:border-b-sky-500 "
        />
        <div className="">
          <Image
            src={photo_2}
            alt="photo-2"
            className="lg:px-[2.8vw] py-[2vw] lg:py-[1.62vw] lg:w-[20.5vw] lg:h-[7.917vw]  relative z-[10]  border-b-4 border-black border-opacity-10 lg:border-b-sky-500"
          />
        </div>
        <Image
          src={photo_3}
          alt="photo-3"
          className="lg:px-[2.8vw] py-[2vw] lg:py-[1.62vw] lg:w-[20.5vw] lg:h-[7.917vw]  relative z-[10]  border-b-4 border-black border-opacity-10 lg:border-b-sky-500"
        />
      </div>
      <svg
        viewBox="0 0 1920 625"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-screen absolute z-[-1] top-[48%] hidden md:block "
      >
        <path d="M0 229.57V575.456L501 440.775L0 229.57Z" fill="black" />
        <path
          d="M1920 290.789L1419 0L960 388.739L501 153.047L0 495.872V624.431H1920V290.789Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default Certificate;
