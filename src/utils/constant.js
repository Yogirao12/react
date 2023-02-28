const URL="http://localhost:8000";
 export const POSTCLOUDKEY="__POSTCLOUD__";

/*****************API URL*******************8 */
export const API_URL={
    signup:()=>`${URL}/user/newuser`,
    login:()=>`${URL}/user/create-session`
}
export const getFormBody=function(param){
    let arr=[];
    for(let i in param){
        let key =encodeURIComponent(i);
        let value =encodeURIComponent(param[i]);
        arr.push(key+"="+value);
    }
    return arr.join("&");
}

