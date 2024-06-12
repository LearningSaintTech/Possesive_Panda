import React from "react";
import Image from "next/image";
import image1 from "../../../assets/blogsDetails/Rectangle_589.png";
import image2 from "../../../assets/blogsDetails/Rectangle_591.png";
import image3 from "../../../assets/blogsDetails/Ellipse_19.png";
import image4 from "../../../assets/blogsDetails/Rectangle_580.png";
import image5 from "../../../assets/blogsDetails/Rectangle_568.png";

const Page = () => {
  return (
    <div className="mt-36 flex flex-col lg:flex-row justify-between mx-4 lg:mx-36">
      <div className="flex flex-col w-full lg:w-[1110px]">
        <div className="flex flex-col p-6 lg:p-12">
          <div>
            <Image src={image1} alt="shadow" className="w-full" />
            <div className="flex flex-col lg:flex-row justify-between mt-8">
              <p>John Carry</p>
              <p>Oct 11 2018</p>
              <p>Business consultancy</p>
            </div>
          </div>

          <div>
            <p className="mt-8 text-neutral-800 text-2xl lg:text-[40px] font-semibold">
              We Would love to share a similar experience
            </p>
            <p className="mt-8">I believe in the power of design.</p>
            <p className="mt-8">
              Design brings ideas, messages, and emotions to life. Design helps
              us communicate and connect in purpose-filled ways. Design
              influences what we think and feel. Design informs the decisions we
              make. At our core, we all seek purpose. Many of us want our daily
              decisions to help make the world a better place.
            </p>
            <p className="mt-8">
              Organizations that aspire to benefit humanity touch us. They
              galvanize communities dedicated to good. Sometimes, they even
              launch extraordinary movements.
            </p>
            <div className="bg-slate-50 rounded-lg border border-black p-6 lg:p-12 mt-8">
              <p className="mb-8">
                “We can easily manage if we will only take, each day, the burden
                appointed to it. But the load will be too heavy for us if we
                carry yesterday’s burden over again today, and then add the
                burden of the morrow.”
              </p>
              <p>---- Bailey Dobson</p>
            </div>
          </div>

          <div>
            <p className="mt-8 text-neutral-800 text-2xl lg:text-[40px] font-semibold">
              Discovering the power of purpose
            </p>
            <p className="mt-8">
              It feels incredible to work for an organization focused on solving
              a problem you deeply understand.
            </p>
            <p className="mt-8">
              When I first moved to Israel, I began working with an organization
              that helps new immigrants find professional success by providing
              education about the job market, courses, networking, and
              introductions to major companies. Our goal was to create a new
              strategy and website that met their audience’s many needs.
            </p>
            <p className="mt-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>

            <Image src={image2} alt="shadow" className="mt-8 w-full" />
          </div>

          <div>
            <p className="mt-8 text-neutral-800 text-2xl lg:text-[40px] font-semibold">
              Discovering the power of purpose
            </p>
            <p className="mt-8">
              It feels incredible to work for an organization focused on solving
              a problem you deeply understand.
            </p>
            <p className="mt-8">
              When I first moved to Israel, I began working with an organization
              that helps new immigrants find professional success by providing
              education about the job market, courses, networking, and
              introductions to major companies. Our goal was to create a new
              strategy and website that met their audience’s many needs.
            </p>
            <p className="mt-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <p className="mt-8">
              And ever since then, we at Verticalloop have embraced our mission
              to “design for good.”
            </p>
          </div>

          <div className="border-t-2 border-gray-100 my-8"></div>

          <div className="flex flex-wrap items-center">
            <p className="text-neutral-800 text-xl">Tags :</p>
            <p className="bg-cyan-300 rounded-lg ml-4 mt-2 lg:mt-0 text-center px-4 py-1">
              Design
            </p>
            <p className="bg-cyan-300 rounded-lg ml-4 mt-2 lg:mt-0 text-center px-4 py-1">
              Branding
            </p>
            <p className="bg-cyan-300 rounded-lg ml-4 mt-2 lg:mt-0 text-center px-4 py-1">
              Agency
            </p>
          </div>

          <div className="bg-neutral-50 rounded-lg mt-[100px] p-6 lg:p-12">
            <h2 className="text-neutral-800 text-[32px] mb-8 font-medium">
              3 Comments
            </h2>

            <div className="border-t border-gray-300 opacity-60 mb-6"></div>

            {/* Comment */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <Image
                  src={image3}
                  alt="shadow"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="">
                    <p className="font-semibold">Issac Wise</p>
                    <p className="text-gray-500 text-sm">
                      Jan 01, 2024 at 02:14 pm
                    </p>
                  </div>
                  <p className="text-neutral-800 text-lg mt-2">
                    Wouldn't it be better practice to use get_the_title(...) in
                    this case? Directly accessing the post object's data member
                    would bypass applying filters and enforcing protected and
                    private settings, unless that's explicitly desired.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-300 opacity-60 mt-6"></div>
            </div>

            {/* Nested Comment */}
            <div className="ml-14 mb-6">
              <div className="flex items-start space-x-4">
                <Image
                  src={image3}
                  alt="shadow"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="">
                    <p className="font-semibold">Issac Wise</p>
                    <p className="text-gray-500 text-sm">
                      Jan 01, 2024 at 02:14 pm
                    </p>
                  </div>
                  <p className="text-neutral-800 text-lg mt-2">
                    Thanks Demo User for Wouldn't it be better practice to use
                    get_the_title.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-300 opacity-60 mt-6"></div>
            </div>

            {/* Comment */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <Image
                  src={image3}
                  alt="shadow"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="">
                    <p className="font-semibold">Issac Wise</p>
                    <p className="text-gray-500 text-sm">
                      Jan 01, 2024 at 02:14 pm
                    </p>
                  </div>
                  <p className="text-neutral-800 text-lg mt-2">
                    Wouldn't it be better practice to use get_the_title(...) in
                    this case? Directly accessing the post object's data member
                    would bypass applying filters and enforcing protected and
                    private settings, unless that's explicitly desired.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-300 opacity-60 mt-6"></div>
            </div>

            {/* Reply Form */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Leave a Reply</h3>
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="website" className="text-sm font-semibold">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="border p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="comment" className="text-sm font-semibold">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="border p-2 rounded-md"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="save-info" className="mr-2" />
                  <label htmlFor="save-info" className="text-sm">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[501.63px] sticky top-36 h-full bg-red-900 ">
        <div className=" pt-[50.4px] pl-[40px] bg-neutral-50 rounded-[10.20px] shadow border border-black/50">
          <div className="text-neutral-800 text-[32px] font-semibold font-['Poppins'] leading-[29.33px] tracking-tight">
            Recent Post
          </div>
          <div className="w-[415px]">
            <div className="flex flex-row justify-between mb-[38px] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] mt-[49px]">
              <div>
                <Image
                  src={image4}
                  alt="shadow"
                  className="w-[91px] h-20 rounded-[5px]"
                />
              </div>
              <div className="flex flex-col ml-[20px]">
                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  We would love to share a similar experience
                </div>
                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  10 Oct, 2022
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between mb-[38px] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] mt-[49px]">
              <div>
                <Image
                  src={image4}
                  alt="shadow"
                  className="w-[91px] h-20 rounded-[5px]"
                />
              </div>
              <div className="flex flex-col ml-[20px]">
                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  We would love to share a similar experience
                </div>
                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  10 Oct, 2022
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between mb-[38px] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] mt-[49px]">
              <div>
                <Image
                  src={image4}
                  alt="shadow"
                  className="w-[91px] h-20 rounded-[5px]"
                />
              </div>
              <div className="flex flex-col ml-[20px]">
                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  We would love to share a similar experience
                </div>
                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  10 Oct, 2022
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between mb-[38px] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] mt-[49px]">
              <div>
                <Image
                  src={image4}
                  alt="shadow"
                  className="w-[91px] h-20 rounded-[5px]"
                />
              </div>
              <div className="flex flex-col ml-[20px]">
                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  We would love to share a similar experience
                </div>
                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  10 Oct, 2022
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between mb-[38px] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] mt-[49px]">
              <div>
                <Image
                  src={image4}
                  alt="shadow"
                  className="w-[91px] h-20 rounded-[5px]"
                />
              </div>
              <div className="flex flex-col ml-[20px]">
                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  We would love to share a similar experience
                </div>
                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">
                  10 Oct, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[60px] bg-neutral-50 rounded-[10.20px] shadow border border-black/50">
          <div className="text-neutral-800 text-[32px] font-semibold  leading-[29.33px] tracking-tight mt-[50px] ml-[40.62px]  pb-[33.27px]">
            Gallery
          </div>
          <div className="grid grid-cols-3 gap-4 ml-[40.62px] mr-[40.62px] mb-[34.41px] ">
            <div className="m-2">
              <Image
                src={image5}
                alt="shadow"
                className="w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50"
              />
            </div>
            <div className="m-2">
              <Image
                src={image5}
                alt="shadow"
                className="w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50"
              />
            </div>
            <div className="m-2">
              <Image
                src={image5}
                alt="shadow"
                className="w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50"
              />
            </div>
            <div className="m-2">
              <Image
                src={image5}
                alt="shadow"
                className="w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50"
              />
            </div>
            <div className="m-2">
              <Image
                src={image5}
                alt="shadow"
                className="w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50"
              />
            </div>
            <div className="m-2">
              <Image
                src={image5}
                alt="shadow"
                className="w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
