
import React, { useEffect } from 'react'
import Profilecard from './Profilecard';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addFacultyApi, getFacultyDetailsApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Allstaffs() {
  const [show, setShow] = useState(false);

  const [ facultyStatus , setFacultyStatus]= useState({})

  const handleClose = () => {
    setShow(false)
    handleCancel() //to clear the data enter in the input box while the modal is closed
  };
  const handleShow = () => setShow(true);


  // to read faculty details from input box

  const [facultyDetails, setFacultyDetails] = useState({
    photo: '',
    name: '',
    designation: '',
    department: '',
    experience: '',
    phone: '',
    mail: ''

  })
  console.log(facultyDetails);

  //function handleCancel
  const handleCancel = () => {
    setFacultyDetails({
      photo: '',
      name: '',
      designation: '',
      department: '',
      experience: '',
      phone: '',
      mail: ''
    })
  }

  // function to add the deatils 
  const handleAdd = async () => {
    const { photo, name, designation, department, experience, phone, mail } = facultyDetails
    if (!name || !photo || !designation || !department || !experience || !phone || !phone || !mail) {
      toast.info('please fill the form completely')
      // handleClose();
    }
    else {
      const result = await addFacultyApi(facultyDetails)

      if (result.status >= 200 && result.status < 300) {
        toast.success('successfully added');
        handleClose()
        setFacultyStatus(result.data)
        
      }
      else {
        toast.danger('Something Went wrong');
        handleClose()
      }
    }
  }

  const [allFaculty, setAllFaculty] = useState([])

  // is to fetch all faculty details 
  const getAllFacultyDetails = async () => {
    const result = await getFacultyDetailsApi()
    setAllFaculty(result.data)

  }

  console.log(allFaculty);


  useEffect(() => {
    getAllFacultyDetails()
  }, [facultyStatus])


  return (
    <>
      <div className='mb-5' style={{ height: '51vh' }}>
        <h4 style={{ color: "#6F402B", fontWeight: 'bold' }} className='text-center '>MEET OUR TEAM</h4>


        <div className='d-flex justify-content-between'>
          <button style={{ backgroundColor: '#6F402B', borderColor: '#6F402B', color: 'white' }} className="m-3 px-3 py-1 rounded shadow" onClick={handleShow}>ADD FACULTY</button>
        </div>


        {/* Add faculties */}

        {
          allFaculty.length > 0 &&
            <div >
              
                <div className="profilecards d-grid">
                {allFaculty.map((item) => (
                  <Profilecard details={item} />
                ))
              }
                </div>
              

            </div>
}


        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='bg-secondary' closeButton>
            <Modal.Title className='fs-5'>Add Faculty Details</Modal.Title>
          </Modal.Header>
          <Modal.Body ><form className="p-3" action="">
            <div className='mb-3'>
              <input type="text" style={{ fontSize: '14px' }} placeholder='PROFILE PHOTO' id="video" className='form-control' onChange={(e) => setFacultyDetails({ ...facultyDetails, photo: e.target.value })}
                value={facultyDetails.photo} />
            </div>
            <div className='mb-3'>
              <input type="text" style={{ fontSize: '14px' }} placeholder='FULL NAME' id="caption" className='form-control' onChange={(e) => setFacultyDetails({ ...facultyDetails, name: e.target.value })}
                value={facultyDetails.name} />
            </div>
            <div className='mb-3'>
              <input type="text" style={{ fontSize: '14px' }} placeholder='DESIGNATION' id="image" className='form-control' onChange={(e) => setFacultyDetails({ ...facultyDetails, designation: e.target.value })}
                value={facultyDetails.designation} />
            </div>
            <div className='mb-3'>
              <input type="text" style={{ fontSize: '14px' }} placeholder='DEPARTMENT' id="video" className='form-control' onChange={(e) => setFacultyDetails({ ...facultyDetails, department: e.target.value })} value={facultyDetails.department} />
            </div>
            <div className='mb-3'>
              <input type="number" style={{ fontSize: '14px' }} placeholder='EXPERIENCE' id="video" className='form-control' onChange={(e) => setFacultyDetails({ ...facultyDetails, experience: e.target.value })} value={facultyDetails.experience} />
            </div>
            <div className='mb-3'>
              <input type="number" style={{ fontSize: '14px' }} placeholder='PHONE NO:' id="video" className='form-control' onChange={(e) => setFacultyDetails({ ...facultyDetails, phone: e.target.value })} value={facultyDetails.phone} />
            </div>
            <div className='mb-3'>
              <input type="mail" style={{ fontSize: '14px' }} placeholder='EMAIL ID' id="video" className='form-control' onChange={(e) => setFacultyDetails({ ...facultyDetails, mail: e.target.value })} value={facultyDetails.mail} />
            </div>
          </form></Modal.Body>
          <Modal.Footer >
            <Button variant="dark" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
      <ToastContainer position='top-center' autoClose={2000} theme="colored" />
    </>
  )
}

export default Allstaffs
