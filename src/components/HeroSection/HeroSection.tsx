import heroImg from "../../assets/heroImg.png";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTxt}>
        <h1 className={styles.heroTitle}>
          Hello,
          <br className={styles.mobileBreak} /> I'm Parker.
        </h1>
        <h1 className={styles.heroSubtitle}>Software Developer</h1>
        <h2 className={styles.heroDescription}>
          Computer Science student with passion for learning, and creating
          unique user exeperiences.
        </h2>
        <a className={styles.projectsBtn} href="#projects">
          Projects
        </a>
      </div>
      <div className={styles.heroImgWrapper}>
        <img
          alt="MERN stack inside bubble"
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
