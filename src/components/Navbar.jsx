import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { VscAccount } from "react-icons/vsc";
const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);

  // Toggle the visibility of the login form
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
    const user = true;
  return (
    <div className='sticky top-0 z-50 bg-white shadow-md'>
    <div className="flex items-center justify-between px-5 md:px-[250px] py-6 "
    style={{
        backgroundColor: 'rgba(0, 0, 0, 0.0)', // Dark, semi-transparent background
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.8)', // Strong shadow for separation
      }}

    >
        <h1 className="text-xl font-extrabold"><Link to="/">Aman Soni</Link></h1>
        <div className="flex items-center justify-center space-x-2 md:space-x-4">
             <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/contact">Contact</Link></h3>
             <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/about">About</Link></h3>
             <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/research">Research</Link></h3>
             <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/project">Project</Link></h3>
             {/* <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/journey">Journey </Link></h3> */}
             {/* {user? <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/write">Write </Link></h3>:<h3></h3>} */}
             {/* <div>
      <p onClick={toggleLogin} style={{ cursor: 'pointer' }}>
        <VscAccount size={24} />
      </p>
      
      {showLogin && (
        <div className="absolute top-[50px] right-[10px] p-4 border rounded shadow-lg bg-white bg-opacity-50 w-[250px]">
          <h3 className="mb-2 text-lg font-bold">Login</h3>
          <input
            type="text"
            placeholder="Username"
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded w-full"
          />
          <button className="mt-2 p-2 bg-blue-500 text-white rounded w-full">Submit</button>
        </div>
      )}
    </div> */}
             
        </div>
    </div>
    </div>
  )
}

export default Navbar 