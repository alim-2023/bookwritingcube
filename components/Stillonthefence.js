import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Stillonthefence.module.css'


const Stillonthefence = (props) => {




  return (
    <>
      

{props.col6 ? 

<Col md={6}>
   <div className={styles[props.classnumber]}>
        <h5 className="font20 fw900 color-blue font-f">{props.title}</h5>
        <p className={` ${styles.stilltext} color-black font15 fw500 font-f`}>{props.text}</p>
      
   </div>
</Col>


: 

<Col md={4}>
   <div  className={styles[props.classnumber]}>
        <h5 className="font30 fw700 color-white font-f t-center">{props.title}</h5>
        <p className={` ${styles.stilltext} color-white font15 fw500 font-f t-center`}>{props.text}</p>
      
   </div>
</Col>


}



    </>
  )
}

export default Stillonthefence