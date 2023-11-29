import { useState } from 'react';
import styles from 'src/styles/homePage.module.css'

export default function ContactForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();


  const handleClick = () => {
    //setIsActive((IsActive) => !IsActive);
    console.log("hello")
  };


  return <div className={styles.contactsFormContainer}>
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
</div>

}