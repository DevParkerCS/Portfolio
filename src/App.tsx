import styles from "./App.module.scss";
import { projects } from "./data/projects";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/Skill/Skill";
import { skills } from "./data/skills";
import { Nav } from "./components/Nav/Nav";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { navIcons } from "./data/navicons";
import { NavIconBtn } from "./components/NavIconBtn/NavIconBtn";

function App() {
  return (
    <div>
      <Nav />
      <HeroSection />

      <hr className={`${styles.sectionBreak} ${styles.skillsBreak}`} />

      <div className={styles.skillsSection} id="skills">
        <h1 className={`${styles.sectionTitle}`}>Skills</h1>
        <div className={styles.skillsWrapper}>
          {skills.map((s) => (
            <Skill name={s.name} skills={s.skills} />
          ))}
        </div>
      </div>

      <div className={styles.projectSection} id="projects">
        <h1 className={styles.sectionTitle}>Projects</h1>

        {projects.map((p, i) => (
          <Project project={p} key={i} />
        ))}
      </div>

      <div className={styles.contactSection} id="contact">
        <div className={styles.contactWrapper}>
          <p className={styles.contactTxt}>
            If you are interested in getting to know me more or have any
            questions, send me an email below!
          </p>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.iconSection}>
          {navIcons.map((n) => (
            <NavIconBtn aLink={n.aLink} icon={n.icon} />
          ))}
        </div>
        <a
          href="https://www.flaticon.com/free-icons/portfolio"
          title="portfolio icons"
        >
          Portfolio icons created by Freepik - Flaticon
        </a>
        <p className={styles.copyright}>&copy; Parker Phillips 2023</p>
      </div>
    </div>
  );
}

export default App;
