import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import uurefficientauthorwebsitedesignprocess from '/public/images/whychoosebooks/uurefficientauthorwebsitedesignprocess.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import typeofbooks from '/public/images/selfpublishingservices/typeofbooks.png'
import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'
import copy from '/public/images/selfpublishingservices/copy.png'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'

const Authorwebsitedesignservices = () => {


  const bannertext=[
    {
      title: 'Empowering Authors with the Finest Author Website Design Services in the Country!',
      pra: 'Our top-rated author website design services are curated and designed for the true success of our clients!',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'empoweringauthorswith',
     
       

    }
  ]




const whybookpublishingdata = [

{
  title: 'How can an author website design service help me?',
  text:  'An author website design service can help you create a professional and engaging website that will help you promote your books and connect with your readers. A good website design service will work with you to understand your goals and create a custom website that meets your needs.',
  col6: '6',
},
{
  title: 'What should I look for in an author website design service?',
  text: 'When choosing author website design services, it is important to find one that has experience designing websites for authors. You should also look for a service that offers a range of features and services, such as custom book covers, social media integration, and eCommerce capabilities.',
  col6: '6',
},
{
title:'How much does an author website design service cost?',
text:'The cost of an author website design service will vary depending on the scope of the project and the size of your website. Generally, you can expect to pay a few hundred dollars for a basic website design and several thousand dollars for a more complex website.',
col6: '6',
},
{
title:'What are the benefits of having a well-designed author website?',
text: 'A well-designed author website can be a powerful platform to build your brand, connect with readers, and sell your books. A well-designed author website can help you expand your reach with readers from around the world and promote your work for greater success.',
col6: '6',
},

]




  return (
   <>
   <Head>

   <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>  Author Website Design Services – Book Writing Cube </title>
    <meta name="description"
        content="Author Website Design Services that help authors promote their books by making the most out of website experiences. Call us now to design it for you. " />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />

    <meta name="DC.title" content="author website design" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />

    <meta name="DC.title" content="author website design" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Author Website Design Services – Book Writing Cube" />
    <meta property="og:description"
        content="Author Website Design Services that help authors promote their books by making the most out of website experiences. Call us now to design it for you. " />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Author Website Design Services – Book Writing Cube" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:data1" content="5 minutes" />
    <meta name="facebook-domain-verification" content="s4ocl50k325dpk61h3frbd8aajeybv" />


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




{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Powerful Websites Designed By The Best In The Game!</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    As a professional author, it is important to have a website that represents you and your work well. At Book Writing Cube, a leading website designing company, we help you with that. A professional author's website design will help you stand out from the competition and make a great first impression on potential readers and clients. Professional website design services can help you create a website that is perfect for your needs.
                    </p>

  </Row>

    <Row>
      {whybookpublishingdata.map((item, i) =>
        <Whybookpublishing  key={i}
          title={item.title}
          text={item.text}
          col6={item.col6}
        />
      )}
    </Row>            
  </Container>   
</div>

{/* Lululogos components */}
<Lululogos/>














{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="Our Efficient Author Website Design Process"
  text="Our team of industry experts collaborates with our valued clients to create high-quality websites! Here is a quick look at our process:"
  whychoose= {uurefficientauthorwebsitedesignprocess}
 />


{/* Aspiring */}
<Aspiring
 title= 'Create Memorable Digital Experiences for Your Readers with Book Writing Cube’s Author Website Design Services!'
 text="Get in touch with one of our industry experts for more information about our online blog writing services and pricing details by leaving your email or phone number below!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Authorwebsitedesignservices