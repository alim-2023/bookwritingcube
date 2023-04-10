import React from 'react'
import styles from '@/styles/Blogclientssays.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Freequote from '../components/Freequote'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// footer icons
import { AiFillStar } from 'react-icons/ai';

// images
import whatour from '../public/images/whatourclients/set.png'

// slick css

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Blogclientssays = () => {


  const [clickto, setclicktoggle1] = useState(false);

  function toggle() {

    setclicktoggle1((prevState) => !prevState);
  

  }


    var whatourclients = {
        dots: true,
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
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


  return (
    <>
        <div className={` ${styles.blogclientssays} blogslide`}>

    <Container>
        <Row>
            <Col md={7}>
            <h2 className='color-blue font48 fw900 font-f'> What Our Clients Says  About Us</h2>

            <Slider {...whatourclients}>
                     
                   
                     <div >
                        
                       <div className={styles.whatclientlogo}> 

                       <Image className={`${styles.quit} img-fluid`} width={30}  src={whatour}  alt='book_writing_cube'></Image>
                       
                        </div> 

                         <p className={`${styles.looking} font15 fw500 color-black font-f `}>
                          
                         This is the first time I’ve worked with Book Writing Cube
                                                            and I’m happy that I chose to work with them.
                                                            I am self-publishing my book for the first time and I didn’t
                                                            know what to expect... <span className={ clickto ?  `` : `${styles.active1}` } >
                                                            To be honest I happen to come by Book Writing Cube by accident. I was researching websites that helped with self-publishing and I clicked on it and accidentally clicked on the chat icon. Someone responded and at first I didn’t write anything back. But then I decided to take a chance and the person I talked to put me in contact with Mark Rivera. Mark and his team have been very helpful during this whole process. They take my suggestions and show me where I can make improvements. So far I am very satisfied with the work they have been doing. I know that they will do everything they can to make my debut book a success. I am very confident of that.
                                                            </span>

                                                            <span onClick={toggle} className={styles.more} href="#">   
                                                              Read  { clickto ?  `Less` : `More` }</span>
                                    
                                    </p>



                                    <p className={styles.mark}><b>Sharon Mondier - US</b></p>
                               



                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>

                      

                                  
                     </div>
                     <div >
                           
                       <div className={styles.whatclientlogo}>   <Image className={`${styles.quit} img-fluid`} width={30}   src={whatour}  alt='book_writing_cube'></Image> </div> 
                         <p className={`${styles.looking} font15 fw500 color-black font-f `}>
                         Everythign was managed in the most professional and convenient way. They are amazing with communications and answering all necessary questions. They deeply explained everything and guided me through the entire process. A big thank you to the team of Book Writing Cube.
                                </p>
                                    <p className={styles.mark}><b>Elizabeth Waldorf - US</b></p>
                         

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>

                     <div >
                            
                       <div className={styles.whatclientlogo}>   <Image className={`${styles.quit} img-fluid`}  width={30}  src={whatour}  alt='book_writing_cube'></Image> </div> 
                         <p className={`${styles.looking} font15 fw500 color-black font-f `}>
                                  
                         As a self-published author, I had a hard time effectively promoting my book. But Book Writing Cube's marketing team helped turn my book into a success!
                                  
                                  </p>
                                    <p className={styles.mark}><b>Ana  - US</b></p>
                                 

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>

                     <div >
                            
                       <div className={styles.whatclientlogo}>   <Image className={`${styles.quit} img-fluid`} width={30}   src={whatour}  alt='book_writing_cube'></Image> </div> 
                         <p className={`${styles.looking} font15 fw500 color-black font-f `}>

                         My experience working with Book Writing Cube was great and Mark was a huge help! Looking forward to working with them again in the future.
                         </p>
                                    <p className={styles.mark}><b>Mark M. Cole - US</b></p>
                              

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>

                     <div >
                       
                     <div className={styles.whatclientlogo}>   <Image className={`${styles.quit} img-fluid`} width={30}  src={whatour}  alt='book_writing_cube'></Image> </div> 
                         <p className={`${styles.looking} font15 fw500 color-black font-f `}>

                         Book Writing Cube's graphic designers made the most beautiful book cover for my book. I was shocked at how accurately they had portrayed my ideas.

                         </p>


                                    <p className={styles.mark}><b>Jason Bill - US</b></p>
                     

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>
                    

               

                 
                    
         </Slider> 


            </Col>
            <Col md={5}>
                 <Freequote  
                 formsaspire = 'blogsays'
                 show= 'yes'
                 
                 />
            </Col>
        </Row>
    </Container>

        </div>
    </>
  )
}

export default Blogclientssays