import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";



function Dashboard() {

    const navigate = useNavigate();
    
    function handleClick()
    {
      navigate("/View");
    }
    
    function handleOnClick()
    {
      navigate("/Search");
    }
  

       return (
        <section>
        
             <div className="nav"> <Navbar/></div>
               <div>
                            <form>
                            <div>
                            <button type="submit" className="btn btn-primary" onClick={handleOnClick} >
             Search Client
            </button><div>   </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>
              View Client
            </button>
          </div>
                                </form>
               </div>            
        
        </section>
    )
}

export default Dashboard;