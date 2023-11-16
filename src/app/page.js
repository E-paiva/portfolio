
import Image from 'next/image'
import styles from 'src/styles/homePage.module.css'
import ConatinerFlip from './components/ContainerFlip'



export default function Home() {
  //useClient();

  return (
    <main className={styles.main}>
      <section className={styles.heroContainer} id="home">
        <div>
          <div><img src="./icons/logo_inicio.svg" className={styles.logo} alt="" /></div>

          <div className={styles.heroTitle}>
            <h1 className={styles.flexTitle}>
              <div className={styles.title}>Hi, I'm Evellyn</div>
              <div className={styles.title}>an architect turned a Developer</div>
              <ConatinerFlip />
            </h1>
          </div>

          <div className={styles.btnContactLink}>
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

      <div className={styles.yellowCircle}></div>
      <div className={styles.line1}></div>

      <section className={styles.about_me} id="about_me">
        <div className={styles.about_meHeader}>
          <div className={styles.btnNav}>
            <a href="#home"><img src="./icons/logo_menu.svg" alt="" /></a>
          </div>
          <div className={styles.about_meTitle}>
            <h2>About me</h2>
          </div>
        </div>

        <div className={styles.about_meContent}>
          <div className={styles.about_meTxt}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga
              iure ab velit officiis autem facilis minus labore rerum impedit
              quo sint reiciendis deleniti eius alias, iste nisi doloribus
              adipisci!
            </p>
          </div>

          <div className={styles.about_meImgContainer}>
            <img src="./icons/frame.png" alt="" className={styles.profileImg} />
          </div>

          <div className={styles.about_meSkills}>
            <div className={styles.skillsTxt}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                velit asperiores quibusdam corrupti ex laborum quis quisquam,
                ullam ad, facilis minus est incidunt assumenda, ut architecto
                ratione culpa omnis dolorem?
              </p>
            </div>
            <div className={styles.skillsApps}>
              <div className={styles.appsHtml0}>
                <img src="./icons/iconHtml.png" alt="" />
              </div>
              <div className={styles.appsCss0}><img src="./icons/icon-css.png" alt="" /></div>
              <div className={styles.appsJs0}>
                <img src="./icons/icons_javascrip.png" alt="" />
              </div>
              <div className={styles.appsFigma0}>
                <img src="./icons/icon-figma.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.redCircle}></div>
      <div className={styles.line2}></div>

      <section className={styles.projects} id="projects">
        <div className={styles.projectsHeader}>
          <div className={styles.btnNav}>
            <a href="#home"><img src="logo_menu.svg" alt="" /></a>
          </div>
          <div className={styles.projectsTitle}>
            <h2>Projects</h2>
          </div>
        </div>

        <div className={styles.display_card}>
          <div className={styles.bgBlue}>
            <article className={styles.cards }>
              <img src="./icons/mockup.png" alt="" />
              <h4>Project name</h4>
              <p>
                descrição do projeto Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolor, voluptates?
              </p>
            </article>

            <article className={styles.cards }>
              <img src="./icons/mockup.png" alt="" />
              <h4>Project name</h4>
              <p>
                descrição do projeto Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolor, voluptates?
              </p>
            </article>
          </div>

          <article className={styles.cards}>
            <img src="./icons/mockup.png" alt="" />
            <h4>Project name</h4>
            <p>
              descrição do projeto Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor, voluptates?
            </p>
          </article>

          <article className={styles.cards}>
            <img src="./icons/mockup.png" alt="" />
            <h4>Project name</h4>
            <p>
              descrição do projeto Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor, voluptates?
            </p>
          </article>

          <div className={styles.bgYellow}>
            <article className={styles.cards }>
              <img src="./icons/mockup.png" alt="" />
              <h4>Project name</h4>
              <p>
                descrição do projeto Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolor, voluptates?
              </p>
            </article>

            <article className={styles.cards }>
              <img src="./icons/mockup.png" alt="" />
              <div className={styles.carsTxt}>
                <h4>Project name</h4>
                <p>
                  descrição do projeto Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolor, voluptates?
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.contacts} id="contacts">
        <div className={styles.contactsHeader}>
          <div className={styles.btnNav}>
            <a href="#home"><img src="./icons/logo_menu.svg" alt="" /></a>
          </div>
          <div className={styles.contactsTitle}>
            <h2>Contacts</h2>
          </div>
        </div>
        <div className={styles.contactsContainer}>
          <div className={styles.contactsFormContainer}>
            <form action="#" className={styles.contactsForm}>
              <legend><h2>Contact me</h2></legend>
              <label for="name">Name:</label>
              <input className={styles.inputContainer} type="text" id="name"/>
              <label for="email">Email:</label>
              <input className={styles.inputContainer} type="email" id="email" />
              <label for="text">Message:</label>
              <input className={styles.inputContainer} type="text" id="text" />

              <input
                className={styles.contactsSubmit}
                type="submit"
                value="Send Email"
              />
            </form>
          </div>

          <div className={styles.socialContainer}>
            <div className={styles.social}>
              <h2>Follow me</h2>
              <a href="#"><img src="./icons/mdi_linkedin.png" alt="" /></a>
              <a href="#"><img src="./icons/mdi_github.png" alt="" /></a>
              <a href="#"><img src="./icons/simple-icons_gmail.png" alt="" /></a>
            </div>
          </div>
        </div>
      </section>

      <footer>2023 Designed by Evellyn</footer>
    </main>
  )
}
