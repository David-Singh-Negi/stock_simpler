import React, { useContext } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gojo from "../assets/gojo.jpg";
import img2 from "../assets/Img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import ThemeContext from '../components/context/ThemeContext';

const Home = () => {
  
  const{darkMode} = useContext(ThemeContext);

  const navigate = useNavigate();
  function clickHandler(){
    navigate('/AllStocks');
  }

  return (
    <div className={` w-screen flex flex-col  mt-[100px] lg:mt-[10px] md:mt-[20px] sm:mt-[100px] hello ${darkMode ? "bg-gray-900 text-neutral-200" : " bg-neutral-100"}`}>

      <div className="w-[90%] mx-auto lg:flex justify-center gap-12 md:flex-row sm:flex-col items-center lg:mt-[100px] sm:mt-[150px] md:mt-[200px] custom-media-query">

      <div className='flex flex-col flex-wrap lg:max-w-[30%] justify-center items-center sm:items-center'>
          <div className={`text-[40px] font-bold  ${darkMode ? " text-neutral-200" : "text-neutral-800"}`}>"STOCK-SIMPLER"</div>
          
          <div className={`text-[20px]  font-semibold ${darkMode ? "text-neutral-400" : "text-neutral-700"}`}>Welcome to Stock Simpler! We provide comprehensive company analysis and stock tracking services, making it easier than ever to navigate the stock exchange. Our time-based filtering system lets you get the information you need, exactly when you need it.</div>
          
          <button onClick={clickHandler}
           className='mt-4 px-9 py-3  bg-indigo-950 text-white font-semibold rounded-full hover:bg-yellow-600 hover:text-black transition duration-200 ease-in shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
            Explore Stocks
          </button>
        </div>

        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] flex flex-wrap shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">

        <Carousel
            showThumbs={false} // Hide thumbnail navigation
            showArrows={false} // Show navigation arrows
            autoPlay={true} // Enable autoplay
            infiniteLoop={true} // Enable infinite loop
            interval={3000} // Set interval between slides (in milliseconds)
          >
            
              <img
                className="lg:h-[400px]  rounded-2xl"
                src={gojo}
                alt="fictionimg"
              />
              
              <img
                className="lg:h-[400px]   rounded-2xl"
                src={img2}
                alt="dramalogo"
              />
            
              <img
                className="lg:h-[400px]   rounded-2xl"
                src={img3}
                alt="mysterylogo"
              />

              <img
                className="lg:h-[400px]   rounded-2xl"
                src={img4}
                alt="mysterylogo2"
              />

              <img
                className="lg:h-[400px]   rounded-2xl"
                src={img5}
                alt="mysterylogo2"
              />

              <img
                className="lg:h-[400px]   rounded-2xl"
                src={img6}
                alt="mysterylogo3"
              />

              <img
                className="lg:h-[400px]   rounded-2xl"
                src={img7}
                alt="mysterylogo3"
              />
            
            
          </Carousel>
        </div>

      </div>

      <div className='flex flex-col mx-auto w-[60%] mt-5'>
        <h1 className={`text-[20px] text-center italic font-bold  ${darkMode ? " text-neutral-200" : "text-neutral-800"}`}>
        " It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong " 
        </h1>
        <h3 className='text-[15px] font-medium'>— George Soros</h3>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;