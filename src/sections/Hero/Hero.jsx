import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import telegramDark from "../../assets/telegram-dark.png";
import telegramLight from "../../assets/telegram-light.png";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const telegramIcon = theme === "light" ? telegramLight : telegramDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Violetta Gerasimenok"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Violetta
          <br />
          Gerasimenok
        </h1>
        <h2>Frontend Developer</h2>
       
        <p className={styles.description}>
          I am a web developer dedicated to building modern, interactive
          websites that solve real-world problems and enhance user experience.
        </p>
        <span>
          <a href="https://github.com/Gerasimenok" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/violetta-gerasimenok-76550231a/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://t.me/vell795" target="_blank">
            <img src={telegramIcon} alt="telegram icon" />
          </a>
        </span>
        <a>
          <button className="hover">Resume</button>
        </a>
        
      </div>
    </section>
  );
}

export default Hero;
