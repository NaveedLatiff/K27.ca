"use client"
import React from 'react'
import Icon from '../Components/Home/Icon'
import Cards from '../Components/Project/Cards'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const page = () => {
    let images = [
        { img1: "/p-1.jpg", img2: "/p-2.jpg" },
        { img1: "/p-3.jpg", img2: "/p-4.jpg" },
        { img1: "/p-5.jpg", img2: "/p-6.jpg" },
        { img1: "/p-7.jpg", img2: "/p-8.jpg" },
        { img1: "/p-9.jpg", img2: "/p-10.jpg" }
    ]

    return (
        <div>
            <Icon color={"black"} />
            <div className='flex gap-2 bg-red-900'>
                <p className='text-[13vw] pt-[40vh] font-[font2] uppercase'>Projets</p>
                <span className='text-[3vw] font-[font2] mt-[48vh] inline-block h-fit'>16</span>
            </div>
            <div className='boxes space-y-[50px] px-4 pt-10 bg-yellow-400'>
                {images.map(({img1, img2}, indx) => {
                    return <Cards key={indx} img1={img1} img2={img2} indx={indx}/>
                })}
            </div>
            <div className="h-[100vh]"></div>
        </div>
    )
}

export default page