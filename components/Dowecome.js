import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Dowecome.module.css'
import Link from 'next/link'
import Image from 'next/image'
import howdoimg from '/public/images/howdowecomeintobeing/howdowecomeintobeing.png'
const Dowecome = (props) => {
  return (
    <>
    
    <div className={styles[props.Dowecome]}>
        <Container>
            <Row className={styles.middle}>
                <Col md={6}>

                  <div className={styles.dowemargin}> 
                     <h3 className="fw900 font40 color-blue font-f mb-2">{props.title}</h3>

                     { props.subheading ?
                        <h4 className={`${styles.subheading} font17 fw500 color-black font-f`}>{props.subheading}</h4>
                     :
''
}

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
                        </div> 
                    
                </Col>    
                <Col md={6}>

               
  <div className={styles.image}>
     <Image src={props.image} width={750} height={613} className={`${styles.imgshowdow} img-fluid`} alt='book_writing_cube'></Image>
  </div>

                    
                </Col>    
            </Row>
        </Container>



    </div>
    
    </>
  )
}

export default Dowecome