import styles from "../style/navbar.module.css";
import {
  FaHome,
  FaSearch,
  FaRegCommentDots,
  FaBell,
  FaAlignJustify,
  FaTimes,
  FaUserFriends,
  FaUsers,
  FaBookmark,
  FaRegFileAlt,
} from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../images/newlogo.png";
import profilepic from "../images/profile.jpg";
import { Link } from "react-router-dom";
import { useResize } from "../hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/usersession";
function Navbar() {
  const [width, height] = useResize();
  const [check, setcheck] = useState(false);
  const redirect = useNavigate();
  const userinfo = useAuth();
  const handlelogout = (e) => {
    e.preventDefault();
    userinfo.logout();
    redirect("/login");
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  };

  if (width < 700 && height > 0) {
    let mystyle = {};
    if (check) {
      mystyle = {
        display: "block",
      };
    } else {
      mystyle = {
        display: "none",
      };
    }
    return (
      <div className={styles.navbar}>
        <div className={styles.logodiv}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.baricon}>
          <label htmlFor="bar" className={styles.barlabel}>
            {check ? <FaTimes /> : <FaAlignJustify />}
          </label>
          <input
            type="checkbox"
            id="bar"
            className={styles.bar}
            name="bar"
            onClick={handleCheck}
          />
        </div>
        <div style={mystyle} className={styles.navlink}>
          <label htmlFor="bar">
            <FaTimes className={styles.cancel} />
          </label>
          <div className={styles.logodiv}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.searchdiv}>
            <div className={styles.search}>
              <FaSearch />
              <input
                type="text"
                placeholder="Search PostCloud"
                name="search"
                id="search"
              />
            </div>
          </div>
          <div className={styles.profilepic}>
            <Link to={"/profile"}>
              <img src={profilepic} alt="img" />
              {userinfo.user? userinfo.user.name:"unknown"}
            </Link>
          </div>
          <div className={styles.morelink}>
            <div>
              <Link to={"/"}>
                <FaHome />
              </Link>
            </div>
            <div>
              <Link to={"#"}>
                <FaRegCommentDots />
              </Link>
            </div>
            <div>
              <Link to={"#"}>
                <FaBell />
              </Link>
            </div>
            <div>
              <Link onClick={handlelogout}>
                <AiOutlineLogout />
              </Link>
            </div>
          </div>
          <hr style={{ width: "98%" }}></hr>
          <div className={styles.morepages}>
            <div className={styles.pages}>
              <Link to={"#"}>
                <FaUserFriends className={styles.friend} />
                Friends
              </Link>
            </div>
            <div className={styles.pages}>
              <Link to={"#"}>
                <FaUsers className={styles.group} />
                Groups
              </Link>
            </div>
            <div className={styles.pages}>
              <Link to={"#"}>
                <FaRegFileAlt className={styles.postpage} />
                Pages
              </Link>
            </div>
            <div className={styles.pages}>
              <Link to={"#"}>
                <FaBookmark className={styles.saved} />
                Saved
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.navbar}>
        <div className={styles.logodiv}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.searchdiv}>
          <div className={styles.search}>
            <FaSearch />
            <input
              type="text"
              placeholder="Search PostCloud"
              name="search"
              id="search"
            />
          </div>
        </div>
        <div className={styles.iconsdiv}>
          <div>
            <Link to={"/"}>
              <FaHome />
            </Link>
          </div>
          <div>
            <Link to={"/profile"}>
              <img src={profilepic} alt="profilepic" />
              {userinfo.user ? userinfo.user.name : "unknown"}
            </Link>
          </div>
          <div>
            <Link to={"#"}>
              <FaRegCommentDots />
            </Link>
          </div>
          <div>
            <Link to={"#"}>
              <FaBell />
            </Link>
          </div>
          <div>
            <Link to={"/login"} onClick={handlelogout}>
              <AiOutlineLogout />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
