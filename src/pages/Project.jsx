// import React, { useState } from 'react';
// import Modal from 'react-modal'; // Import if using react-modal library

// // This is necessary for screen readers, so place it outside the modal component
// Modal.setAppElement('#root');

// const Project = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       title: "Project 1",
//       description: "This is a brief description of Project 1.",
//       imageUrl: "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
//       link: "https://github.com/yourusername/project1",
//       detailedDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
//       took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
//       but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
//       with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
//       like Aldus PageMaker including versions of Lorem Ipsum.
  
//       Why do we use it?
//       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
//       The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
//       content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their 
//       default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
//       sometimes by accident, sometimes on purpose (injected humour and the like).
  
//       Where does it come from?
//       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
//       making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
//       Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
//       Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
//       This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,comes from a line in section 1.10.32.
  
//       The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 
//       "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
  
//       Where can I get some?
//       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
//       or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
//       anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
//       making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
//       to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
//       additionalImages: ["https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322", "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"],
//     },
//     {
//       title: "Project 1",
//       description: "This is a brief description of Project 1.",
//       imageUrl: "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
//       link: "https://github.com/yourusername/project1",
//       detailedDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
//       took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
//       but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
//       with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
//       like Aldus PageMaker including versions of Lorem Ipsum.
  
//       Why do we use it?
//       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
//       The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
//       content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their 
//       default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
//       sometimes by accident, sometimes on purpose (injected humour and the like).
  
//       Where does it come from?
//       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
//       making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
//       Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
//       Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
//       This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,comes from a line in section 1.10.32.
  
//       The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 
//       "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
  
//       Where can I get some?
//       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
//       or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
//       anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
//       making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
//       to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
//       additionalImages: ["https://linktoimage1.com", "https://linktoimage2.com"],
//     },
//     {
//       title: "Project 1",
//       description: "This is a brief description of Project 1.",
//       imageUrl: "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
//       link: "https://github.com/yourusername/project1",
//       detailedDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
//       took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
//       but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
//       with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
//       like Aldus PageMaker including versions of Lorem Ipsum.
  
//       Why do we use it?
//       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
//       The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
//       content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their 
//       default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
//       sometimes by accident, sometimes on purpose (injected humour and the like).
  
//       Where does it come from?
//       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
//       making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
//       Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
//       Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
//       This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,comes from a line in section 1.10.32.
  
//       The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 
//       "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
  
//       Where can I get some?
//       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
//       or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
//       anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
//       making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
//       to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
//       additionalImages: ["https://linktoimage1.com", "https://linktoimage2.com"],
//     },
//     // Add more projects here
//   ];
  

//   const openModal = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <div className="max-w-5xl mx-auto py-10">
//       <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             onClick={() => openModal(project)}
//           >
//             <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4"/>
//             <h2 className="text-xl font-bold mb-2">{project.title}</h2>
//             <p className="text-gray-700 mb-4">{project.description}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>

//       {selectedProject && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-full overflow-y-auto p-4 relative">
//             <button onClick={closeModal} className="absolute top-3 right-5 text-gray-500 hover:text-gray-800">
//               ✖
//             </button>
//             <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
//             <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4"/>
//             <p>{selectedProject.detailedDescription}</p>
//             <div className="mt-4">
//               {selectedProject.additionalImages.map((image, index) => (
//                 <img key={index} src={image} alt={`Additional ${index + 1}`} className="w-full h-40 object-cover rounded-lg mb-4"/>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Project;


import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; // Import if using react-modal library

Modal.setAppElement('#root');

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/akashkumar62/portfolio/main/project.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
     
    fetchProjects();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  console.log(projects)
  return (
    
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-full overflow-y-auto p-4 relative">
            <button onClick={closeModal} className="absolute top-3 right-5 text-gray-500 hover:text-gray-800">
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4"/>
            <p>{selectedProject.detailedDescription}</p>
            <div className="mt-4">
              {selectedProject.additionalImages.map((image, index) => (
                <img key={index} src={image} alt={`Additional ${index + 1}`} className="w-full h-40 object-cover rounded-lg mb-4"/>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
