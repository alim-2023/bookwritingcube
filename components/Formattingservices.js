import React from 'react'
import styles from '@/styles/Formattingservices.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'

const Formattingservices = () => {
  return (
    <>
        <div className={styles.formattingservices}>
            <Container>
                <Row className={styles.shape}>
                    <Col md={10}>

                        <h2 className='fw900 font48 color-blue font-f t-center'> Our Book Editing And Formatting Services Shape Your Manuscript Into A Stellar Piece Of Literary Art! </h2>

                        <p className='font20 fw500 font-f t-center'>While carrying off <Link className='textdocationnone'  href='/book-editing-services'>ebook editing services</Link>, our online book editors pay close attention to the tiniest of details to give your story the personality it needs without compromising the idea or plot.</p>

                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Formattingservices