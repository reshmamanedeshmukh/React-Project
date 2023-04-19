import axios from 'axios'
import authHeader from '../auth/authHeader';

class UserService
{
    saveUser(user){
        return axios.post("http://localhost:8080/api/v1/auth/register",user)
    }
    login(loginDetail){
        return axios.post("http://localhost:8080/api/v1/auth/login",loginDetail)
    }
    getUserId(userId){

        return axios.get("http://localhost:8080/api/v1/users"+`/`+userId,{ headers: authHeader() });
    }
    deleteUserId(userId){

        return axios.delete("http://localhost:8080/api/v1/users"+`/`+userId,{ headers: authHeader() });
    }
    updateUser(userId,user)
    {
        return axios.put("http://localhost:8080/api/v1/users"+`/`+userId,user,{ headers: authHeader() });
    }
    getAllUser(){
        return axios.get("http://localhost:8080/api/v1/users/",{ headers: authHeader() });
    }
}
export default new UserService;