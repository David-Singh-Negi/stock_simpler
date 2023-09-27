import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext'
import StockContext from './context/StockContext';

const SearchResult = ({results}) => {
    const{darkMode} = useContext(ThemeContext);
    const{setStockSymbol} = useContext(StockContext)
  return (
    <ul className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll custom-scrollbar text-sm z-60  
    ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"}
    `}>
        {
            results.map((item) => (
                <li key={item.symbol} className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md 
                ${darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200"} transition duration-300`}
                onClick={()=>{
                  setStockSymbol(item.symbol);
                }}
                >

                  <span>{item.symbol}</span>
                  <span>{item.description}</span>
                
                </li>
            ))
        }
    </ul>
  )
}

export default SearchResult