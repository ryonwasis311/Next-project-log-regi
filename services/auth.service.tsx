import axios from "axios";

const API_URL = "http://192.168.3.42:3001/";

interface PersonData {
  username: string,
  email: string,
  password: string,
}

const register = (username: string, email: string, password: string) => {
  return axios.post(API_URL+ "auth/signup", {
        username,
        email,
        password,
  });
};

const login = ({ username, password }: PersonData) => {
  return axios
    .post(API_URL + "auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
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
};

export default AuthService;
