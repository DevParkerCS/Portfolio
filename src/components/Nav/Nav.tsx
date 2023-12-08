import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Nav.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isRef1Viewed: boolean;
  isRef2Viewed: boolean;
};

export const Nav = ({ isRef1Viewed, isRef2Viewed }: Props) => {
  return (
    <nav
      className={`${isRef1Viewed ? styles.inFirstObserved : ""} ${
        isRef2Viewed ? styles.inSecObserved : ""
      }`}
    >
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
      <div className={styles.iconSection}>
        <a className={styles.iconBtn}>
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </a>
        <a className={styles.iconBtn}>
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
        </a>
        <a className={styles.iconBtn}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        </a>
      </div>
    </nav>
  );
};
