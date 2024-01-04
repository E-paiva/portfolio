import { useState } from 'react';
import styles from '@/styles/card.module.css'


export default function CardsProjects({name, link,linkGit, image, description}) {
  const [isActive, setIsActive] = useState(true);
 

 


  return <div className={styles.flipCard} onMouseEnter={() => setIsActive(false)}
    onMouseLeave={() => setIsActive(true)}>
    <div className={isActive ? styles.flipCardInner : styles.flipCardactive}>

      <div className={styles.flipCardFront}>
        <h3 className={styles.cardFrontTitle}>{name}</h3>
        
         <img src={image} alt="" width={300} /> 
      </div>
      <div className={styles.flipCardBack}>
        <p className={styles.cardBackDescription}>
          {description}
        </p>
        <div className={styles.containerButtons}>
          
          <a className={styles.cardButtons} href={linkGit}  target='_blank'><p>View Code</p></a>
          <a className={styles.cardButtons} href={link}  target='_blank'><p>View Live</p></a>
          

          
        </div>

      </div>
    </div>
  </div>

}