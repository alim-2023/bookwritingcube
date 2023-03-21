import React from 'react'
import styles from '@/styles/Whatourclients.module.css'
import Image from 'next/image'
import { Container } from 'react-bootstrap'






// footer icons
import { AiFillStar } from 'react-icons/ai';

// images
import whatour from '../public/images/whatourclients/whatour.png'


// slick css

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Whatourclients = () => {



 

        var whatourclients = {
            dots: true,
            arrows:true,
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
    <div className={styles.ourclients}>
      <Container>
       <h2 className='fw900 font48 color-blue font-f t-center'>What Our Clients Says About Us</h2>



       <Slider {...whatourclients}>
                     
                   
                     <div >
                        
                       <div className={styles.whatclientlogo}> 

                       <Image className={`${styles.quit} img-fluid`}  src={whatour}  alt='whatour'></Image>
                       
                        </div> 

                         <p className={`${styles.looking} font15 fw500 font-f t-center`}>
                          
                          If you are looking for professional writers, I highly recommend
                                    the Book Writing Cube services. Affordable prices. Mark Rivera and his team are
                                    superb! They explained the entire process before starting my manuscript and are
                                    guiding me in every step. I am very pleased with their work.
                                    
                                    </p>

                                    <p className={styles.mark}><b>Sharon Mondier</b></p>
                                    <p className='font15 fw500 font-f t-center'>US</p>



                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>

                      

                                  
                     </div>
                     <div >
                           
                       <div className={styles.whatclientlogo}>   <Image className={`${styles.quit} img-fluid`}  src={whatour}  alt='whatour1'></Image> </div> 
                         <p className={`${styles.looking} font15 fw500 font-f t-center`}>This was my first book to be published, I was extremely nervous,
                                    I wasn’t sure I could trust the company I was sending my money to.
                                    Book Writing Cube has EXCEEDED my expectations. Mark and his team are/were very
                                    attentive to my requests, they have presented several illustrations based on my
                                    vision, they have edited and presented ideas to make my story stronger, I could not
                                    be more pleased with their honesty and their commitment. Getting a book published is
                                    no easy task and I have procrastinated for years due to uncertainty. I’m now
                                    relieved that I trusted this team to do as they said and they have.
                                </p>
                                    <p className={styles.mark}><b>Elizabeth Waldorf</b></p>
                                    <p className='font15 fw500 font-f t-center'>US</p>

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>

                     <div >
                            
                       <div className={styles.whatclientlogo}>   <Image className={`${styles.quit} img-fluid`}  src={whatour}  alt='whatour2'></Image> </div> 
                         <p className={`${styles.looking} font15 fw500 font-f t-center`}>This is the first time I’ve worked with Book Writing Cube and I’m
                                    happy that I chose to work with them.
                                    I am self-publishing my book for the first time and I didn’t know what to expect. To
                                    be honest I happen to come by Book Writing Cube by accident. I was researching
                                    websites that helped with self-publishing and I clicked on it and accidentally
                                    clicked on the chat icon.
                                    Someone responded and at first I didn’t write anything back. But then I decided to
                                    take a chance and the person I talked to put me in contact with Mark Rivera.
                                    Mark and his team have been very helpful during this whole process. They take my
                                    suggestions and show me where I can make improvements.</p>
                                    <p className={styles.mark}><b>Ana</b></p>
                                    <p className='font15 fw500 font-f t-center'>US</p>

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>

                     <div >
                            
                       <div className={styles.whatclientlogo}>   <Image className={`${styles.quit} img-fluid`}  src={whatour}  alt='whatour3'></Image> </div> 
                         <p className={`${styles.looking} font15 fw500 font-f t-center`}>This is a fantastic business! Their editing team did a great job
                                    on the design of the book cover, and formatting of the text for uploading onto KDP
                                    for print and ebook made it feasible for me to swiftly self-publish my book. Their
                                    staff was quick to reply to my queries, sometimes the same day, and provided me with
                                    excellent advice throughout. Furthermore, in comparison to many other publishing
                                    firms, their services were inexpensive. I'd recommend them to everybody who's just
                                    started out with their writing career!</p>
                                    <p className={styles.mark}><b>Mark M. Cole</b></p>
                                    <p className='font15 fw500 font-f t-center'>US</p>

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>

                     <div >
                       
                     <div className={styles.whatclientlogo}>   <Image className={`${styles.quit} img-fluid`}  src={whatour}  alt='whatour4'></Image> </div> 
                         <p className={`${styles.looking} font15 fw500 font-f t-center`}>BWC made my first book experience really easy. Mark was there
                                    with me whenever I had questions or revisions to be made and just overall helpful.
                                    His team is supremely skillful and so their illustrations are one of the best I've
                                    seen so far! BWC bought my characters to life in a way I couldn't have imagined. I'd
                                    recommend Book Writing Cube to everyone now!</p>


                                    <p className={styles.mark}><b>Jason Bill</b></p>
                                    <p className='font15 fw500 font-f t-center'>US</p>

                                    <p className={styles.stars}><AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /> <AiFillStar size={20}  /></p>
                     </div>
                    

               

                 
                    
         </Slider> 


      </Container>

    </div>
   </>
  )
}

export default Whatourclients