
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ContactUsComponent from './components/ContactUsComponent';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './components/UserDashboard';
import PrivateRouteUser from './components/PrivateRouteUser';
import AdminDashboard from './components/AdminDashboard';
import UserListComponent from './components/UserListComponent';
import Home from './components/Home';

function App() {
 
  return (
    
   
    
     <Router>
  
     
      <ToastContainer />
     
      <div className='container' >
        <Routes>
          
        <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
                  <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
          <Route path="/add-employee" element={<AddEmployeeComponent/>}></Route>
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent/>}></Route>
          <Route path="/contact-employees" element={<ContactUsComponent/>}></Route>
          <Route path="/admin" element={<AdminDashboard/>}></Route>
          <Route path="/users" element={<UserListComponent/>}></Route>



             
             <Route path="/dashboard" element={<UserDashboard/>}></Route>
             <Route path="/edit-user/:id" element={<SignUp/>}></Route>
             
            
          </Routes>
      </div>
     
      </Router>
 
  );
}

export default App;
