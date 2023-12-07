import { TProject } from "../../data/projects";
import styles from "./Project.module.scss";

type Props = {
  project: TProject;
};

export const Project = ({ project }: Props) => {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.projectTxt}>
        <p className={styles.projectTools}>{project.tools}</p>
        <h2 className={styles.projectName}>{project.name}</h2>
        <p className={styles.projectDesc}>{project.description}</p>
      </div>
      <div className={styles.projectImgWrapper}>
        <img
          alt="Galactic Shooter home page"
          className={styles.topImg}
          src={project.imgTop}
        />
        <img
          alt="Galactic Shooter in game"
          className={styles.bottomImg}
          src={project.imgBottom}
        />
      </div>
    </div>
  );
};
