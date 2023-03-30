import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Childrenbook.module.css'


const Childrenbook = (props) => {




  return (
    <>
      



<Col md={5}>
   <div className={styles[props.classnumber]}>
        <h5 className="font20 fw900 color-blue font-f">{props.title}</h5>
        <p className={` ${styles.stilltext} color-white font15 fw500 font-f t-center`}>{props.text}</p>
      
   </div>
</Col>













    </>
  )
}

export default Childrenbook