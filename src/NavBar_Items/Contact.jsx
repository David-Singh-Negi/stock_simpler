import React, { useContext } from "react";
import contact from "../assets/contact.jpg"
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import {motion } from 'framer-motion'
import ThemeContext from "../components/context/ThemeContext";

const Contact = () => {
  const{darkMode} = useContext(ThemeContext);
  return (
   <div>
     <div className={`flex flex-col md:flex-row sm:flex-row h-auto w-full items-center justify-end   mx-auto   md:w-[75%] sm:w-[90%] hello  fiction-section mt-[80px]   lg:mt-[100px] md:mt-[150px] custom-media-query shadow-[0px_0px_8px_5px_#00000024] ${darkMode ? " bg-gray-900 text-neutral-200" : null}`}>
      {/* imaghe */}
      <div className={`rounded-md ${darkMode ? " bg-gray-900" : null}`}> 
        <img src={contact} alt="contact" className=" rounded-lg" /> 
      </div>
      {/* contact details */}
      <motion.div
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{delay:1, type:'spring'}}
        className=" border-2 rounded-2xl w-full h-auto    p-10 flex flex-col gap-4 m-5  hello
"
      >
        <h1 className="font-semibold text-3xl md:text-4xl mb-4 text-center">
          CONTACT
        </h1>
        <div className=" w-full h-[2px] bg-fuchsia-600"></div>
        <p className="font-semibold  atext-xl md:text-2xl mb-4 text-center text-[#9b5d26]">
          Let's collaborate and <span className=" text-[#82E0AA]"> grow</span>,
          So we can co-create a better{" "}
          <span className=" text-[#82E0AA]">tomorrow</span>{" "}
        </p>
        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <a
              href="https://www.linkedin.com/in/david-singh-negi-b9702a251/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>

          <div className="font-bold">
            LinkedIn
            <p className="opacity-50 ">David Singh Negi</p>
          </div>
        </div>

        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <a
              href="https://github.com/David-Singh-Negi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-8 w-8"></FaGithub>
            </a>
          </div>
          <div className="font-bold">
            Github
            <p className=" opacity-50 ">David-Singh-Negi</p>
          </div>
        </div>

        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-8 w-8"></FaTwitter>
            </a>
          </div>
          <div className=" font-bold">
            Twitter
            <p className=" opacity-50">@davidSingh</p>
          </div>
        </div>

        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <FaWhatsapp className="h-8 w-8"></FaWhatsapp>
          </div>
          <div className=" font-bold">
            Whatsapp
            <p className=" opacity-50">+91 8340601366</p>
          </div>
        </div>

        <div className=" w-full h-[2px] bg-fuchsia-600"></div>
      </motion.div>
     
    </div>
    <Footer/>
   </div>
  );
};

export default Contact;