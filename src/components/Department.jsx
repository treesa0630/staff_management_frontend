import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Profilecard from './Profilecard';
import { toast } from 'react-toastify';
import { addDepartmentApi, deleteDepartmentApi, getDepartmentApi, addprofileToDepartmentApi} from '../services/allApi';


function Department({profileStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    handleCancel()
  };
  const handleShow = () => setShow(true);
  const handleCancel = () => {
    setdepartmentName("")
  }


  const [departmentName, setdepartmentName] = useState("")
  console.log(departmentName);
  const [allDepartments, setAllDepartments] = useState([])
  const [departmentStatus, setDepartmentStatus] = useState({})
  const [deleteDepartmentStatus, setDeleteDepartmentStatus] = useState({})
  const [profileDepartmentStatus, setProfileDepartmentStatus]= useState({})


  const handleAdd = async () => {
    if (departmentName) {
      const reqBody = {
        department: departmentName,
        staffs: []
      }
      const result = await addDepartmentApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Department created successfully')
        handleClose()
        setDepartmentStatus(result.data)
      }
      else {
        toast.error('Something went wrong')
        handleClose()
      }
    }
    else {
      toast.info(`Please fill with a department name`)
    }
  }


  const getDepartment = async () => {
    const result = await getDepartmentApi()
    setAllDepartments(result.data)
  }
  console.log(allDepartments);


  const handleDelete = async (id) => {
    const result = await deleteDepartmentApi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setDeleteDepartmentStatus(result.data)
      toast.success('Department removed successfully')
    }
    else{
      toast.error('Something went wrong')
    }

  }

const ondrag =(e)=>{
  e.preventDefault()

}
 const ProfileDrop = async (e,departmentDetails)=>{
  console.log(departmentDetails);
  // console.log(e);
  
  const profileDetails =JSON.parse(e.dataTransfer.getData("profileDetails"))
  console.log(profileDetails);

  if(departmentDetails.staffs.find((item)=>item.id==profileDetails.id)){
    toast.error('Profile already present in department')
  }
  else{
    departmentDetails.staffs.push(profileDetails)
    console.log(departmentDetails);


  const result = await  addprofileToDepartmentApi(departmentDetails.id,departmentDetails)

  if(result.status >=200 && result.status<300){
    toast.success('Profile Added')
    setProfileDepartmentStatus(result.data)
  }
  else{
    toast.error('Something went wrong')
  }
  }

  

 }

 const profileDrag = (e,details,department)=>{
  console.log(details);
  console.log(department);
  
  const dataShare = {
    department,
    details
  }

  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
 }
  useEffect(() => {
    getDepartment()
  }, [departmentStatus, deleteDepartmentStatus,profileDepartmentStatus,profileStatus])


  return (

    <>
      <div style={{ paddingBottom: '2%' }}>
        <h4 style={{ color: "#6F402B", fontWeight: 'bold' }} className='d-flex align-items-center justify-content-center mt-5 '>DEPARTMENT WISE FACULTIES</h4>
        <button style={{ backgroundColor: '#6F402B', borderColor: '#6F402B', color: 'white' }} className="m-3 px-3 py-1 rounded shadow" onClick={handleShow}>ADD DEPARTMENT</button>


        <div className='alldepartments d-md-grid p-2 rounded'>


          {allDepartments?.length > 0 &&

            allDepartments.map((item) => (<div className='department border border-secondary mb-1 rounded p-2' droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>ProfileDrop(e,item)}>
              <div className='d-flex justify-content-between '>
                <h6 className='fs-5 mt-2'><b>{item?.department}</b></h6>
                <Button onClick={() => handleDelete(item?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff", }}  /></Button>
              </div>
             { item?.staffs?.length>0 &&
             item?.staffs?.map((details)=>(
              <div className='scrolling-wrapper mt-1' draggable onDragStart={(e)=>profileDrag(e,details,item)} >
              <Profilecard details={details} isPresent={true}/>
           
           </div>

             ))
            }
             
            </div>
            ))
          }


        </div>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='bg-secondary' closeButton>
            <Modal.Title className='fs-5'>Add Department</Modal.Title>
          </Modal.Header>
          <Modal.Body ><form className="p-3" action="">
            <div className='mb-3'>
              <input style={{ fontSize: '14px' }} type="text" placeholder='DEPARTMENT NAME' id="video" className='form-control' value={departmentName} onChange={(e) => setdepartmentName(e.target.value)} />
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
    </>



  )
}

export default Department

