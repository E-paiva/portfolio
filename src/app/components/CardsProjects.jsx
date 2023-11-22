import { useState } from 'react';
import styles from 'src/styles/card.module.css'

export default function CardsProjectsOld() {
  const [isActive, setIsActive] = useState(true);


  const handleClick = () => {
    //setIsActive((IsActive) => !IsActive);
    console.log("hello")
  };


  return <div className={styles.flipCard} onMouseEnter={() => setIsActive(false)}
  onMouseLeave={() => setIsActive(true)}>
    <div className={isActive ? styles.flipCardInner : styles.flipCardactive}>

      <div className={styles.flipCardFront}>
        <h4>Project Name</h4>
        <img src="./icons/mockupInkersTranparesnt.png" alt="" width={300} /></div>
      <div className={styles.flipCardBack}>
        <p>
          descrição do projeto Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor, voluptates?
        </p>
        <div className={styles.containerButtons}>
          <button className={styles.cardButtons} onClick={handleClick} >View Code</button>
          <button className={styles.cardButtons} onClick={handleClick}>View Live</button>
        </div>

      </div>
      </div>
  </div>

}