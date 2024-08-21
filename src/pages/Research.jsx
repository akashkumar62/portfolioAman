// import React from 'react';

// const Research = () => {
//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-6">Research</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//         <div className="p-4 bg-gray-100 rounded-lg shadow">
//           <img 
//             src="https://example.com/research-image1.jpg" 
//             alt="Research Image 1" 
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//           <h2 className="text-2xl font-semibold mb-2">Research Field 1</h2>
//           <p className="text-gray-700">Description of research field 1...</p>
//           <div className="mt-4">
//             <a href="https://wikipedia.org" className="text-blue-500 hover:underline mr-2">Wikipedia</a>
//             <a href="https://github.com" className="text-blue-500 hover:underline mr-2">GitHub</a>
//             <a href="https://colab.research.google.com" className="text-blue-500 hover:underline">Google Colab</a>
//           </div>
//         </div>

//         <div className="p-4 bg-gray-100 rounded-lg shadow">
//           <img 
//             src="https://example.com/research-image2.jpg" 
//             alt="Research Image 2" 
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//           <h2 className="text-2xl font-semibold mb-2">Research Field 2</h2>
//           <p className="text-gray-700">Description of research field 2...</p>
//           <div className="mt-4">
//             <a href="https://wikipedia.org" className="text-blue-500 hover:underline mr-2">Wikipedia</a>
//             <a href="https://github.com" className="text-blue-500 hover:underline mr-2">GitHub</a>
//             <a href="https://colab.research.google.com" className="text-blue-500 hover:underline">Google Colab</a>
//           </div>
//         </div>

//         <div className="p-4 bg-gray-100 rounded-lg shadow">
//           <img 
//             src="https://example.com/research-image3.jpg" 
//             alt="Research Image 3" 
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//           <h2 className="text-2xl font-semibold mb-2">Research Field 3</h2>
//           <p className="text-gray-700">Description of research field 3...</p>
//           <div className="mt-4">
//             <a href="https://wikipedia.org" className="text-blue-500 hover:underline mr-2">Wikipedia</a>
//             <a href="https://github.com" className="text-blue-500 hover:underline mr-2">GitHub</a>
//             <a href="https://colab.research.google.com" className="text-blue-500 hover:underline">Google Colab</a>
//           </div>
//         </div>

//       </div>

//       <div className="p-4 bg-gray-100 rounded-lg shadow">
//         <h2 className="text-3xl font-semibold mb-4">Detailed Description</h2>
//         <p className="text-gray-700 mb-4">
//           Here, you can provide a detailed description of your research field, including key points, methods, and findings.
//         </p>
//         <ul className="list-disc ml-6 text-gray-700">
//           <li>Point 1: Description of the <a className='text-blue-500' href='https://wikipedia.org'>first</a> point.</li>
//           <li>Point 2: Description of the second point.</li>
//           <li>Point 3: Description of the third point.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Research;

import React, { useState, useEffect } from 'react';

const Research = () => {
  const [researchFields, setResearchFields] = useState([]);
  const [detailedDescription, setDetailedDescription] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/akashkumar62/portfolio/main/researchData.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResearchFields(data.researchFields);
        setDetailedDescription(data.detailedDescription);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6">Research</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {researchFields.map((field, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
            <img 
              src={field.imageUrl} 
              alt={`Research Image ${index + 1}`} 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{field.title}</h2>
            <p className="text-gray-700">{field.description}</p>
            <div className="mt-4">
              <a href={field.links.wikipedia} className="text-blue-500 hover:underline mr-2">Wikipedia</a>
              <a href={field.links.github} className="text-blue-500 hover:underline mr-2">GitHub</a>
              <a href={field.links.colab} className="text-blue-500 hover:underline">Google Colab</a>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-3xl font-semibold mb-4">{detailedDescription.title}</h2>
        <p className="text-gray-700 mb-4">
          {detailedDescription.content}
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          {detailedDescription.points && detailedDescription.points.map((point, index) => (
            <li key={index}>
              {point.link ? (
                <a className='text-blue-500' href={point.link}>{point.text}</a>
              ) : (
                point.text
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Research;

