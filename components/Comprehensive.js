import React from 'react'
import styles from '@/styles/Comprehensive.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

import comprehensive1 from '../public/images/comprehensive/1.png'
import comprehensive2 from '../public/images/comprehensive/2.png'
import comprehensive3 from '../public/images/comprehensive/3.png'
import comprehensive4 from '../public/images/comprehensive/4.png'
import icon1 from '../public/images/comprehensive/icon1.png'
import icon2 from '../public/images/comprehensive/icon2.png'
import icon3 from '../public/images/comprehensive/icon3.png'
import icon4 from '../public/images/comprehensive/icon4.png'


const Comprehensive = () => {
    const card =
        [
            {
                image: comprehensive1,
                title: 'Book Editing',
                pra: "We know that every word counts, so we're committed to crafting captivating stories for any length and style. Our talented staff will take on your project from start to finish because no task is too big when you have people like us working together..."

            },
            {
                image: icon1,
                title: 'Book Writing',
                subTitle: "Book Writing",
                pra: "When you think about writing a book, know that it doesn't have to be complicated. As absurd as it may sound, thoughts/ideas may already exist within your head as seed or germinating premises of stories that still need development before they can blossom into anything concrete and comprehensive for readers around the world."

            },
            {
                image: comprehensive2,
                title: 'Book Publishing Services',
                pra: "Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves! Every word is polished and prepared to create an impact."

            },
            {
                image: icon2,
                title: 'Article Publication',
                subTitle: "Article Publication",
                pra: "We are an Award-winning Children’s Book Publisher, with some top-sellers and best- sellers in our portfolio. Publishing a book has never been easier."

            },

            {
                image: icon3,
                title: 'Children’s Book Publication',
                subTitle: "Children’s Book Publication",
                pra: "Children’s Book Publishing is no easier task. Of course, the length of the book is relatively short, but précising an idea with a well-instilled message requires multiple rewrites and re-drafts."

            },

            {
                image: comprehensive3,
                title: 'E-Book Writing',
                pra: "We want to help you shine your eBook and make it compelling for readers, so we'll work with the most important ideas. You have an option of doing a one-hour interview where any challenging or confusing topics will be bouncing off us before they're even published."

            },

               {
                image: icon4,
                title: "Children's Book Illustrations",
                subTitle: "Children's Book Illustrations",
                pra: "Children are the most unfiltered and harshest critics! That doesn't mean they are not biased. They pick up the book and flip through pages, looking at the images and illustrations, and if those speak to them,"

            },

            {
                image: comprehensive4,
                title: 'Book Marketing',
                pra: "We promote & market your book in the most effective way, and bring your book(s) from the shadows of the back-of-the-shelf to Best seller. We are the book marketing & book promotion experts you need;"

            },

           
        ]
    return (
        <>
            <div className={styles.comprehensive}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <h2 className="fw900 font48 color-blue font-f t-center">Our Comprehensive Services Include</h2>

                        </Col>

                    </Row>

                    <Row className='mt-4'>
                        {card.map((item, i) => {
                            return(
                                <Col className={`${styles.post} col-md-3`}  key={i}>

                                {item.subTitle ?
                                    <div className={styles.flipcard}>
                                        <div className={styles.flipcardinner}>
                                            <div className={`${styles.flipcardfront}  ${styles.flipcardfront1}`}>
                                                <Image className='img-fluid' src={item.image} alt="book_writing_cube"></Image>
                                                <h3>{item.subTitle}</h3>
                                            </div>
                                            <div className={styles.flipcardback}>
                                                <h3>{item.title}</h3>
                                                <p>{item.pra}</p>

                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className={styles.flipcard}>
                                        <div className={styles.flipcardinner}>
                                            <div className={styles.flipcardfront}>
                                                <Image className={`${styles.newimg} img-fluid`} src={item.image}  alt="book_writing_cube"></Image>
                                            </div>
                                            <div className={styles.flipcardback}>
                                                <h3>{item.title}</h3>
                                                <p>{item.pra}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </Col>
                            )
                        })}

                      


                    </Row>

                </Container>

            </div>
        </>

    )
}

export default Comprehensive