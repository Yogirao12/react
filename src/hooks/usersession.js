import { useState, useContext } from "react";
import { useEffect } from "react";
import { getdata, removedata, savedata } from "../utils/localstorage";
import jwtDecode from "jwt-decode";
import { API_URL } from "../utils/constant";
import { customfetch } from "../api";
import { Authcontext } from "../provider/authprovider";

export function useProvide() {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  // const [userChange, setuserChange] = useState(false);
  // const [ready, setready] = useState(true);
  useEffect(() => {
    async function getuser() {
      setloading(true);
      const token = getdata();
      if (token) {
        let user = await jwtDecode(token);
        setuser(user);
      }
      setloading(false);
      return true;
    }
    getuser();
  }, []);
  /**********************SIGNUP FUNCTION************* */
  const signup = async function (name, email, password, cpassword) {
    return customfetch(API_URL.signup(), {
      method: "POST",
      body: {
        name,
        email,
        password,
        cpassword,
      },
    });
  };

  /********************* LOGIN UP ****************/
  const login = async function (email, password) {
    const res = await customfetch(API_URL.login(), {
      method: "POST",
      body: {
        email,
        password,
      },
    });
    savedata(res.data.data.token);
    let loginuser = await jwtDecode(res.data.data.token);
    console.log(loginuser);
    setuser(loginuser);
    return res;
  };
  /*****************    LOGOUT FUNCTION     *****************/
  const logout = async function (email, password) {
    setuser(null);
    removedata();
  };
  return {
    user,
    login,
    logout,
    signup,
    loading,
  };
}
export const useAuth = () => {
  return useContext(Authcontext);
};
