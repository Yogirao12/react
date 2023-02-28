import { async } from "q";
import { POSTCLOUDKEY } from "./constant";


/************************    LOGOUT FUNCTION ******************/
export const removedata= function(){
    return(
        localStorage.removeItem(POSTCLOUDKEY)
    );
   
}

/**********************SAVE Data******************* */
export const savedata= function(token){
    
    if(token==null||token==undefined){
          return(
            console.log("TOKEN IS INVALID")
          );
    }
    if(typeof token!=="string"){
        token =JSON.stringify(token);
    }
    removedata();
    localStorage.setItem(POSTCLOUDKEY,token);
   
}
/*****************        GETDATA     *********************/
export const getdata= function(){
    return(
        localStorage.getItem(POSTCLOUDKEY)
    );
   
}


