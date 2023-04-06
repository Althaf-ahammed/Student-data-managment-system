import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../App'

function StudentDelete() {
  const navigate = useNavigate()
    const {StudentsData,setStudentsData} = useContext(userContext)
    const {id} = useParams()
    useEffect(() => {
        const newData = StudentsData.filter((el,index)=>index!==Number(id))
        console.log(newData);
        setStudentsData(newData)
        navigate('/')
    }, [id] )
}

export default StudentDelete