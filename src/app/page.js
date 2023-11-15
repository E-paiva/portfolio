import Image from 'next/image'
import styles from 'src/style/homePage.module.css'
import ConatinerFlip from './components/ContainerFlip'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroContainer} id="home">
        <div class="inicio">
          <div><img src="./icons/logo_inicio.svg" className={styles.logo} alt="" /></div>

          <div className={styles.heroTitle}>
            <h1 className={styles.flexTitle}>
              <div className={styles.title}>Hi, I'm Evellyn</div>
              <div className={styles.title}>an architect turned a Developer</div>
              <ConatinerFlip />
            </h1>
          </div>

          <div className={styles.btn}>
            <a href="#contacts" className={styles.contactLink}> Contact me </a>
          </div>
        </div>

        <div className={styles.navBar}>
          <div className={styles.navContainer}>
            <div className={styles.navLinks}>
              <a href="#home" className={styles.link}>Home</a>
              <a href="#about_me" className={styles.link}>About me</a>
              <a href="#projects" className={styles.link}>Projects</a>
              <a href="#contacts" className={styles.link}>Contacts</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
