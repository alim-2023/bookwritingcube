import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Blog.module.css'
import Image from 'next/image'
import Link from 'next/link'

import blogimage4 from '/public/images/blogimage/4.png'
import blogimage5 from '/public/images/blogimage/5.png'
import blogimage6 from '/public/images/blogimage/6.png'


const Bloglisting = () => {
  return (
    <>

    
    <div className={styles.bloglisting}>

    <Container>
        <Row className='gy-4'>
            <Col md={4}>
            <div className={styles.bloglist}>
            <Image src={blogimage4} className='img-fluid' priority alt="blog1"></Image>
            <div className={styles.cardbodylist}>
                <a className='textdocationnone' href="#">
                <h5 className='fw700 font17 color-blue font-f'> Rising Above the Competition: 8 Advanced Strategies for KDP Book Promotion and Marketing on Amazon </h5> </a>

                <Link className={styles.blogbtn} href="#">Read More</Link>
                        </div>

                       


                </div>

               
            </Col>

            <Col md={4}>
            <div className={styles.bloglist}>
            <Image src={blogimage5} className='img-fluid' priority alt="blog1"></Image>
            <div className={styles.cardbodylist}>
                <a className='textdocationnone' href="#">
                <h5 className='fw700 font17 color-blue font-f'> Maximizing Your KDP Royalties: A Guide to Book Pricing Strategies </h5> </a>
                <Link className={styles.blogbtn} href="#">Read More</Link>
                        </div>


                </div>

               
            </Col>


            <Col md={4}>
            <div className={styles.bloglist}>
            <Image src={blogimage6} className='img-fluid' priority alt="blog1"></Image>
            <div className={styles.cardbodylist}>
                <a className='textdocationnone' href="#">
                <h5 className='fw700 font17 color-blue font-f'> Maximizing Your Amazon Book Promotion: Advanced Tactics for Increased Book Sales </h5> </a>
                <Link className={styles.blogbtn} href="#">Read More</Link>
                        </div>
                </div>
            </Col>

            <Col md={4}>
            <div className={styles.bloglist}>
            <Image src={blogimage6} className='img-fluid' priority alt="blog1"></Image>
            <div className={styles.cardbodylist}>
                <a className='textdocationnone' href="#">
                <h5 className='fw700 font17 color-blue font-f'> Maximizing Your Amazon Book Promotion: Advanced Tactics for Increased Book Sales </h5> </a>
                <Link className={styles.blogbtn} href="#">Read More</Link>
                        </div>
                </div>
            </Col>


            <Col md={4}>
            <div className={styles.bloglist}>
            <Image src={blogimage6} className='img-fluid' priority alt="blog1"></Image>
            <div className={styles.cardbodylist}>
                <a className='textdocationnone' href="#">
                <h5 className='fw700 font17 color-blue font-f'> Maximizing Your Amazon Book Promotion: Advanced Tactics for Increased Book Sales </h5> </a>
                <Link className={styles.blogbtn} href="#">Read More</Link>
                        </div>
                </div>
            </Col>

            <Col md={4}>
            <div className={styles.bloglist}>
            <Image src={blogimage6} className='img-fluid' priority alt="blog1"></Image>
            <div className={styles.cardbodylist}>
                <a className='textdocationnone' href="#">
                <h5 className='fw700 font17 color-blue font-f'> Maximizing Your Amazon Book Promotion: Advanced Tactics for Increased Book Sales </h5> </a>
                <Link className={styles.blogbtn} href="#">Read More</Link>
                        </div>
                </div>
            </Col>



        </Row>
    </Container>


    </div>
    
    </>
  )
}

export default Bloglisting