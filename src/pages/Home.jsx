import React from 'react'
import { Link } from 'react-router-dom'
import Allstaffs from '../components/Allstaffs'
import Department from '../components/Department'

function Home() {
  return (
    <>
      <div className='d-flex p-md-5 p-3' style={{ backgroundColor: '#A87C62' }} >
        <div className='container' >
          <div className='row'>
            <div className="col-md-12">
              <Allstaffs />
            </div>

            <div className="col-md-12">
              <Department />
            </div>       

          </div>

        </div>

      </div>
    </>
  )
}

export default Home


