import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Whybookpublishing.module.css '

const Whybookpublishing = (props) => {




  return (
    <>
      

<Col md={6} className='mb-5'>
   <div className={styles.posttitle}>
        <h5 className="font20 fw800 color-black">{props.title}</h5>
        <p className='color-black font15 fw500'>{props.text}</p>
      { props.subtext ?
        <p className='color-black font15 fw500'>{props.subtext}</p>
      :
      ''
        
      }

   </div>
</Col>

    </>
  )
}

export default Whybookpublishing