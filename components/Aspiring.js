import React from 'react'
import styles from '@/styles/Aspiring.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Freequote from '../components/Freequote'


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

                            <Freequote 
                              formsaspire='formsaspire'
                            />

                    </Col>
                </Row>
            </Container>




        </div>
    
    </>
  )
}

export default Aspiring