'use client';
import 'headers';
import Image from 'next/image'


import styles from '@/styles/homePage.module.css'
import ConatinerFlip from './components/ContainerFlip'
import CardsProjects from './components/CardsProjects'
import ContactForm from './components/ContactForm'




export default function Home() {
  //useClient();

  

  return (
    <main className={styles.main}>
      <section className={styles.heroContainer} id="home">
        <div>
          <div><img src="./icons/logo_inicio.svg" className={styles.logo} alt="" /></div>

          <div className={styles.heroTitle}>
            <div className={styles.flexTitle}>
              <div ><h1>Hi, I'm Evellyn</h1></div>
              <div ><h1>an architect turned Developer</h1></div>
              <ConatinerFlip />

            </div>
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
            My name is Evellyn. I'm a person who tries to see the good side of situations. When things don't go to plan, I think about how to get around them, concentrating on solving the problem. <br/>
            </p>
            
          </div>

          <div className={styles.about_meImgContainer}>
            <img src="./icons/Frame.png" alt="" className={styles.profileImg} />
          </div>

          <div className={styles.about_meSkills}>
            <div className={styles.skillsTxt}>
              <p>
              My professional career started in architecture. Now, I'm starting a career in software development, give a unique perspective to technology, combining creativity, technical skills and organization based on all
            different experiences in multidisciplinary teams and projects in other areas.
              </p>
            </div>
            <div className={styles.skillsApps}>
              <div className={styles.appsNode}><img src="./icons/logo-node.svg" alt="" /></div>
              <div className={styles.appsMongo}><img src="./icons/logo-mongo.svg" alt="" /></div>
              <div className={styles.appsReact}><img src="./icons/logo-react.png" alt="" /></div>
              <div className={styles.appsNext}><img src="./icons/logo-next.svg" alt="" width={120}/></div>
              <div className={styles.appsJs0}> <img src="./icons/icons_javascrip.png" alt="" /></div>
              <div className={styles.appsHtml0}><img src="./icons/logo-html.png" alt="" /></div>
                
              
              <div className={styles.appsCss0}> <img src="./icons/icon-css.png" alt="" /></div>
              
              <div className={styles.appsFigma}><img src="./icons/icon-figma.png" alt="" /></div>
              <div className={styles.appsGitHub}><img src="./icons/mdi_github.png" alt="" /></div>
                
              
            </div>
          </div>
        </div>
      </section>

      <div className={styles.redCircle}></div>
      <div className={styles.line2}></div>

      <section className={styles.projects} id="projects">
        <div className={styles.projectsHeader}>
          <div className={styles.btnNav}>
            <a href="#home"><img src="./icons/logo_menu.svg" alt="" /></a>
          </div>
          <div className={styles.projectsTitle}>
            <h2>Projects</h2>
          </div>
        </div>

        {/* <div className={styles.display_card}>
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
        </div> */}
        <div className={styles.display_card}>
          <CardsProjects />
          <CardsProjects />
          <CardsProjects />
          <CardsProjects />
          <CardsProjects />
          <CardsProjects />
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
          {/* <div className={styles.contactsFormContainer}>
            <form action="#" className={styles.contactsForm}>
              <legend><h2>Contact me</h2></legend>
              <label htmlFor="name">Name:</label>
              <input className={styles.inputContainer} type="text" id="name"/>
              <label htmlFor="email">Email:</label>
              <input className={styles.inputContainer} type="email" id="email" />
              <label htmlFor="text">Message:</label>
              <input className={styles.inputContainer} type="text" id="text" />

              <input
                className={styles.contactsSubmit}
                type="submit"
                value="Send Email"
              />
            </form>
          </div> */}

            <ContactForm/>
          <div className={styles.socialContainer}>
            <div className={styles.social}>
              <h2>Follow me</h2>
          
              <a href="https://www.linkedin.com/in/evellyn-paiva-985595203/"  target="_blank"><img src="./icons/mdi_linkedin.png" alt="" /></a>
              <a href="https://github.com/E-paiva" target="_blank"><img src="./icons/mdi_github.png" alt="" /></a>
              {/* <a href="#"><img src="./icons/simple-icons_gmail.png" alt="" /></a> */}
            </div>
          </div>
        </div>

        
      </section>



      <footer>2023 Designed by Evellyn</footer>
    </main>
  )
}
