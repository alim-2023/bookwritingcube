import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import whychoose from '/public/images/whychoosebooks/whychoosebook.webp'
import Comprehensive from '../../components/Comprehensive'
import Lululogos from '../../components/Lululogos'



// import components

import Banner from '../../components/Banner'
import Partners from '../../components/Partners'
import Whychoosebook from '../../components/Whychoosebook'
import Gotastory from '../../components/Gotastory'
import Experts from '../../components/Experts'
import Whatourclients from '../../components/Whatourclients'
import Requestafreequote from '../../components/Requestafreequote'
import Link from 'next/link'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {

 


  const bannertext=[
    {
      title: 'Book Writing Company That Commits To Writing Excellence!',
      pra: 'Your wish to bring your dream/ideas to life, let our book writers make it come true. Fulfilling your self-publishing needs.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'banner',
     
       

    }
  ]
  return (
    <>
      <Head>
        <title>Best Book Writing Company - Book Writing Cube</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"
        content="We Are A Book Writing Company That Delivers Exceptional Writing Services For Many Genres. Call Us To Get It." />
      <meta name="tags" content="en" />
      <meta name="DC.title" content="Book Writing Company" />
      <meta name="geo.region" content="" />
      <meta name="geo.position" content="39.78373;-100.445882" />
        <link rel="icon" href="/favicon.png" />

        <meta name="ICBM" content="39.78373, -100.445882" />
    <meta name="DC.title" content="ghost writing company" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="55.753005;-2.857642" />
    <meta name="ICBM" content="55.753005, -2.857642" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Best Book Writing Company - Book Writing Cube" />
    <meta property="og:description"
        content="We Are A Book Writing Company That Delivers Exceptional Writing Services For Many Genres. Call Us To Get It." />
    <meta property="og:url" content="https://www.bookwritingcube.com" />
    <meta property="og:site_name" content="Best Book Writing Company - Book Writing Cube" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:data1" content="5 minutes" />
    <meta name="facebook-domain-verification" content="s4ocl50k325dpk61h3frbd8aajeybv" />
    <meta name="google-site-verification" content="F7m5xKviPUMZOF5gFd6tdprcbKj_K1t7VyaYhmzcMMU" />

  
        
      </Head>
      <main>

{/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.banners}
       /> 
       )}



{/* partners components */}
<Partners/>

{/* Got a Story */}
<Gotastory
title="You’ve got a story to tell."
text="Let us help you tell it."
/>

{/*  Comprehensive */}
<Comprehensive />

{/* Lululogos components */}
<Lululogos/>


{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="Why Choose Book Writing Cube?"
  text="We have devised an elaborate workflow process to maximize transparency while also making sure that the final product's quality does not suffer. We do this through an extensive process of asking for approvals and updating our customers at every project stage. This helps a customer understand where we're coming from and be aware of what's going on."
  whychoose={ whychoose }
 />



{/* Talk To Our Experts! */}
<Experts
title="Talk To Our Experts!"
text="Call and get a free consultation, sample, & a price quote."
number="+1-302-883-8877"
discuss="LET'S DISCUSS"
/>


{/* Talk To Our Whatourclients! */}
<Whatourclients/>


{/* Talk To Our Requestafreequote! */}
<Requestafreequote/>










      </main>
    </>
  )
}
