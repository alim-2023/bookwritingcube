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
            <Navbar.Brand href="/">
              <Image src={logo} alt='logo'  ></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={styles.navalign}>
              <ul className={styles.align_menu}>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Home</Link></li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/About">About us</Link></li>
                <li onClick={toggle} className={`${styles.navlinks} ${styles.serviceshover}`}><Link className={styles.menulinks} href="">Services <IoMdArrowDropdown size={12} /></Link>

                  <Row className={click ? `${styles.megamenu} ${styles.active}` : `${styles.megamenu}`}>
                    <Col md={4}>
                      <ul className={styles.border}>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Book Publishing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="">Book Promotion</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="">Book Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="">Book Editing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="">Book Marketing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="">Proofreading Services</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="">Ghostwriting</Link></li>

                      </ul>
                    </Col>
                    <Col md={4}>
                      <ul className={styles.border}>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Article Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Blog Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Book Cover Design</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Book Trailer</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Business Plan Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Children Book Publication</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Author Marketing</Link></li>
                      </ul>
                    </Col>
                    <Col md={4}>

                      <ul>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Children's Book Illustrations</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Digital Marketing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Ebook Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Formatting Services</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Audio Book Recording</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Web Content Writing</Link></li>
                        <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Author Website Design</Link></li>

                      </ul>

                    </Col>
                  </Row>


                </li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="">Pricing</Link></li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="">Faqs</Link></li>
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