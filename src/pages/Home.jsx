// import { FaInstagram } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import Navbar from "../components/Navbar";
// import TypingEffect from "../components/TypingEffect";
// import Image from "../components/Image";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="flex flex-col justify-between items-center w-full">
//       <div className="flex flex-col min-h-screen">
//         <div className="flex items-center mt-20 flex-col mb-5 ">
//           <div className="flex items-center justify-between">
//             <div className="flex flex-col justify-between mx-6 shadow-lg hover:shadow-inner m-3 p-5">
//               <h1
//                 className="text-4xl font-extrabold font-serif leading-tight mb-4 text-red-500"
//                 style={{
//                   fontFamily: "Roboto, sans-serif", // Use camelCase for font-family and separate font families with a comma
//                   fontWeight: 400, // No quotes around numeric values for fontWeight
//                   fontStyle: "normal", // Use quotes for the fontStyle value
//                 }}
//               >
//                 Hello, I'm
//               </h1>
//               <h1 className="text-6xl font-bold font-serif leading-tight mb-4">
//                 Aman Govind Soni
//               </h1>
//               <h1 className="flex items-center text-xl font-serif leading-tight mb-4">
//                 A chemist from{" "}
//                 <span
//                   className="text-4xl mx-2 text-red-500"
//                   style={{ lineHeight: "1" }}
//                 >
//                   India
//                 </span>
//               </h1>

//               <h1 className="text-xl font-serif leading-tight mb-2">
//                 I'm a author, speaker, actor, a pretty nice lover
//               </h1>
//               <h1 className="text-xl font-serif leading-tight">
//                 and IITian as well (flex is necessary).
//               </h1>

//               <div className="flex justify-between items-center mt-6 ">
//                 <div>
//                   <h1 className="text-white bg-red-600 m-3 p-3 rounded-full cursor-pointer text-lg font-bold">
//                     <Link to="/about"> About Me</Link>
//                   </h1>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <FaInstagram className="text-3xl text-gray-800 hover:text-red-600 transition-colors duration-300" />
//                   <FaTwitter className="text-3xl text-gray-800 hover:text-blue-400 transition-colors duration-300" />
//                   <FaFacebookF className="text-3xl text-gray-800 hover:text-blue-700 transition-colors duration-300" />
//                   <FaLinkedin className="text-3xl text-gray-800 hover:text-blue-700 transition-colors duration-300" />
//                 </div>
//               </div>
//             </div>

//             <div className="w-[45vw] h-[60vh] object-cover">
//               <img
//                 className="m-10 rounded-lg border-none hover:shadow-lg hover:scale-105"
//                 src="https://t4.ftcdn.net/jpg/02/85/98/31/360_F_285983167_OTSjTSeRhqJ7b4TPxlQ80mC9zTiDCzMQ.jpg"
//                 alt="image"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-4 justify-start">
//           <TypingEffect />
//         </div>
//       </div>

//       <div
//         className="flex flex-col justify-between items-center bg-slate-100 m-12 p-12 rounded-md"
//         style={{
//           fontFamily: "Roboto, sans-serif", // Use camelCase for font-family and separate font families with a comma
//           fontWeight: 400, // No quotes around numeric values for fontWeight
//           fontStyle: "normal", // Use quotes for the fontStyle value
//         }}
//       >
//         <div className="flex flex-col">
//           <h3 className="text-6xl font-bold font-serif leading-tight text-red-500 mb-20 text-center">
//             Collaborated and worked with
//           </h3>

