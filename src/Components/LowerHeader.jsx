import React from 'react'
import arrow from '../assets/arrow.svg';
import setting from '../assets/search.svg'
import '../Components/Left.css'
export default function LowerHeader() {
    return (
        <>
            <div className='w-full h-[64px] flex justify-between mb-[12px]'>
                <div className=' flex items-center w-[366px] h-[60px] top-[26px] ml-[40px]'>
                    <div className='w-[60px] h-[60px] rounded-full custom-background flex justify-center items-center '>
                        <img src={arrow} alt='Arrow' />
                    </div>
                    <div className='ml-2 text-[20px]'>Explore by Persona</div>
                </div>
                <div class='w-[367px] h-[64px] rounded-3xl mr-[24px] bg-[#052D37]'>
                    <div class="w-full h-full flex items-center justify-start rounded-3xl ">
                        <form class='w-full bg-[#052D37] rounded-3xl'>
                            <div class="flex w-full h-full items-center rounded-3xl text-[16px] ml-5">
                                <img src={setting} alt='setting' class='h-[24px] w-[24px] m-2 rounded-3xl ml-5' /> 
                                <input name="q" class="text-sm flex-1 bg-transparent rounded-md transparent" placeholder='Search' autocomplete="off" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
