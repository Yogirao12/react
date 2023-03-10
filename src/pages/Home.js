import { Navbar, Post } from "../components";
import styles from "../style/home.module.css";
import post1 from "../images/profile.jpg";
import post2 from "../images/post.jpg";
import { useAuth } from "../hooks/usersession";

function Home() {
  let userinfo = useAuth();
  console.log("login userInfo:", userinfo);
  return (
    <>
      <Navbar />
      <div className={styles.homecontainer}>
        <div className={styles.aside1}></div>
        <div className={styles.postcontainer}>
          <Post img={post1} />
          <Post img={post2} />
        </div>
        <div className={styles.aside2}></div>
      </div>
    </>
  );
}
export default Home;