//           <div className="flex items-center justify-between space-x-4">
//             <div className="w-80 h-100 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-3xl transition-transform duration-300 transform hover:scale-105">
//               <img
//                 className="w-full h-full object-cover"
//                 src="https://logowik.com/content/uploads/images/mit-massachusetts-institute-of-technology9237.logowik.com.webp"
//                 alt="MIT Logo 1"
//               />
//             </div>
//             <div className="w-80 h-100 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-3xl transition-transform duration-300 transform hover:scale-105">
//               <img
//                 className="w-full h-full object-cover"
//                 src="https://logowik.com/content/uploads/images/mit-massachusetts-institute-of-technology9237.logowik.com.webp"
//                 alt="MIT Logo 2"
//               />
//             </div>
//             <div className="w-80 h-100 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-3xl transition-transform duration-300 transform hover:scale-105">
//               <img
//                 className="w-full h-full object-cover"
//                 src="https://logowik.com/content/uploads/images/mit-massachusetts-institute-of-technology9237.logowik.com.webp"
//                 alt="MIT Logo 3"
//               />
//             </div>

//             <div className="w-80 h-100 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-3xl transition-transform duration-300 transform hover:scale-105">
//               <img
//                 className="w-full h-full object-cover"
//                 src="https://logowik.com/content/uploads/images/mit-massachusetts-institute-of-technology9237.logowik.com.webp"
//                 alt="MIT Logo 3"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center">
//           <h3 className="text-6xl font-bold font-serif leading-tight text-center mt-20 mb-20">
//             Cleared so and so research scholarship
//           </h3>

//           <div className="flex items-center justify-between w-full max-w-screen-lg space-x-2">
//             {/* Item 1 */}
//             <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg bg-white max-w-sm hover:shadow-3xl transition-transform duration-300 transform hover:scale-105">
//               <img
//                 className="w-32 h-32 object-cover mb-4 rounded-full border border-gray-300"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KF0bk-SRAl5m6sI_pC75pQu7jNv7zHprLQ&s"
//                 alt="Scholarship Image 1"
//               />
//               <h2 className="text-center text-gray-700">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
//                 aliquam suscipit dolores quisquam facere quidem optio eum,
//                 placeat recusandae! Fugit asperiores, officiis architecto
//                 debitis non rerum aliquam natus quaerat cupiditate. Lorem ipsum
//                 dolor sit amet consectetur adipisicing elit. Natus eius,
//                 necessitatibus ipsam, maxime accusamus optio obcaecati
//                 laboriosam aperiam officia ab ducimus exercitationem
//                 dignissimos, in reiciendis? Quo adipisci esse beatae voluptas.
//               </h2>
//             </div>

//             {/* Item 2 */}
//             <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg bg-white max-w-sm hover:shadow-3xl transition-transform duration-300 transform hover:scale-105">
//               <img
//                 className="w-32 h-32 object-cover mb-4 rounded-full border border-gray-300"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KF0bk-SRAl5m6sI_pC75pQu7jNv7zHprLQ&s"
//                 alt="Scholarship Image 1"
//               />
//               <h2 className="text-center text-gray-700">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
//                 aliquam suscipit dolores quisquam facere quidem optio eum,
//                 placeat recusandae! Fugit asperiores, officiis architecto
//                 debitis non rerum aliquam natus quaerat cupiditate. Lorem ipsum
//                 dolor sit amet consectetur adipisicing elit. Natus eius,
//                 necessitatibus ipsam, maxime accusamus optio obcaecati
//                 laboriosam aperiam officia ab ducimus exercitationem
//                 dignissimos, in reiciendis? Quo adipisci esse beatae voluptas.
//               </h2>
//             </div>

//             {/* Item 3 */}
//             <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg bg-white max-w-sm hover:shadow-3xl transition-transform duration-300 transform hover:scale-105">
//               <img
//                 className="w-32 h-32 object-cover mb-4 rounded-full border border-gray-300"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KF0bk-SRAl5m6sI_pC75pQu7jNv7zHprLQ&s"
//                 alt="Scholarship Image 1"
//               />
//               <h2 className="text-center text-gray-700">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
//                 aliquam suscipit dolores quisquam facere quidem optio eum,
//                 placeat recusandae! Fugit asperiores, officiis architecto
//                 debitis non rerum aliquam natus quaerat cupiditate. Lorem ipsum
//                 dolor sit amet consectetur adipisicing elit. Natus eius,
//                 necessitatibus ipsam, maxime accusamus optio obcaecati
//                 laboriosam aperiam officia ab ducimus exercitationem
//                 dignissimos, in reiciendis? Quo adipisci esse beatae voluptas.
//               </h2>
//             </div>

