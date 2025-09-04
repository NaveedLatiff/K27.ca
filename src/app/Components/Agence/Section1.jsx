"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Icon from '../Home/Icon'
import images from './images.js'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const Section1 = () => {
    let imageBox = useRef(null)
    let imageRef = useRef(null)
    let [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        images.forEach((src) => {
            const img = document.createElement('img')
            img.src = src
        })
    }, [])


    useEffect(() => {
        if (window.innerWidth <= 768) {
            const interval = setInterval(() => {
                setCurrentImage(prevIndex => {
                    const nextIndex = prevIndex + 1
                    return nextIndex >= images.length ? 0 : nextIndex
                })
            }, 2000)
            return () => clearInterval(interval)
        }
    }, [])

    useGSAP(() => {
        if (window.innerWidth > 768) {
            gsap.to(imageBox.current, {
                scrollTrigger: {
                    trigger: imageBox.current,
                    start: "top 25%",
                    end: "top -110%",
                    pin: true,
                    onUpdate: ({ progress }) => {
                        setCurrentImage(Math.floor(progress * (images.length - 1)))
                    }
                }
            })
        }
    })

    return (
        <div className='section-1 h-screen w-full relative flex justify-center items-center'>
            <Icon color={"black"} />
            <div
                ref={imageBox}
                className='
                    absolute  rounded-3xl overflow-hidden 
                    w-[150px] h-[190px]
                    sm:w-[170px] sm:h-[210px]
                    md:w-[190px] md:h-[230px]
                    top-[20%] left-1/2 -translate-x-1/2
                    md:top-[28%] md:left-[28%] md:translate-x-0 md:z-3
                '
            >
                <Image
                    ref={imageRef}
                    src={images[currentImage]}
                    alt="user"
                    fill
                    className='object-cover'
                    priority={true}
                    loading="eager"
                />
            </div>
            <div className='
                w-full font-[font1] uppercase absolute font-bold text-center z-20
                text-[16vw] top-[55%] leading-[14vw]
                sm:text-[15vw] sm:leading-[13vw]
                md:text-[19vw] md:top-[57%] md:leading-[16vw]
            '>
                Soixan7e
                <br />
                Douze
            </div>
        </div>
    )
}

export default Section1