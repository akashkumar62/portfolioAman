// import React from 'react';

// // Sample image data
// const images = [
//   "https://news.mit.edu/sites/default/files/images/201809/MIT-Nano-01.jpg",
//   "https://news.mit.edu/sites/default/files/images/201809/MIT-Nano-01.jpg",
//   "https://news.mit.edu/sites/default/files/images/201809/MIT-Nano-01.jpg",
//   "https://news.mit.edu/sites/default/files/images/201809/MIT-Nano-01.jpg",
//   "https://news.mit.edu/sites/default/files/images/201809/MIT-Nano-01.jpg",
//   "https://news.mit.edu/sites/default/files/images/201809/MIT-Nano-01.jpg",
//   "https://news.mit.edu/sites/default/files/images/201809/MIT-Nano-01.jpg",
//   "https://news.mit.edu/sites/default/files/images/201809/MIT-Nano-01.jpg",
// ];

// const ImageGallery = () => {
//   return (
//     <div className='flex flex-col m-5 p-5 bg-slate-50 hover:shadow-lg hover:scale-105 rounded-full'>
//         <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 bg-gradient-to-r from-gray-600 via-red-400 to-gray-900 bg-clip-text text-transparent">
//   My Journey in a Nutshell
// </h1>

//     <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
//       {images.map((src, index) => (
//         <div key={index} className="relative group">
//           <img
//             src={src}
//             alt={`Gallery Image ${index}`}
//             className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105 group-hover:shadow-2xl"
//           />
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default ImageGallery;

import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  // State to hold the image URLs
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Async function to fetch image data
    const fetchImages = async () => {
      try {
        // Fetch the JSON data from the GitHub repository
        const response = await fetch('https://raw.githubusercontent.com/akashkumar62/portfolio/main/images.json');
        
        // Check if the response was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        // Parse the JSON data
        const data = await response.json();
        
        // Update the state with the image URLs
        setImages(data.images);
      } catch (error) {
        // Log any errors that occurred during the fetch
        console.error('Error fetching the image data:', error);
      }
    };

    // Call the fetchImages function
    fetchImages();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <div className='flex flex-col m-5 p-5 bg-slate-50 hover:shadow-lg hover:scale-105 rounded-full'>
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 bg-gradient-to-r from-gray-600 via-red-400 to-gray-900 bg-clip-text text-transparent">
        My Journey in a Nutshell
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.length > 0 ? (
          // Map over the images array and display each image
          images.map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`Gallery Image ${index}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105 group-hover:shadow-2xl"
              />
            </div>
          ))
        ) : (
          // Display a message if no images are available
          <p className="text-gray-500 text-center">No images available.</p>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
