// Pagination.js
import React from 'react';


const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='flex flex-col mb-[6.25vw] mt-5 justify-center items-center'>
      <div className="flex items-center justify-center space-x-2 ">

        <button
          className="px-2 py-1 bg-[#00111A] text-white rounded border border-white disabled:opacity-50 justify-center items-center"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 rounded  border border-white justify-center items-center  ${currentPage === number ? 'bg-[#60E2FF] text-white' : 'bg-[#00111A] text-white'
              }`}
          >
            {number}
          </button>
        ))}
        <button
          className="px-2 py-1  bg-[#00111A] text-white rounded border border-white disabled:opacity-50 justify-center items-center mt"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          &gt;
        </button>


      </div>
      {/* <Image src={Line9} className='w-[64.635vw] ' /> */}
    </div>
  );
};

export default Pagination;
