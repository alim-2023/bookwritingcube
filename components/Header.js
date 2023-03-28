import React, { useState } from 'react'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import logo from '../public/images/logo.png';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import Sticky from '../components/Sticky';








const Header = () => {

  const [click, setclick] = useState(false);

  function toggle() {

    setclick((prevState) => !prevState);
    console.log(click, 'state')

  }

  return (
    <>

      <div className={styles.headerhome}>
        <Navbar expand="lg">
          <Container>
            
          <Link  href="/">    <Image src={logo} alt='logo'  ></Image> </Link>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={styles.navalign}>
              <ul className={styles.align_menu}>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Home</Link></li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/about">About us</Link></li>
                <li onClick={toggle} className={`${styles.navlinks} ${styles.serviceshover}`}><Link className={styles.menulinks} href="">Services <IoMdArrowDropdown size={12} /></Link>

                  <Row className={click ? `${styles.megamenu} ${styles.active}` : `${styles.megamenu}`}>
                    <Col md={4}>
                      <ul className={styles.border}>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/book-publishing-services">Book Publishing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/book-promotion-services">Book Promotion</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/book-writing-services">Book Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/book-editing-services">Book Editing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/book-marketing-services">Book Marketing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/book-proofreading-services">Proofreading Services</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/ghostwriting-services">Ghostwriting</Link></li>

                      </ul>
                    </Col>
                    <Col md={4}>
                      <ul className={styles.border}>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/article-writing-services">Article Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/blog-writing-services">Blog Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/book-cover-design-services">Book Cover Design</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/book-trailer-services">Book Trailer</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/business-plan-writing-services">Business Plan Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/children-book-publication-services">Children Book Publication</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/author-marketing-promotion-services">Author Marketing</Link></li>
                      </ul>
                    </Col>
                    <Col md={4}>

                      <ul>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/children-book-illustrations-services">Children's Book Illustrations</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/digital-marketing-services">Digital Marketing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/ebook-writing-services">Ebook Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/book-formatting-services">Formatting Services</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/audiobook-recording-services">Audio Book Recording</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/web-content-writing-services">Web Content Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/author-website-design-services">Author Website Design</Link></li>

                      </ul>

                    </Col>
                  </Row>


                </li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="#">Pricing</Link></li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/faqs">Faq's</Link></li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="">Blogs</Link></li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="">Contact us</Link></li>
              </ul>

              <ul className={styles.align_menu}>


                <li className={`${styles.navlinks} ${styles.headertel}`}>

                  <Link className={`${styles.headerbtncolor} ${styles.headericon}`} href="tel:(302) 883-8877">
                    
                     <BsFillTelephoneFill size={12} /> (302) 883-8877 </Link>
                  
                </li>


                <li className={`${styles.navlinks} ${styles.headertel} ${styles.headerbtnspacing}`}><Link className={styles.headerbtncolor} href="">Get A Quote</Link></li>

              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>

      <Sticky />





    </>
  )
}

export default Header