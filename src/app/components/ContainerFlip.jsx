'use client';
import styles from '@/styles/containerFlip.module.css'

import React, {  useEffect, useState } from 'react';

export default function ContainerFlip() {
   
  const [position, setPosition] = useState(0);
    

 
   
    // const frases = [' Plant lover', ' Dedicated Episode Explorer', ' Labeling Enthusiast', ' Searcher of Beautiful Landscapes', ' Travel Itinerary Maker', ' lover of Home Cooking'];
    const frases = [' Plant lover 🌱', ' Dedicated Episode Explorer 🎬', ' Labeling Enthusiast 🏷️', ' Searcher of Beautiful Views 🏞️', ' Travel Itinerary Maker 📍', ' lover of Home Cooking 🍲'];

    const icons = [' 🌱', ' 🎬', ' 🏷️', ' 🏞️', ' 📍', ' 🍲 '];
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setPosition((prev) => (prev + 1) % frases.length);
        }, 5000);
    
        return () => clearInterval(intervalId); // Limpar o intervalo ao desmontar o componente
      }, []);
 



   

return <div className={styles.container}>
  <div  className={styles.text}>
     <ul className={styles.list}>
 
    <li className={styles.item}><h1>and Plant lover 🌱</h1></li>
    <li className={styles.item}><h1>and Dedicated Episode Explorer 🎬</h1></li>
    <li className={styles.item}><h1>and lover of Home Cooking 🍲</h1></li>
    <li className={styles.item}><h1>and Travel Itinerary Maker 📍</h1></li>
   
  </ul></div>
</div>


}
