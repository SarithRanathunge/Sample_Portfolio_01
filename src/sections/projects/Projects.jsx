import styles from './ProjectStyles.module.css';
import Viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../importants/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle' >Projects</h1>
        <div className={styles.ProjectContainer}>
            <ProjectCard src={Viberr} 
            link="http://github.com"
            h3='Viberr'
            p='Streaming App'
          />
          <ProjectCard src={freshBurger} 
            link="http://github.com"
            h3='Fresh Burger'
            p='Hamburger Restaurant'
          />
          <ProjectCard src={hipsster} 
            link="http://github.com"
            h3='Hipsster'
            p='Glasses Shop'
          />
          <ProjectCard src={fitLift} 
            link="http://github.com"
            h3='Fit Lift'
            p='Fitness App'
          />
        </div>
    </section>
  )
}

export default Projects;