 import axios from 'axios'
 import authHeader from '../auth/authHeader';

 //const Employee_REST_API_CRL="http://localhost:8080";
 class EmplyeeService
 {
    getAllEmployees()
    {
        return axios.get("http://localhost:8080/get/allEmployee",{ headers: authHeader() })
    } 
    saveEmployee(employee){
        return axios.post("http://localhost:8080/save/employee",employee,{ headers: authHeader() })
    }
    getEmployeeId(employeeId){

        return axios.get("http://localhost:8080/get/employeebyid"+`/`+employeeId,{ headers: authHeader() });
    }
    updateEmployee(employeeId,employee)
    {
        return axios.put("http://localhost:8080/update"+`/`+employeeId,employee,{ headers: authHeader() });
    }
    deleteEmployee(employeeId){
     return axios.delete("http://localhost:8080/delete"+`/`+employeeId,{ headers: authHeader() });
    }
 }
export default new EmplyeeService();