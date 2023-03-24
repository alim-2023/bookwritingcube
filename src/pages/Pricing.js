import React from 'react'
import styles from '@/styles/Pricing.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Experts from '../../components/Experts'
import Dowecome from '../../components/Dowecome'
import howdoimg from '/public/images/professional/professional.png'
import Bookbadges from '../../components/Bookbadges'



const Pricing = () => {

    const bannertext=[
        {
          title: 'Services & Rates',
          pra: 'We understand that every book project is unique. Call us to discuss how we can tailor our service to achieve your publishing goals.',
          subtext:'We offer special services and compensation options not listed below. Please call to inquire.',
          publishers:'*Note to Publishers and Agents:',
          banners:'pricing',
          alignclass:'alignclass',
          classpost:'classpost',
        }
      ]

   
    


  return (

    <>




    {/* banner components */}

    {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          subtext={item.subtext}
          publishers={item.publishers}
          bannershome={item.banners}
          alignclass={item.alignclass}

        
       /> 
       )}

{/* Bookbadges */}
<Bookbadges /> 

      
   


{/* Dowecome */}
<Dowecome
 title='Professional'
 text="Avail the chance to work alongside authors that are considered to be pioneers of the industry. Our commitment to quality and customer service is unmatched by anyone in the industry as we always try to keep our customers as happy as we can."
 subheading="Ghostwriting Services"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
 image={howdoimg}
 Dowecome= "Dowecome"
/>


{/* Bookbadges */}
<Bookbadges />   


{/* Talk To Our Experts! */}
<Experts
title="Talk To Our Experts!"
text="Call and get a free consultation, sample, & a price quote."
number="+1-302-883-8877"
discuss="LET'S DISCUSS"
/>
    </>

  )
}

export default Pricing