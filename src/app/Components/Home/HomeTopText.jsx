import React from 'react'
import Video from './Video'

const HomeTopText = () => (
    <div className='w-screen flex flex-col justify-center font-[font1]'>
        <div className='text-[9.3vw] leading-[10vw] uppercase text-white text-center'>
            L'étincelle
        </div>
        <div className=' text-[9.3vw] leading-[5vw] uppercase text-white text-center'>
            qui
            <div style={{ userSelect: "none" }} className='inline-block h-[7.7vw] w-[16vw] text-center  rounded-[50px] overflow-hidden'><Video/></div>
            génère
        </div>
        <div className='text-[9.3vw] leading-[10vw] uppercase text-white text-center'>
            la <span className='inline-block  border-2 border-[#D3FD50] rounded-[50%]'>créativité</span>
        </div>
    </div>
)

export default HomeTopText
