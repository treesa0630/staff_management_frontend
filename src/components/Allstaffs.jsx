import React from 'react'
import Card from 'react-bootstrap/Card';

function Allstaffs() {
  
  return (
    <div>
      <h4 style={{ color: "#6F402B", }} className='d-flex align-items-center justify-content-center '>MEET OUR TEAM</h4>
      <button style={{ backgroundColor: '#6F402B', borderColor: '#6F402B', color: 'white' }} className="m-3 rounded">ADD FACULTY</button>

      {/* Add faculties */}



      <div className="container">
        <div className='row'>
          <div className="col-md-3 p-2">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/640078698/photo/intelligent-female-math-professor-in-classroom.jpg?s=612x612&w=0&k=20&c=8nbp8UUP9aowHOr-FrmdPkVrAtDU66Jx-TaZKgEf4Xo=" className='w-100' height={"200px"} />
              <Card.Body className='d-flex justify-content-between'>
                <Card.Text className='fs-4'>Name:</Card.Text>


                {/* <Button variant="primary"></Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3  p-2">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://images.academics.com/professorentitel.jpg?auto=format&fit=crop&h=768&w=1365&crop=focalpoint&fp-x=0.55&fp-y=0.32" className='w-100' height={"200px"} />
              <Card.Body className='d-flex justify-content-between'>
                <Card.Text className='fs-4'>Name:</Card.Text>

                {/* <Button variant="primary"></Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3  p-2">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/1089059426/photo/teacher-posing-on-blackboard.jpg?s=612x612&w=0&k=20&c=s6EMLpSPYOwJ9Euzis2heE9tapB7cWmFXZEuMVG7R88=" className='w-100' height={"200px"} />
              <Card.Body className='d-flex justify-content-between'>
                <Card.Text className='fs-4'>Name:</Card.Text>

                {/* <Button variant="primary"></Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3  p-2">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/teachers-day-handsome-man-teacher-teaching_548646-71144.jpg" className='w-100' height={"200px"} />
              <Card.Body className='d-flex justify-content-between'>
                <Card.Text className='fs-4'>Name:</Card.Text>

                {/* <Button variant="primary"></Button> */}
              </Card.Body>
            </Card>
          </div>
          {/* f5 */}
          <div className="col-md-3  p-2">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/1330641849/photo/female-math-teacher-in-school.jpg?s=612x612&w=0&k=20&c=qqqo-pRJBrE5ItkCljXOVfRSSpLnMa0hVrbhy-ZoydU=" className='w-100' height={"200px"} />
              <Card.Body className='d-flex justify-content-between'>
                <Card.Text className='fs-4'>Name:</Card.Text>

                {/* <Button variant="primary"></Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3  p-2">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/professor-lecturing-room_951586-130591.jpg" className='w-100' height={"200px"} />
              <Card.Body className='d-flex justify-content-between'>
                <Card.Text className='fs-4'>Name:</Card.Text>

                {/* <Button variant="primary"></Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3  p-2">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/professor-lecturing-room_951586-130336.jpg" className='w-100' height={"200px"} />
              <Card.Body className='d-flex justify-content-between'>
                <Card.Text className='fs-4'>Name:</Card.Text>

                {/* <Button variant="primary"></Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3  p-2">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/037/211/111/small_2x/ai-generated-portrait-of-pretty-female-professor-with-glasses-in-the-classroom-people-background-photo.jpg" className='w-100' height={"200px"} />
              <Card.Body className='d-flex justify-content-between'>
                <Card.Text className='fs-4'>Name:</Card.Text>

                {/* <Button variant="primary"></Button> */}
              </Card.Body>
            </Card>
          </div>




        </div>
      </div>



      {/* no faculties added */}

      {/* <div className='container'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20220812/pngtree-question-flat-brown-color-rounded-raster-icon-know-answer-helpdesk-photo-image_19485160.jpg" className='w-50' alt="" />

            <h5 className='text-center'>No Faculties Added</h5>
          </div>
          <div className="col-md-4"></div>
        </div>

      </div> */}
    </div>
  )
}

export default Allstaffs
