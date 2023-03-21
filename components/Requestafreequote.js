import React from 'react'
import styles from '@/styles/Requestafreequote.module.css'
import Image from 'next/image'
import { Container ,Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Link from 'next/link'

// footer icons
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


const Requestafreequote = () => {
  return (
   <>
    <div className={styles.freequote}>

       <Container>

        <h2 className="fw900 font48 color-blue font-f t-center">Request A Free Quote</h2>

        <form className={styles.formalign}>
                <Row>
                    <Col md={4}> <input type="text" className={styles.formfree}  name="first" placeholder='Name' /></Col>
                    <Col md={4}>  <input type="text" className={styles.formfree} name="last" placeholder='Email' /></Col>
                    <Col md={4}>   <input type="tel" className={styles.formfree} name="last" placeholder='Phone' /> </Col>
                </Row>
                <button className={styles.freebtn} type="submit">Get a Quote</button>
        </form>

        <Row>
        <Col md={4}>    <h3 className="fw900 font48 color-blue font-f t-left">Email Us</h3></Col>
        <Col md={4}> 

            <div>
                <h4 className='fw900 font17 color-blue font-f'> For project inquiries only: </h4>
                <p className={styles.bookemail}><MdEmail size={16}  />
                
                <Link className={styles.emailhref} href="mailto:info@bookwritingcube.com">  info@bookwritingcube.com </Link> </p>
            </div>
        
        </Col>
        <Col md={4}>   

        <div>
                <h4 className='fw900 font17 color-blue font-f'> For other inquiries only: </h4>
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