import React from "react";

const CommentForm = () => {
  return (
    <div className="mt-[3vw] p-[2.6vw] bg-[#00111A] w-fill sm:w-[57.813vw]  justify-center items-center ">
      <h3 className="text-[#fff] text-[5vw] sm:text-[1.667vw] font-medium leading-[normal] tracking-[0.02rem]">
        Leave a Reply
      </h3>
      <p className="text-[#fff] text-[2.6vw] sm:text-[1.25vw] mt-[1vw] font-medium leading-[normal] tracking-[0.013rem] sm:mb-0 mb-[3vw]">
        Your email address will not be published.
      </p>
      <form className="sm:space-y-[2vw] space-y-[3.85vw]">
        <input
          type="text"
          id="name"
          className="font-[1.042vw] border py-[0.9vw] px-[2vw] sm:py-[0.55vw] sm:px-[1.276vw] rounded-[0.5vw] sm:w-[25.26vw] w-full focus:outline-0  text-white focus:border-white bg-[#00111A]  "
          placeholder="Name"
        />
        <input
          type="email"
          id="email"
          className="font-[1.042vw] border py-[0.9vw] px-[2vw] sm:py-[0.55vw] sm:px-[1.276vw] rounded-[0.5vw] sm:w-[25.26vw] sm:ml-[2vw] w-full focus:outline-0  text-white focus:border-white bg-[#00111A] "
          placeholder="Email"
        />
        <input
          type="url"
          id="website"
          className="font-[1.042vw] border py-[0.9vw] px-[2vw] sm:py-[0.55vw] sm:px-[1.276vw] rounded-[0.5vw] w-full focus:outline-0  text-white focus:border-white bg-[#00111A] "
          placeholder="Website (Optional)"
        />
        <textarea
          id="comment"
          rows="4"
          className="font-[1.042vw] border rounded-[0.5vw] py-[0.9vw] px-[2vw] sm:py-[0.55vw] sm:px-[1.276vw] w-full sm:h-[10vw] h-[30vw] focus:outline-0 text-white focus:border-white bg-[#00111A] "
          placeholder="Comment type...."
        />
        <div className="flex items-center gap-[2vw] sm:gap-[0.5vw]">
          <input
            type="checkbox"
            id="save-info"
            className="size-[4vw] sm:size-[1vw] rounded-[1vw] sm:ml-0 ml-[1vw] "
          />
          <label
            htmlFor="save-info"
            className="text-[#fff] text-[2.8vw] sm:text-[1.25vw] font-medium leading-[normal] tracking-[0.013rem]"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#00AFF1] text-white  px-[2vw] py-[1.1vw] sm:px-[1.2vw] sm:py-[0.7vw] rounded-[0.521vw] text-[3.5vw] sm:text-[1.25vw] font-medium leading-[normal] tracking-[0.013rem] hover:bg-[#45a0c5] hover:duration-300 duration-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
