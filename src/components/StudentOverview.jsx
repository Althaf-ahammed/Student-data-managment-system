import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import { userContext } from '../App'

function StudentOverview() {
    const {StudentsData} = useContext(userContext)
    let { id } = useParams()
    const data = StudentsData.filter((el,index)=>index===Number(id))
  return (
    <div>
        <Link to='/'><button><BiArrowBack className='arrowBack'/></button></Link>
        {data.map((el)=>{
            return(
                <div className='card'>
                <p>Name : {el.name}</p>
                <p>Age : {el.age}</p>
                <p>class : {el.class}</p>
                <p>Contact Number : {el.contactNumber}</p>
                </div>
            )
        })}
    </div>
    )}
export default StudentOverview