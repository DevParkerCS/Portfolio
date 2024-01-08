import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavIconBtn.module.scss";
import { TIcon } from "../../data/navicons";

export const NavIconBtn = (Icon: TIcon) => {
  return (
    <a href={Icon.aLink} target="blank" className={styles.iconBtn}>
      <FontAwesomeIcon className={styles.icon} icon={Icon.icon} />
    </a>
  );
};
