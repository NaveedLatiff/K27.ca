import React from 'react'

const Footer = () => {
  return (
    <div className=' h-[51vh] w-full bg-[#000000] mt-5 py-3.5 px-5 flex flex-col justify-between'>
       <div className='top flex justify-between text-[3.8vw] sm:text-[4.5vw] '>
        <div className='flex gap-3 '>
      <p className='border-2 border-white text-white font-[font1]  rounded-[50px] px-[2vw] pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>FB</p>
      <p className='border-2 border-white text-white font-[font1]  rounded-[50px] px-[2vw] pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>IG</p>
      <p className='border-2 border-white text-white font-[font1]  rounded-[50px] px-[2vw] pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>IN</p>
      <p className='border-2 border-white text-white font-[font1]  rounded-[50px] px-[2vw] pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>BE</p>
      </div>
      <div>
      <p className='border-2 border-white text-white font-[font1]  rounded-[50px] px-[2vw] pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>CONTACT</p>
      </div>
      </div>
      <div className='flex justify-between text-[1.2vw] sm:text-[1.2vw]'>
            <p className='text-white uppercase font-[font1]'>Politique de confidentialité</p>
            <p className='text-white uppercase font-[font1]'>Avis de confidentialité</p>
            <p className='text-white uppercase font-[font1]'>Rapport éthique</p>
            <p className='text-white uppercase font-[font1]'>options de consentment</p>
            <p className='text-white uppercase font-[font1]'>retour anhaut</p>

      </div>
    </div>
  )
}

export default Footer
