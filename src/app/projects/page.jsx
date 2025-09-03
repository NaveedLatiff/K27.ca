"use client"
import React from 'react'
import Icon from '../Components/Home/Icon'
import Cards from '../Components/Project/Cards'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Footer from '../Components/Project/Footer'

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

    useGSAP(() => {
        if (window.innerWidth > 950) {
            gsap.from(".box", {
                height: 100,

                stagger: {
                    amount: 1,
                },
                scrollTrigger: {
                    trigger: ".boxes-par",
                    start: "top 70%",
                    end: "top -300%",
                    scrub: true,
                }
            })
        }
        })

    return (
        <div >
            <Icon color={"black"} />
            <div className='flex  pt-[45vh] p-4'>
                <p className='text-[13vw]  font-[font2] uppercase'>Projets</p>
                <span className='text-[3vw] font-[font2] pt-[3vw] inline-block h-fit'>16</span>
            </div>
            <div className='boxes-par -mt-10 p-4'>
                {images.map((x, indx) => {
                    return <div key={indx} className='box w-full h-[38vw] md:h-[400px] gap-2 mb-4 flex  '>
                        <Cards img1={x.img1} img2={x.img2} />
                    </div>

                })}
            </div>
            <Footer />
        </div>
    )
}

export default page