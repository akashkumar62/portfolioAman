import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Collaborations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/akashkumar62/portfolio/main/colleges.json');
        setData(response.data.collaborations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-100 p-8 rounded-md mx-4 sm:mx-6 lg:mx-12 w-full max-w-6xl">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-12 text-center">
          Collaborated and worked with
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-48 h-48 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-3xl transition-transform duration-300 transform hover:scale-105"
            >
              <img
                className="w-full h-full object-contain"
                src={item.imageUrl}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
