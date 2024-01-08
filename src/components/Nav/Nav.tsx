import styles from "./Nav.module.scss";
import { navIcons } from "../../data/navicons";
import { NavIconBtn } from "../NavIconBtn/NavIconBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Nav = () => {
  const [navActive, setNavActive] = useState(false);

  const handleClick = () => {
    setNavActive(!navActive);
  };

  return (
    <nav>
      <div
        className={`${styles.navContentWrapper} ${
          navActive ? styles.active : ""
        }`}
      >
        <ul>
          <li onClick={handleClick}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={handleClick}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={handleClick}>
            <a
              href={
                "https://docs.google.com/document/d/1OGxM6OiVmrtK8TVMlXY8sqoqXOVF5lIHnuf5VTj4UZU/view"
              }
              target="blank"
            >
              Resume
            </a>
          </li>
          <li onClick={handleClick}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.iconSection}>
          {navIcons.map((n) => (
            <NavIconBtn aLink={n.aLink} icon={n.icon} />
          ))}
        </div>
      </div>

      <FontAwesomeIcon
        onClick={handleClick}
        className={`${styles.hamburger} ${navActive ? styles.active : ""}`}
        icon={faBars}
      />
    </nav>
  );
};
