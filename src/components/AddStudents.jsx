import React, { useContext, useState } from 'react'
import { Button,Card,Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import { userContext } from '../App'
import './AddStudents.css'

function AddStudents() {
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({})
  let {StudentsData,setStudentsData} = useContext(userContext)


    const handleChange = (e)=>{
      let name = e.target.name
      let value = e.target.value
      setInputData({...inputData,[name]:value})
    }
    
    const handleSubmit = (e)=>{
      e.preventDefault()
      let newData = [...StudentsData,inputData]
      setStudentsData( newData)
      navigate('/')
    }
    console.log(StudentsData);
    
  return (
    <div>
      <Link to='/'><button><BiArrowBack className='arrowBack'/></button></Link>
    <Card style={{ width: '35rem' }}>

         <Form action='/' >
          <h2>Add Students</h2>
         <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" name='id' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleChange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name='age' onChange={handleChange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Class</Form.Label>
        <Form.Control type="number" name='class' onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number" name='contactNumber' onChange={handleChange}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Add
      </Button>
    </Form>
    </Card>
    </div>
  )
}

export default AddStudents