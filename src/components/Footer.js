import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='footer-container'>
      <hr className='footer-hr'/>
      <div className='footer'> &copy; {year} VinlexCode</div>
    </div>
  )
}

export default Footer