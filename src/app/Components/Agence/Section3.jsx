"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const Section3 = () => {
    useGSAP(() => {
        if (window.innerWidth > 768) {
            gsap.from(".section-3", {
                opacity: 0,
                y: 60,
                scrollTrigger: {
                    trigger: ".section-3",
                    start: "top 70%",
                    markers: false,
                }
            })
        }
    })
    return (
        <div className='
                section-3 w-full font-[font1] font-bold
                mt-12 px-4
                sm:mt-16 sm:px-6
                md:mt-24 md:px-[10%]
            '>
            <div className='
                    flex flex-col gap-8
                    md:flex-row md:gap-7
                '>
                <div className="
                        flex flex-col gap-4
                        md:w-[30%] md:gap-7 md:justify-between md:py-[10%]
                    ">
                    <p className='
                            text-[6vw] 
                            sm:text-[4.5vw]
                            md:text-[2vw]
                        '>
                        Expertise
                    </p>
                    <p className='
                            text-[4vw] leading-relaxed
                            sm:text-[3.2vw]
                            md:text-[1.7vw]
                        '>
                        Nos projets_ naissent dans l'humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.
                    </p>
                </div>

                <div className="
                        flex flex-col gap-4
                        md:w-[30%] md:gap-7 md:justify-between md:py-[10%]
                    ">
                    <p className='
                            text-[4vw] leading-relaxed
                            sm:text-[3.2vw]
                            md:text-[1.7vw]
                        '>
                        Stratégie
                        <br />
                        Publicité
                        <br />
                        Branding
                        <br />
                        Design
                        <br />
                        Contenu
                    </p>
                    <p className='
                            text-[4vw] leading-relaxed
                            sm:text-[3.2vw]
                            md:text-[1.7vw]
                        '>
                        Notre création_ bouillonne dans un environnement où le talent a le goût d'exploser. Où on se sent libre d'être la meilleure version de soi-même.
                    </p>
                </div>

                <div className="
                        flex flex-col justify-start
                        md:w-[30%] md:justify-end md:py-[12%]
                    ">
                    <p className='
                            text-[4vw] leading-relaxed
                            sm:text-[3.2vw]
                            md:text-[1.7vw]
                        '>
                        Notre culture_ c'est l'ouverture aux autres. Point. Tout l'équipage participe à bâtir une agence dont on est fiers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section3
