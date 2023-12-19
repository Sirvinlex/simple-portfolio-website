import React from 'react'

const Body = () => {
  return (
    
     <div className='portfolio-body'>
         <div>
            <p className='greeting'>Hello There</p>
            <p className='intro'>
               My name is Alexander Vincent. I am a front-end developer with strong foundation in core javascript,
               React and programming principles across multiple platforms. I have developed several front-end and 
               full-stack applications, maintaining best practices to improve overall user experience.
            </p>
            <hr className='body-hr'/>
         </div>
         
         <div>
            <h3 className='project-title'>Projects</h3>
            <hr className='project-hr' />
            <div className='projects'>
               <p><a href='https://book-trading-club.netlify.app/' target='_blank' rel="noopener noreferrer">Book Trading App</a></p>
               <p><a href='https://vinlex-task-manager.netlify.app/' target='_blank' rel="noopener noreferrer">Task Manager</a></p>
               <p><a href='https://sirvinlex-recipe-box.netlify.app/' target='_blank' rel="noopener noreferrer">Recipe Box</a></p>
               <p><a href='https://tik-video-app.netlify.app/' target='_blank' rel="noopener noreferrer">Tik-Vid video sharing app</a></p>
               <p><a href='https://job-checker.netlify.app/' target='_blank' rel="noopener noreferrer">Job Checker</a></p>
               <p><a href='https://codepen.io/Sirvinlex/full/vYvVgwy' target='_blank' rel="noopener noreferrer">Wikipedia Viewer</a></p>
               <p><a href='https://roman-numeral-generator.netlify.app/' target='_blank' rel="noopener noreferrer">Roman Numeral Converter</a></p>
               <p><a href='https://tca-fitness-gym.netlify.app/' target='_blank' rel="noopener noreferrer">Fitness app</a></p>
               <p><a href='https://vinlex-admin-dashboard-template.netlify.app/' target='_blank' rel="noopener noreferrer">Admin dashboard template</a></p>
               <p><a href='https://vinlex-restaurant-landing-page.netlify.app/' target='_blank' rel="noopener noreferrer">Restaurant landing page</a></p>
            </div>
            
         </div>
    </div>
  )
}

export default Body