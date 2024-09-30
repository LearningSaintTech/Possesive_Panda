"use client";
import React, { useState, useEffect } from "react";
import Blogs from "./Blogs";
import Options from "./Options";
import NewBanner from "../(Components)/NewBanner";
import Loader from "../(Components)/Loader";
import banner from "../../assets/banners/blog.png";
import Footer from "../(Components)/Footer";
import AboutMarquee from "../(Components)/AboutMarquee";
import Journey from "../(Components)/Journey";

const MainPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [originalBlogs, setOriginalBlogs] = useState([]); // State to hold original blogs
  const [elasticSearchData, setElasticSearchData] = useState([]); // State for filtered blogs
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://crm.learningsaint.com/api/getBlogs/2?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj"
        );
        const data = await response.json();
        setBlogs(data.blogs);
        setOriginalBlogs(data.blogs); // Store original blogs
        setElasticSearchData(data.blogs); // Initialize filtered blogs with all blogs
        setCategories(() => [...new Set(data.blogs.map((blog) => blog.title))]);
        setTags(() => [
          ...new Set(data.blogs.flatMap((blog) => blog.tags.split(" "))),
        ]);
        setLoading(false); // Data fetched, set loading to false
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Error occurred, set loading to false
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Enlighten Yourself with Latest Industry Trends and Insights!"}
        desciption={"To keep you updated with all the latest insights and information in the tech industry, we have published a plethora of articles of various categories."}
      />
      <AboutMarquee />
      <Journey
        title="Explore our Blogs:"
        subtitle="Web-App Development, eCommerce, Digital Marketing, Cybersecurity, Virtual Assistance, and many more - we have got it all covered."
        description="Have a look into our comprehensive blogs for industry revelations, tech innovations, and many more. Whether you are willing to know about emerging technologies, building an online presence, being at the digital forefront, or enhancing security, we have got you all covered."
      />
      <div className="px-[5.2vw] mt-[9vw] flex gap-[3.2vw] mb-[5.2vw]">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3.125vw] sm:gap-y-[4vw] gap-y-[6vw]">
              {elasticSearchData.length > 0 ? (
                elasticSearchData.map((blog, key) => (
                  <Blogs blog={blog} key={key} />
                ))
              ) : (
                <p>No blogs found.</p>
              )}
            </div>
            <Options
              categories={categories}
              tags={tags}
              blogs={blogs}
              setElasticSearchData={setElasticSearchData} // Pass filteredBlogs state to Options
              originalBlogs={originalBlogs} // Pass original blogs to Options
            />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
