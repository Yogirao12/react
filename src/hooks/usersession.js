import { useState,useContext } from "react";
import { useEffect } from "react";
import { POSTCLOUDKEY } from "../utils/constant";
import { getdata, removedata } from "../utils/localstorage";
import jwtDecode from "jwt-decode";
import { API_URL } from "../utils/constant";
import { customfetch } from "../api";
import { Authcontext } from "../provider/authprovider";


export function useProvide(){
const [user,setuser]=useState(null);
const [loading,setloading]=useState(false);
   useEffect(()=>{
     setloading(true);
     const token =getdata();
     if(token){
        let user=jwtDecode(token);
        setuser(user);
     }
     setloading(false);
   },[])
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
 const login =async function(email,password){
  return customfetch(API_URL.login(),{
    method:"POST",
    body:{
      email,
      password
    }

  })
}
/*****************    LOGOUT FUNCTION     *****************/
const logout =async function(email,password){
  setuser(null);
  removedata();
}
return{
  user,
  login,
  logout,
  signup,
  loading
}
}
export const useAuth=()=>{
  return useContext(Authcontext);
}