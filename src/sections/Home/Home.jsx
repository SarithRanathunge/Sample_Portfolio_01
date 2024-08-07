import style from './HomeStyle.module.css';
import personImage from '../../assets/hero-img.png';
import ColorModeSunIcon from '../../assets/sun.svg';
import ColorModeMoonIcon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-Dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../Theme/ThemeContext';


function Home() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? ColorModeSunIcon : ColorModeMoonIcon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id = 'home' className={style.container}>
        <div className={style.color_mode_container}>
            <img className={style.person_image} src={personImage} alt="Person_Profile_Image" />
            <img className={style.color_mode_change} src={themeIcon} alt="Color_Mode_Change_Icon" onClick={toggleTheme}/>
        </div>
        <div className={style.info}>
            <h1>James<br />  Bond</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://twitter.com/" target='blank'>
                    <img src={twitterIcon} alt="Twitter-Icon" />
                </a>
                <a href="https://github.com/" target='blank'>
                    <img src={githubIcon} alt="GitHub-Icon" />
                </a>
                <a href="https://linkedin.com/" target='blank'>
                    <img src={linkedinIcon} alt="Linkedin-Icon" />
                </a>
            </span>
            <p className={style.description}>
                With a passion for developing modern React web apps for commercial business.
            </p>
            <a href={CV} download>
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Home