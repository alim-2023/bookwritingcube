import React from 'react'
import styles from '@/styles/Freequote.module.css'
import Link from 'next/link'

const Freequote = (props) => {




    const handleSubmit = async (event) => {
      
        event.preventDefault()
    

        const data = {
          first: event.target.first.value,
          email: event.target.last.value,
          phone: event.target.phone.value,
          message: event.target.message.value,
        }
    
        

        const JSONdata = JSON.stringify(data)

        alert(JSONdata);
    

        // const endpoint = '/api/form'
    
  
        // const options = {
        
        //   method: 'POST',
  
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
  
        //   body: JSONdata,
        // }
    
    
        // const response = await fetch(endpoint, options)
    

        // const result = await response.json()
        // alert(`Is this your full name: ${result.data}`)
    

 }



  return (
   <>
   
   <div className={styles[props.formsaspire]}>
                 <h4 className="t-center font30 fw900 color-black font-f">Get A Free Quote</h4>

                    <form className={styles.formalign}  onSubmit={handleSubmit}>
                        <label className={styles.label}>Full Name*</label>
                        <input type="text" className={styles.formfree}  name="first" placeholder="Your name..." />

                        <label className={styles.label}>Email Address*</label>
                        <input type="text" className={styles.formfree} name="last" placeholder="Type Email Address" />

                        <label className={styles.label}>Phone *</label>
                        <input type="tel" className={styles.formfree} name="phone" placeholder="123-456-7890" /> 

                        <label className={styles.label}>Message *</label>
                        <textarea className={styles.formfree} name="message"  rows="2" placeholder="Type Your Message Here"></textarea>
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