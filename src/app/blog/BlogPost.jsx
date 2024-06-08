import Image from "next/image";

const BlogPost = ({ post }) => (
  <div className="flex flex-col lg:w-[28.463vw] md:w-[60vw]  sm:w-screen bg-white lg:ml-[0vw] md:ml-[6vw] mb-[] ">
    <Image
      src={post.image}
      alt="shadow"
      className="w-full h-auto max-w-full block mx-auto my-0 rounded-t-lg object-cover"
    />
    <div className="border-gray-500 border shadow-md rounded-lg border-t-0 rounded-t-[0]">
      <div className="p-4">
        <p className="text-[#00AFF1] text-lg font-medium mt-4 mb-2">
          {post.categories}
        </p>
        <h2 className="text-xl text-[#212121] font-bold mb-2">{post.title}</h2>
        <p className="text-[#212121] text-base mb-4">
          {post.content}
        </p>
      </div>
      <div className="flex justify-between border-t border-[#000000] mt-4 pt-2 pb-[1rem]" >
        <div className="flex items-center">
          <Image
            src={post.icon}
            alt="icon"
            className="w-8 h-8 mt-2 ml-2 "
          />
          <p className="my-2 ml-2 text-[#212121] text-sm font-medium">
            {post.writtenBy}
          </p>
        </div>
        <div className="flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mt-2">
            <path d="M21 2.4H17.4V0.6C17.4 0.44087 17.3368 0.288258 17.2243 0.175736C17.1117 0.0632142 16.9591 0 16.8 0C16.6409 0 16.4883 0.0632142 16.3757 0.175736C16.2632 0.288258 16.2 0.44087 16.2 0.6V2.4H7.8V0.6C7.8 0.44087 7.73679 0.288258 7.62426 0.175736C7.51174 0.0632142 7.35913 0 7.2 0C7.04087 0 6.88826 0.0632142 6.77574 0.175736C6.66321 0.288258 6.6 0.44087 6.6 0.6V2.4H3C2.20464 2.40095 1.44213 2.71733 0.879732 3.27973C0.317329 3.84213 0.000952715 4.60464 0 5.4V21C0.000952715 21.7954 0.317329 22.5579 0.879732 23.1203C1.44213 23.6827 2.20464 23.999 3 24H21C21.7955 23.9994 22.5581 23.6831 23.1206 23.1206C23.6831 22.5581 23.9994 21.7955 24 21V5.4C23.9994 4.60455 23.6831 3.84185 23.1206 3.27938C22.5581 2.71691 21.7955 2.40064 21 2.4ZM22.8 21C22.8 21.4774 22.6104 21.9352 22.2728 22.2728C21.9352 22.6104 21.4774 22.8 21 22.8H3C2.52261 22.8 2.06477 22.6104 1.72721 22.2728C1.38964 21.9352 1.2 21.4774 1.2 21V10.8H22.8V21ZM22.8 9.6H1.2V5.4C1.2 4.4064 2.004 3.6 3 3.6H6.6V5.4C6.6 5.55913 6.66321 5.71174 6.77574 5.82426C6.88826 5.93679 7.04087 6 7.2 6C7.35913 6 7.51174 5.93679 7.62426 5.82426C7.73679 5.71174 7.8 5.55913 7.8 5.4V3.6H16.2V5.4C16.2 5.55913 16.2632 5.71174 16.3757 5.82426C16.4883 5.93679 16.6409 6 16.8 6C16.9591 6 17.1117 5.93679 17.2243 5.82426C17.3368 5.71174 17.4 5.55913 17.4 5.4V3.6H21C21.4774 3.6 21.9352 3.78964 22.2728 4.12721C22.6104 4.46477 22.8 4.92261 22.8 5.4V9.6Z" fill="#00AFF1" />
          </svg>
          <p className="my-2 mx-2 text-[#00AFF1] text-sm font-normal">{post.date}</p>
        </div>
      </div>
    </div>
  </div>
);

export default BlogPost;
