export default function authHeader() {
    const data1 = JSON.parse(localStorage.getItem('data'));
  
    if (data1) {
      return { Authorization: 'Bearer ' + data1.data.token }; // for Spring Boot back-end
      //return { 'x-access-token': user.accessToken };             // for Node.js Express back-end
    } else {
      return {};
    }
  }