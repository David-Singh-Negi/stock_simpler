import React from 'react'
import Search from './Search'

const Header = ({name}) => {
  return (
    <>
      <div className=' xl:px-32 lg:mt-3'>
        <h1 className=' text-3xl'>
            {name}
        </h1>
        <Search/>
      </div>
      {/* Themeicon */}
    </>
  )
}

export default Header