import React, { useState,useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
   const form = useRef();
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function onChangeHandler(event) {
    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.value,
    });
  }
  const clearContactDetails = () => {
    setContactDetails({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  function onSubmitHandler(event) {
    event.preventDefault();
    emailjs
      .sendForm("service_qny529j", "template_0bqitie", form.current, {
        publicKey: "OxzYZwVezyQEJmYfE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    console.log(contactDetails);
    clearContactDetails();
    toast.success("Thank you for contacting me. I will get back to you soon.");
  }
  return (
    <div className=" bg-custom-black text-white gap-y-5 flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="text-pink-600 font-poppins font-bold tracking-widest text-2xl md:text-2xl">
        Contact
      </h1>
      <h1 className=" text-[1.8rem] md:text-4xl font-bold mb-4 text-center">
        I'd Love To Hear From You.
      </h1>
      <div className="flex md:flex-row gap-y-3 flex-col justify-around md:w-4/12">
        <div className="flex gap-x-4">
          <a
            href="mailto:dheerajsp0700@gmail.com"
            className="text-pink-600 font-poppins font-bold tracking-widest text-3xl md:text-2xl"
          >
            <MdEmail />
          </a>
          <span>dheerajsp0700@gmail.com</span>
        </div>
        <div className="flex justify-center gap-x-4">
          <FaPhone className="text-2xl text-pink-600" />
          <span>+91 7338472204</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-12/12 md:w-full">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col md:w-6/12 w-full"
          ref={form}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-500">
              Name
            </label>
            <input
              type="text"
              value={contactDetails.name}
              id="name"
              name="name"
              onChange={onChangeHandler}
              className="w-full bg-custom-black border-b-2 border-gray-700 text-white py-2 px-4 outline-none focus:border-pink-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-500">
              Email
            </label>
            <input
              value={contactDetails.email}
              type="email"
              id="email"
              name="email"
              onChange={onChangeHandler}
              className="w-full bg-custom-black border-b-2 border-gray-700 text-white py-2 px-4 outline-none focus:border-pink-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-500">
              Subject
            </label>
            <input
              type="text"
              value={contactDetails.subject}
              id="subject"
              name="subject"
              onChange={onChangeHandler}
              className="w-full bg-custom-black border-b-2 border-gray-700 text-white py-2 px-4 outline-none focus:border-pink-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-500">
              Message
            </label>
            <textarea
              id="message"
              value={contactDetails.message}
              name="message"
              onChange={onChangeHandler}
              className="w-full bg-custom-black border-b-2 border-gray-700 text-white py-2 px-4 outline-none focus:border-pink-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 font-bold hover:bg-pink-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
