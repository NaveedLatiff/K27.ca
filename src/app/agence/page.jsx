"use client"
import React, { useRef, useState } from 'react'
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
    useGSAP(() => {
        gsap.to(imageBox.current, {
            scrollTrigger: {
                trigger: imageBox.current,
                // markers: true,
                start: "top 25%",
                end: "top -120%",
                pin: true,
                onUpdate: ({ progress }) => {
                    setCurrentImage(Math.floor(progress * (images.length - 1)))
                }
            }
        })
    })

    useGSAP(()=>{
        gsap.from(".section-3",{
            opacity:0,
            y:60,
            scrollTrigger:{
                trigger:".section-3",
                start:"top 50%",
                markers:true,

            }
        })
    })

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
        color:"white",
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
        <div>
            <div className='section-1 h-[100vh] w-full  '>
                <Icon color={"black"} />
                <div ref={imageBox} className='h-[40%] w-[15%] rounded-4xl overflow-hidden  absolute top-[25%] left-[31%]'>
                    <Image ref={imageRef}
                        src={images[currentImage]}
                        alt="user"
                        fill
                        sizes="15vw"
                        className='object-cover'
                    />
                </div>
                <div className='w-full text-[19vw] font-[font1] uppercase absolute top-[57%] font-bold text-center leading-[16vw] '>
                    Soixan7e
                    <br />
                    Douze
                </div>
            </div>
            <div className='h-screen section-2 relative '>
                <div className='  text-[3vw] font-[font1] font-bold absolute top-[30%] leading-none w-1/2 right-[10vw]'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité.
                    On reste humbles et on dit non aux gros egos, même le vôtre.
                    Une marque est vivante. Elle a des valeurs, une personnalité, une histoire.
                    Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme.
                    C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
                </div>
            </div>
            <div className='section-3 h-screen w-full flex text-[1.4vw] font-[font1] font-bold px-[10%] gap-7'>
                <div className="part w-[30%]   flex flex-col justify-between py-[10%] " >
                    <p>Expertise</p>
                    <p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
                </div>
                <div className="part w-[30%]  flex flex-col justify-between py-[10%]">
                    <p>Stratégie
                        <br />
                        Publicité
                        <br />
                        Branding
                        <br />
                        Design
                        <br />
                        Contenu</p>
                    <p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
                </div>
                <div className="part w-[30%]  flex flex-col justify-end py-[12%]">
                    <p>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p>
                </div>
            </div>
            <div ref={section4Ref} className='relative section-4 h-screen w-full  flex justify-center text-[#D3FD50] text-[8vw] '>
                <div className='relative h-full w-[40%] rounded-4xl overflow-hidden '>
                    <Image

                        src={images[0]}
                        alt="user"
                        fill
                        className='object-cover relative z-33'
                    />
                </div>
                <p className='w-full absolute z-0 text1 left-[100%] top-[20%] '>CARL</p>
                <p className='w-full text2 absolute z-39 left-[-75%] top-[50%] flex gap-[30px]  items-center'> 
                    <p className=''>GODBOUT</p>
                    <p className='text-white uppercase text-[3vw]'>Directrice de création</p>
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default page
