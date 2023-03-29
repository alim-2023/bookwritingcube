import React from 'react'
import styles from '@/styles/Bookpublishingservices.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import bookediting from '../public/images/bookpublishingservices/book-editing.png'
import pubicon01 from '../public/images/bookpublishingservices/pub-icon01.png'
import pubicon02 from '../public/images/bookpublishingservices/pub-icon02.png'
import book from '../public/images/bookpublishingservices/book.png'


const Bookpublishingservicesweoffer = () => {
    const card =
        [

            {
                image: bookediting,
                title: 'Self Publication',
                subTitle: "Self Publication",
                pra: "This service is applicable for those looking to publish their creative pieces. We will be there to guide you through every step of the way! Our team of experts will provide you will necessary resources and assistance including marketing and distribution strategies so that you never have to feel overwhelmed by the burden of responsibility that comes with self publication. There will be zero intervention of any other party, you get to choose how you want your work to be published!"

            },
           
            {
                image: pubicon01,
                title: 'Paperback Publication',
                subTitle: "Paperback Publication",
                pra: "We believe in making your book available across the globe. We ensure that your book stays on-demand and readily available in hardcover and paperback formats. Our extensive marketing and distribution approaches make sure your book accessible on every platform. It enables the readers to find all that they need through one source. Our devoted team of top professionals."

            },

            {
                image: pubicon02,
                title: 'Online Publication',
                subTitle: "Online Publication",
                pra: "We pride ourselves in turning average writers into published authors by giving them control over every aspect of their creative concept and publishing objective for an eBook – from brainstorming through editing. We are more than just book publishers, we help bring out your marketing plan for a successful launch and greater returns!"

            },

          
               {
                image: book,
                title: "Other Self Publishing Services",
                subTitle: "Other Self Publishing Services",
                pra: "Certified partners with the “Amazon Self Publishing Services”. Being Amazon's Self Publishing Partners gives us the edge to get the Fastest Turn around time to publish book on amazon. Self Publishing doesn’t necessarily mean that you will never be contacted by a Major Traditional Publishing House, elf Publishing gives you the freedom to control every aspect of the process as per your vision. Publish book on amazon."

            },

          

           
        ]
    return (
        <>
            <div className={styles.comprehensive}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <h2 className="fw900 font48 color-blue font-f t-center">Book Publishing Services That We Have To Offer</h2>

                            <p className="font16 fw500 font-f t-center color-black">We offer a wide range of self publishing services. There are several options you can choose from and get a final product in your required time frame at very affordable prices! We have packages designed to cater to every budget, so your literary vision can turn into a reality!</p>

                        </Col>

                    </Row>

                    <Row className='mt-4'>
                        {card.map((item, i) => {
                            return(
                                <Col className={`${styles.post} col-md-3`}  key={i}>

                         
                                    <div className={styles.flipcard}>
                                        <div className={styles.flipcardinner}>
                                            <div className={`${styles.flipcardfront}  ${styles.flipcardfront1}`}>
                                                <Image width={80} height={80} className='img-fluid' src={item.image} alt="cardimg"></Image>
                                                <h3>{item.subTitle}</h3>
                                            </div>
                                            <div className={styles.flipcardback}>
                                                <h3>{item.title}</h3>
                                                <p>{item.pra}</p>

                                            </div>
                                        </div>
                                    </div>
                             
                                  
                            </Col>
                            )
                        })}

                      


                    </Row>

                </Container>

            </div>
        </>

    )
}

export default Bookpublishingservicesweoffer