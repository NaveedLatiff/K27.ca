"use client"
import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Cards = ({img1, img2, indx}) => {
    const boxRef = useRef(null);
    
    useLayoutEffect(() => {
        const box = boxRef.current;
        
        if (box) {
            const startPoint = `bottom 90%`;
            const endPoint = `top 10%`;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box,
                    start: startPoint,
                    end: endPoint,
                    scrub: true,
                    markers: true
                }
            });
            
            tl.fromTo(box, 
                { height: "140px" },
                { height: "400px", ease: "none" }
            );
            
            return () => {
                tl.kill();
            };
        }
    }, [indx]);

    return (
        <div ref={boxRef} className='h-[140px] w-full flex gap-[13px] overflow-hidden mb-[20px]'>
            <div className='h-full w-1/2 bg-red-300'>
                <img src={img1} className='h-full w-full object-cover' alt="Project image 1" />
            </div>
            <div className='h-full w-1/2 bg-red-800'>
                <img src={img2} className='h-full w-full object-cover' alt="Project image 2" />
            </div>
        </div>
    )
}

export default Cards