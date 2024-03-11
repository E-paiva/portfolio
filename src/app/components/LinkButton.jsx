'use client';
import styles from '@/styles/projects/linkButton.module.css'



export default function LinkButton({link, content, type}) {
   
  const onButtonClick = () => {
  console.log("teste")
};
return (
    <div className={styles.buttonContainer}>
       
            <button onClick={onButtonClick} className={`${styles[type]} ${styles.Button}`}>
                
                {content}
            </button>
            {/* <button onClick={onButtonClick} className={styles[type]}>
                
                {content}
            </button> */}

            
           
        
    </div>
);


}
