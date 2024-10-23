import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Profilecard from './Profilecard';


function Department() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
      <div style={{ paddingBottom:'2%' }}>
        <h4 style={{ color: "#6F402B",fontWeight:'bold' }} className='d-flex align-items-center justify-content-center mt-5 pt-5'>DEPARTMENT WISE FACULTIES</h4>
        <button style={{ backgroundColor: '#6F402B', borderColor: '#6F402B', color: 'white' }} className="m-3 px-3 py-1 rounded" onClick={handleShow}>ADD DEPARTMENT</button>


        <div className='alldepartments  p-2 rounded'>
          
          <div className='department'>
          <div className='d-flex justify-content-between '>
              <h6 className='fs-5 mt-2'><b>Computer Science Department</b></h6>
              <Button variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff", }} /></Button>
            </div>

            <div className='scrolling-wrapper mt-1' >
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
            </div>
          </div>

          <div className='department'>
            <div className='d-flex justify-content-between '>
              <h6 className='fs-5 mt-2'><b>Commerce Department</b></h6>
              <Button variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff", }} /></Button>
            </div>

            <div className='scrolling-wrapper mt-1' >
              <Profilecard />
              <Profilecard />
              <Profilecard />
              
              
            </div>
          </div>

          <div className='department'>
            <div className='d-flex justify-content-between '>
              <h6 className='fs-5 mt-2'><b>Mathematics Department</b></h6>
              <Button variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff", }} /></Button>
            </div>

            <div className='scrolling-wrapper mt-1' >
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              
            </div>
          </div>


        </div>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='bg-secondary' closeButton>
            <Modal.Title className='fs-5'>Add Department</Modal.Title>
          </Modal.Header>
          <Modal.Body ><form className="p-3" action="">
            <div className='mb-3'>
              <input style={{ fontSize: '14px' }} type="text" placeholder='DEPARTMENT NAME' id="video" className='form-control' />
            </div>
          </form></Modal.Body>
          <Modal.Footer >
            <Button variant="dark" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>



  )
}

export default Department

