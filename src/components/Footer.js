import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='footer'> &copy; {year} VinlexCode
</div>
  )
}

export default Footer