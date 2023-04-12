import React from 'react'
import styles from '@/styles/Freequote.module.css'
import Link from 'next/link'

import axios from "axios"; 
import { useState } from "react";


const Freequote = (props) => {


  const [score, setScore] = useState('SUBMIT');

    const handleSubmit = async (event) => {
      
        event.preventDefault()
    

        const data = {
          first: event.target.first.value,
          email: event.target.last.value,
          phone: event.target.phone.value,
          message: event.target.message.value,
        }
    
        

        const JSONdata = JSON.stringify(data)

        setScore('Wating For Send Data');

        try {
            // make axios post request
            const response = await axios({
              method: "post",
              url: "https://httpbin.org/post",
              data: JSONdata,
            });
           
            setScore('Thank You');
            window.location = "/thank-you"
  
          } 
          catch(error) {
            console.log(error)
          }

    

    

 }



  return (
   <>
   
   <div className={styles[props.formsaspire]}>
                 <h4 className="t-center font30 fw900 color-black font-f">Get A Free Quote</h4>

                    <form className={styles.formalign}  onSubmit={handleSubmit}>
                        <label className={styles.label}>Full Name*</label>
                        <input type="text" className={styles.formfree} required  name="first" placeholder="Your name..." />

                        <label className={styles.label}>Email Address*</label>
                        <input type="text" className={styles.formfree} required name="last" placeholder="Type Email Address" />

                        <label className={styles.label}>Phone *</label>
                        <input type="tel" className={styles.formfree} required name="phone" placeholder="123-456-7890" /> 

                        <label className={styles.label}>Message *</label>
                        <textarea className={styles.formfree} required name="message"  rows="2" placeholder="Type Your Message Here"></textarea>
                        <button className={styles.freebtn} type="submit">{score} </button>
                    </form>

                    
                    { props.show ? 

                      <div className='mt-4'>
                        <Link className={styles.freediscuss} href="#">LET'S DISCUSS</Link>  
                        <Link className={styles.freehomenumer} href="tel:(302) 883-8877">(302) 883-8877</Link>
                      </div>


                    : '' }
                    


            </div>
   
   
   </>
  )
}

export default Freequote