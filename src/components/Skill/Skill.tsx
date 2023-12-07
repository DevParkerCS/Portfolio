import styles from "./Skill.module.scss";

type Props = {
  name: String;
  skills: String[];
};

export const Skill = ({ name, skills }: Props) => {
  return (
    <div className={styles.skillWrapper}>
      <h2 className={styles.name}>{name}</h2>
      <ul className={styles.skillList}>
        {skills.map((s) => (
          <li className={styles.skill}>{s}</li>
        ))}
      </ul>
    </div>
  );
};
