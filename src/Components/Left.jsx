import React, { useState } from 'react'
import data from './Data';
import dwon from '../assets/dwon.svg'
import setting from '../assets/setting.svg'
import './Left.css'
export default function Left() {

    return (
        <>
            <div className='mt-[24px]'>
                {/* Upper part */}
                <div>
                    <div className='w-[367px] h-[95px] left-[24px] flex flex-col justify-between'>
                        <div className='ml-[24px] text-[18px]'>Browse a curated list of insights  for the</div>
                        <div className='ml-[24px] w-[367px] h-[56px] flex justify-between comman px-3 py-3 rounded-xl director'>
                            <div className='text-[#41DCD3] font-medium text-[18px]'>Director General  </div>
                            <div className='w-6 h-6'>
                                <img src={dwon} alt='dwon' className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Lower Part */}
                <div className='w-[367px] h-[530px]  ml-[24px] mt-2 borderofleft rounded-3xl '>
                    <div className=' mr-[24px] w-[365px] h-[84px] flex justify-center items-center rounded-t-[24px] filter'>
                        <div className='flex justify-between items-center '>
                            <div className='w-[32px] h-[32px] flex justify-center items-center rounded-full bg-[#C0F7FF1A] '>
                                <img src={setting} alt='setting' className='w-[16px] h-[16px]' />
                            </div>
                            <div className='text-[20px] w-[315px] h-[52px] p-2'>
                                Filter your search based on key questions
                            </div>
                        </div>
                    </div>
                    <div className='text-[10px] w-full border-t-[1.5px] border-t-[#C0F7FF1A]'>
                        {data.map(item => (
                            <div className='w-full flex justify-center items-center itemcoloring'>
                                <div key={item.id} className='w-[335px]  text-[#E0FBFF]  p-1 pt-[10.5px] pb-[10.5px]'>
                                    <p className='text-[16px]'><span>{item.text}</span><span className='text-[#41DCD3] font-bold'>{item.med}</span><span>{item.text1}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}
