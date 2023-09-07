const authHeader = () => {
  const useStr = localStorage.getItem("user");
  let user = null;
  // convert the string(jwt-token) to JSON
  if (useStr) user = JSON.parse(useStr);

  if (user && user.accessToken) {
    return { Authoriztion: "Bearer " + user.accessToken };
    //return { 'x-access-token' : user.accessToken }}
  } else {
    return { Authoriztion: "" };
  }
};
