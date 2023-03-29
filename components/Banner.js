import React from 'react'
import styles from '@/styles/Banner.module.css'
import { Container, Row , Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import Modal from 'react-bootstrap/Modal';
import  { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs'
import Button from 'react-bootstrap'

// images

import banslider1 from '../public/images/bannerimages/banslider1.png'
import banslider2 from '../public/images/bannerimages/banslider2.png'
import banslider3 from '../public/images/bannerimages/banslider3.png'
import banslider4 from '../public/images/bannerimages/banslider4.png'

const Banner = (props) => {

  const bannerlogo =
  [
  
    { banlogo:banslider1 },
    { banlogo:banslider2 },
    { banlogo:banslider3 },
    { banlogo:banslider4 },
    { banlogo:banslider1 },
    { banlogo:banslider2 },
    { banlogo:banslider3 },
    { banlogo:banslider4 },

  
  ];


  var bannerslider = {
    dots: false,
    arrows:false,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
  <>
      <div className={styles[props.bannershome]}>

      <Container>
         <Row>
              <Col md={7} className={styles[props.alignclass]}>

                <div className={styles.homebannertext}>

                  { props.title ?
                  <h1 className='font48 fw900 color-blue font-f'> {props.title} </h1>
                  : 
                  ''
                  }

                  { props.text ?

                  <p className='fw500 font18 color-black font-f mt-4'>{props.text}</p>
                  : 
                  ''
                  }

                { props.subtext ?

                <p className='fw500 font18 color-black font-f mt-4'> <strong>{props.publishers }</strong> {props.subtext}</p>
                : 
                ''
                }

                  { props.subtext1 ?

                  <p className='fw500 font18 color-black font-f'> {props.subtext1}</p>
                  : 
                  ''
                  }

                  { props.subtext2 ?

                  <p className='fw500 font18 color-black font-f'> {props.subtext2}</p>
                  : 
                  ''
                  }

                  { props.subtext3 ?

                  <p className='fw500 font18 color-black font-f'> {props.subtext3}</p>
                  : 
                  ''
                  }

                  { props.subtext4 ?

                  <p className='fw500 font18 color-black font-f'> {props.subtext4} <strong>{props.subtext4bold }</strong> </p>
                  : 
                  ''
                  }

                  { props.discuss ? 
                  <div className='mt-5'>
                    <Link className={styles.discuss} href="#">{props.discuss}</Link>  
                    <Link className={styles.homenumer} href="tel:(302) 883-8877"> {props.homebannernum}</Link>

                    
                    { props.processs ? 

                      <Link onClick={handleShow} className={` ${styles.homenumer} ${styles.new1} `} href='#'> <BsFillPlayFill size={25}  /> {props.processs} </Link>

                    :
                    '' 
                    }

                  </div>
                  : 
                  ''
                  }

                  

{ props.homebanlogos ?  
                  <div className={styles.homebannerlogo}>
                      <Image className={`${styles.homelogoimgnone} img-fluid`} src={props.homebanlogos} alt='homebanlogos' ></Image>


                   <Slider {...bannerslider} className='mt-5'>
                   {bannerlogo.map((item, i) => {
                                  return(  
                      <div key={i}>
                        <Image className='pt-3 img-fluid'  src={item.banlogo} alt='bannerlogo'></Image>
                      </div>
                    )
                  })}
                   </Slider>



                  </div>
: 
''
}
                </div>




              </Col>
         </Row>
      </Container>


      <Modal className='modopp'
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        animation={false}
    
      >
     <span onClick={handleClose} className={styles.crossclose}>x</span>
        <Modal.Body className='modalprocess'>
        <video controls className={`${styles.bgVideo1}`} autoPlay muted loop src="/images/process-combine.mp4" type="video/mp4"></video>
        </Modal.Body>
      
      </Modal>


        
     </div>
  </>
  )
}

export default Banner