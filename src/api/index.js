import { API_URL, getFormBody } from "../utils/constant";
  

/**********************
 * 
 * 
 * custom fetch
 * 
 * 
 *                  *********************/
export const customfetch = async function (url, { body, ...customconfig }) {
  try {
    let headers = {
      "content-type": "application/x-www-form-urlencoded",
    };
    let config = {
      ...customconfig,
      headers: {
        ...headers,
        ...customconfig.headers,
      },
    };
    if (body) {
      config.body = getFormBody(body);
    }
    const res = await fetch(url, config);
    const data = await res.json();
    if (data.success) {
      return {
        data: data,
      };
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
    console.log(e.message);
    return {
      message: e.message,
      success: false,
    };
  }
};

/**********************SIGNUP FUNCTION************* */
export const signup = async function (name, email, password, cpassword) {
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
export const login =async function(email,password){
  return customfetch(API_URL.login(),{
    method:"POST",
    body:{
      email,
      password
    }

  })
}
