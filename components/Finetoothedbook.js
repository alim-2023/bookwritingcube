import React from 'react'
import styles from '@/styles/Finetoothedbook.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'


const Finetoothedbook = (props) => {

  return (
    <>

<Col md={4}>
   <div  className={styles[props.classnumber]}>
        <h5 className="font30 fw700 color-white font-f t-center">{props.title}</h5>
        <p className={` ${styles.stilltext} color-white font15 fw500 font-f t-center`}>{props.text}</p>
        <Link href="#"></Link>
      
   </div>
</Col>

    </>
  )
}

export default Finetoothedbook