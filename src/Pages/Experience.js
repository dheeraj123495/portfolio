import React from "react";
import { FaBriefcase } from "react-icons/fa";


const Experience = ({ ExperienceData }) => {
  const experienceData = ExperienceData;
  return (
    <div className=" flex justify-center w-[100%] md:h-[100vh] bg-custom-gray">
      <div className="w-12/12 md:w-8/12 mt-10">
        <div className="flex justify-center top-[15vh] mb-[5vh]">
          <p className="text-pink-600 font-poppins font-bold tracking-widest text-3xl md:text-2xl">
            MY EXPERIENCE
          </p>
        </div>
        <div>
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className="w-[100%] h-[150px] md:h-full text-black md:px-4 py-2 rounded-md flex justify-center gap-x-5"
            >
              <div className="flex flex-col w-[60%] md:w-[40%] text-center">
                <div>
                  <h3 className="font-poppins font-bold tracking-wider">
                    {experience.title}
                  </h3>
                </div>
                <div className="font-poppins font-normal tracking-wider text-gray-500">
                  <p>{experience.date}</p>
                </div>
              </div>
              <div className="flex flex-col border-l-2 border-gray-400 w-[40%] md:w-[60%] px-10 ">
                <div className="relative p-2 rounded-full left-[-60px] bg-black w-fit">
                  <FaBriefcase size={25} className="text-white" />
                </div>
                <div className="absolute">
                  <p className="inline font-poppins font-bold text-custom-gray2">
                    {experience.company}
                  </p>
                </div>
                <div className="w-[15%] h-[2px] mt-2 bg-gray-500"></div>
                <div className="mt-4  hidden md:block">
                  <p className="font-lora text-gray-500">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
