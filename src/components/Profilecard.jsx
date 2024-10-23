import React from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

function Profilecard() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="card me-3" >
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/id/640078698/photo/intelligent-female-math-professor-in-classroom.jpg?s=612x612&w=0&k=20&c=8nbp8UUP9aowHOr-FrmdPkVrAtDU66Jx-TaZKgEf4Xo=" onClick={() => setModalShow(true)} className='w-100' height={"200px"} />
                    <Card.Body className='d-flex justify-content-between'>
                        <Card.Text style={{fontSize:'16px'}}>Annie Mary Wilson</Card.Text>
                    </Card.Body>
                </Card>
            </div>




            <MyVerticallyCenteredModal
        show={modalShow} animation={false}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
        <span className='text-primary '>  Annie Mary Wilson </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className=' '>
            <thead>
            <tbody>
            <tr >
                <th className='p-2'>DESIGNATION: </th>
                <td className='p-2'>Ass. Professor</td>
            </tr>
            <tr>
                <th className='p-2'>DEPARTMENT: </th>
                <td className='p-2'>Computer Science</td>
            </tr>
            <tr>
                <th className='p-2'>EXPERIENCE: </th>
                <td className='p-2'>5 years</td>
            </tr>
            <tr>
                <th className='p-2'>CONTACT NO: </th>
                <td className='p-2'>9876543212</td>
            </tr>
            <tr>
                <th className='p-2'>EMAIL  ID: </th>
                <td className='p-2'>faculty@gmail.com</td>
            </tr>
          </tbody>
            </thead>
          </table>
        </Modal.Body>
      </Modal>
    );
  }
  

export default Profilecard