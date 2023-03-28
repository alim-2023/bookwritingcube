import React from 'react'
import styles from '@/styles/stillonthefence.module.css'
import { Container,Row,Col } from 'react-bootstrap'


const Stillonthefence = (props) => {




  return (
    <>
      

<Col md={6}>
   <div className={styles.number}>
        <h5 className="font20 fw900 color-blue font-f">{props.title}</h5>
        <p className={` ${styles.stilltext} color-black font15 fw500 font-f`}>{props.text}dasdas</p>
      
   </div>
</Col>

    </>
  )
}

export default Stillonthefence