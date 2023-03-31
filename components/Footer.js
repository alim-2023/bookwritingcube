import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'


// images 
import footerlogo from '../public/images/footer/logofooter.png'
import protectedlogo from '../public/images/footer/protected.png'
import bbb from '../public/images/footer/bbb.png'
import visa from '../public/images/footer/visa.png'

import logo1 from '../public/images/footer/logo1.png'
import logo2 from '../public/images/footer/logo2.png'
import logo3 from '../public/images/footer/logo3.png'
import logo4 from '../public/images/footer/logo4.png'
import logo5 from '../public/images/footer/logo5.png'
import logo6 from '../public/images/footer/logo6.png'
import logo7 from '../public/images/footer/logo7.png'
import logo8 from '../public/images/footer/logo8.png'
import logo9 from '../public/images/footer/logo9.png'
import logo10 from '../public/images/footer/logo10.png'
import logo11 from '../public/images/footer/logo11.png'
import logo12 from '../public/images/footer/logo12.png'


import logonew1 from '../public/images/footer/logonew1.png'
import logonew2 from '../public/images/footer/logonew2.png'
import logonew3 from '../public/images/footer/logonew3.png'
import logonew4 from '../public/images/footer/logonew4.png'
import logonew5 from '../public/images/footer/logonew5.png'



// footer icons
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

// slick css

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'



const footerlogos1 =
[

  { footerimg1: logo1 },
  { footerimg1: logo2 },
  { footerimg1: logo3 },
  { footerimg1: logo4 },
  { footerimg1: logo5 },
  { footerimg1: logo6 },
  { footerimg1: logo7 },
  { footerimg1: logo8 },
  { footerimg1: logo9 },
  { footerimg1: logo10 },
  { footerimg1: logo11 },
  { footerimg1: logo12 },

];


const footerlogosnew =
[

  { footerlogosfuncy: logonew1 },
  { footerlogosfuncy: logonew2 },
  { footerlogosfuncy: logonew3 },
  { footerlogosfuncy: logonew4 },
  { footerlogosfuncy: logonew5 },

];



const Footer = () => {

    var visalogo = {
        dots: false,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
               
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                 slidesToScroll: 1,
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

      var awardslogo = {
        dots: false,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
               
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                 slidesToScroll: 1,
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

  return (
    <>
<div className={styles.footer}>
<Container>
    <Row>
        <Col md={3}>
           <Image className={styles.footerlogosize} src={footerlogo} alt='footerlogo'></Image>
           <ul className={styles.footermenu1}>
            <li className={ `${styles.footermenulinks} pt-4`}><MdEmail size={16}  />  <Link className={styles.styleset} href="mailto:info@bookwritingcube.com">info@bookwritingcube.com</Link></li>
            <li className={ `${styles.footermenulinks} pt-3`}><BsFillTelephoneFill size={12}  /> <Link className={styles.styleset} href="tel:(302)883-8877"> (302)883-8877 </Link></li>
            <li className={ `${styles.footermenulinks} pt-3`}> <ImLocation2 size={16}  /> <b>Head Office:</b>  2365 SW Pioneer Ln Suite 106, Beaverton, OR 97008, United States </li>
            <li className={ `${styles.footermenulinks} pt-3`}> <ImLocation2 size={16}  /> <b>Operation:</b>  651 N Broad St, Suite 206 Middletown, DE 19709 </li>
           </ul>
        </Col>    
        <Col md={2}>

            <ul className={`${styles.footermenu1} pt-4`}>

                <li className={ `${styles.footermenulinks} pt-4`}><Link className={styles.styleset} href="/">Home</Link></li>

                <li className={ `${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/pricing">Pricing</Link></li>

                <li className={ `${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="#">Contact</Link></li>

                <li className={ `${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="#">Let Get Started</Link></li>

            </ul>

            <ul className={styles.socialiconfooter}>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.facebook.com/bookwritingcube"><RiFacebookBoxFill size={20}  /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://twitter.com/bookwrtgcube"><AiOutlineTwitter size={17}  /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.instagram.com/bookwritingcube_/"><AiOutlineInstagram size={17}  /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.youtube.com/channel/UCD-MEl7xlniOBEbpEVtpcvw"><BsYoutube size={17}  /></Link></li>
                <li className={styles.socaillinks}><Link className={styles.styleset} href="https://www.linkedin.com/company/book-writing-cube/"><FaLinkedinIn size={17}  /></Link></li>
            </ul>

            <Image className='mt-5'  src={protectedlogo} alt='protectedlogo'></Image>
            
        </Col>    
        <Col md={2}>

        <ul className={`${styles.footermenu1} pt-4`}>
                <li className={ `${styles.footermenulinks} pt-4`}><Link className={styles.styleset} href="/book-writing-services">Book Writing</Link> </li>

                <li className={ `${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/book-editing-services">Book Editing</Link></li>

                <li className={ `${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/book-publishing-services">Book Publishing</Link></li>

                <li className={ `${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/ebook-writing-services">Ebook Writing</Link></li>

                <li className={ `${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="#">Book Marketing</Link></li>

                <li className={ `${styles.footermenulinks} pt-3`}><Link className={styles.styleset} href="/book-marketing-services">Digital Marketing</Link></li>
                
            </ul>

            

        </Col>    
        <Col md={2}>
            <Image className='pt-4 img-fluid'  src={bbb} alt='bbb'></Image>
            <h1 className={`${styles.awards} font17 pt-3`}>Awards</h1>
        
        <div className={styles.imgvisa}>

            <Slider {...awardslogo}>

                    {footerlogos1.map((item, i) => {
                                        return(  
                            <div key={i} className={styles.rightlogo}>
                                <Image className='pt-3 img-fluid'  src={item.footerimg1} alt='logo'></Image>
                            </div>
                    )
                    })}
                  
            </Slider>


        </div>
            
        </Col>    
        <Col md={3}>

        <div className={styles.imgvisa}>
           

                    <Slider {...visalogo}>



                    {footerlogosnew.map((item, i) => {
                                        return(  
                            <div key={i} className={styles.rightlogo}>
                                <Image className='pt-4 img-fluid'  src={item.footerlogosfuncy} alt='logonew'></Image>
                            </div>
                    )
                    })}


             
                    
                    </Slider>



            <Image className='pt-3 img-fluid'  src={visa} alt='visa'></Image>


        </div>
            
        </Col>    
    </Row>

    <Row className='pt-3'>
        <Col md={12}>
            <p className='font14 text-center'>© 2023 - All Rights Reserved Bhaoo INC</p>
            <p className='font14 text-center'> <Link className={styles.styleset} href="/terms-of-use">Terms of Use</Link> | <Link className={styles.styleset} href="/privacy-policy">Privacy Policy</Link></p>
        </Col>
    </Row>
</Container>
</div>
    </>
  )
}

export default Footer