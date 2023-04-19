import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'
import axios from 'axios'
import Home from './Home';
import "../wrapper.css";

const AddEmployeeComponent = () => {
 
  
  const[name,setName]=useState('')
  const[salary,setSalary]=useState('')
  const[age,setAge]=useState('')
 const[department,setDepartment]=useState({
    id:" ",
  deptname:" ",
  depttype:" "});
  const navigate = useNavigate();
  const {id}=useParams();


const onChangeDepartment=(x)=>{
  setDepartment({...department,[x.target.name]:x.target.value});
}


  const saveOrUpdateemployee =(e)=>
  {
    e.preventDefault();

    const employee={id,name,salary,age,department}
    if(!id)
     {
      EmployeeService.saveEmployee(employee).then((response)=>{
        navigate("/employees", {replace: true});
}).catch(error =>{
  console.log(error)
})
    }
    else{
      EmployeeService.updateEmployee(id,employee).then((response)=>{
      navigate("/employees", {replace: true});
     }).catch(error =>{
      console.log(error);
     })
  }
  }

    useEffect(()=>{
        EmployeeService.getEmployeeId(id).then((response)=>{
           // setId(response.data.id)
            setName(response.data.name)
            setSalary(response.data.salary)
            setAge(response.data.age)
           setDepartment(response.data.department)
       //setDepartment(response.data.department)

        }).catch((error)=>{
          console.log(error);
        })
    },[])

   const title=()=>{

      if(id)
      {
        return<h3 className='text-center'>update Employee</h3>
      }else{
        return<h3 className='text-center'>Add Employee</h3>
      }
    }
    return (
      <Home>
     <div class="wrapper"> 
     <div className='container' >
  
        <div className='row'>
          <div className='card col-sm-15'>
        {
          title()
        }
         <div className='card-body'>
          <form>
                     <div className='form-group mb-2'>
          <label className='form-label'>Employee name:</label>
          <input type="text"
          placeholder='Enter Employee name'
          name='name'
          className='form-control'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          >
             </input>
           </div>
           <div className='form-group mb-2'>
          <label className='form-label'>Employee Salary:</label>
          <input type="text"
          placeholder='Enter Employee salary'
          name='salary'
          className='form-control'
          value={salary}
          onChange={(e)=>setSalary(e.target.value)}
          >
             </input>
           </div>
           <div className='form-group mb-2'>
          <label className='form-label'>Employee Age:</label>
          <input type="text"
          placeholder='Enter Employee Total experience'
          name='age'
          className='form-control'
          value={age}
          onChange={(e)=>setAge(e.target.value)}
          >
             </input>
             
           </div>
          <div className='form-group mb-2'>
          <label className='form-label'>Employee Department:</label>
          <input type="text"
          placeholder='Enter employee deparment'
          name='deptname'
          className='form-control'
          value={department.deptname}
           onChange={onChangeDepartment}
          >
             </input>
           </div>
           <div className='form-group mb-2'>
          <label className='form-label'>Employee Departmenttpye:</label>
          <input type="text"
          placeholder='Enter employee departmenttype'
          name='depttype'
          className='form-control'
          value={department.depttype}
            onChange={onChangeDepartment}
          >
             </input>
           </div>

           <button className='btn btn-success' onClick={(e)=>saveOrUpdateemployee(e)}>submit</button>
          <Link to="/employees" className='btn btn-danger'>Cancel</Link>
          </form>

         </div>




          </div>



        </div>
     </div>
   
    </div>
    
    </Home>
  )
}

export default AddEmployeeComponent