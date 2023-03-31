import React, { useState } from 'react'
import styles from '@/styles/Bookbadges.module.css'
import { Container, Row , Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Freequote from './Freequote'

// images
import bookbadges1 from '/public/images/bookbadges/1.png'
import bookbadges2 from '/public/images/bookbadges/2.png'
import bookbadges3 from '/public/images/bookbadges/3.png'
import bookbadges4 from '/public/images/bookbadges/4.png'
import bookbadges5 from '/public/images/bookbadges/5.png'
import bookbadges6 from '/public/images/bookbadges/6.png'
import bookbadges7 from '/public/images/bookbadges/7.png'
import bookbadges8 from '/public/images/bookbadges/8.png'


const Bookbadgesbook = (props) => {


const [show, setShow] = useState(false);

function modal(events) {   event.preventDefault(); setShow(true);  }
function closemodal() { setShow(false); }


const data =[

    {
        title: 'Book',
        subtitle:'Cover Design', 
        para:'Have your book trailers created by the best designers in the industry. We create elaborate cinematic videos for your books that are intricate and creative simultaneously, which helps build your book’s awareness.',
        btnname:'Get A Quote',
        bookbadges1:  bookbadges3,
    },
    
    {
        title: 'Premium',
        subtitle:'Book Videos', 
        para:'Our book publishers are the best in the business at what they do. We will make all your dreams come true by making you the next bestselling author.',
        btnname:'Get A Quote',
        bookbadges1:  bookbadges4,
    },


    {
        title: 'Author',
        subtitle:'Website', 
        para:'Have your very own website created where you can showcase the person behind the book. You can build a huge fan following just with the help of your website.',
        btnname:'Get A Quote',
        bookbadges1:  bookbadges5,
    },
 

    {
        title: 'Professional',
        subtitle:'Audiobooks', 
        para:'You can make your audiobooks simply by contacting us on this website. It’s that easy! We welcome any queries you might have with open arms.',
        btnname:'Get A Quote',
        bookbadges1:  bookbadges6,
    },

    {
        title: 'Custom',
        subtitle:'Book Illustrations', 
        para:'We can help create your customer illustrations at just a fraction of the cost! We will provide the best quality of products at the most affordable prices.',
        btnname:'Get A Quote',
        bookbadges1:  bookbadges7,
    },

    {
        title: 'Custom',
        subtitle:'Book Editing', 
        para:'We know that every word counts, so we`re committed to crafting captivating stories for any length and style.',
        btnname:'Get A Quote',
        bookbadges1:  bookbadges8,
    },
 
 


];




  return (
    <>
    
    <div className={styles.bookbadges}>

    <Container className='bookalign'>
        <Row className={` ${styles.bookrow} gy-3 `}>
        

        {data.map((post ,i) => (
            <Col md={6} key={i}>
                <Row className={`${styles.bookcontent} content`} >
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

export default Bookbadgesbook