import styles from "../style/post.module.css";
import {
  FaTag,
  FaEllipsisV,
  FaHeart,
  FaRegHeart,
  FaUserCheck,
  FaBookmark,
  FaRegEyeSlash,
  FaTrash,
  FaExclamation,
} from "react-icons/fa";
import profile from "../images/profile.jpg";
import post from "../images/post.jpg";
import { Link } from "react-router-dom";
import { Comment } from "./";
import { useState } from "react";

function Post(props) {
  const [height, setheight] = useState(0);
  const [width, setwidth] = useState(0);
  const threedotclick = () => {
    if (height > 0) {
      setheight(0);
      setwidth(0);
    } else {
      setheight(300);
      setwidth(150);
    }
  };
  let mystyle;
  if (height === 0) {
    mystyle = {
      height: `${height}px`,
      width: `${width}px`,
    };
  } else {
    mystyle = {
      height: `${height}px`,
      width: `${width}px`,
      boxShadow: `1px 1px 4px 1px grey`,
    };
  }
  return (
    <div className={styles.post}>
      <div className={styles.tagdiv}>
        <FaTag /> David and 21 others tagged in this post
      </div>
      <hr style={{ width: "95%", color: "lightgrey" }} />
      <div className={styles.userinfo}>
        <div className={styles.userpic}>
          <Link to={"/profile"}>
            <img src={profile} alt="img" />
          </Link>
        </div>
        <div className={styles.username}>
          <div>
            <Link to={"/profile"}>
              <b>Alex</b>
            </Link>
          </div>
          <div className={styles.posttime}>2d ago</div>
        </div>
        <div className={styles.threedot}>
          <FaEllipsisV className={styles.dotbtn} onClick={threedotclick} />
        </div>
        <div style={mystyle} className={styles.postmenu}>
          <div>
            <Link to={"#"}>
              <FaRegEyeSlash /> Hide
            </Link>
          </div>
          <div>
            <Link to="#">
              <FaBookmark /> save
            </Link>
          </div>
          <div>
            <Link to={"#"}>
              <FaTrash /> Delete
            </Link>
          </div>
          <div>
            <Link to={"#"}>
              <FaExclamation /> Report
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.caption}>
        I don't think inside the box and I don't think outside the box… I don't
        even know where the box is.
      </div>
      <div className={styles.postimg}>
        <img src={props.img} alt="post" />
      </div>
      <div className={styles.reactiondiv}>
        <div className={styles.totallike}>100k Likes</div>
        <div className={styles.totalcomments}>412 Comments</div>
      </div>
      <hr style={{ width: "95%", color: "lightgrey" }} />
      <div className={styles.likediv}>
        <div className={styles.mylike}>
          <FaHeart />
        </div>
        <div className={styles.followbtn}>
          <Link to={"#"}>
            <FaUserCheck /> Follow
          </Link>
        </div>
      </div>
      <hr style={{ width: "95%", color: "lightgrey" }} />
      <div className={styles.commentinput}>
        <div className={styles.inputuser}>
          <img src={profile} alt="img" />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            name="comment"
            placeholder="Enter Your Comment..."
          />
          <br />
          <span>Press enter to comment</span>
        </div>
      </div>
      <div className={styles.comments}>
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className={styles.allcomment}> View All Comments</div>
    </div>
  );
}

export default Post;
