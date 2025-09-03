"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import images from './images.js'
import Image from 'next/image.js'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const Section4 = () => {
    const section4Ref = useRef(null);
    useGSAP(() => {
        let tween1 = gsap.to(".text1", {
            x: "-120%",
            duration: 15,
            repeat: -1,
            ease: "none",
            paused: true,
        });

        let tween2 = gsap.to(".text2", {
            x: "196%",
            duration: 15,
            repeat: -1,
            ease: "none",
            paused: true,
        });

        gsap.to("body", {
            backgroundColor: "black",
            color: "white",
            duration: 0.5,
            scrollTrigger: {
                trigger: section4Ref.current,
                start: "top 80%",
                end: "top -100%",
                toggleActions: "play reverse play reverse",
                onEnter: () => {
                    tween1.play();
                    tween2.play()
                },
                onLeave: () => {
                    tween1.pause()
                    tween2.pause()
                },
                onEnterBack: () => {
                    tween1.play()
                    tween2.play()
                },
                onLeaveBack: () => {
                    tween1.pause()
                    tween2.pause()
                }
            },
        })
    })
    return (
        <div
            ref={section4Ref}
            className='
                    relative section-4 w-full flex justify-center text-[#D3FD50] overflow-hidden
                    h-[60vh] mt-16
                    sm:h-[70vh] sm:mt-20
                    md:h-screen md:mt-24
                '
        >
            <div className='
                    relative rounded-3xl overflow-hidden
                    w-[70%] h-full
                    sm:w-[60%]
                    md:w-[55%]
                '>
                <Image
                    src={images[0]}
                    alt="user"
                    fill
                    className='object-cover relative z-30'
                />
            </div>

            <p className='
                    w-full absolute z-10 text1 left-[100%]
                    text-[12vw] top-[15%]
                    sm:text-[10vw] sm:top-[18%]
                    md:text-[8vw] md:top-[20%]
                '>
                CARL
            </p>

            <div className='
                    w-full text2 absolute z-40 left-[-75%] flex items-center
                    gap-4 top-[45%]
                    sm:gap-6 sm:top-[48%]
                    md:gap-8 md:top-[50%]
                '>
                <p className='
                        text-[12vw]
                        sm:text-[10vw]
                        md:text-[8vw]
                    '>
                    GODBOUT
                </p>
                <p className='
                        text-white uppercase
                        text-[3.5vw]
                        sm:text-[3vw]
                        md:text-[3vw]
                    '>
                    Directrice de création
                </p>
            </div>
        </div>
    )
}

export default Section4
