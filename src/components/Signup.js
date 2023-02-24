import styles from "../style/signup.module.css";
import illustration from "../images/illustration.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className={styles.signup}>
      <div className={styles.signuppic}>
        <img src={illustration} alt="img" />
        <div className={styles.tagline}>
          A New World is rising. Let's discover it!
        </div>
      </div>
      <div className={styles.signupcontainer}>
        <form className={styles.signupform}>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <input type="text" placeholder="Enter Your Email" name="email" />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
          />
          <input
            type="password"
            placeholder="Enter Your Password Again"
            name="cpassword"
          />
          <button className={styles.signupbtn}>Create Your Account</button>
          Already have account?
          <Link to={"/login"} className={styles.loginlink}>
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
