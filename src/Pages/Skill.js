import React from "react";

const Skill = () => {
  const skills = [
    "Java",
    "C#",
    "ASP.NET",
    "OOPs",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "SQL",
    "Oracle SQL",
    "AJAX",
    "JQuery",
    "Tailwind CSS",
  ];
  return (
    <div className="flex justify-center items-center bg-custom-gray h-[100vh] w-12/12 ">
      <div className="w-8/12 md:w-5/12 mt-10 ">
        <div className="flex justify-center top-[15vh] mb-[5vh]">
          <p className="text-pink-600 font-poppins font-bold tracking-widest text-3xl md:text-2xl">
            SKILLS
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-col bg-gray-800 text-white px-4 py-2 rounded-md flex justify-center items-center"
            >
              <p> {skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
