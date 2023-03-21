import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Partners from '../../components/Partners'
import Experts from '../../components/Experts'
import Whatourclients from '../../components/Whatourclients'
import Head from 'next/head'
import Makestories from '../../components/Makestories'


const About = () => {

    const bannertext=[
        {
          title: 'Who Are We?',
          pra: 'As self-searching as this question might sound, we are a book writing, editing, and publishing company. Well, that sounds a bit too over-simplified, but you get the gist. We produce, publish, and market book, a synergy of creativity fueled by a staff of writers, editors, publishers, developers, and designers.',
          discuss:'LET S DISCUSS',
          homebannernum:'(302) 883-8877',
          banlogo:homebannerlogos,
          aboutbanners:'aboutbanner',
         
           
    
        }
      ]
  return (
    <>

<Head>

<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>About us - Book Writing cube </title>
    <meta name="description"
        content="Book Writing Company that molds your ideas into captivating stories and make them happen. Connect with us to become the best-selling author now." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />
    <meta name="DC.title" content="Book Writing Company" />
    <meta name="geo.region" content="en" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta name="DC.title" content="About us - Book Writing cube " />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="55.753005;-2.857642" />
    <meta name="ICBM" content="55.753005, -2.857642" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="About us - Book Writing cube " />
    <meta property="og:description"
        content="Book Writing Company that molds your ideas into captivating stories and make them happen. Connect with us to become the best-selling author now." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:data1" content="5 minutes" />
    <link rel="icon" href="/favicon.png" />


</Head>    
{/* banner components */}

{bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.aboutbanners}
       /> 
       )}


{/* partners components */}
<Partners/>   

{/* Makestories */}
<Makestories/>


{/* partners components */}
<Partners/>  




{/* Talk To Our Experts! */}
<Experts
title="Talk To Our Experts!"
text="Call and get a free consultation, sample, & a price quote."
number="+1-302-883-8877"
discuss="LET'S DISCUSS"
/>


{/* Talk To Our Whatourclients! */}
<Whatourclients/>
    
    </>
  )
}

export default About