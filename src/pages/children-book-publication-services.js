import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import whatisourchildren from '/public/images/whychoosebooks/whatisourchildren.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'

import yourhowwhat from '/public/images/yourhowwhat/yourhowwhat.png'
import typeofbooks from '/public/images/selfpublishingservices/typeofbooks.png'
import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'
import copy from '/public/images/selfpublishingservices/copy.png'

import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'

const Childrenbookpublicationservices = () => {


  const bannertext=[
    {
      title: 'Children Book Publication Services That Make Kids Stories Fun To Read!',
      pra: 'Make the most of the immense value with Children’s Book Publishing!',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'childrenbookpublication',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>


const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="#">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>







  return (
   <>
   <Head>

   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Children Book Publication Services Creating Reading Trials - Book Writing Cube</title>
    <meta name="description"
        content="Book Publication Services that aim to aid aspiring authors write, publish, & sell their children's books." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="tags" content="" />

    <meta name="DC.title" content="children book publication" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />

    <meta name="DC.title" content="children book publication" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Children Book Publication Services Creating Reading Trials - Book Writing Cube" />
    <meta property="og:description" content="Book Publication Services that aim to aid aspiring authors write, publish, & sell their children's books." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Children Book Publication Services Creating Reading Trials - Book Writing Cube" />
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
          bannershome={item.banners}
       /> 
       )}
   

   {/* partners components */}
<Partners/>

{/* Makestories */}
<Makestories
title='Our Latest Children’s Book Publishing Projects'
para='Let Our Children’s Book Publishing Team Help You'
/>








{/* Dowecome */}
<Dowecome
 title='Your how’s, what’s, and why’s of children’s book Publishing, answered!'
 text="Get this: Children’s Book Publishing is no easier task. Of course, the length of the book is relatively short, but précising an idea with a well-instilled message requires multiple rewrites and re-drafts. The goal here is to make your story as easy to visualize as possible. If a reader has to re-read a sentence for better understanding, you probably just missed the whole purpose of Children’s Book Publishing."
 subtext="Here at Book Writing Cube, we offer you the expertise of a well-put-together team of Children’s Book Publishing experts. From fixing the illustration sizes to designing it with catchy images, our teams know just to make your book every child’s must-have."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={yourhowwhat}


/>








{/* Lululogos components */}
<div className='mt-5'>
<Lululogos/>
</div>


{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="What Is Our Children Book Publication Process?"
  text="Our professional book writing services is a collaborative process between our client and our team that has the following steps:"
  whychoose= {whatisourchildren}
 />


 


{/* Aspiring */}
<Aspiring
 title= 'Ultimately, your success establishes our reputation'
 text="The experts at Book Writing Cube are well-aware of the amount of time and effort a singular literary composition requires. We value the work done and respect the passion for publishing the aspiring authors demonstrate. And we promise to help you finalize a composition you can take great pride in!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Childrenbookpublicationservices