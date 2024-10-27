import React from 'react';
import { Image, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Landing() {
  return (
    <div className="landing-page" style={{ backgroundColor: '#A87C62' }}>
      <Image src="https://media.studentcrowd.net/q90/content/university-images/queens-university-belfast-adobestock-525837958.jpeg" fluid alt="Landing Image" />
      
      <Container className="text-center mt-4" fluid>

        <Row className="mb-5">
          <Col md={{ span: 10, offset: 1 }}> 
            <h2 style={{ color: '#6F402B', fontFamily: "Prociono, serif" }}>Welcome to the Admin Dashboard</h2>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <h3 style={{ color: '#6F402B' }}>ABOUT THE COLLEGE</h3>
            <p style={{ color: '#E3D4C5' }}>
              Our college is dedicated to providing top-quality education, fostering innovation, and preparing students for future challenges. 
              With a strong faculty and modern infrastructure, we ensure a world-class learning experience. 
              Our mission is to empower students to excel in their academic pursuits and contribute positively to society.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={6} md={3} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#E3D4C5', border: 'none' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6fHV0AW7ZMMRLdLGjxt9dupmLhgCAfL4cyfG6MCiol5vVbIhxo6NpIjUcb0Wz6obdZs&usqp=CAU" style={{ height: '200px', objectFit: 'cover' }} />
            </Card>
          </Col>
          <Col xs={6} md={3} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#E3D4C5', border: 'none' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvhmIxmST3opIRydRjGLDdhU1XLdks6UP4g&s" style={{ height: '200px', objectFit: 'cover' }} />
            </Card>
          </Col>
          <Col xs={6} md={3} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#E3D4C5', border: 'none' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZSqD_gQE4-3BiLb-d265C9gXanq0SMbyHA&s" style={{ height: '200px', objectFit: 'cover' }} />
            </Card>
          </Col>
          <Col xs={6} md={3} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#E3D4C5', border: 'none' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2kD6mkuPnBQt7Y70UPYaxuFy3KJbv2IlBg&s" style={{ height: '200px', objectFit: 'cover' }} />
            </Card>
          </Col>
        </Row>

        {/* College Facilities Section */}
        <Row className="mb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <h3 style={{ color: '#6F402B' }}>COLLEGE FACILITIES</h3>
          </Col>
        </Row>


        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#E3D4C5', border: 'none', height: '300px' }}>
              <Card.Body>
                <img
                  src="https://www.kjei.edu.in/tcop/wp-content/uploads/2023/12/Library.jpg"
                  alt="Library"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <Card.Title style={{ color: '#6F402B', marginTop: '10px' }}>Library</Card.Title>
                <Card.Text style={{ color: '#6F402B' }}>
                  Our library offers a vast collection of books, journals, and online resources to support student learning and research.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#E3D4C5', border: 'none', height: '300px' }}>
              <Card.Body>
                <img
                  src="https://www.jks.edu.sa/wp-content/uploads/2023/10/Lab_3-scaled.jpg"
                  alt="Laboratories"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <Card.Title style={{ color: '#6F402B', marginTop: '10px' }}>Laboratories</Card.Title>
                <Card.Text style={{ color: '#6F402B' }}>
                  Fully equipped laboratories for various disciplines, allowing hands-on learning and practical experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#E3D4C5', border: 'none', height: '300px' }}>
              <Card.Body>
                <img
                  src="https://sportsplanningguide.com/wp-content/uploads/2016/05/Woodside_WisconsinDellsCenter-1.jpg"
                  alt="Sports Facilities"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <Card.Title style={{ color: '#6F402B', marginTop: '10px' }}>Sports Facilities</Card.Title>
                <Card.Text style={{ color: '#6F402B' }}>
                  A range of sports facilities, including basketball courts, football fields, and a gymnasium for fitness and recreation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#E3D4C5', border: 'none', height: '300px' }}>
              <Card.Body>
                <img
                  src="https://www.christianschoolproducts.com/wp-content/uploads/sites/2/2021/01/school-cafeteria-1500x600.jpg"
                  alt="Cafeteria"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <Card.Title style={{ color: '#6F402B', marginTop: '10px' }}>Cafeteria</Card.Title>
                <Card.Text style={{ color: '#6F402B' }}>
                  Enjoy a variety of meals and snacks in our cafeteria, catering to diverse tastes and dietary needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#E3D4C5', border: 'none', height: '300px' }}>
              <Card.Body>
                <img
                  src="https://www.rajagiritech.ac.in/home/Amenities/images/AJ_03812.jpg"
                  alt="Auditorium"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <Card.Title style={{ color: '#6F402B', marginTop: '10px' }}>Auditorium</Card.Title>
                <Card.Text style={{ color: '#6F402B' }}>
                  Our auditorium is a state-of-the-art facility for lectures, presentations, and cultural events.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className='shadow' style={{ backgroundColor: '#6F402B', border: 'none', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card.Body>
                <h1 style={{ color: '#E3D4C5', fontSize: '100px', margin: 0 }}>+</h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center pb-5">
          <h3 style={{ color: '#6F402B' }}>STAFF MANAGEMENT</h3>
          <Col md={8} className="mb-5">
            <img 
              src="https://img.freepik.com/free-photo/portrait-female-teacher-school-classroom_23-2150911641.jpg"
              width={'350'} height={'300px'} className='w-sm-25 shadow'
              alt="Staff Management Illustration"
            />
          </Col>
          <Col md={4}>
           <Link to={'/home'}><Button
              style={{ backgroundColor: '#6F402B', borderColor: '#6F402B' }}
              className="m-3 shadow"
            >
              Go to Staff Management
            </Button></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
