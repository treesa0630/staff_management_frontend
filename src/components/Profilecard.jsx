import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { addResignedApi, deleteFacultyApi
 } from '../services/allApi';
import { toast } from 'react-toastify';


function Profilecard({ details ,setDeleteFacultyStatus,isPresent}) {
  const [modalShow, setModalShow] = useState(false);
  const profileDrag = (e,details)=>{
    console.log(details);
    e.dataTransfer.setData("profileDetails",JSON.stringify(details))
    

  }

  const handleDelete = async (id,photo,name,designation,department,experience,phone,mail) => {
    //console.log(id,photo,name,designation,department,experience,phone,mail)
    const result1 = await deleteFacultyApi(id)
    console.log(result1)
    if (result1.status >= 200 && result1.status < 300)
    {
      setDeleteFacultyStatus(result1.data)
      toast.info('Faculty moved to Resigned Faculties')
    }
    const date = new Date()
 let rdate=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit'}).format(date)
  const reqBody={
    photo:photo,
    name:name,
    designation:designation,
    department:department,
    experiance:experience,
    phone:phone,
    mail:mail,
    resDate:rdate
  }
 const result2=await addResignedApi(reqBody)
 console.log(result2.data);
}

  return (
    <>
      <div className="card me-3">
        <Card style={{ width: '100%', backgroundColor:'#EEEDEA'  }} draggable onDragStart={(e)=>profileDrag(e,details)} >
        { !isPresent && <Card.Img
            variant="top"
            src={details?.photo}
            onClick={() => setModalShow(true)}
            className='w-100'
            height={"200px"}
          />}
          <Card.Body className='d-flex justify-content-between'>
            <Card.Text style={{ fontSize: '16px' }}>{details?.name}</Card.Text>
          {!isPresent &&  <button className='btn border border-danger btn-danger' onClick={() => handleDelete(details?.id,details?.photo,details?.name,details?.designation,details?.department,details?.experience,details?.phone,details?.mail)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>}
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