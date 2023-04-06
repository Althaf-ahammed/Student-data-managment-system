import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import AddStudents from './components/AddStudents';
import StudentDelete from './components/StudentDelete';
import StudentEdit from './components/StudentEdit';
import StudentOverview from './components/StudentOverview';
import Students from './components/Students'
import TableDisplay from './components/TableDisplay';
import Home from './components/Home';
export const userContext = createContext()
function App() {
  const [StudentsData, setStudentsData] = useState(Students)
  return (
    <div>
      <userContext.Provider value={{StudentsData,setStudentsData}} >
        <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path='/' element={<TableDisplay/>}></Route>
          <Route path='/addStudents' element={<AddStudents/>}></Route>
          <Route path='/edit/:id' element={<StudentEdit/>}></Route>
          <Route path='/view/:id' element={<StudentOverview/>}></Route>
          <Route path='/delete/:id' element={<StudentDelete/>}></Route>
        </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
