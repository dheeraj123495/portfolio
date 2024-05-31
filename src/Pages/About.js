import React from 'react'
import logo from "../Assets/Profile.jpg";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Resume.pdf";
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex w-12/12 h-[110vh] md:h-[100vh] justify-center items-center">
      <div className="flex w-10/12 flex-col items-center">
        <h5 className="text-pink-500 font-poppins font-semibold tracking-widest text-3xl md:text-[1.6rem]">
          ABOUT
        </h5>
        <p className="text-richblack-900 text-2xl  md:text-4xl font-bold">
          Let me introduce myself.
        </p>
        <div className="flex flex-col w-full md:flex-row md:w-7/12 mt-[2vh] md:mt-[8vh] md:gap-x-5">
          <div className="md:w-2/12 mr-5 flex justify-center items-center">
            <img
              className="rounded-[50%] w-[80%] md:w-[100%]"
              src={logo}
              alt="Logo"
              loading="lazy"
            />
          </div>
          <div className="md:w-10/12 mt-5 md:mt-0">
            <p className="font-lora font-normal text-gray-500 text-[0.9rem] md:text-2xl">
              I'm a passionate software engineer with a flair for transforming
              ideas into dynamic web applications. With a solid foundation in
              Java, C#, ASP.NET, JavaScript, React and SQL. I've led impactful
              projects like WeConnect and a React-based Weather App. My
              experience at Vegam Solutions honed my skills in agile
              development, troubleshooting, and collaboration. Always on the
              lookout for innovative technologies, I thrive in team settings and
              love crafting user-centric solutions.
            </p>
          </div>
        </div>
        <div>
          <button
            className="bg-richblack-900 hover:bg-white border-2 hover:border-richblack-900 hover:text-black transition-all duration-300 font-thick text-white px-6 py-3 tracking-widest mt-[10vh] md:mt-[15vh]"
            onClick={handleDownload}
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About