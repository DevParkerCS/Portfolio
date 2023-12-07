import styles from "./LoadingScreen.module.scss";
import heroImg from "../../assets/heroImg.png";

export const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.heroImgWrapper}>
        <img
          alt="MERN stack loading img"
          src={heroImg}
          className={styles.heroImg}
        />
        <div className={`${styles.heroWalker}`}>
          <div className={`${styles.walker}`}></div>
        </div>
      </div>
    </div>
  );
};
