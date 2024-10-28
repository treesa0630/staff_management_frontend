import React, { useEffect, useState } from 'react';
import { getResignedApi } from '../services/allApi';
import { Link } from 'react-router-dom';

function ResignedFaculties() {

  const[allResignedFaculties,setAllResignedFaculties]=useState([])

 const  getResignedFaculty=async()=>{

  const result=await getResignedApi()
  setAllResignedFaculties(result.data);

  }

console.log(allResignedFaculties);
  useEffect(()=>{getResignedFaculty()},[])
  return (
    <>

      <div style={{ backgroundColor: 'rgb(168,124,98)', minHeight: '55vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center mt-5" style={{ color: "#6F402B", fontWeight: 'bold' }}>Resigned Faculty Details</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className='col-md-1'></div>
            <div className="col-12 col-md-10">
              
             { allResignedFaculties?.length>0 ? <div style={{ overflowX: 'auto' }}>
                <table className="table table-striped table-warning">
                  <thead>
                    <tr>
                      <th>SI.NO</th>
                      <th>PHOTO</th>
                      <th>NAME</th>
                      <th>DESIGNATION</th>
                      <th>DEPARTMENT</th>
                      <th>EXPERIENCE</th>
                      <th>CONTACT NO</th>
                      <th>MAIL</th>
                    </tr>
                  </thead>
                  <tbody>
                   {allResignedFaculties?.map((item,index)=>(<tr>
                      <td>{index+1}</td>
                      <td>
                        <img
                          src= {item?.photo}
                          alt="Faculty Member"
                          style={{ height: '80px', width: '80px', objectFit: 'cover' }}
                        />
                      </td>
                      <td>{item?.name}</td>
                      <td>{item?.designation}</td>
                      <td>{item?.department}</td>
                      <td>{item?.experiance}</td>
                      <td>{item?.phone}</td>
                      <td>{item?.mail}</td>
                    </tr>)) }
                  </tbody>
                </table>
                </div>
                :
                <h4 className='text-center text-light'>NO RESIGNED FACULTIES</h4>}
             

            </div>
            <div className='col-md-1'></div>
          </div>
          <div className='d-flex align-items-center justify-content-center'><Link to={'/home'} style={{textDecoration:'none'}}> <button  style={{ backgroundColor: '#8b563d', borderColor: '#8b563d', color: 'white' }} className="m-3 px-5 py-2 rounded shadow">Back</button></Link></div>
        </div>
      </div>
    </>
  );
}

export default ResignedFaculties;
