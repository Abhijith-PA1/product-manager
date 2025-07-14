import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';


function Register() {

  const navigate = useNavigate();

  const [ userData, setUserData ] = useState({
    username:"",
    email:"",
    password:""
  })


  const handleRegister=async(e)=>{
    e.preventDefault()
    // console.log(userData);

    const { username,email,password } = userData;

    if(!username || !email || !password){
      toast.warning("pleass fill the missing fields")
    }else{
      // alert("proced to api call")
      try{
        //proceed to api call
        const result =await registerAPI(userData)
        console.log(result);
        if(result.status==200){
          toast.success(`${result.data.username} has successfully registered`);
           setTimeout(() => {
            navigate('/login');
          }, 2000);
          
          setUserData({username:"", email:"",password:""})
        }else{
          toast.warning(result.response.data);
          
        }
        
      }catch(err){
        toast.error(err);
        
      }
    }
    
  }
  

  return (
    <>

    <div className='d-flex justify-content-center align-items-center' style={{width:'100%', height:'100vh'}}>
        <div className='border rounded p-3' style={{width:"450px",height:"400px"}}>
            <h1 className='text-center text-light m-3'>Register</h1>
              <Form.Control className='m-3' size="lg" type="text" placeholder="User name" onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username}/>
              <Form.Control className='m-3' size="lg" type="email" placeholder="Email Id" onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email}/>
              <Form.Control className='m-3' size="lg" type="password" placeholder="Password" onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password}/>

               <div className="row">
                <div className="col"></div>
                <div className="col">
                     <Button className='btn-outline-danger' onClick={handleRegister}>Register</Button><br />
                     <Link to={'/login'} className='m-3 '>Login</Link>
                </div>
                <div className="col"></div>
              </div>
             
              
        </div>
    </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default Register
