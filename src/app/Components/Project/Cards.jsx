import React from 'react'

const Cards = ({ img1, img2 }) => {
    return (
        <>
            <div className='relative w-1/2 group h-full rounded-none hover:rounded-[13px] md:hover:rounded-[60px] overflow-hidden transition-all'>
                <img src={img1} className='h-full w-full object-cover' />
                <div className='opacity-0 group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-black/30 flex items-center justify-center '>
                    <h2 className='uppercase text-[3vw] font-[font1] border-2 border-white pt-1 px-[0.8vw] text-white rounded-full'>VoIr le projet</h2></div>
            </div>
            <div className='relative w-1/2 group h-full rounded-none hover:rounded-[13px] md:hover:rounded-[60px] overflow-hidden transition-all'>
                <img src={img2} className='h-full w-full object-cover' />
                <div className='opacity-0 group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-black/30 flex items-center justify-center '>
                    <h2 className='uppercase text-[3vw] font-[font1] border-2 border-white pt-1 px-[0.8vw] text-white rounded-full'>VoIr le projet</h2></div>
            </div>
        </>

    )
}

export default Cards
