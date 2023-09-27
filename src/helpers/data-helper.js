// export const convertDateToUnixTimestamp = (date) => {
//     return Math.floor(date.getTime() / 1000);
// }

// export const convertUnixTimestampToDate = (UnixTimestamp) => {
//     const milliseconds = UnixTimestamp * 1000;
//     return new Date(milliseconds).toLocaleDateString();
// }

// export const createDate = (date,days,months,weeks,years) => {
//     let newDate = new Date(date);
//     newDate.setDate(newDate.getDate() + days + 7 * weeks);
//     newDate.setMonth(newDate.getMonth() + months);
//     newDate.setFullYear(newDate.getFullYear() + years);
// }


export const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
  };
  

  export const convertUnixTimestampToDate = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;
    return new Date(milliseconds).toLocaleDateString();
  };
  
 
  export const createDate = (date, days, weeks, months, years) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + 7 * weeks);
    newDate.setMonth(newDate.getMonth() + months);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
  };

//   import React, { useContext, useState } from 'react';
// import {XIcon,SearchIcon} from '@heroicons/react/solid'
// import SearchResult from './SearchResult';
// import ThemeContext from './context/ThemeContext';
// import { searchSymbols } from '../api/stock-api';