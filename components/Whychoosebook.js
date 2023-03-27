import React from 'react'
import styles from '@/styles/Whychoosebook.module.css'
import Image from 'next/image'
import { Container , Row } from 'react-bootstrap'



const Whychoosebook = (props) => {
  return (
    <>

<div className={styles.choosebook}>

<Container>
<Row>
<h2 className='fw900 font48 color-blue font-f t-center'>{props.title}</h2>
    <p className={`${styles.whytext} font15 fw500 font-f t-center`}>{props.text}</p>
    <div className={styles.whychooseimge}>
        <Image className='img-fluid' src={props.whychoose} priority width={1366} height={694} alt='whychoose'></Image>
    </div>
</Row>

</Container>
  

</div>

    </>
  )
}

export default Whychoosebook