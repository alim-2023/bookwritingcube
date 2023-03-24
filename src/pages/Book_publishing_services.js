import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import drivethebook1 from '/public/images/drivethebook/1.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import typeofbooks from '/public/images/selfpublishingservices/typeofbooks.png'
import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'
import copy from '/public/images/selfpublishingservices/copy.png'


import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'



const Book_publishing_services = () => {


  const bannertext=[
    {
      title: 'Book Publishing Services Giving You The Creative Control You Deserve!',
      pra: 'Whether it be amazon self publishing or any other platform, our book publishing services give you the creative control you deserve. Discuss with our expert book publishers the creative control you deserve. Discuss with our expert book publishers.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'bookpublishingservices',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>


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
title='Our Latest Book Publishing Projects'
para='Let Our Book Publishing Team Help You'
/>




{/* Lululogos components */}
<Lululogos/>


<Container className='servicetitle'>
  <Row>
    <Col>
      <h2 className='color-blue fw900 font48 font-f t-center'>Why Choose Our Self Publishing Services?</h2>
    </Col>
  </Row>
</Container>

{/* Dowecome */}
<Dowecome
 title='How Do "I Publish My Book?"'
 text="Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves! Every word we polish is prepared for the impact on the readers and infused with care. From beginning to end, our book publishers and book editing experts take on every project, because no task is too big or difficult when you have people like us working together as part of such a one-stop solution."
 subtext="We ensure everything from page-turners to nail-biting finishes feels masterfully controlled so each reader can find a perfect read. Our book editing team eagerly waits for their next project to be proofread and edited."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={publishmybook}


/>


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='What Type Of Books Do We Publish?'
 text= {text}
 subtext={subtext}
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
 image={typeofbooks}
 whychooseclass= "marketyourbook"
 />



 {/* Dowecome */}
<Dowecome
 title='How Many Copies Of Your Book Will Be Published?'
 text="We publish/print books on demand. We set up your account with Amazon and other places, which allows us to have no set values for the minimum amount of copies that can be published/printed. We will print as many and as little as you want."
 subtext={kindledirectpublishing}
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={copy}


/>


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='How Will We Help You Market Your Book?'
 text= 'Our team of marketing experts are willing to provide their services to you. If you choose us for marketing, we ensure that you and your book gets maximum exposure. Our marketing professionals will assist your book and brand in reaching the success it deserves.'
 subtext= 'Our book marketing professionals will help your book and brand reach the success it deserves.'
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
image={marketyourbook}
whychooseclass= "marketyourbook"
 />


{/* Customersatisfaction */}
 <Customersatisfaction/>


{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="Here’s How We Buckle up To Drive the Book Promotion Engine!"
  text="We have a team of marketing maestros who maximize the marketing channels and make your book the talk of the town. Here is a recipe of how their marketing is cooked to perfection:"
  whychoose= {drivethebook1}
 />


{/* Aspiring */}
<Aspiring
 title= 'Whether Bookshelf or Amazon Self Publishing – Our Designs Makes You Stand Out'
 text="Design is the most important aspect when it comes to selling books. We know that might sound like an old cliché, but designing your cover will deliver layout and build intrigue for potential readers; they’ll want more after seeing what’s in store within these pages! So don’t settle on anything less than perfection – let us help make sure every manuscript looks exactly how you envisioned through Book Writing Cube."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"




/>

   </>
  )
}

export default Book_publishing_services