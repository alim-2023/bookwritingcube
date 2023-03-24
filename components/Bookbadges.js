import React, { useState } from 'react'
import styles from '@/styles/Bookbadges.module.css'
import { Container, Row , Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Freequote from '../components/Freequote'

// images
import bookbadges1 from '/public/images/bookbadges/1.png'
import bookbadges2 from '/public/images/bookbadges/2.png'


const Bookbadges = (props) => {


const [show, setShow] = useState(false);

function modal(events) {   event.preventDefault(); setShow(true);  }
function closemodal() { setShow(false); }


const data =[

    {
        title: 'Book',
        subtitle:'Marketing', 
        para:'We will help market your book so that it almost guarantees that you grow your audience drastically. Building custom marketing strategies is what we do best!',
        btnname:'Get A Quote',
        bookbadges1:  bookbadges1,
    },
    
    {
        title: 'Book',
        subtitle:'Publishing', 
        para:'Our book publishers are the best in the business at what they do. We will make all your dreams come true by making you the next bestselling author.',
        btnname:'Get A Quote',
        bookbadges1:  bookbadges2,
    },
 


];




  return (
    <>
    
    <div className={styles.bookbadges}>

    <Container className='bookalign'>
        <Row className={styles.bookrow}>
        

        {data.map((post ,i) => (
            <Col md={6} key={i}>
                <Row className={styles.bookcontent} >
                    <Col md={8}>
                    <div>

                        <h2 className="fw900 font40 color-blue font-f"> { post.title}</h2>
                        <h4 className={`${styles.marketing} fw500 font20 font-f`}> { post.subtitle}</h4>
                        <p className='font15 fw500 color-black font-f mb-4'>{post.para}</p>
                        <Link onClick={modal} className={styles.quote} href="">{post.btnname}</Link>

                            </div>
                    </Col>
                    <Col md={4}>
                        <Image src={post.bookbadges1} alt='bookbadges1' className='img-fluid'></Image>
                    </Col>
                </Row>
            </Col>
                ))}
        </Row>
    </Container>

    <Modal show={show} onHide={closemodal} className={styles.modalnew}>
        <Modal.Body> <Freequote/> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>


    </div>
    
    </>
  )
}

export default Bookbadges