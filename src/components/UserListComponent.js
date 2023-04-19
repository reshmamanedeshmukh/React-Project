import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/UserService';
import Home from './Home';
const UserListComponent=()=>
{
    const [users, setUsers]=useState([])
    useEffect(()=>{
       getAllUsers();
       }, [])
   
       const getAllUsers=()=>{
         UserService.getAllUser().then((response) =>
         {
            setUsers(response.data)
            console.log(response.data)
            console.log(response?.data?.roles)
         }).catch(error =>{ console.log(error);})
       }
   
      const deleteUser = (userId) => {
        UserService.deleteUserId(userId).then((response)=>{
          getAllUsers();
        }).catch(error =>{
         console.log(error);
        })
   
        
      }
     return (
      <Home>
       <div>
   
       <h2 className ="text-center">List Employees</h2>
       
       <table className="table table-bordered table-striped">
           <thead>
             <th> User Id</th>
             <th>User Name</th>
             <th>Email</th>
             <th>Password</th>
             <th>addressDetail</th>
                          <th>Action</th>
           </thead>
           <tbody>
          {
            users.map(
               user =>
               <tr key={user.id}>  
                <td>{user.id}</td>
               <td>{user.userName}</td>
               <td>{user.email}</td>
               <td>{user.password}</td>
               <td>{user.addressDetail}</td>
                              <td><button className='btn btn-danger' onClick={()=>deleteUser(user.id)} style={{marginLeft:"10px"}}> Delete</button> </td>
               </tr>
            )  
   
          }
   
           </tbody>
       </table>
       </div>
       </Home>
     )
   }
export default UserListComponent;