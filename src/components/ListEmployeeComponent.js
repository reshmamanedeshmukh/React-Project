import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import Home from './Home';

const ListEmployeeComponent = () => {

 const [employees, setEmployees]=useState([])
 useEffect(()=>{
    getAllEmployees();
    }, [])

    const getAllEmployees=()=>{
      EmployeeService.getAllEmployees().then((response) =>
      {
         setEmployees(response.data)
         console.log(response.data)
         console.log(response?.data?.department)
      }).catch(error =>{ console.log(error);})
    }

   const deleteEmployee = (employeeId) => {
     EmployeeService.deleteEmployee(employeeId).then((response)=>{
       getAllEmployees();
     }).catch(error =>{
      console.log(error);
     })

     
   }
  return (
    <Home>
    <div>

    <h2 className ="text-center">List Employees</h2>
    <Link to="/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
    <table className="table table-bordered table-striped">
        <thead>
          <th> Employee Id</th>
          <th>Employee Name</th>
          <th>Employee Salary</th>
          <th>Employee Age</th>
          <th>Department</th>
          <th>Department Type</th>
          <th>Action</th>
        </thead>
        <tbody>
       {
         employees.map(
            employee =>
            <tr key={employee.id}>  
             <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.salary}</td>
            <td>{employee.age}</td>
            <td>{employee.department?.deptname}</td>
            <td>{employee.department?.depttype}</td>
            <td>
            <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
             <button className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)} style={{marginLeft:"10px"}}> Delete</button>
            </td>
            </tr>
         )  

       }

        </tbody>
    </table>
    </div>
    </Home>
  )
}

export default ListEmployeeComponent