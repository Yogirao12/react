import { createContext } from "react";
import { useProvide } from "../hooks";
let initialuser={
    user:null,
    loading:false,
    login:()=>{},
    logout:()=>{},
    signup:()=>{}
}
export const Authcontext=createContext(initialuser);
export const Authprovider=({children})=>{
    const data =useProvide();
    return <Authcontext.Provider value={data}>{children}</Authcontext.Provider>
}
