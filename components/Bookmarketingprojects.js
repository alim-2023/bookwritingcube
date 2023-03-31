import React from 'react'
import styles from '@/styles/Bookmarketingprojects.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Slider from 'react-slick'
import Image from 'next/image'

import fb1 from '/public/images/fb/tiffany-amazon.png'
import fb2 from '/public/images/fb/tiffany-facebook.png'
import fb3 from '/public/images/fb/inta.png'


// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Bookmarketingprojects = () => {

    var bookmarketingprojects = {
        dots: false,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      };



  return (
    <>
        <div className={styles.audiobookrecordingprojects}>
        <Container>
            <Row>
                <Col md={12}>
                <h2 className='font48 fw900 t-center color-blue font-f'>Our Latest Book Marketing Projects</h2>
                <h2 className='font17 fw600 t-center font-f mb-5'>Let Our Book Marketing Team Help You</h2>
                </Col>
            </Row>

          
            <Slider {...bookmarketingprojects}>


            <div>
               <video controls className={`${styles.bgVideo}`}  muted 
                src="/images/recording/04.m4v" type="video/mp4"></video>
            </div>  

           
            <div>
                    <h3 className="font30 fw900 font-f color-black">Running With Rollie</h3>

                    <h4 className='font20 fw500 text-transform'>Jeffrey Bradley​</h4>
                    <p className='color-tw font15 fw500'>
                    Rollie, a real-life Golden Retriever, inspired West Point graduate Jeffrey Bradley to write “Running with Rollie” based on their experiences together and Jeff’s observations of Soldiers returning from war without family support. Jeff picked Rollie up at the animal shelter in Rolla, Missouri after returning from Operation Iraqi Freedom in 2003 and the pair started..
                    </p>

                    <div className='d-flex'>

                      <Image src={fb1} className='img-fluid' alt='amazon'></Image>
                      <Image src={fb2} className='img-fluid' alt='amazon1'></Image>
                      <Image src={fb3} className='img-fluid' alt='amazon2'></Image>

                    </div>

                    
            </div> 
                     
            



            <div>
               <video controls className={`${styles.bgVideo}`}  muted 
                src="/images/recording/01.m4v" type="video/mp4"></video>
            </div> 

              <div>
                    <h3 className="font30 fw900 font-f color-black">VIP FRUITSs</h3>
                    <h4 className='font20 fw500 text-transform'>ADAM MUSSELMANI​</h4>

                    <p className='color-tw font15 fw500'>
                    Adam Musselmani is a fifth-grader in Norfolk, Virginia. The youngest in his family, Musselmani has two brothers, a sister, and two cats. He is passionate about drawing and creating comic books and animation. He also plays soccer, tennis, and violin for the Bay Youth Orchestra. His superpower is speed-solving the Rubik’s Cube, which he can do in less than twenty-four seconds. vip-fruits.com.
                    </p>
            </div> 
                     
             


            <div>
               <video controls className={`${styles.bgVideo}`}  muted 
                src="/images/recording/03.m4v" type="video/mp4"></video>
            </div>  
                 <div>
                    <h3 className="font30 fw900 font-f color-black">Say Thanks: Today and Everyday</h3>

                    <h4 className='font20 fw500 text-transform'>Dante S Amato​</h4>
                    <p className='color-tw font15 fw500'>
                   
                    We gather together for the special moments in Life whether it's a holiday, a wedding, or even a birthday. Document countless life moments for present and future generations. Recognize the abundance of value around you. Appreciate yourself and others through realizations and memories........ not only today, but everyday.              
                    </p>
            </div> 
                     
            

            <div>
               <video controls className={`${styles.bgVideo}`}  muted 
                src="/images/recording/02.m4v" type="video/mp4"></video>
            </div>  

            <div>
                    <h3 className="font30 fw900 font-f color-black">This One's For You</h3>

                    <h4 className='font20 fw500 text-transform'>TIFFANY​</h4>
                    <p className='color-tw font15 fw500'>
                    Losing a loved one is never easy. I've spent a lot of time trying to figure out how to make it easier. Reminiscing of the good times spent together is what I found to be the most helpful. So one day, I decided to write them down. This book serves to highlight the happier memories I hold of my loved ones who've departed. A book that was initially intended to share my favorite moments with...
                    </p>
            </div> 
                     
          

        
                </Slider> 

        </Container>

        </div>
    </>
  )
}

export default Bookmarketingprojects