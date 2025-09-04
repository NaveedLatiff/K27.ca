import React, { useState } from 'react'

const Cards = ({ img1, img2 }) => {
    const [img1Loaded, setImg1Loaded] = useState(false)
    const [img2Loaded, setImg2Loaded] = useState(false)
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setImg1Loaded(true)
            setImg2Loaded(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [img1, img2])
    return (
        <>
            <div className='relative w-1/2 group h-full rounded-none hover:rounded-[13px] md:hover:rounded-[60px] overflow-hidden transition-all'>
                {!img1Loaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse">
                        <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
                        <div className="absolute inset-0 flex flex-col space-y-3 p-4 animate-pulse">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        </div>
                    </div>
                )}

                <img
                    src={img1}
                    className={`h-full w-full object-cover transition-all duration-700 ${img1Loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    onLoad={() => setImg1Loaded(true)}
                    onError={() => setImg1Loaded(true)}
                />

                <div className='opacity-0 group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-black/30 flex items-center justify-center transition-opacity duration-300'>
                    <h2 className='uppercase text-[3vw] font-[font1] border-2 border-white pt-1 px-[0.8vw] text-white rounded-full'>
                        Voir le projet
                    </h2>
                </div>
            </div>

            <div className='relative w-1/2 group h-full rounded-none hover:rounded-[13px] md:hover:rounded-[60px] overflow-hidden transition-all'>
                {!img2Loaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse">
                        <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
                        <div className="absolute inset-0 flex flex-col space-y-3 p-4 animate-pulse">
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                )}

                <img
                    src={img2}
                    className={`h-full w-full object-cover transition-all duration-700 ${img2Loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    onLoad={() => setImg2Loaded(true)}
                    onError={() => setImg2Loaded(true)}
                />

                <div className='opacity-0 group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-black/30 flex items-center justify-center transition-opacity duration-300'>
                    <h2 className='uppercase text-[3vw] font-[font1] border-2 border-white pt-1 px-[0.8vw] text-white rounded-full'>
                        Voir le projet
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Cards