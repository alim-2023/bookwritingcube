import React from 'react'
import styles from '@/styles/whybookpublishing.module.css'
import { Container,Row,Col } from 'react-bootstrap'


const Whybookpublishing = (props) => {




  return (
    <>
      

<Col md={6} className='mb-5'>
   <div className={styles.posttitle}>
        <h5 className="font20 fw800 color-black">{props.title}</h5>
        <p className='color-black font15 fw500'>{props.text}</p>
   </div>
</Col>

    </>
  )
}

export default Whybookpublishing