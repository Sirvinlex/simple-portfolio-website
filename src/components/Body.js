import React from 'react'

const Body = () => {
  return (
    
     <div className='portfolio-body'>
         <p className='greeting'>Hello There</p>
         <p className='intro'>
            My name is Alexander Vincent. I am a front-end developer with strong foundation in core javascript,
            React and programming principles across multiple platforms. I have developed several front-end and 
            full-stack applications, maintaining best practices to improve overall user experience.
         </p>
         <hr />
         <h3 className='project-title'>Projects</h3>
         <div className='projects'>
            <p><a href='https://tik-video-app.netlify.app/' target='_blank' rel="noopener noreferrer">Tik-Vid video sharing app</a></p>
            <p><a href='https://job-checker.netlify.app/' target='_blank' rel="noopener noreferrer">Job Checker</a></p>
            <p><a href='https://tca-fitness-gym.netlify.app/' target='_blank' rel="noopener noreferrer">Fitness app</a></p>
            <p><a href='https://vinlex-admin-dashboard-template.netlify.app/' target='_blank' rel="noopener noreferrer">Admin dashboard template</a></p>
            <p><a href='https://vinlex-restaurant-landing-page.netlify.app/' target='_blank' rel="noopener noreferrer">Restaurant landing page</a></p>
         </div>
         <hr />
    </div>
  )
}

export default Body