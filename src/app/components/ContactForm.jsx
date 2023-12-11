import styles from '@/styles/contact.module.css'
import {  useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

 let values = {name:"",
                  email:"",
                  message:""}

  const [contact, setContact] = useState(values);
  // const [email, setEmail] = useState();
  // const [message, setMessage] = useState();

  
  
 
  
  const publicKey = "Wdk7ZXbjsR8uZ14Cw"
  useEffect(() =>emailjs.init(publicKey),[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId =  "service_xewl4ph";
    const templateId = "template_wn9d2h9";
    try {
      ;
      await emailjs.send(serviceId, templateId, {
       name: contact.name,
        email: contact.email, 
        message: contact.message
      });
      alert("email successfully sent check inbox");

    } catch (error) {
      console.log(error);}
   
  };
  

  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [id]: value }));
  };


 {/* return (
    <section>
      <aside></aside>
      <form className="for" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name">name</label>
          <input id='name' ref={nameRef} placeholder="enter your name" />
        </div>
        <div className="form_group">
          <label htmlFor="email">email</label>
          <input ref={emailRef} id='email' type="email" placeholder="enter your email" />
        </div>
        <button className="btn" disabled={loading}>
          subscribe
        </button>
      </form>
    </section>
 );*/}



  return <div className={styles.contactsFormContainer}>
  <form action="#" className={styles.contactsForm} onSubmit={handleSubmit}>
    <legend><h2>Contact me</h2></legend>
    <label htmlFor="name">Name:</label>
    <input className={styles.inputContainer} type="text" id="name" value={contact.name}
          onChange={handleChange}/>
    <label htmlFor="email">Email:</label>
    <input className={styles.inputContainer} type="email" id="email" value={contact.email}
          onChange={handleChange}/>
    <label htmlFor="message">Message:</label>
    <input className={styles.inputContainer} type="text" id="message" value={contact.message}
          onChange={handleChange}/>
    <button className={styles.contactsSubmit} >
    Send Email
        </button>

    {/* <input
      className={styles.contactsSubmit}
      type="submit"
      value="Send Email"
    /> */}
  </form>
</div>

}