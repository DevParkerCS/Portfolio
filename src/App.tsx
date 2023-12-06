import styles from "./App.module.scss";
import heroImg from "./assets/New Project.png";
import galacticGame from "./assets/galacticgame.png";
import galacticHome from "./assets/galacticHome.png";
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
          <li>
            <a onClick={() => navScroll(projectsRef.current)}>Projects</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <HeroSection />
      <h1 ref={projectsRef} className={styles.projectsTitle} id="projects">
        Projects
      </h1>
      <div className={styles.projectSection} ref={observerRef1}>
        <div className={styles.projectWrapper}>
          <div className={styles.projectTxt}>
            <h2 className={styles.projectTools}>
              Tools: TypeScript, React, Express, MongoDB, Socket.io
            </h2>
            <h1 className={styles.projectName}>Galactic Shooter</h1>
            <h2 className={styles.projectDesc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium perferendis laborum fugiat amet voluptate, earum
              voluptatum expedita rerum rem reprehenderit voluptates
              necessitatibus dignissimos, repudiandae, cumque nulla dolor
              obcaecati odit blanditiis.
            </h2>
          </div>
          <div className={styles.projectImgWrapper}>
            <img className={styles.topImg} src={galacticHome} />
            <img className={styles.bottomImg} src={galacticGame} />
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <div className={styles.projectImgWrapper}>
            <img className={styles.topImg} src={galacticHome} />
            <img className={styles.bottomImg} src={galacticGame} />
          </div>
          <div className={styles.projectTxt}>
            <h2 className={styles.projectTools}>
              Tools: TypeScript, React, Express, MongoDB, Socket.io
            </h2>
            <h1 className={styles.projectName}>Galactic Shooter</h1>
            <h2 className={styles.projectDesc}>
              Product page for the 14th season of Destiny 2, Season of the
              Splicer. Also the first page I ever built as a professional web
              developer.
            </h2>
          </div>
        </div>

        <div ref={observerRef2} className={styles.projectWrapper}>
          <div className={styles.projectTxt}>
            <h2 className={styles.projectTools}>
              Tools: TypeScript, React, Express, MongoDB, Socket.io
            </h2>
            <h1 className={styles.projectName}>Galactic Shooter</h1>
            <h2 className={styles.projectDesc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium perferendis laborum fugiat amet voluptate, earum
              voluptatum expedita rerum rem reprehenderit voluptates
              necessitatibus dignissimos, repudiandae, cumque nulla dolor
              obcaecati odit blanditiis.
            </h2>
          </div>
          <div className={styles.projectImgWrapper}>
            <img className={styles.topImg} src={galacticHome} />
            <img className={styles.bottomImg} src={galacticGame} />
          </div>
        </div>
      </div>

      <h1 className={styles.projectsTitle}>Skills</h1>
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
        <img src={heroImg} className={styles.heroImg} />
      </div>
    </div>
  );
};

export default App;
