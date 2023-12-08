import styles from "./App.module.scss";
import heroImg from "./assets/heroImg.png";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { projects, TProject } from "./data/projects";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/Skill/Skill";
import { skills } from "./data/skills";
import { Nav } from "./components/Nav/Nav";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type MousePosType = {
  x: number;
  y: number;
};

function App() {
  const [mousePos, setMousePos] = useState<MousePosType>({ x: 0, y: 0 });
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const { ref: observerRef1, inView: isRef1Viewed } = useInView();
  const { ref: observerRef2, inView: isRef2Viewed } = useInView();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className={isLoading ? styles.isLoading : ""}>
      <div
        className={styles.mouseGlow}
        style={{ top: mousePos.y, left: mousePos.x }}
      ></div>
      <Nav isRef1Viewed={isRef1Viewed} isRef2Viewed={isRef2Viewed} />
      <HeroSection />

      <hr className={`${styles.sectionBreak} ${styles.skillsBreak}`} />

      <div className={styles.skillsSection} ref={observerRef2} id="skills">
        <h1
          ref={skillsRef}
          className={`${styles.sectionTitle} ${styles.titleDark}`}
        >
          Skills
        </h1>
        <div className={styles.skillsWrapper}>
          {skills.map((s) => (
            <Skill name={s.name} skills={s.skills} />
          ))}
        </div>
      </div>

      <div className={styles.projectSection} ref={observerRef1} id="projects">
        <h1 ref={projectsRef} className={styles.sectionTitle}>
          Projects
        </h1>

        {projects.map((p, i) => (
          <Project project={p} key={i} />
        ))}
      </div>

      <div className={styles.contactSection}>
        <div className={styles.contactWrapper}>
          <p className={styles.contactTxt}>
            If you are interested in getting to know me more or have any
            questions, send me an email below!
          </p>
        </div>
      </div>

      <div className={styles.footerSection}>
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
        <p className={styles.copyright}>&copy; Parker Phillips 2023</p>
      </div>
    </div>
  );
}

export default App;
