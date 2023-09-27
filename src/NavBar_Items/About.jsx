import React, { useContext } from "react";
import Footer from "../components/Footer";
import about from "../assets/about.jpg"

import {motion } from 'framer-motion'
import ThemeContext from "../components/context/ThemeContext";

const About = () => {

  const{darkMode} = useContext(ThemeContext);

  const clickhandler = () => {
     window.location.href = 'https://github.com/David-Singh-Negi';
  };

  return (
  <motion.div
  initial={{x:'100vw'}}
  animate={{x:0}}
  transition={{delay:1, type:'spring'}}
  >
      <div className=" w-[75%] mx-auto justify-center gap-7 items-center lg:mt-[120px] md:mt-[200px] custom-media-query  rounded-md flex flex-col mt-[100px]  h-auto hello lg:flex-row md:flex-col   shadow-[0px_0px_8px_5px_#00000024]">
        <div className=" w-[50%] ">
            <img src={about} alt ="about"/>
        </div>
  
        <div className="w-full md:w-[90%] flex flex-col justify-center    rounded-lg  p-2 px-4">
          <h1 className="font-bold text-2xl text-center mb-1  text-green-400">ABOUT</h1>
          <div className=" h-[2px] w-[50%] bg-yellow-600 mx-auto m-1">

          </div>

          <div className={`${darkMode ? " text-neutral-200" : null}`}>
          <p className=" font-semibold opacity-60 text-center">
            Welcome to our Stock Simpler Web App! This application is built using
            React.js and utilizes the FinnHub API to get you updated about Latest Stocks
            and also helps you explore previous data of best Stocks in Market .
          </p>
          <p className=" font-semibold opacity-60 text-center">
            With Stock Simpler, you can explore top Stocks, Exchange, Capitalization
            , and other facilities to boost up your Stock Exploring.
          </p>
          <p className=" font-semibold opacity-60 text-center">
            Whether you're a Stock Trader or a Naive Investor, 
            our app makes it easy to search, find, and learn more
            about your favorite Stocks. Happy reading!
            </p>
          </div>

        <div className=" flex items-center ">
        <button onClick={clickhandler} className=" my-3 mt-4 px-9 py-3 bg-indigo-950 text-white font-semibold rounded-full hover:bg-yellow-600 hover:text-black transition duration-200 ease-in shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">Know More..</button>
        </div>
            
      </div>
      
        


      
     
    </div>
   <div className="mb-0">
   <Footer/>
   </div>
  </motion.div>
  );
};

export default About;