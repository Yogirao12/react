import styles from "../style/comment.module.css";
import profile from "../images/profile.jpg";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Comment() {
  return (
    <div className={styles.comcontainer}>
      <div className={styles.commentpic}>
        <Link to={"/profile"}>
          <img src={profile} alt="img" />
        </Link>
      </div>
      <div className={styles.usercomment}>
        <div className={styles.commenttext}>
          <span>
            <Link to={"/profile"}>David Mickey</Link>
          </span>
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <div className={styles.commentheart}>
            <b>100</b> <FaHeart />
          </div>
        </div>
        <div className={styles.commenttime}>
          <span className={styles.commentlike}>Like </span> <span>1d ago</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
