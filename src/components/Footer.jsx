// import {
//   FaFacebookF,
//   FaGithub,
//   FaLinkedinIn,
//   FaArrowUp,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-slate-950 border-t border-cyan-500/20 text-gray-300">

//       {/* Gradient Line */}
//       <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

//       <div className="max-w-7xl mx-auto px-6 py-12">

//         <div className="grid md:grid-cols-3 gap-10">

//           {/* Left */}
//           <div>
//             <h2 className="text-4xl font-bold text-white">
//               Milan <span className="text-cyan-400">Bishwakarma</span>
//             </h2>

//             <p className="mt-4 text-gray-400 leading-7">
//               Passionate AI Engineer focused on Machine Learning, Deep Learning,
//               Python, React, and building intelligent applications that solve
//               real-world problems.
//             </p>

//             <p className="mt-4 italic text-cyan-400">
//               "Turning ideas into intelligent solutions."
//             </p>
//           </div>

      
                
             

//           {/* Connect */}
//           <div>

//             <h3 className="text-2xl font-semibold text-white mb-5">
//               Let's Connect
//             </h3>

//             <p className="text-gray-400 mb-6">
//               Feel free to connect with me through social media.
//             </p>

//             <div className="flex gap-5">

//               <a
//                 href="https://www.facebook.com/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
//               >
//                 <FaFacebookF size={20} />
//               </a>

//               <a
//                 href="https://www.linkedin.com/feed/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
//               >
//                 <FaLinkedinIn size={20} />
//               </a>

//               <a
//                 href="https://github.com/mmilanquery55-dev"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
//               >
//                 <FaGithub size={20} />
//               </a>

//             </div>

//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

//           <p className="text-gray-500 text-center">
//             © {new Date().getFullYear()}{" "}
//             <span className="text-cyan-400 font-semibold">
//               Milan Bishwakarma
//             </span>
//             . All Rights Reserved.
//           </p>

//           <button
//             onClick={() =>
//               window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//               })
//             }
//             className="mt-5 md:mt-0 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 hover:scale-110 transition-all duration-300 shadow-lg"
//           >
//             <FaArrowUp className="mx-auto text-white" />
//           </button>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;




import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/mmilanquery55-dev",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-gray-300">

      {/* Animated Gradient Top Border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse" />


      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />


      <div className="relative max-w-7xl mx-auto px-6 py-16">


        <div className="grid md:grid-cols-3 gap-12">


          {/* Brand Section */}
          <div className="space-y-5">


            <h2 className="text-4xl font-extrabold text-white tracking-wide">

              Milan{" "}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Bishwakarma
              </span>

            </h2>


            <p className="text-gray-400 leading-7 max-w-md">

              AI Engineer passionate about Artificial Intelligence,
              Machine Learning, Deep Learning, Python and modern web
              technologies. Building intelligent solutions with
              scalable and innovative approaches.

            </p>


            <p className="flex items-center gap-2 text-cyan-400 italic">

              <span className="text-xl">"</span>
              Turning ideas into intelligent solutions.
              <span className="text-xl">"</span>

            </p>


          </div>



          {/* Quick Information */}
          <div>


            <h3 className="text-2xl font-semibold text-white mb-6">

              Expertise

            </h3>


            <ul className="space-y-3 text-gray-400">


              <li className="hover:text-cyan-400 transition">
                Artificial Intelligence
              </li>

              <li className="hover:text-cyan-400 transition">
                Machine Learning
              </li>

              <li className="hover:text-cyan-400 transition">
                Deep Learning
              </li>

              {/* <li className="hover:text-cyan-400 transition">
                Full Stack Development
              </li> */}


            </ul>


          </div>



          {/* Social Section */}
          <div>


            <h3 className="text-2xl font-semibold text-white mb-6">

              Let's Connect

            </h3>


            <p className="text-gray-400 mb-6">

              Let's collaborate and create something impactful together.

            </p>



            <div className="flex gap-4">


              {socialLinks.map((social) => (

                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="
                  group
                  w-12
                  h-12
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  text-gray-300
                  hover:text-white
                  hover:bg-gradient-to-r
                  hover:from-cyan-500
                  hover:to-blue-600
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  shadow-lg
                  "
                >

                  <span className="text-xl group-hover:scale-110 transition">

                    {social.icon}

                  </span>


                </a>


              ))}


            </div>



            {/* Email */}
            <div className="mt-6 flex items-center gap-3 text-gray-400">

              <FaEnvelope className="text-cyan-400"/>

              <span>
                mmilanquery55@gmail.com
              </span>

            </div>


          </div>



        </div>



        {/* Divider */}

        <div className="border-t border-white/10 mt-14 pt-8">


          <div className="flex flex-col md:flex-row justify-between items-center gap-5">


            <p className="text-gray-500 text-center">


              © {new Date().getFullYear()}{" "}

              <span className="text-cyan-400 font-semibold">

                Milan Bishwakarma

              </span>

              . All Rights Reserved.


            </p>




            {/* Back To Top */}

            <button
              onClick={() =>
                window.scrollTo({
                  top:0,
                  behavior:"smooth",
                })
              }
              aria-label="Back to top"
              className="
              group
              w-12
              h-12
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              flex
              items-center
              justify-center
              shadow-xl
              hover:scale-110
              transition-all
              duration-300
              "
            >

              <FaArrowUp 
                className="
                text-white
                group-hover:-translate-y-1
                transition
                "
              />

            </button>


          </div>


        </div>


      </div>


    </footer>
  );
};


export default Footer;  