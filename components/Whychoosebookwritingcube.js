import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Whychoosebookwritingcube.module.css'
import Image from 'next/image'
import Link from 'next/link'




const Whychoosebookwritingcube = (props) => {
  return (
    <>
    
    <div className={styles[props.whychooseclass]}>
    <Container>
            <Row className={styles.middle}>

                <Col md={6}>

                    <div className={styles.image}>
                        <Image src={props.image} className={`${styles.imgshowdow} img-fluid`} alt='image'></Image>
                    </div>
                               
                </Col>    


                <Col md={6}>

               
                    <h3 className="fw900 font40 color-blue font-f mb-2">{props.title}</h3>
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
            </Row>
        </Container>



    </div>
    
    </>
  )
}

export default Whychoosebookwritingcube