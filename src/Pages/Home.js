import React from "react";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center bg-custom-black md:gap-y-3 gap-y-4">
      <h1 className="font-poppins font-bold text-pink-600 text-3xl md:text-4xl tracking-widest">
        HELLO
      </h1>
      <h1 className="font-alegreya font-normal text-white md:text-8xl text-5xl text-center">
        I'm Dheeraj Pawar.
      </h1>
      <div className="flex gap-x-2 md:gap-x-8 mt-5 font-alegreya font-normal">
        <div className="h-full w-[3px] bg-richblack-700"></div>
        <p className="text-white md:tracking-wider">MERN DEVELOPER</p>
        <div className="h-full w-[3px] bg-richblack-700"></div>
        <p className="text-white md:tracking-wider">.NET DEVELOPER</p>
        <div className="h-full w-[3px] bg-richblack-700"></div>
      </div>
      <div className="flex gap-x-5 mt-[10vh]">
        <Link to="https://www.instagram.com/pdheerajs/">
          <GrInstagram size={25} className="text-white" />
        </Link>
        <Link to="https://www.linkedin.com/in/dheerajsp/">
          <RiLinkedinBoxLine size={25} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
