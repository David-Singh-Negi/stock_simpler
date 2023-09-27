import NavBar from "./NavBar_Items/NavBar";
import { Routes,Route } from "react-router-dom";
import Home from "./NavBar_Items/Home"
import AllStocks from "./NavBar_Items/AllStocks";
import About from "./NavBar_Items/About";
import Contact from "./NavBar_Items/Contact";
import ThemeContext from "./components/context/ThemeContext";
import { useState } from "react";
import StockContext from "./components/context/StockContext";

const App = () => {

  const[darkMode,setDarkMode]=useState(false);
  const[stockSymbol,setStockSymbol] = useState("FB");

  return(
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
      <StockContext.Provider value={{stockSymbol,setStockSymbol}}>
      <div>
      <div className={`w-screen overflow-auto  ${darkMode ? "bg-gray-900" : null}`}>

        <div>
          <NavBar/>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AllStocks" element={<AllStocks/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>

      </div>
    </div>
      </StockContext.Provider>
    </ThemeContext.Provider>
  )
};

export default App;
