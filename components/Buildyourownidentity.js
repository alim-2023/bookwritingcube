import React from 'react'
import styles from '@/styles/Buildyourownidentity.module.css'
import { Container ,Row , Col } from 'react-bootstrap'
import buildyourownidentity from '/public/images/buildyourownidentity/buildyour.png'
import Image from 'next/image'
import Link from 'next/link'

const Buildyourownidentity = () => {
  return (
   <>
    
        <div className={styles.buildyourownidentity}>
<Container>
    <Row className='mb-3'>
        <Col> 
        <h2 className="fw900 font48 color-blue font-f mb-2 t-center">Build Your Own Identity</h2>
        <p className='font15 fw500 font-f t-center'>Marketing requires tactics and subtlety – it isn’t everyone’s cup of tea. There is a bit of creative effort and pitching that is needed. Marketing is a multifaceted job that cannot be done as a standalone task; developing an idea, a strategy for social media campaigns to create hype and launch with influencers are part and parcel of it. Public figures and influencers are great tools for marketing campaigns prior to brand launch. It increases your reach and potential customers, unlike any other form of marketing! Marketing also brings in bigger returns!</p>
        </Col>
    </Row>


    <Row className={` ${styles.media} gy-5 `}>

<Col md={3}>

<div>
                        <h4  className='font17 fw500 color-blue t-center font-f'>Social Media Marketing</h4>
                        <p className='font15 fw500 color-black t-center font-f'>Use Social Media to Market your Brand!</p>
                        <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
</div>

<div className='mt-5'>
                        <h4 className='font17 fw500 color-blue t-center font-f'>Email Marketing Plans</h4>
                        <p className='font15 fw500 color-black t-center font-f'>Increase your Listings and Subscriptions on Email Today!</p>
                        <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                    </div>


</Col>
<Col md={6}>

<Image src={buildyourownidentity} className='img-fluid' alt='book_writing_cube'></Image>

</Col>
<Col md={3}>

    <div className=''>
            <h4  className='font17 fw500 color-blue t-center font-f'>Advertising Plans</h4>
            <p className='font15 fw500 color-black t-center font-f'>Use Social Media to Market your Brand!</p>
             <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
    </div>

    <div className='mt-5'>
        <h4  className='font17 fw500 color-blue t-center font-f'>SEO Services</h4>
        <p className='font15 fw500 color-black t-center font-f'>Our Proven Game-Plan For SEO Success</p>
           <Link className={styles.lets} href='#'>LET'S  DISCUSS </Link> 
                                          
    </div>


</Col>
        
    </Row>
</Container>

        </div>
   
   </>
  )
}

export default Buildyourownidentity