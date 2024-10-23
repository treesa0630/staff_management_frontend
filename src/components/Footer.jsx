import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
   <>
      <div style={{backgroundColor:'#6F402B',width:"100%"}}>
       <div className='row w-100'>
        <div className='col-md-1'></div>
        <div className='col-md-10 d-flex'>
          <img
                alt="university college logo"
                src="src/images/logo.png"
                width="100"
                height="100"
              />
           <h3 className='text-light mt-md-4'>UNIVERSITY COLLEGE</h3>
       </div>
       </div>
       <div className='row w-100'>
       <div className='col-md-2 ms-auto'>
          <h5 className='text-light text-center'>CONTACT US</h5>
         <div className='text-light d-flex justify-content-between mt-2'>
         <FontAwesomeIcon icon={faXTwitter} size={hoveredIcon === 'twitter' ? '2xl' : 'xl'} 
        onMouseEnter={() => setHoveredIcon('twitter')} 
        onMouseLeave={() => setHoveredIcon(null)} />
         <FontAwesomeIcon icon={faInstagram} size={hoveredIcon === 'instagram' ? '2xl' : 'xl'} 
        onMouseEnter={() => setHoveredIcon('instagram')} 
        onMouseLeave={() => setHoveredIcon(null)}  />
         <FontAwesomeIcon icon={faFacebook} size={hoveredIcon === 'facebook' ? '2xl' : 'xl'} 
        onMouseEnter={() => setHoveredIcon('facebook')}  onMouseLeave={() => setHoveredIcon(null)} />
         <FontAwesomeIcon icon={faLinkedin}  size={hoveredIcon === 'linkedin' ? '2xl' : 'xl'} 
        onMouseEnter={() => setHoveredIcon('linkedin')}  onMouseLeave={() => setHoveredIcon(null)} />
         </div>
       </div>
       <div className='col-md-1'></div>
       </div>
       <div className='row w-100'> 
        <div className='col-md-1'></div>  
        <div className='col-md-3 mt-sm-5 mt-md-1'>
          <h5 className='text-light'>NAVIGATION</h5>
       <Link to={'/home'} style={{textDecoration:'none'}}> <p className='text-light'>Home</p></Link>
       </div>
       <div>

       </div>
       </div>
       <div className='row w-100'>
        <p style={{color:'white',textAlign:'center'}}>© Copyright 2024 Universitycollege. All rights reserved.</p>
        </div>
      </div>
   </>
  )
}

export default Footer