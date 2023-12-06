import styles from "./App.module.scss";
import heroImg from "./assets/New Project.png";
import galacticGame from "./assets/galacticgame.png";
import galacticHome from "./assets/galacticHome.png";

import { useState } from "react";

type MousePosType = {
  x: number;
  y: number;
};

function App() {
  const [mousePos, setMousePos] = useState<MousePosType>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.pageX, y: e.pageY });
  };

  window.addEventListener("mousemove", handleMouseMove as EventListener);

  return (
    <div className="App">
      <div
        className={styles.mouseGlow}
        style={{ top: mousePos.y, left: mousePos.x }}
      ></div>
      <nav></nav>
      <HeroSection />
      <div className={styles.projectSection}>
        <div className={styles.projectWrapper}>
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
          <div className={styles.projectImgWrapper}>
            <img className={styles.topImg} src={galacticHome} />
            <img className={styles.bottomImg} src={galacticGame} />
          </div>
        </div>
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
        <img src={heroImg} className={styles.heroImg} />
      </div>
    </div>
  );
};

export default App;
