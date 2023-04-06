
import React, { useContext, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import { userContext } from '../App'

function StudentEdit() {
  const navigate = useNavigate()
    const {id} = useParams()
    let {StudentsData,setStudentsData} = useContext(userContext)
    // const data = StudentsData.filter((el,index)=>index===Number(id))
    const student =  StudentsData[id]
    const Students = StudentsData
    const [inputData, setInputData] = useState(student)
    const handleChange = (e)=>{
      let name = e.target.name
      let value =  e.target.value
      setInputData({...inputData,[name]:value})
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      // let i = StudentsData.slice(0,id)
      // let j = StudentsData.slice(-((StudentsData.length-1)-id))
      // let newData = [...i,inputData,...j]
      // setStudentsData(newData)
      Students[id] = inputData
      setStudentsData(Students)
      navigate('/')
    }

  return (
    <div>
      <Link to='/'><button><BiArrowBack className='arrowBack'/></button></Link>
        <Card style={{ width: '35rem' }}>
          
            <Form>
              <h2>Edit Students Data</h2>
              <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" name='id' defaultValue={student.id} onChange={handleChange} />
      </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
     <Form.Label>Name</Form.Label>
     <Form.Control type="text" name='name' defaultValue={student.name}  onChange={handleChange} />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicAge">
     <Form.Label>Age</Form.Label>
     <Form.Control type="Number" name='age' defaultValue={student.age} onChange={handleChange}  />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Class</Form.Label>
     <Form.Control type="Number" name='class' defaultValue={student.class} onChange={handleChange}  />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Contact Number</Form.Label>
     <Form.Control type="Number" name='contactNumber' defaultValue={student.contactNumber} onChange={handleChange}  />
   </Form.Group>

   <Button  variant="primary" type="submit" onClick={handleSubmit}>
     Edit
   </Button>
   </Form>
 
 </Card>
    </div>
  )
}

export default StudentEdit