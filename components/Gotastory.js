import React from 'react'
import styles from '@/styles/Gotastory.module.css'
import { Container, Row, Col } from 'react-bootstrap'






const Gotastory = (props) => {
  return (
    <>
      <div className={styles.gotastory}>

        <Container>
          <Row>
            <Col md={12}>
              <h2 className='fw900 font48 color-blue font-f t-center'>{props.title}</h2>
              <h4 className='font18 fw500 font-f t-center'>{props.text}</h4>

              <video controls className={`${styles.bgVideo}`} autoPlay muted loop src="/images/bwc-video.m4v" type="video/mp4"></video>


            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Gotastory