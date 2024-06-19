import React, { useState } from 'react'
import LowerHeader from './LowerHeader';
import '../App.css'
import cloud from '../assets/cloud.svg';
import Left from './Left';
import Right from './Right'
export default function MainSection() {

    return (
        <>
            <div style={{ backgroundImage: `url(${cloud})` }} className="bg-cover h-[742px]  w-full relative flex flex-col text-white top-[24px]">
                <div>
                    <LowerHeader />
                </div>
                <div className='w-full flex '>
                    <div className='w-[415px]'><Left /></div>
                    <div className='w-[1985px]'><Right /></div>
                </div>
            </div>
        </>

    )
}
