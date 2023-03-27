import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Head from 'next/head'
import stepstoour from '/public/images/whychoosebooks/stepstoour.png'

import Banner from '../../components/Banner'
import Partners from '../../components/Partners'

import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'



import ipublishmybook from '/public/images/ipublishmybook/ipublishmybook.png'


import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/whybookpublishing.module.css'

const Childrenbookillustrationsservices = () => {


  const bannertext=[
    {
      title: 'Children Book Illustrations Services That Help Characters Dance And Do The Talking!',
      pra: 'While the words elaborate the story, illustrations in a book help your imagination grasp the picture that the author wanted to paint with his words for the world to see. We at Book Writing Cube have an arsenal of the market’s most polished, gifted, and elite Children’s Book illustration who would be more than happy to incorporate your aesthetic into the book and help add a whole lot of zing to your project.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'childrenbookIllustrations',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>


const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="#">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>







  return (
   <>
   <Head>

   <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Book Publishing Services To Help You Be Read - Book Writing Cube</title>
    <meta name="description" content="We Offer Book Publishing Services For Authors Who Want To Self-Publish Their Books. Go To Our Site To Learn." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="tags" content="" />
    <meta name="DC.title" content="Book Publishing Services" />
    <meta name="geo.region" content="en" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta name="DC.title" content="book publishing services" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="55.753005;-2.857642" />
    <meta name="ICBM" content="55.753005, -2.857642" />
  	<meta property="og:locale" content="en" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Book Publishing Services To Help You Be Read - Book Writing Cube" />
	<meta property="og:description" content="We Offer Book Publishing Services For Authors Who Want To Self-Publish Their Books. Go To Our Site To Learn." />
	<meta property="og:url" content="https://www.bookwritingcube.com/" />
	<meta property="og:site_name" content="Book Publishing Services To Help You Be Read - Book Writing Cube" />
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
title='Our Latest Illustrations Books Projects'
para='Let Our Book Children’s Illustration Team Help You'
/>




{/* Lululogos components */}
<Lululogos/>


{/* Dowecome */}
<Dowecome
 title='How Do "I Publish My Book?"'
 text="Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves! Every word we polish is prepared for the impact on the readers and infused with care. From beginning to end, our book publishers and book editing experts take on every project, because no task is too big or difficult when you have people like us working together as part of such a one-stop solution."
 subtext="We ensure everything from page-turners to nail-biting finishes feels masterfully controlled so each reader can find a perfect read. Our book editing team eagerly waits for their next project to be proofread and edited."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={ipublishmybook}


/>





{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="5 Steps To Our Children's Book Illustrations Process!"
  text="We at Book Writing Cube have a detailed five-step process to getting your Children's Book Illustrations as good as you want them to be. This process is pretty much similar for illustrators all over the world, and we appreciate it if we educate our clients beforehand on what goes on in the entire illustration process."
  whychoose= {stepstoour}
 />


{/* Aspiring */}
<Aspiring
 title= 'You Are One Step Closer To Displaying Your Writing Excellence. Let Our Professional Help You Out.'
text="Editing, proofreading, publishing--all that form the criticalities of the book writing process. We know the effort it takes, the perseverance it needs, and the struggle it brings, so why not hire a helping hand? We are only a call, message, or email away! Let’s collaborate."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Childrenbookillustrationsservices