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
        <h1 className="text-xl  font-extrabold"><Link to="/">Aman Soni</Link></h1>
        <div className="flex  text-sm md:text-xl space-x-2 items-center justify-center md:space-x-4">
             <h3 className=" hover:cursor-pointer hover:text-gray-500"><Link to="/contact">Contact</Link></h3>
             <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/about">About</Link></h3>
             <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/research">Research</Link></h3>
             <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/project">Project</Link></h3>
             {/* <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/journey">Journey </Link></h3> */}
             {/* {user? <h3 className="hover:cursor-pointer hover:text-gray-500"><Link to="/write">Write </Link></h3>:<h3></h3>} */}
           
             
        </div>
    </div>
    </div>
  )
}

export default Navbar 