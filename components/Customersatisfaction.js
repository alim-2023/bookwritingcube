import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Customersatisfaction.module.css'

// images
import icon01 from '/public/images/customersatisfaction/icon01.png'
import icon02 from '/public/images/customersatisfaction/icon02.png'
import icon03 from '/public/images/customersatisfaction/icon03.png'
import icon04 from '/public/images/customersatisfaction/icon04.png'
import Image from 'next/image'


const Customersatisfaction = () => {

const customer = [

    {
        title:'100% Customer Satisfaction',
        customerimages: icon01,
    },
    {
        title:'2500+ Customers',
        customerimages: icon02,
    },
    {
        title:'Flexible Plans',
        customerimages: icon03,
    },
    {
        title:'All Royalties Belong To You',
        customerimages: icon04,
    },
]


  return (
    <>
        <div className={styles.customersatisfaction}>

        <Container>
            <Row>
            {customer.map((item, i) =>
                <Col md={3} key={i}>
                  <div className={styles.customerbrandimg}>
                    <Image  src={item.customerimages} alt='book_writing_cube' className='img-fluid'></Image>
                  </div>
                    <h3 className='color-white font16 fw500 t-center font-f'>{item.title}</h3>
                </Col>

            )}
            </Row>
        </Container>

        </div>
    </>
  )
}

export default Customersatisfaction