//             <div className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg bg-white max-w-sm hover:shadow-3xl transition-transform duration-300 transform hover:scale-105 ">
//               <img
//                 className="w-32 h-32 object-cover mb-4 rounded-full border border-gray-300"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KF0bk-SRAl5m6sI_pC75pQu7jNv7zHprLQ&s"
//                 alt="Scholarship Image 1"
//               />
//               <h2 className="text-center text-gray-700">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
//                 aliquam suscipit dolores quisquam facere quidem optio eum,
//                 placeat recusandae! Fugit asperiores, officiis architecto
//                 debitis non rerum aliquam natus quaerat cupiditate. Lorem ipsum
//                 dolor sit amet consectetur adipisicing elit. Natus eius,
//                 necessitatibus ipsam, maxime accusamus optio obcaecati
//                 laboriosam aperiam officia ab ducimus exercitationem
//                 dignissimos, in reiciendis? Quo adipisci esse beatae voluptas.
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full bg-slate-50  m-20 p-20 rounded-lg">
//         <h1 className="text-6xl font-bold font-serif leading-tight mb-20 text-center">
//           Memories So Far
//         </h1>

//         <div className="w-full max-w-4xl mx-auto my-5  p-5">
//           <div className="space-y-6">
//             {" "}
//             {/* Add space between the cards */}
//             <div className="flex items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
//               <div className="flex-1 mr-6">
//                 <h1 className="text-2xl font-bold mb-4">
//                   Such an Amazing night under the Effil
//                 </h1>
//                 <h2 className="text-gray-700 text-lg">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consectetur dolore eos facilis error culpa similique pariatur
//                   est voluptatum! Corporis dolores quaerat minus tenetur fugit
//                   ea dicta dolorem. Debitis, autem tempore. Quidem eaque quo,
//                   velit, hic distinctio cupiditate quasi alias inventore
//                   asperiores aperiam impedit porro animi quae accusantium
//                   architecto! Accusamus molestiae quidem error facere, facilis
//                   amet illum architecto natus qui vitae. Dolorem dicta, magni
//                   nulla ea ullam minus harum pariatur. Eum asperiores minima
//                   perferendis voluptate ducimus quaerat. Sed incidunt temporibus
//                   officiis nemo autem dignissimos ullam quas quo, aspernatur
//                   voluptates qui laborum.
//                 </h2>
//               </div>
//               <div className="flex-shrink-0">
//                 <img
//                   className="w-80 h-80 object-cover rounded-lg shadow-md"
//                   src="https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn-1200-80.jpg"
//                   alt="Amazing Night"
//                 />
//               </div>
//             </div>
//             <div className="flex items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
//               <div className="flex-shrink-0 mr-6">
//                 <img
//                   className="w-80 h-80 object-cover rounded-lg shadow-md"
//                   src="https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn-1200-80.jpg"
//                   alt="Amazing Night"
//                 />
//               </div>
//               <div className="flex-1">
//                 <h1 className="text-2xl font-bold mb-4">
//                   Such an Amazing night under the Effil
//                 </h1>
//                 <h2 className="text-gray-700 text-lg">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consectetur dolore eos facilis error culpa similique pariatur
//                   est voluptatum! Corporis dolores quaerat minus tenetur fugit
//                   ea dicta dolorem. Debitis, autem tempore. Quidem eaque quo,
//                   velit, hic distinctio cupiditate quasi alias inventore
//                   asperiores aperiam impedit porro animi quae accusantium
//                   architecto! Accusamus molestiae quidem error facere, facilis
//                   amet illum architecto natus qui vitae. Dolorem dicta, magni
//                   nulla ea ullam minus harum pariatur. Eum asperiores minima
//                   perferendis voluptate ducimus quaerat. Sed incidunt temporibus
//                   officiis nemo autem dignissimos ullam quas quo, aspernatur
//                   voluptates qui laborum.
//                 </h2>
//               </div>
//             </div>
//             <div className="flex items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
//               <div className="flex-1 mr-6">
//                 <h1 className="text-2xl font-bold mb-4">
//                   Such an Amazing night under the Effil
//                 </h1>
//                 <h2 className="text-gray-700 text-lg">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consectetur dolore eos facilis error culpa similique pariatur
//                   est voluptatum! Corporis dolores quaerat minus tenetur fugit
//                   ea dicta dolorem. Debitis, autem tempore. Quidem eaque quo,
//                   velit, hic distinctio cupiditate quasi alias inventore
//                   asperiores aperiam impedit porro animi quae accusantium
//                   architecto! Accusamus molestiae quidem error facere, facilis
//                   amet illum architecto natus qui vitae. Dolorem dicta, magni
//                   nulla ea ullam minus harum pariatur. Eum asperiores minima
//                   perferendis voluptate ducimus quaerat. Sed incidunt temporibus
//                   officiis nemo autem dignissimos ullam quas quo, aspernatur
//                   voluptates qui laborum.
//                 </h2>
//               </div>
//               <div className="flex-shrink-0">
//                 <img
//                   className="w-80 h-80 object-cover rounded-lg shadow-md"
//                   src="https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn-1200-80.jpg"
//                   alt="Amazing Night"
//                 />
//               </div>
//             </div>
//             <div className="flex items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
//               <div className="flex-shrink-0 mr-6">
//                 <img
//                   className="w-80 h-80 object-cover rounded-lg shadow-md"
//                   src="https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn-1200-80.jpg"
//                   alt="Amazing Night"
//                 />
//               </div>
//               <div className="flex-1">
//                 <h1 className="text-2xl font-bold mb-4">
//                   Such an Amazing night under the Effil
//                 </h1>
//                 <h2 className="text-gray-700 text-lg">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consectetur dolore eos facilis error culpa similique pariatur
//                   est voluptatum! Corporis dolores quaerat minus tenetur fugit
//                   ea dicta dolorem. Debitis, autem tempore. Quidem eaque quo,
//                   velit, hic distinctio cupiditate quasi alias inventore
//                   asperiores aperiam impedit porro animi quae accusantium
//                   architecto! Accusamus molestiae quidem error facere, facilis
//                   amet illum architecto natus qui vitae. Dolorem dicta, magni
//                   nulla ea ullam minus harum pariatur. Eum asperiores minima
//                   perferendis voluptate ducimus quaerat. Sed incidunt temporibus
//                   officiis nemo autem dignissimos ullam quas quo, aspernatur
//                   voluptates qui laborum.
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Image />
//     </div>
//   );
// };

