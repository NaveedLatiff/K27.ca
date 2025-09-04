'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const Loader = ({ children }) => {
  let loaderParentRef = useRef(null)
  let pageRef = useRef(null)
  let pathname = usePathname()
   let [isLoading, setIsLoading] = useState(true)
  let [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setShowContent(false)
  }, [pathname])
  
  useGSAP(() => {
     if (!isLoading) return
     window.scrollTo(0, 0)
     let tl = gsap.timeline({
       onComplete: () => {
         setIsLoading(false)
         setShowContent(true)
        }
      })
    tl.to(loaderParentRef.current, {
      display: "block",
    })
    tl.to(".stair", {
      y: 0
    })
    tl.from('.stair', {
      height: "0%",
      duration: 0.4,
      stagger: {
        amount: -0.3,
      },
      ease: "power2.out"
    })
    tl.to('.stair', {
      y: "100%",
      duration: 0.4,
      stagger: {
        amount: -0.3,
      },
      ease: "power2.in"
    })
    tl.to(loaderParentRef.current, {
      display: "none",
      y: 0
    })
    tl.from(pageRef.current, {
      opacity: 0,
    })

  }, [pathname,isLoading])

  return (
    <div>
      <div
        ref={loaderParentRef}
        className='fixed top-0 left-0 h-screen w-full overflow-hidden '
      >
        <div className='h-full w-full flex'>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div 
      ref={pageRef}
      style={{ opacity: showContent ? 1 : 0 }}
      >
        {children}
      </div>
    </div>

  )
}

export default Loader