import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <>
      <div style={{ backgroundColor: '#6F402B', width: '100%' }}>
        <div className="container">
          <div className="row py-3">
            <div className="col-12 col-md-10 d-flex align-items-center">
              <img
                alt="university college logo"
                src="src/images/logo.png"
                width="100"
                height="100"
              />
              <h3 className="text-light ms-3 mt-3 mt-md-0">UNIVERSITY COLLEGE</h3>
            </div>
          </div>

          <div className="row py-3 justify-content-md-end">
            <div className="col-12 col-md-2 text-center">
              <h5 className="text-light">CONTACT US</h5>
              <div className="text-light d-flex justify-content-around mt-2">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  size={hoveredIcon === 'twitter' ? '2xl' : 'xl'}
                  onMouseEnter={() => setHoveredIcon('twitter')}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  size={hoveredIcon === 'instagram' ? '2xl' : 'xl'}
                  onMouseEnter={() => setHoveredIcon('instagram')}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  size={hoveredIcon === 'facebook' ? '2xl' : 'xl'}
                  onMouseEnter={() => setHoveredIcon('facebook')}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size={hoveredIcon === 'linkedin' ? '2xl' : 'xl'}
                  onMouseEnter={() => setHoveredIcon('linkedin')}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </div>
            </div>
          </div>

          <div className="row py-3">
            <div className="col-12 col-md-3 mt-sm-5 mt-md-0">
              <h5 className="text-light">NAVIGATION</h5>
              <Link to={'/home'} style={{ textDecoration: 'none' }}>
                <p className="text-light">Home</p>
              </Link>
            </div>
          </div>

          <div className="row py-3">
            <div className="col-12 text-center">
              <p style={{ color: 'white' }}>© Copyright 2024 University College. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
