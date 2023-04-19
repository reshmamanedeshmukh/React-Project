import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserService from '../services/UserService';
import { doLogin } from '../auth';
import userContext from "../context/userContext";
import { useContext } from "react";
import {
  Label,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";
import HeaderComponent from './HeaderComponent';
import Home from './Home';
function Login() {



  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };
   const handleFormSubmit=(event)=>{
    event.preventDefault();
     //console.log(loginDetail);

     if(loginDetail.username.trim()===''|| loginDetail.password.trim()==='')
     {
      toast.error("username and password  is required")
     }

    UserService.login(loginDetail).then((data)=>{
    
      console.log(data);

     doLogin(data, () => {
      console.log("login detail is saved to localstorage");
      //redirect to user dashboard page
      
            
         if((data.data.user.email==="john@gmail.com"))
       {  
      
        navigate("/admin");
      }else{
    
      navigate("/dashboard");
      }
     })
   toast.success("Login Success")
      
    }).catch((error)=>{
    console.log(error);
    if(error.response.status===400 || error.response.status===404)
    {
      toast.error(error.response.data.message)
    }else{
    toast.error("Something went wrong")
    }
    })

     
   }

      return (
       <Home>
        <Container fluid style={{paddingLeft: '200px',alignItems:'center'}}>
        <Row className="mt-3">
          <Col
            sm={{
              size: 6,
              offset: 3,
            }}
          >
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Login Here !!</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  {/* Email field */}

                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="text"
                      id="email"
                      value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </FormGroup>

                  {/* password field */}

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="light" outline>
                      Login
                    </Button>
                    <Button
                      onClick={handleReset}
                      className="ms-2"
                      outline
                      color="secondary"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </Home>
    )
    
  }
 

export default Login;