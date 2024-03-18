'use client'
import styles from "@/styles/projects/slidercontainer.module.css"
import CardSecondary from "./CardSecondary"
import { useRef } from "react";

export default function SliderContainer() {

  const carousel = useRef()



  const handleLeftClick = (e) => {
    e.preventDefault();
    
    carousel.current.scrollRight -= carousel.current.offsetWidth
  }
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth
    
  }

  return <>
    <div className={styles.container} ref={carousel}>

      <div className={styles.carousel}>
        <div className={styles.item}><CardSecondary /></div>
        <div className={styles.item}><CardSecondary /></div>
        <div className={styles.item}><CardSecondary /></div>
        <div className={styles.item}><CardSecondary /></div>
        <div className={styles.item}><CardSecondary /></div>
        <div className={styles.item}><CardSecondary /></div>
        <div className={styles.item}><CardSecondary /></div>
        <div className={styles.item}><CardSecondary /></div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.buttonLeft} onClick={handleLeftClick}>left</button>
        <button className={styles.buttonRight} onClick={handleRightClick}>right</button>
      </div>
    </div>
  </>
}