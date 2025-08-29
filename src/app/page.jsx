import React from 'react'
import Video from './Components/Home/Video'
import HomeTopText from './Components/Home/HomeTopText'
import HomeBottomText from './Components/Home/HomeBottomText'
import Icon from './Components/Home/Icon'

const Home = () => {
  return (
    <div >

      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className=' absolute md:top-0 top-[38%] '>
        <HomeTopText />
      </div>
      <div className='absolute w-screen  md:bottom-0 h-[8vw] bottom-4'>
        <HomeBottomText />
      </div>
      <Icon color={"white"}/>
    </div>
  )
}

export default Home
