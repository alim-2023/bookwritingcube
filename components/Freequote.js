import React from 'react'
import styles from '@/styles/Freequote.module.css'
import Link from 'next/link'

const Freequote = (props) => {
  return (
   <>
   
   <div className={styles[props.formsaspire]}>
                 <h4 className="t-center font30 fw900 color-black font-f">Get A Free Quote</h4>

                    <form className={styles.formalign}>
                        <label className={styles.label}>Full Name*</label>
                        <input type="text" className={styles.formfree}  name="first" placeholder="Your name..." />

                        <label className={styles.label}>Email Address*</label>
                        <input type="text" className={styles.formfree} name="last" placeholder="Type Email Address" />

                        <label className={styles.label}>Phone *</label>
                        <input type="tel" className={styles.formfree} name="last" placeholder="123-456-7890" /> 

                        <label className={styles.label}>Message *</label>
                        <textarea className={styles.formfree}  rows="2" placeholder="Type Your Message Here"></textarea>
                        <button className={styles.freebtn} type="submit">Submit</button>
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