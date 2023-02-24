import styles from "../style/login.module.css";
import logo from "../images/postcloud-logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.loginpic}>
        <img src={logo} />
        <div className={styles.tagline}>
          PostCloud helps you to connect and share memories with people.
        </div>
      </div>
      <div className={styles.logincontainer}>
        <form className={styles.loginform}>
          <input type="text" placeholder="Enter Your Email" name="email" />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
          />
          <button className={styles.loginbtn}>Log In</button>
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
