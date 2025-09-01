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

    useGSAP(()=>{
        gsap.from(".box",{
            height:100,
            
            stagger:{
                amount:1,
            },
            scrollTrigger:{
                trigger:".boxes-par",
                markers:true,
                start:"top 70%",
                end:"top -300%",
                scrub:true,
            }
        })
    })

    return (
        <div className='p-4'>
            <Icon color={"black"} />
            <div className='flex  pt-[45vh] '>
                <p className='text-[13vw]  font-[font2] uppercase'>Projets</p>
                <span className='text-[3vw] font-[font2] pt-[7vh] inline-block h-fit'>16</span>
            </div>
            <div className='boxes-par -mt-20'>
                {images.map((x,indx) => {
                    return <div key={indx} className='box w-full h-[400px] gap-2 mb-4 flex  '>
                        <Cards  img1={x.img1} img2={x.img2} />
                    </div>

                })}
            </div>
            <div className='h-screen'></div>
        </div>
    )
}

export default page