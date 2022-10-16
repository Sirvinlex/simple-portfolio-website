import React,{useState} from 'react';
import { MdEmail, MdPermContactCalendar, MdCancel,MdFileCopy } from 'react-icons/md'
import { BsGithub,BsFillTelephoneFill,BsLinkedin,BsCheckLg } from 'react-icons/bs'


const Navbar = ({copiedEmail, setCopiedEmail,copiedPhone, setCopiedPhone}) => {
  const [contact, setContact] = useState(false);
  
   function handleEmailCopy (){
      const value = 'vinlex3030@gmail.com';
      navigator.clipboard.writeText(value);
      setTimeout(()=>{
        setCopiedEmail(true);
      }, 10)
      setTimeout(()=>{
        setCopiedEmail(false);
      }, 3000)
   }
   function handlePhoneCopy (){
      const value = '+2347067292648';
      navigator.clipboard.writeText(value);
       setTimeout(()=>{
        setCopiedPhone(true);
      }, 10)
      setTimeout(()=>{
        setCopiedPhone(false);
      }, 3000)
   }
  return (
    <div className='navbar'>
        
        <div className='logo-links-container'>
          <div className='logo'>VinlexCode</div>
          <div className='nav-links'>
              <a href='https://github.com/Sirvinlex' target='_blank' rel="noopener noreferrer"><BsGithub className='github-icon' size={40} /></a>
              <a href='https://www.linkedin.com/in/vincent-alexander-chinonso-a0605217b/' target='_blank' rel="noopener noreferrer">
                <BsLinkedin className='linkedin-icon' size={40} />
              </a>
              <MdPermContactCalendar  onClick={() => setContact((prevValue) => !prevValue)} className='contact-icon' size={40} />
          </div>
        </div>
        {contact && (
          <div className='contact-details'>
            <button className='close-btn' onClick={() => setContact(false)} type='button' ><MdCancel size={20} /></button>
            <div className='contact-details-container'>
              <p><MdEmail />{' '} vinlex3030@gmail.com 
                {!copiedEmail ? (<button className='copy-btn' type='button' onClick={handleEmailCopy} ><MdFileCopy /></button>)
                : (<button className='check-btn' type='button' ><BsCheckLg /></button>)}
              </p>
              <p><BsFillTelephoneFill  />{' '}  +2347067292648
                {!copiedPhone ? (<button className='copy-btn' type='button' onClick={handlePhoneCopy}><MdFileCopy /></button>)
                : (<button className='check-btn' type='button'><BsCheckLg /></button>)}
              </p>
            </div>
          </div>
        )}
        <hr />
    </div>    
  )
}

export default Navbar