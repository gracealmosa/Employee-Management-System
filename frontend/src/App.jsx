import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';
import Employee from './Employee';
import Profile from './Profile';
import Home from './Home';
import AddEmployee from './AddEmployee';
import Start from './Start';
import EmployeeDetail from './EmployeeDetails';
import EditEmployee from './EditEmployee';
import EmployeeLogin from './EmployeeLogin';
function App() {
  return ( 
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/create' element={<AddEmployee />}></Route>
        <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
        <Route path='/start' element={<Start />}></Route>
        <Route path='/employeeLogin' element={<EmployeeLogin />}></Route>
      <Route path='/employeedetail/:id' element={<EmployeeDetail />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
   )
}

export default App