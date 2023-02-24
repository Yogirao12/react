import styles from "../style/signup.module.css";
import illustration from "../images/illustration.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signup } from "../api";

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [isSignup, setsignup] = useState(false);
  const handleclick = async function (e) {
    e.preventDefault();
    setsignup(true);
    const res = await signup(name, email, password, cpassword);
    setsignup(false);
    console.log("res:", res);
  };
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
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={(e) => setname(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Enter Your Password Again"
            name="cpassword"
            onChange={(e) => setcpassword(e.target.value)}
          />
          <button
            className={styles.signupbtn}
            onClick={handleclick}
            disabled={isSignup}
          >
            {isSignup ? "Loading..." : "Create Your Account"}
          </button>
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
