import React from 'react'
import data from './Datas'
export default function Right() {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-4 gap-[30px]'>
        {data.map(item => (
          <div key={item.id} className='w-[474px] h-[332px] bg-[#052D37] rounded-[24px] flex flex-col justify-evenly items-center'>
            <div className='w-[426px] h-[222px]'>
              <h2 className='text-[16px]'>{item.heading}</h2>
              <img src={item.img} alt='nothing' className='w-[421.07px] h-[186.37px] mt-[12px]' />
            </div>
            <div className='w-[419px]'>
              <p className='text-[12px] text-[#E0FBFF]'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
