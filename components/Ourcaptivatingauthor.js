import React from 'react'
import styles from '@/styles/Ourcaptivatingauthor.module.css'
import { Container ,Row,Col } from 'react-bootstrap'
import Image from 'next/image'

const Ourcaptivatingauthor = (props) => {
  return (
    <>
        <div className={styles.ourcaptivatingauthor}>

            <Container>
                <Row>
                    <Col md={12}>
                    <h2 class="fw900 font48 color-blue font-f t-center">
               {props.title}
            </h2>

            <h4 class="font18 fw500 font-f t-center">
               {props.text}
            </h4>
                    </Col>

                  <div className={styles.capimages}>
                        <Image src={props.img1} className='img-fluid' alt='book_writing_cube' ></Image>
                        <Image src={props.img2} className='img-fluid' alt='book_writing_cube' ></Image>
                        <Image src={props.img3} className='img-fluid' alt='book_writing_cube' ></Image>
                  </div>
                </Row>
            </Container>

        </div>
    </>
  )
}

export default Ourcaptivatingauthor