// export default Home;


import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import TypingEffect from "../components/TypingEffect";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import Memories from "../components/Memories";
import Collaborations from "../components/Collaborations";
import Scholarships from "../components/Scholarships";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full mt-0">
      <div className="flex flex-col min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mt-10 mb-5">
          <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-start w-full md:w-1/2 space-y-4 p-5 mx-6 shadow-lg hover:shadow-inner m-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-500">
                Hello, I'm
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Aman Govind Soni
              </h1>
              <h1 className="text-lg sm:text-xl md:text-2xl">
                A chemist from{" "}
                <span className="text-2xl sm:text-3xl md:text-4xl text-red-500">
                  India
                </span>
              </h1>

              <h1 className="text-lg sm:text-xl">
                I'm an author, speaker, actor, and a pretty nice lover
              </h1>
              <h1 className="text-lg sm:text-xl">
                and IITian as well (flex is necessary).
              </h1>

              <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 space-y-4 md:space-y-0 md:space-x-12">
  <div className="w-[20vw]">
    <Link
      to="/about"
      className="text-white bg-red-600 p-2 rounded-full cursor-pointer text-lg font-bold"
    >
      About Me
    </Link>
  </div>

  <div className="flex  space-x-2 ">
    <Link to="https://facebook.com"><FaInstagram className="text-sm sm:text-2xl text-gray-800 hover:text-red-600 transition-colors duration-300" /></Link> 
    <Link to="https://facebook.com"><FaTwitter className="text-sm sm:text-2xl text-gray-800 hover:text-blue-400 transition-colors duration-300" /></Link>
    <Link to="https://facebook.com"><FaFacebookF className="text-sm sm:text-2xl text-gray-800 hover:text-blue-700 transition-colors duration-300" /></Link>
    <Link to="https://facebook.com"><FaLinkedin className="text-sm sm:text-2xl text-gray-800 hover:text-blue-700 transition-colors duration-300" /></Link>
  </div>
