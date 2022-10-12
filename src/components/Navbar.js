import React from 'react';
import { MdEmail } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-links'>
            <MdEmail className='email-icon' size={40} />
            <BsGithub className='github-icon' size={40} />
            <BsLinkedin className='linkedin-icon' size={40} />
        </div>
        <hr />
    </div>    
  )
}

export default Navbar