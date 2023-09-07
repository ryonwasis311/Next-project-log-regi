import axios from "axios";

const API_URL = "http://192.168.3.42:3001/";
const API_URL1 = "http://192.168.3.42:3001";



interface PersonData {
  username: string,
  email: string,
  password: string,
}

const saveToken = () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  API_URL1.defaults.headers.common["x-access-token"] = token;
};

const register = (username: string, email: string, password: string) => {
  return axios.post(API_URL+ "auth/signup", {
        username,
        email,
        password,
  })
  .then((response) => {
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  })
}

const login = ( email:string, password:string ) => {
  return axios
    .post(API_URL + "auth/signin", {
      email,
      password,
    })
   
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "auth/logout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if(userStr)  return JSON.parse(userStr);

  return null
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  saveToken,
};

export default AuthService;
