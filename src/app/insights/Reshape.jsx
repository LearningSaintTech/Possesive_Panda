import React from 'react'


 const Reshape = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900 to-black">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://path-to-your-image.jpg')" }}></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Reshape Our Future With Generative AI</h1>
        <p className="mb-6">Generative AI (GenAI) and other forms of Artificial Intelligence (AI) are creating new opportunities to reshape the future.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Read More &rarr;
        </button>
      </div>
    </div>
    <div className="absolute bottom-0 w-full flex justify-center space-x-2 py-4">
      <button className="h-3 w-3 bg-gray-300 rounded-full"></button>
      <button className="h-3 w-3 bg-blue-500 rounded-full"></button>
      <button className="h-3 w-3 bg-gray-300 rounded-full"></button>
      <button className="h-3 w-3 bg-gray-300 rounded-full"></button>
    </div>
  </div>
  )
}
export default Reshape;