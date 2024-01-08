import styles from "./Nav.module.scss";
import { navIcons } from "../../data/navicons";
import { NavIconBtn } from "../NavIconBtn/NavIconBtn";

export const Nav = () => {
  return (
    <nav>
      <div className={styles.navContentWrapper}>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="" target="blank">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.iconSection}>
          {navIcons.map((n) => (
            <NavIconBtn aLink={n.aLink} icon={n.icon} />
          ))}
        </div>
      </div>
    </nav>
  );
};
