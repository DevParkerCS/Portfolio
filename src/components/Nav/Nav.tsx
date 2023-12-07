import styles from "./Nav.module.scss";

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
    </nav>
  );
};
