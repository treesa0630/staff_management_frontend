import React from 'react';

function ResignedFaculties() {
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
            <div className="col-12 col-md-10">
              
              <div style={{ overflowX: 'auto' }}>
                <table className="table table-striped table-warning">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>PHOTO</th>
                      <th>NAME</th>
                      <th>POSITION</th>
                      <th>QUALIFICATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src="https://media.istockphoto.com/id/640078698/photo/intelligent-female-math-professor-in-classroom.jpg?s=612x612&w=0&k=20&c=8nbp8UUP9aowHOr-FrmdPkVrAtDU66Jx-TaZKgEf4Xo="
                          alt="Faculty Member"
                          style={{ height: '80px', width: '80px', objectFit: 'cover' }}
                        />
                      </td>
                      <td>ABC</td>
                      <td>Assistant Professor</td>
                      <td>MCA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResignedFaculties;
