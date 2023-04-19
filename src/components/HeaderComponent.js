
import { useEffect } from "react";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import {  doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import userContext from "../context/userContext";
import { useContext } from "react";


const HeaderComponent = () => {
    

    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {

        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())

    }, [login])


    const logout = () => {
        doLogout(() => {
            //logged out
            setLogin(false)
            // userContextData.setUser({
            //     data: null,
            //     login: false
            // })

            navigate("/")
        })
    }

  return (
    
   
      <div >
       
          <Navbar
              color=" bg-info"
              dark
              expand="md"
              fixed=""
            
            // container="lg"
              style={{
                height: 50,
                width:1250
                
              }}
        
          >
              <NavbarBrand tag={ReactLink} to="/">
                  Employee Management System
              </NavbarBrand>
              <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

              <Collapse isOpen={isOpen} navbar>
                  <Nav
                      className="me-auto"
                      navbar
                  >

                      <NavItem>
                          <NavLink tag={ReactLink} to="/" >
                              home
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink tag={ReactLink} to="/contact-employees" >
                              Contact us
                          </NavLink>
                      </NavItem>

                      {
                      login && (user.email==="john@gmail.com") && (
                        <>
                      <NavItem>
                          <NavLink tag={ReactLink} to="/employees" >
                              List
                          </NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink tag={ReactLink} to="/add-employee" >
                          Add
                      </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink tag={ReactLink} to="/users" >
                          View User
                      </NavLink>
                  </NavItem>
                  </>
                      )
                     }
                   
                       { login && !(user.email==="john@gmail.com") &&(
                        <>
                      <NavItem>
                          <NavLink tag={ReactLink} to={`/edit-user/${user.id}`} >
                              Profile
                          </NavLink>
                      </NavItem>
                      
                  </>
                      )
                      }
                     </Nav>


                  <Nav navbar>
                  { login && (
                                                        
                            <> 

                                    <NavItem>
                                      <NavLink onClick={logout}>
                                          Logout
                                      </NavLink>
                                  </NavItem>
                               
                               <NavItem>
                               <NavLink>
                                  {user.email}
                               </NavLink>
                           </NavItem>                                
                            
                           </>
                          )
                      }
                      {
                          !login && (
                              <>
                                  <NavItem>
                                      <NavLink tag={ReactLink} to="/login" >
                                          Login
                                      </NavLink>
                                  </NavItem>
                                  <NavItem>
                                      <NavLink tag={ReactLink} to="/sign-up" >
                                          Signup
                                      </NavLink>
                                  </NavItem>


                              </>
                          )
                      }
                       


                  </Nav>





              </Collapse>
          </Navbar>
      </div>
     
  )
}

export default HeaderComponent