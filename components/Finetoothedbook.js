import React from 'react'
import styles from '@/styles/Finetoothedbook.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'


const Finetoothedbook = (props) => {

  return (
    <>

<Col md={4}>
   <div  className={styles.fintop}>
        <h4 className="font17 fw700 color-black font-f">{props.title}</h4>
        <p className='color-lightgray font14 fw400 font-f'>{props.text}</p>
        <Link className={styles.btnfine} href="#">{props.btn}</Link>
      
   </div>
</Col>

    </>
  )
}

export default Finetoothedbook