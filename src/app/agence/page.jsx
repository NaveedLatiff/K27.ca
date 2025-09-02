"use client"
import React, { useEffect, useRef, useState } from 'react'
import Icon from '../Components/Home/Icon'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from 'next/image'
import Footer from '../Components/Project/Footer'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const page = () => {
    let imageBox = useRef(null)
    let imageRef = useRef(null)
    const section4Ref = useRef(null);
    let [currentImage, setCurrentImage] = useState(0)
    let images = [
        "/img-1.jpg",
        "/img-2.jpg",
        "/img-3.jpg",
        "/img-4.jpg",
        "/img-5.jpg",
        "/img-6.jpg",
        "/img-7.jpg",
        "/img-8.jpg",
        "/img-9.jpg",
        "/img-10.jpg",
        "/img-11.jpg",
        "/img-12.jpg",
        "/img-13.jpg",
        "/img-14.jpg"
    ]

    // Fixed consistent breakpoint for GSAP scroll pinning
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

    // Fixed section-3 animation with consistent breakpoint
    useGSAP(() => {
        if (window.innerWidth > 768) {
            gsap.from(".section-3", {
                opacity: 0,
                y: 60,
                scrollTrigger: {
                    trigger: ".section-3",
                    start: "top 70%",
                    markers: false, // Removed debug markers
                }
            })
        }
    })

    // Section-4 animations
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

    // Fixed consistent breakpoint for image cycling
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

    return (
        <div>
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
            <div className='
                section-2 flex justify-center items-center
                h-auto py-12 px-4
                sm:py-16 sm:px-6
                md:h-screen md:py-0 md:px-0 md:relative md:z-20
            '>
                <div className='
                    font-[font1] font-bold leading-relaxed
                    text-[4.5vw] w-full text-center
                    sm:text-[3.8vw] sm:w-4/5
                    md:text-[2.5vw] md:w-1/2 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[10vw] md:text-left md:leading-none
                '>
                    <span className='hidden md:inline'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    Notre curiosité nourrit notre créativité.
                    On reste humbles et on dit non aux gros egos, même le vôtre.
                    Une marque est vivante. Elle a des valeurs, une personnalité, une histoire.
                    Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme.
                    C'est pour ça qu'on s'engage à donner de la perspective, pour bâtir des marques influentes.
                </div>
            </div>
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

            <Footer />
        </div>
    )
}

export default page