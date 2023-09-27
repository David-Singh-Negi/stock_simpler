import React, { useContext } from 'react'
import Card from './Card'
import ThemeContext from './context/ThemeContext'

const Details = ({details}) => {

    const{darkMode} = useContext(ThemeContext);

    const detailList ={
        name:"Name",
        country:"Country",
        currency:"Currency",
        exchange:"Exchange",
        ipo:"IPO Data",
        marketCapitalization:"Market Capitalization",
        finnhubIndustry:"Industry",
    }

    const convertMillionToBillion = (number) => {
        return(number/1000).toFixed(2);
    }

  return (
    <Card>
        <ul className={`w-full h-full flex flex-col justify-between divide-y-2 
        ${darkMode ? "divide-gray-800" : null}`}
        >
            {
                Object.keys(detailList).map((item) => (
                    <li key={item} className=' flex-1 flex justify-between items-center'>
                        <span className=' text-sm font-semibold'>{detailList[item]}</span>
                        <span>{item === "marketCapitalization" ? `${convertMillionToBillion(details[item])}B` : details[item]}</span>
                    </li>
                ))
            }
        </ul>
    </Card>
  )
}

export default Details