import axios from "axios";

const API_URL = "http://192.168.3.42:3001/";

interface PersonData {
    username: string,
    email:string,
    password:number
}

const register = ({username, email, password}:PersonData) =>{
 return axios.post(API_URL+ "/auth/signup", {
    username,
    email,
    password,
 })
}

const getCurrentUser = () =>{
    const userStr =localStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);

    return null;
};

const UserService ={
    register,
    getCurrentUser
}

export default UserService;