import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaRegComments } from 'react-icons/fa';

const Sticky = () => {
  return (
   <>
 <div className={styles.stickycontainer}>
    <ul className={styles.sticky}>
        <li>
           <BsFillTelephoneFill size={28}  />
            <p><a href="tel:(302)883-8877" target="_self">(302) 883-8877</a></p>
        </li>
        <li>
        <FaRegComments size={28}  />
            <p><a href="#" >Let's Discuss</a></p>
        </li>
    </ul>
</div>
   
   </>
  )
}

export default Sticky