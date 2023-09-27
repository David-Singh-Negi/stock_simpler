import React from 'react'
import Card from './Card'

const OverView = ({currency,price,symbol,change,changePercent}) => {
  return (
    <Card>
      <span className='absolute top-3 left-4 font-semibold  text-neutral-400 text-sm lg:text-sm 2xl:text-2xl'>{symbol}</span>

      <div className='h-full w-full flex items-center justify-around mt-1'>

        <span className='text-xl xl:text-2xl 2xl:text-5xl flex items-center'>
          ${price}
          <span className='text-lg xl:text-lg 2xl:text-2xl text-neutral-400 m-3'>{currency}</span>
        </span>

        <span className={`text-sm xl:text-lg 2xl:text-2xl font-semibold ${change > 0 ? " text-lime-400" : " text-red-600"}`}>
          {change} <span>({changePercent}%)</span>
        </span>
      </div>
    </Card>
  )
}

export default OverView