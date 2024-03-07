'use client';
import styles from '@/styles/download.module.css'

import React, {  useEffect, useState } from 'react';

export default function DonwloadButton() {
   
  const onButtonClick = () => {
    const pdfUrl = "CV-EvellynPaiva.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV-EvellynPaiva.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
return (
    <div className={styles.container}>
       
            <button onClick={onButtonClick} className={styles.button}>
                <img src="./icons/download.png" alt=""  width={70}/>
            </button>

            
           
        
    </div>
);


}
