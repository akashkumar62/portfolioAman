import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Scholarships = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/akashkumar62/portfolio/main/colleges.json');
        setData(response.data.scholarships);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-12 flex flex-col items-center">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        Cleared so and so research scholarship
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg bg-white max-w-xs hover:shadow-3xl transition-transform duration-300 transform hover:scale-105"
          >
            <img
              className="w-32 h-32 object-cover mb-4 rounded-full border border-gray-300"
              src={item.imageUrl}
              alt={item.alt}
            />
            <h2 className="text-center text-gray-700">
              {item.description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
