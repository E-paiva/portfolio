import styles from "@/styles/projects/cardsecondary.module.css"


export default function CardSecondary() {












    return <div className={styles.cardContainer}>
        <div className={styles.cardImg}>
            <img src="../projects-icons\landingpage\realestate\realestateAssets2.jpg" alt="" />
        </div>
        
        <div className={styles.cardContent}>
            <p>Rowhouse</p>
            <h4>123 Anywhere St., Any City</h4>
            <p>2 Beds | 1 Bath | 1 Car</p>
            <p>Wheelchair accessible listing </p>
        </div>
    </div>
}
