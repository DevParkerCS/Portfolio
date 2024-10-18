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
        <div className={styles.projectLinks}>
          {project.webLink && (
            <a href={project.webLink} target="blank">
              Website
            </a>
          )}
          {project.gitLink && (
            <a target="blank" href={project.gitLink}>
              GitHub Repo
            </a>
          )}
        </div>
      </div>
      <a
        href={project.webLink || project.gitLink}
        target="blank"
        className={styles.projectImgWrapper}
      >
        <img
          alt="First project page"
          className={styles.topImg}
          src={project.imgTop}
        />
        <img
          alt="Second project page"
          className={styles.bottomImg}
          src={project.imgBottom}
        />
      </a>
    </div>
  );
};
