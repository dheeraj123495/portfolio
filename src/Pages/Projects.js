import React from "react";

const Projects = ({ ProjectData }) => {
  return (
    <div className=" flex justify-center w-12/12 h-full mb-[10vh]">
      <div className="w-12/12 md:w-10/12 mt-10">
        <div className="flex justify-center top-[15vh] mb-[5vh]">
          <p className="text-pink-600 font-poppins font-bold tracking-widest text-3xl md:text-2xl">
            PROJECTS
          </p>
        </div>
        <div className="flex w-10/12 md:w-full mx-auto flex-col md:flex-row flex-wrap justify-center items-center gap-10">
          {ProjectData.map((project) => {
            return (
              <div
                key={project.id}
                className="flex bg-slate-100 rounded-md md:w-3/12 md:min-h-[480px] flex-col hover:shadow-lg hover:cursor-pointer transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-h-[200px] w-screen rounded-lg p-1"
                />
                <div className="flex flex-col text-center justify-center md:w-10/12 md:mx-auto">
                  <h5 className="text-richblack-600 font-poppins font-semibold tracking-widest text-3xl md:text-[1.3rem]">
                    {project.title}
                  </h5>
                  <p className="font-lora md:p-2 p-3 font-normal text-gray-500 md:text-1xl text-left">
                    {project.description}
                  </p>
                  <p className="font-lora md:p-2 p-3 font-normal text-gray-500 md:text-1xl text-left">
                    <span className="font-bold">Skills </span> :{" "}
                    {project.skills}
                  </p>
                  <div className="flex justify-around flex-wrap mt-[px]">
                    <button className="bg-richblack-900 hover:bg-white border-2 hover:border-richblack-900 hover:text-black transition-all duration-300 font-thick text-white px-4 py-2 tracking-widest mb-3">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </button>
                    <button className="bg-richblack-900 hover:bg-white border-2 hover:border-richblack-900 hover:text-black transition-all duration-300 font-thick text-white px-4 py-2 tracking-widest mb-3">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
