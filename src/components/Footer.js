import React, { useContext } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ThemeContext from "./context/ThemeContext";
 

const Footer = () => {
    const{darkMode} = useContext(ThemeContext);
  return (
    <div className={` ${darkMode ? " bg-neutral-900" : "bg-yellow-300"}`}>
      <div className="w-[90%] mx-auto mt-10 py-2">
        <div className="flex flex-col md:flex-row p-5 gap-4">
          {/* location */}
          <div className={`w-full md:w-[30%] flex flex-col justify-center items-center mb-4 md:mb-0 ${darkMode ? " text-neutral-200" : null}`}>
            <h1 className="font-bold text-xl">LOCATION</h1>
            <p>Invertis University</p>
            <p>Bareilly, Uttar Pradesh</p>
            <p>India, 274702</p>
          </div>

          {/* contact */}
          <div className="w-full md:w-[30%] flex flex-col justify-center items-center mb-4 md:mb-0">
            <h1 className={`font-bold text-xl ${darkMode ? " text-neutral-200" : null}`}>AROUND THE WEB</h1>
            <ul className="flex gap-5 mt-2">
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className={`text-xl ${darkMode ? " text-black" : null}`} />
              </a>
            </li>
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/david-singh-negi-b9702a251/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className={`text-xl ${darkMode ? " text-black" : null}`}> </FaLinkedinIn>
              </a>
            </li>
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://github.com/David-Singh-Negi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={`text-xl ${darkMode ? " text-black" : null}`}></FaGithub>
              </a>
            </li>
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className={`text-xl ${darkMode ? " text-black" : null}`}></FaWhatsapp>
              </a>
            </li>
              {/* Add other social media icons */}
            </ul>
          </div>

          {/* about */}
          <div className={`w-full md:w-[30%] flex flex-col justify-center items-center ${darkMode ? " text-neutral-200" : null}`}>
            <h1 className="font-bold text-xl">ABOUT</h1>
            <p className="text-center">
              This is a simple web app using React.Js. You can search for Stock Information, and results will be displayed accordingly using the Finnhub API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;