</div>

            </div>

            <div className="w-full md:w-1/2 flex justify-center p-4">
              <img
                className="w-full max-w-xs md:max-w-md rounded-lg border-none hover:shadow-lg hover:scale-105 transition-transform duration-300"
                src="hhttps://t3.ftcdn.net/jpg/02/76/34/74/360_F_276347475_XLF6MQQ1hj85TN2TkfQtMPWju8a8Ktmh.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <TypingEffect />
        </div>
      </div>

      {/* <div className="bg-slate-100 p-8 rounded-md mx-4 sm:mx-6 lg:mx-12 w-full max-w-6xl">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-12 text-center">
            Collaborated and worked with
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-48 h-48 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-3xl transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  className="w-full h-full object-contain"
                  src="https://logowik.com/content/uploads/images/mit-massachusetts-institute-of-technology9237.logowik.com.webp"
                  alt={`MIT Logo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            Cleared so and so research scholarship
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 border border-gray-200 shadow-lg rounded-lg bg-white max-w-xs hover:shadow-3xl transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  className="w-32 h-32 object-cover mb-4 rounded-full border border-gray-300"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KF0bk-SRAl5m6sI_pC75pQu7jNv7zHprLQ&s"
                  alt="Scholarship"
                />
                <h2 className="text-center text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div> */}



      {/* <div className="bg-slate-50 p-8 rounded-lg mx-4 sm:mx-6 lg:mx-12 w-full max-w-6xl mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Memories So Far
        </h1>

        <div className="space-y-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="flex-1 mr-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                      Such an Amazing night under the Effil
                    </h1>
                    <h2 className="text-gray-700 text-base sm:text-lg md:text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing 
                      elit. Numquam eligendi voluptas molestiae iste ab, dicta, est alias rem, voluptatum inventore quis. Ullam, quibusdam 
                      odit quod ad doloremque nobis est sit.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aliquam quisquam cumque vero! Omnis, 
                      voluptates obcaecati. Aliquam, i
                      psa laboriosam quia eos, pariatur dolores, totam nulla nesciunt autem ipsum quas velit.
                    </h2>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      className="w-full max-w-sm h-auto rounded-lg shadow-md"
                      src="https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn-1200-80.jpg"
                      alt="Amazing Night"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-shrink-0 mr-6">
                    <img
                      className="w-full max-w-sm h-auto rounded-lg shadow-md"
                      src="https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn-1200-80.jpg"
                      alt="Amazing Night"
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                      Such an Amazing night under the Effil
                    </h1>
                    <h2 className="text-gray-700 text-base sm:text-lg md:text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div> */}

      <Collaborations/>
      <Scholarships/>

      <Memories/>

      <Image />
    </div>
  );
};

export default Home;

