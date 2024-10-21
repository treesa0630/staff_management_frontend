import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar style={{ backgroundColor: '#6F402B' }}>
      <Container>
        <Navbar.Brand href="/" className='d-flex align-items-center'>
          <img
            alt=""
            src="src/images/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          <span className="text-light d-none d-md-inline" style={{ marginLeft: '10px' }}>
            UNIVERSITY COLLEGE » Dashboard
          </span>
          <span className="text-light d-inline d-md-none" style={{ marginLeft: '10px', fontSize: '14px' }}>
            UC Dashboard
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
