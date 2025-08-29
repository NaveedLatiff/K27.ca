import React from 'react'
const Video = () => {
  return (
    <div className='h-full w-full '>
      <video src="/mainVideo.mp4" autoPlay muted loop  className='h-full w-full object-cover'>
      </video>
    </div>
  )
}

export default Video
