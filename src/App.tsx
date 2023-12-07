import styles from "./App.module.scss";
import heroImg from "./assets/heroImg.png";
import galacticGame from "./assets/galacticgame.png";
import galacticHome from "./assets/galacticHome.png";
import whatSort1 from "./assets/whatsort1.jpg";
import whatSort2 from "./assets/whatsort2.jpg";
import portfolio1 from "./assets/portfolio1.jpg";
import portfolio2 from "./assets/portfolio2.jpg";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

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

  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.pageX, y: e.pageY });
  };

  const navScroll = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  window.addEventListener("mousemove", handleMouseMove as EventListener);

  return (
    <div className="App">
      <div className={styles.loadingScreen}>
        <div className={styles.heroImgWrapper}>
          <img
            alt="MERN stack loading img"
            src={heroImg}
            className={styles.heroImg}
          />
          <div className={`${styles.heroWalker}`}>
            <div className={`${styles.walker}`}></div>
          </div>
        </div>
      </div>
      <div
        className={styles.mouseGlow}
        style={{ top: mousePos.y, left: mousePos.x }}
      ></div>
      <nav
        className={`${isRef1Viewed ? styles.inFirstObserved : ""} ${
          isRef2Viewed ? styles.inSecObserved : ""
        }`}
      >
        <ul>
          <li onClick={() => navScroll(projectsRef.current)}>Projects</li>
          <li onClick={() => navScroll(skillsRef.current)}>Skills</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
      <HeroSection />

      <hr className={`${styles.sectionBreak} ${styles.projectsBreak}`} />
      <div className={styles.projectSection} ref={observerRef1}>
        <h1 ref={projectsRef} className={styles.sectionTitle} id="projects">
          Projects
        </h1>
        <div className={styles.projectWrapper}>
          <div className={styles.projectTxt}>
            <h2 className={styles.projectTools}>
              Tools: TypeScript, React, Express, MongoDB, Socket.io
            </h2>
            <h1 className={styles.projectName}>Galactic Shooter</h1>
            <h2 className={styles.projectDesc}>
              2D web game that incorporates a singeplayer and multiplayer
              gamemode. Real-time leaderboard that keeps track of the top 10
              scores of all time. Most recent full-stack project.
            </h2>
          </div>
          <div className={styles.projectImgWrapper}>
            <img
              alt="Galactic Shooter home page"
              className={styles.topImg}
              src={galacticHome}
            />
            <img
              alt="Galactic Shooter in game"
              className={styles.bottomImg}
              src={galacticGame}
            />
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <div className={styles.projectImgWrapper}>
            <img
              alt="array sorted by bars with stop and start buttons"
              className={styles.topImg}
              src={whatSort1}
            />
            <img
              alt="info text about sorting algorithm"
              className={styles.bottomImg}
              src={whatSort2}
            />
          </div>
          <div className={styles.projectTxt}>
            <h2 className={styles.projectTools}>
              Tools: React, Typescript, SCSS
            </h2>
            <h1 className={styles.projectName}>What The Sort</h1>
            <h2 className={styles.projectDesc}>
              A sorting visualizer that helps students visualize different
              sorting algorithms in Computer Science. Created for students like
              me that can have a hard time visualizing complex ideas in class.
            </h2>
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <div className={styles.projectTxt}>
            <h2 className={styles.projectTools}>
              Tools: React, Typescript, SCSS
            </h2>
            <h1 className={styles.projectName}>My Portfolio</h1>
            <h2 className={styles.projectDesc}>
              This is my most recent static Frontend project. If you'd like you
              can check out my github repository for this page below!
            </h2>
          </div>
          <div className={styles.projectImgWrapper}>
            <img
              alt="Home page of portfolio"
              className={styles.topImg}
              src={portfolio1}
            />
            <img
              alt="Projets page of portfolio"
              className={styles.bottomImg}
              src={portfolio2}
            />
          </div>
        </div>
      </div>

      <hr className={`${styles.sectionBreak} ${styles.skillsBreak}`} />

      <div className={styles.skillsSection} ref={observerRef2}>
        <h1
          ref={skillsRef}
          className={`${styles.sectionTitle} ${styles.titleDark}`}
        >
          Skills
        </h1>
        <div className={styles.skillsWrapper}>
          <div className={styles.skillWrapper}>
            <h1>Frontend</h1>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>SCSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className={styles.skillWrapper}>
            <h1>Backend</h1>
            <ul>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Socket.io</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className={styles.skillWrapper}>
            <h1>Soft Skills</h1>
            <ul>
              <li>Communication</li>
              <li>Timely</li>
              <li>Problem-Solver</li>
              <li>Attention to Detail</li>
              <li>Motivated Learner</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={`${styles.sectionBreak} ${styles.contactBreak}`} />
      <div className={styles.contactSection}>
        <h1 className={styles.sectionTitle}>Contact</h1>
      </div>
    </div>
  );
}

export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTxt}>
        <h1 className={styles.heroTitle}>Hello, I'm Parker.</h1>
        <h1 className={styles.heroSubtitle}>Software Developer</h1>
        <h2 className={styles.heroDescription}>
          Computer Science student with passion for learning, and creating
          unique user exeperiences.
        </h2>
        <a className={styles.projectsBtn} href="#projects">
          Projects
        </a>
      </div>
      <div className={styles.heroImgWrapper}>
        <img
          alt="MERN stack image inside bubble"
          src={heroImg}
          className={styles.heroImg}
        />
        <div className={`${styles.heroWalker}`}>
          <div className={`${styles.walker}`}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
