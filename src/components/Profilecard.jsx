import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';


function Profilecard({ details }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="card me-3">
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src={details?.photo}
            onClick={() => setModalShow(true)}
            className='w-100'
            height={"200px"}
          />
          <Card.Body className='d-flex justify-content-between'>
            <Card.Text style={{ fontSize: '16px' }}>{details?.name}</Card.Text>
            <button className='btn border border-danger btn-danger'>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </Card.Body>
        </Card>
      </div>

      {/* Pass `details` prop to the modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        details={details} // Pass details here
        animation={false}
      />
    </>
  );
}

function MyVerticallyCenteredModal({ show, onHide, details }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className='text-primary'>{details?.name}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table>
          <tbody>
            <tr>
              <th className='p-2'>DESIGNATION: </th>
              <td className='p-2'>{details?.designation}</td>
            </tr>
            <tr>
              <th className='p-2'>DEPARTMENT: </th>
              <td className='p-2'>{details?.department}</td>
            </tr>
            <tr>
              <th className='p-2'>EXPERIENCE: </th>
              <td className='p-2'>{details?.experience}</td>
            </tr>
            <tr>
              <th className='p-2'>CONTACT NO: </th>
              <td className='p-2'>{details?.phone}</td>
            </tr>
            <tr>
              <th className='p-2'>EMAIL ID: </th>
              <td className='p-2'>{details?.mail}</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
}

export default Profilecard