import React from "react";
// import logo from "../Assets/Profile.jpg";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../Assets/Logo.png";

// const NavBar = () => {
//   return (
//     <div className="flex justify-between w-full mx-auto shadow-md bg-gray-900">
//       <div className="w-[50%] flex md:items-center md:justify-center">
//         <Link to="/">
//           <img
//             className="rounded-[50%] w-12 ml-12 mb-2 mt-2"
//             src={logo}
//             alt="Logo"
//             loading="lazy"
//           />
//         </Link>
//       </div>
//       <nav className="w-[50%] justify-center flex items-center">
//         <ul className="flex gap-x-4 md:gap-x-10 text-richblack-100">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// const NavBar = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full shadow-md bg-gray-900 z-50">
//       <div className="flex justify-between w-full mx-auto">
//         <div className="w-[50%] flex md:items-center md:justify-center">
//           <ScrollLink to="home" smooth={true} duration={500}>
//             <img
//               className="rounded-[50%] w-12 ml-12 mb-2 mt-2"
//               src={logo}
//               alt="Logo"
//               loading="lazy"
//             />
//           </ScrollLink>
//         </div>
//         <nav className="w-[50%] justify-center flex items-center">
//           <ul className="flex gap-x-4 md:gap-x-10 text-richblack-100">
//             <li>
//               <ScrollLink to="home" smooth={true} duration={500}>
//                 Home
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="about" smooth={true} duration={500}>
//                 About
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink to="contact" smooth={true} duration={500}>
//                 Contact
//               </ScrollLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

const NavBar = () => {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Experience", link: "/experience" },
    { name: "Education", link: "/education" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  let [selected, setSelected] = useState("Home");
  const handleSetActive = (linkName) => {
    console.log(linkName);
    setSelected(linkName);
    setOpen(false);
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0 transition-all duration-300">
      <div className="md:flex items-center justify-between bg-black py-3 md:px-10 px-7">
        <div
          className="cursor-pointer flex items-center font-lora md:ml-12
      text-white"
        >
          <ScrollLink to="Home" smooth={true} duration={500}>
            <img src={Logo} alt="logo" width={150} />
          </ScrollLink>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-pink-600"
        >
          <FiMenu
            name={open ? "close" : "menu"}
            className="transition duration-500 ease-in-out"
          ></FiMenu>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static bg-black md:black md:z-auto z-[-1] right-0 md:w-auto md:pl-0 p-5 md:p-3 transition-all duration-300 ease-in-out ${
            open ? "top-16 opacity-100" : "top-[-490px] opacity-100"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-white text-xl md:my-0 my-5 tracking-wider font-alegreya font-normal"
            >
              <ScrollLink
                to={link.name}
                smooth={true}
                duration={500}
                onClick={() => handleSetActive(link.name)}
                className={selected === link.name ? "text-pink-600" : ""}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
