import { useState } from 'react';
import styles from 'src/styles/card.module.css'

export default function CardsProjectsOld() {

    // return <article className={styles.cards}>
    //     <img src="./icons/mockup.png" alt="" />
    //     <h4>Project name</h4>
    //     <p>
    //         descrição do projeto Lorem ipsum dolor sit amet consectetur
    //         adipisicing elit. Dolor, voluptates?
    //     </p> 

    //     <button>View code</button>
    //     <button>View code</button>
    // </article>

    const [isActive, setIsActive] = useState(true);

    
    const handleClick = () => {
      setIsActive((IsActive) => !IsActive);
      console.log("hello")
    };

    
   return <div /*className={styles.flipCard}*/ className={ styles.flipCard } onClick={handleClick}>
  <div  className={isActive?styles.flipCardInner: styles.flipCardactive }>
    
    <div  className={styles.flipCardFront}>
      <h4>Project Name</h4>
      <img src="./icons/mockup.png" alt="" width={120}/></div>
    <div  className={styles.flipCardBack}>
    <p>
                descrição do projeto Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolor, voluptates?
              </p>
      <h1><button>View code</button>
        <button>View code</button></h1>
      
    </div>
    {/* <div  className={styles.flipCardFront}>
      <h1>Card Front</h1>
    </div> */}
    
  </div>
</div>

}