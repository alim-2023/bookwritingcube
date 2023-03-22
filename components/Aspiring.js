import React from 'react'
import styles from '@/styles/Aspiring.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'


const Aspiring = (props) => {
  return (
    <>
    
        <div className={styles.aspiring}>

            <Container>
                <Row className={styles.middle}>
                    <Col md={8}>

                    <h2 className="fw900 font48 color-blue font-f mb-2">{props.title}</h2>
                     <p className='font15 fw500 font-f'>{props.text}</p>
                        { props.subtext ?

                            <p  className='font15 fw500 font-f'>{props.subtext}</p>
                            :
                                ''
                        }


                    <div className='mt-4'>
                        <Link className={styles.asdiscuss} href="#">{props.discuss}</Link>
                        <Link className={styles.asnumber} href="tel:+1-302-883-8877"> {props.number}</Link>
                        
                    </div>

                    </Col>
                    <Col md={4}>
<div className={styles.formsaspire}>
<h4 className="t-center font30 fw900 color-black">
                                Get A Free Quote
                            </h4>

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


</div>

                    </Col>
                </Row>
            </Container>




        </div>
    
    </>
  )
}

export default Aspiring