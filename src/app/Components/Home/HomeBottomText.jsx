import Link from 'next/link'
import React from 'react'

const HomeBottomText = () => {
    return (
        <div className='h-full w-full flex justify-center font-[font2] text-white gap-3 items-center'>
            <div className='text-[6vw] border-4 border-white rounded-[55px] px-5 leading-none hover:cursor-pointer hover:text-[#D3FD50] hover:border-[#D3FD50] md:py-0 py-[10px]' >
                <Link href="/projects">PROJECTS</Link>
            </div>
            <div className='text-[6vw] border-4 border-white rounded-[55px] px-5 leading-none hover:cursor-pointer hover:text-[#D3FD50] hover:border-[#D3FD50] md:py-0 py-[10px]' >
                <Link href="/agence">AGENCE</Link>
            </div>
        </div>
    )
}

export default HomeBottomText
