import React, { useContext } from 'react'
import { userContext } from '../App'
import { Table } from 'react-bootstrap'
import { GrOverview } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import './TableDisplay.css'
import { Link } from 'react-router-dom';

function TableDisplay() {
    const { StudentsData } = useContext(userContext)
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Class</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        {StudentsData.map((data,index)=>{
            return(
                <tr>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.class}</td>
            <td>{data.contactNumber}</td>
            <td><Link to={`/view/${index}`}><button><GrOverview id='view'/></button></Link> <Link to={`/edit/${index}`}><button><CiEdit id='edit'/></button></Link> <Link to={`/delete/${index}`}><button ><MdDelete id='delete'/></button></Link></td>
          </tr>
            )
        })}
      </tbody>
    </Table>
    <Link to='/addStudents'><button id='addButton'>Add Students</button></Link>
    </div>
  )
}

export default TableDisplay