import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import { loginAPI } from "../Services/allAPI";

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async(e) => {
    e.preventDefault();
    const { email, password }=userData;
        // console.log(userData);

    if( !email || !password){
      toast.warning("pleass fill the missing fields")
    }else{
      try{
        //proceed to api call
        const result = await loginAPI(userData)
        console.log(result);
        
        if(result.status==200){
          sessionStorage.setItem("username",result.data.existingUser.username)
          sessionStorage.setItem("token",result.data.token)
          toast.success("user login successfull")
          setTimeout(() => {
            navigate('/addproduct')
          }, 2000);
          setUserData({email:"",password:""})
        }else{
          toast.info(result.response.data)
        }

      }catch(err){
        toast.error(err);
      }

    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100vh" }}
      >
        <div
          className="border rounded p-3"
          style={{ width: "450px", height: "400px" }}
        >
          <h1 className="text-center text-light m-5">Login</h1>

          <Form.Control
            className="m-3"
            size="lg"
            type="email"
            placeholder="Email Id"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            value={userData.email}
          />
          <Form.Control
            className="m-3"
            size="lg"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            value={userData.password}
          />

          <div className="row">
            <div className="col"></div>
            <div className="col">
              <Button
                className="btn-outline-warning my-3"
                onClick={handleLogin}
              >
                Login
              </Button>
              <br />
              <Link to={"/register"} className="m-2 ">
                Register
              </Link>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
       <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default Login;
