import React from 'react'
import { FaGraduationCap } from "react-icons/fa";

const Education = ({ EducationData }) => {
  return (
    <div className=" flex justify-center items-center w-[100%] h-[110vh] bg-custom-gray">
      <div className="w-12/12 md:w-8/12">
        <div className="flex justify-center top-[15vh] mb-[5vh]">
          <p className="text-pink-600 font-poppins font-bold tracking-widest text-3xl md:text-2xl">
            EDUCATION
          </p>
        </div>
        <div>
          {EducationData.map((education, index) => (
            <div
              key={index}
              className="w-[100%] gap-x-3 h-[150px] md:h-full text-black md:px-4 md:py-2 rounded-md flex justify-center "
            >
              <div className="flex flex-col w-[30%] md:w-[40%] text-center">
                <div>
                  <h3 className="font-poppins font-bold tracking-wider">
                    {education.class}
                  </h3>
                </div>
                <div className="font-poppins font-normal tracking-wider text-gray-500">
                  <p>{education.year}</p>
                </div>
              </div>
              <div className="flex flex-col border-l-2 border-gray-400 w-[70%] px-10 ">
                <div className="relative p-2 rounded-full left-[-60px] bg-black w-fit">
                  <FaGraduationCap size={25} className="text-white" />
                </div>
                <div className="absolute">
                  <p className="inline font-poppins font-bold text-custom-gray2">
                    {education.institute}
                  </p>
                </div>
                <div className="w-[15%] h-[2px] mt-2 bg-gray-500"></div>
                <div className="mt-4 flex">
                  <p className="font-lora text-gray-500 inline">
                    Percentage/CGPA: <span>{education.score}</span>
                  </p>
                  {/* <p className="font-lora text-gray-500 inline ml-2">
                    {education.score}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education