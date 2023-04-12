import React from 'react'
import styles from '@/styles/Requestafreequote.module.css'
import Image from 'next/image'
import { Container ,Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import axios from "axios"; 
import { useState } from "react";
// footer icons
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


const Requestafreequote = () => {

   
    const [score, setScore] = useState('Get a Quote');

    const handleSubmit = async (event) => {
      
        event.preventDefault()

      
        
        const data = {
          first: event.target.first.value,
          email: event.target.last.value,
          phone: event.target.phone.value,
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
    <div className={styles.freequote}>

       <Container>

        <h2 className="fw900 font48 color-blue font-f t-center">Request A Free Quote</h2>

        <form className={styles.formalign} onSubmit={handleSubmit}>
                <Row>
                    <Col md={4}> <input type="text" className={styles.formfree} required  name="first" placeholder='Name' /></Col>
                    <Col md={4}>  <input type="text" className={styles.formfree} required name="last" placeholder='Email' /></Col>
                    <Col md={4}>   <input type="tel" className={styles.formfree} required name="phone" placeholder='Phone' /> </Col>
                </Row>
                <button className={styles.freebtn} type="submit"> {score}  </button>
        </form>

        <Row className={styles.leftemail}>
        <Col md={4}>    <h3 className="fw900 font48 color-blue font-f t-left">Email Us</h3></Col>
        <Col md={4}> 

            <div>
                <h4 className='fw700 font17 color-blue font-f'> For project inquiries only: </h4>
                <p className={styles.bookemail}><MdEmail size={16}  />
                
                <Link className={styles.emailhref} href="mailto:info@bookwritingcube.com">  info@bookwritingcube.com </Link> </p>
            </div>
        
        </Col>
        <Col md={4}>   

        <div>
                <h4 className='fw700 font17 color-blue font-f'> For other inquiries only: </h4>
                <p className={styles.bookemail}><BsFillTelephoneFill size={12}  /> 
                
                <Link className={styles.emailhref} href="tel:(302)883-8877"> (302)883-8877 </Link> </p>
            </div>
        
        
        </Col>
        </Row>




       </Container>

    </div>
   
   </>
  )
}

export default Requestafreequote