import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Introduction */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-gray-600 text-lg">
            Hi, I'm Aman Soni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui fuga
             maxime eius mollitia id soluta aspernatur quibusdam. Vitae ipsam deleniti,
             illo hic alias atque nemo eligendi sed consectetur ad? </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">xxxxxxx</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>abcbd, ahsbsd, dfvbfvsf</li>
                <li>sbfsfbskjf, sbfksfgk</li>
                <li>Tsbskjbskj, ssbsksks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">yyyyyyy</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>sbsjkbks, sjhsghbsg</li>
                <li>Rshsvbsjbd, ksbksg</li>
                <li>MySsss, smbsbs </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">AI Prompt Developer at Scale AI</h3>
              <p className="text-gray-600">
                Worked on training large language models (LLMs), focusing on data structures, algorithms, and designed complex problem sets to enhance model performance.
              </p>
              <span className="text-gray-500 text-sm">Jan 2023 - Present</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Research Intern at XYZ Uni</h3>
              <p className="text-gray-600">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem consequatur deserunt. Nemo 
               obcaecati repellendus nam assumenda expedita deleniti quas numquam dolore, 
               consectetur vero quidem optio saepe placeat eveniet. Error.
              </p>
              <span className="text-gray-500 text-sm">Jun 2022 - Dec 2022</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Bachelor of Technology in Industrial Chemistry</h3>
              <p className="text-gray-600">IIT BHU</p>
              <span className="text-gray-500 text-sm">2020 - 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
