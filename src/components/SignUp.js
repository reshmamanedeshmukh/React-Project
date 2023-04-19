import React, { useEffect, useState } from 'react'
import {  useNavigate,useParams} from 'react-router-dom';
import UserService from '../services/UserService'
import {toast} from 'react-toastify'
import Home from './Home';

const SignUp =()=>
{
     
  const[userName,setUserName]=useState('')
  const[email,setEmail]=useState('')
  const[addressDetail,setAddressDetail]=useState('')
 const[password,setPassword]=useState('');
  const navigate = useNavigate();
  const {id}=useParams();

  const resetInput = () => {
    setUserName("")
    setEmail("")
    setAddressDetail("")
    setPassword("")
  }
  const saveOrUpdateuser =(e)=>
  {
    e.preventDefault();

    const user={id,userName,email,addressDetail,password}
    if(!id)
     {
      UserService.saveUser(user).then((response)=>{
       toast.success("user registered sucessfully");
       setUserName("")
       setEmail("")
       setAddressDetail("")
       setPassword("")
      // alert("user registered sucessfully");
        navigate("/", {replace: true});
}).catch(error =>{
  console.log(error)
})
    }
    else{
      UserService.updateUser(id,user).then((response)=>{
      
      alert("user updated sucessfully");
      navigate("/dashboard", {replace: true});
     }).catch(error =>{
      console.log(error);
     })
  }
  }

    useEffect(()=>{
        UserService.getUserId(id).then((response)=>{
           // setId(response.data.id)
            setUserName(response.data.userName)
            setEmail(response.data.email)
            setAddressDetail(response.data.addressDetail)
           setPassword(response.data.password)
      
        }).catch((error)=>{
          console.log(error);
        })
    },[])

   const title=()=>{

      if(id)
      {
        return<h3 className='text-center'>update User</h3>
      }else{
        return<h3 className='text-center'>Register User</h3>
      }
   }
    return (
      <Home>
    <div> 
     <div className='container'>
        <div className='row'>
          <div className='card col-sm-15 '>
        {
          title()
        }
         <div className='card-body'>
          <form>
                     <div className='form-group mb-2'>
          <label className='form-label'>User name:</label>
          <input type="text"
          placeholder='Enter user name'
          name='userName'
          className='form-control'
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          >
             </input>
           </div>
           <div className='form-group mb-2'>
          <label className='form-label'>User Email:</label>
          <input type="text"
          placeholder='Enter user email'
          name='email'
          className='form-control'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          >
          
             </input>
            
           </div>
           <div className='form-group mb-2'>
          <label className='form-label'>User addressDetail:</label>
          <input type="text"
          placeholder='Enter user address details'
          name='addressDetail'
          className='form-control'
          value={addressDetail}
          onChange={(e)=>setAddressDetail(e.target.value)}
          >
             </input>
             
           </div>
          <div className='form-group mb-2'>
          <label className='form-label'>User password:</label>
          <input type="passwordss"
          placeholder='Enter user password'
          name='password'
          className='form-control'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          >
         </input>
          </div>
          
            <button className='btn btn-success' onClick={(e)=>saveOrUpdateuser(e)}>submit</button>
           <button className='btn btn-danger' onClick={resetInput}>Cancel </button>
          
          </form>

         </div>




          </div>



        </div>
     </div>

    </div>
    </Home>
  )
}

export default SignUp;