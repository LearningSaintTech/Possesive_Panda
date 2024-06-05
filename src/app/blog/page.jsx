"use client";
import React, { useState, useEffect } from 'react';
import { blogPosts } from './data';
import BlogPost from '../blog/BlogPost';

const MainPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [posts, setPosts] = useState(blogPosts);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [hiddenSvg, setHiddenSvg] = useState({});

  useEffect(() => {
    const filteredPosts = blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setPosts(filteredPosts);
  }, [searchInput]);

  const handleCategoryFilter = (category) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(cat => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);

    const filteredPosts = blogPosts.filter(post => newSelectedCategories.includes(post.categories));
    setPosts(filteredPosts);

    // Toggle the hidden state of the SVG
    setHiddenSvg(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  const handleTagFilter = (tag) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newSelectedTags);

    const filteredPosts = blogPosts.filter(post => newSelectedTags.some(t => post.tags.includes(t)));
    setPosts(filteredPosts);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setSearchInput('');
    setPosts(blogPosts);
    setHiddenSvg({}); // Reset hidden state
  };

  return (
    <div className='mt-12 md:mt-48 mx-5 md:mx-10 flex flex-col md:flex-row justify-between gap-5'>
      <div className="w-full md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className='flex flex-col md:w-1/3'>
        <div className='bg-gray-100 mb-12 border shadow-md rounded-lg p-4 '>
          <p className='text-gray-900 text-2xl font-semibold mb-4'>Search Here</p>
          <div className='flex'>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="ENTER KEYWORD"
              className="w-full border rounded-l-md p-2"
              style={{ marginRight: '0.5rem' }}
            />
            <button
              onClick={() => setSearchInput('')}
              className="p-2 bg-[#60E2FF] text-white rounded-r-md flex items-center justify-center"
              style={{ width: '3rem' }} // Set a fixed width for the button
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 30 32" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.8839 22.0188C16.5623 23.991 13.6187 24.9432 10.6574 24.6799C7.69612 24.4166 4.94209 22.9577 2.96092 20.6028C0.979761 18.248 -0.0781393 15.176 0.00450134 12.0177C0.087142 8.85943 1.30405 5.85469 3.40529 3.62059C5.50653 1.3865 8.33259 0.0926516 11.303 0.00478594C14.2735 -0.0830798 17.1629 1.04171 19.3777 3.14813C21.5925 5.25456 22.9646 8.18271 23.2123 11.3312C23.46 14.4797 22.5644 17.6095 20.7094 20.0778L29.5889 29.5169C29.7158 29.6427 29.8176 29.7943 29.8882 29.9627C29.9588 30.1312 29.9967 30.313 29.9998 30.4974C30.0029 30.6818 29.971 30.865 29.906 31.036C29.841 31.207 29.7443 31.3623 29.6217 31.4927C29.499 31.6231 29.3529 31.7259 29.1921 31.795C29.0313 31.8641 28.859 31.898 28.6856 31.8947C28.5122 31.8915 28.3411 31.8511 28.1827 31.7761C28.0242 31.701 27.8817 31.5928 27.7634 31.4579L18.8839 22.0188ZM5.23569 19.1586C3.97169 17.8146 3.11079 16.1023 2.76181 14.2382C2.41283 12.3741 2.59142 10.4418 3.27502 8.68556C3.95861 6.92932 5.11653 5.42797 6.60243 4.37122C8.08832 3.31448 9.83551 2.74979 11.6232 2.74851C13.4108 2.74723 15.1587 3.30942 16.646 4.36404C18.1332 5.41865 19.293 6.91835 19.9788 8.6736C20.6646 10.4289 20.8457 12.3609 20.4991 14.2255C20.1524 16.0901 19.2937 17.8036 18.0314 19.1495L18.0228 19.1586L18.0142 19.166C16.318 20.9652 14.0195 21.9751 11.6235 21.9737C9.22754 21.9723 6.93004 20.9598 5.23569 19.1586Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>


        <div className='bg-gray-100 mb-12 border shadow-md rounded-lg p-4'>
          <p className='text-gray-900 text-2xl font-semibold mb-4'>Categories</p>
          {Array.from(new Set(blogPosts.map(post => post.categories))).map(category => (
            <div key={category} className="relative mb-2">
              <button
                onClick={() => handleCategoryFilter(category)}
                className={`w-full h-10 border rounded-md p-2 flex items-center justify-between ${selectedCategories.includes(category) ? 'bg-[#60E2FF] text-white' : 'bg-white'}`}
              >
                {category}
                {!hiddenSvg[category] && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                    <g opacity="0.8" clipPath="url(#clip0_1506_2615)">
                      <path d="M20.39 8.34004L30 18L20.39 27.66C20.3032 27.774 20.1929 27.868 20.0667 27.9357C19.9404 28.0033 19.8011 28.043 19.6581 28.0522C19.5151 28.0613 19.3719 28.0396 19.238 27.9885C19.1042 27.9375 18.9828 27.8583 18.8823 27.7562C18.7817 27.6542 18.7042 27.5318 18.6551 27.3972C18.6059 27.2627 18.5863 27.1191 18.5975 26.9763C18.6086 26.8335 18.6503 26.6947 18.7198 26.5694C18.7892 26.4441 18.8848 26.3352 19 26.25L26.19 19H7.06C6.79478 19 6.54043 18.8947 6.35289 18.7071C6.16536 18.5196 6.06 18.2653 6.06 18C6.06 17.7348 6.16536 17.4805 6.35289 17.2929C6.54043 17.1054 6.79478 17 7.06 17H26.19L19 9.75004C18.813 9.56174 18.7085 9.30687 18.7094 9.0415C18.7104 8.77614 18.8167 8.52202 19.005 8.33504C19.1933 8.14806 19.4482 8.04354 19.7135 8.04448C19.9789 8.04542 20.233 8.15174 20.42 8.34004H20.39Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1506_2615">
                        <rect width="36" height="36" fill="white" transform="matrix(0 -1 -1 0 36 36)" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </button>
              {selectedCategories.includes(category) && (
                <button
                  onClick={() => handleCategoryFilter(category)}
                  className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center"
                >
                  x
                </button>
              )}
            </div>
          ))}
        </div>

        <div className='bg-gray-100 border shadow-md rounded-lg p-4'>
          <p className='text-gray-900 text-2xl font-semibold mb-4'>Tags</p>
          <div className="flex flex-wrap">
            {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map(tag => (
              <div key={tag} className="relative mb-2 mr-2">
                <button
                  onClick={() => handleTagFilter(tag)}
                  className={`p-3 border rounded-md flex items-center justify-between ${selectedTags.includes(tag) ? 'bg-[#60E2FF] text-white' : 'bg-white'}`}
                >
                  {tag}
                </button>
                {selectedTags.includes(tag) && (
                  <button
                    onClick={() => handleTagFilter(tag)}
                    className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    x
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <button className="bg-gray-300 py-2 px-4 rounded-md" onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  );
};

export default MainPage;
