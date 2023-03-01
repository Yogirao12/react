import styles from "../style/login.module.css";
import logo from "../images/newlogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { login } from "../api";
import { savedata } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/usersession";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const userInfo = useAuth();
  const redirect = useNavigate();
  const handleclick = async function (e) {
    setloading(true);
    e.preventDefault();
    try {
      const res = await userInfo.login(email, password);
      if (res.data.success) {
        redirect("/");
      } else {
        return console.log(res.data.message);
      }
      setloading(false);
    } catch (e) {
      console.log(e);
      return console.log(e);
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginpic}>
        <img src={logo} alt="logo" />
        <div className={styles.tagline}>
          PostCloud helps you to connect and share memories with people.
        </div>
      </div>
      <div className={styles.logincontainer}>
        <form className={styles.loginform}>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            className={styles.loginbtn}
            onClick={handleclick}
            disabled={loading}
          >
            {loading ? "loading..." : "Log In"}
          </button>
          <Link to={"#"} className={styles.forgetlink}>
            Forget Password?
          </Link>
          <Link to={"/signup"} className={styles.createbtn}>
            Create New Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
