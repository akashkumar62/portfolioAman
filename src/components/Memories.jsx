import React, { useState, useEffect } from 'react';

const Memories = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    // Replace with the URL to your JSON file in GitHub
    const fetchMemories = async () => {
      const response = await fetch('https://raw.githubusercontent.com/akashkumar62/portfolio/main/memories.json');
      const data = await response.json();
      setMemories(data);
    };

    fetchMemories();
  }, []);

  return (
    <div className="bg-slate-50 p-8 rounded-lg mx-4 sm:mx-6 lg:mx-12 w-full max-w-6xl mt-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        Memories So Far
      </h1>

      <div className="space-y-6">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            {index % 2 === 0 ? (
              <>
                <div className="flex-1 mr-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                    {memory.title}
                  </h1>
                  <h2 className="text-gray-700 text-base sm:text-lg md:text-xl">
                    {memory.description}
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <img
                    className="w-full max-w-sm h-auto rounded-lg shadow-md"
                    src={memory.imageUrl}
                    alt={memory.title}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex-shrink-0 mr-6">
                  <img
                    className="w-full max-w-sm h-auto rounded-lg shadow-md"
                    src={memory.imageUrl}
                    alt={memory.title}
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                    {memory.title}
                  </h1>
                  <h2 className="text-gray-700 text-base sm:text-lg md:text-xl">
                    {memory.description}
                  </h2>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;
