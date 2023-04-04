import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Blog.module.css'
import Image from 'next/image'
import Link from 'next/link'

import blogimage4 from '/public/images/blogimage/4.png'
import blogimage5 from '/public/images/blogimage/5.png'
import blogimage6 from '/public/images/blogimage/6.png'


const Bloglisting = () => {

    const bloglisting=[
        {
          image: blogimage4,
          title:'Rising Above the Competition: 8 Advanced Strategies for KDP Book Promotion and Marketing on Amazon',
          read:'Read More',
        },
        {
            image: blogimage5,
            title:'Maximizing Your KDP Royalties: A Guide to Book Pricing Strategies',
            read:'Read More',
        },
        {
            image: blogimage6,
            title:'Maximizing Your Amazon Book Promotion: Advanced Tactics for Increased Book Sales',
            read:'Read More',
        },
        {
            image: blogimage6,
            title:' Maximizing Your Amazon Book Promotion: Advanced Tactics for Increased Book Sales',
            read:'Read More',
        },
        {
            image: blogimage6,
            title:' Maximizing Your Amazon Book Promotion: Advanced Tactics for Increased Book Sales',
            read:'Read More',
        },
        {
            image: blogimage6,
            title:' Maximizing Your Amazon Book Promotion: Advanced Tactics for Increased Book Sales',
            read:'Read More',
        },
      ]


  return (
    <>

    
    <div className={styles.bloglisting}>

    <Container>
        <Row className='gy-4'>
           
        {bloglisting.map((item, i) =>
            <Col md={4} key={i}>
            <div className={styles.bloglist}>
            <Image src={item.image} className='img-fluid' priority alt="blog1"></Image>
            <div className={styles.cardbodylist}>
                <Link className='textdocationnone' href="#">
                <h5 className='fw700 font17 color-blue font-f'> {item.title} </h5> </Link>
                <Link className={styles.blogbtn} href="#">{item.read}</Link>
             </div>
                </div>
            </Col>
 )}


        </Row>
    </Container>


    </div>
    
    </>
  )
}

export default Bloglisting