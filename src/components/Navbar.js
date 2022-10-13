import React,{useState} from 'react';
import { MdEmail, MdPermContactCalendar, MdCancel } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const Navbar = () => {
  const [contact, setContact] = useState(false);
  return (
    <div className='navbar'>
        <div className='logo'>VinlexCode</div>
        <div className='nav-links'>
            {/* <MdEmail className='email-icon' size={40} /> */}
            <MdPermContactCalendar  onClick={() => setContact((prevValue) => !prevValue)} className='contact-icon' size={40} />
            <a href='https://github.com/Sirvinlex' target='_blank' rel="noopener noreferrer"><BsGithub className='github-icon' size={40} /></a>
            <a href='https://www.linkedin.com/in/vincent-alexander-chinonso-a0605217b/' target='_blank' rel="noopener noreferrer">
              <BsLinkedin className='linkedin-icon' size={40} />
            </a>
        </div>
        {contact && <div className='contact-details'>
                      <button className='close-btn' onClick={() => setContact(false)} type='button' ><MdCancel size={20} /></button>
                    </div>}
        <hr />
    </div>    
  )
}

export default Navbar