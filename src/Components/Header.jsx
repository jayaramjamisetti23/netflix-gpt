import React from 'react'
import Config from '../Config.js/configImages'

const Header = () => {
  return (
    <div className='absolute z-20 w-full bg-gradient-to-b from-black px-4 py-3 sm:px-8'>
        <img src={Config.netflixLogo} alt="Netflix Logo" className="h-auto w-28 sm:w-40 md:w-48" />
    </div>
  )
}

export default Header
