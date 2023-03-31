import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import efficientarticlewriting from '/public/images/whychoosebooks/efficientarticlewriting.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import typeofbooks from '/public/images/selfpublishingservices/typeofbooks.png'
import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'
import copy from '/public/images/selfpublishingservices/copy.png'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservicesweoffer'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'
import Professionalseo from '../../components/Professionalseo'

const Articlewritingservices = () => {


  const bannertext=[
    {
      title: 'Bridging Success by Providing Professional Article Writing Services!',
      pra: 'Our proficient and top-rated article writing services ensure your business gets the recognition it deserves!',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'aboutbanner',
     
       

    }
  ]





const whybookpublishingdata = [

{
  title: 'What is article writing services?',
  text:  'Article writing services are a great way to get high-quality, well-written articles for your website or blog. By outsourcing your writing needs to a professional service, you may rest assured that you’ll be getting content that is both informative and engaging. Additionally, article writing services can help you build up your online presence by increasing your website’s or blog’s search engine ranking.',
  col6: '6',
},
{
  title: 'How does an article writing service work?',
  text: 'Most high-quality article writing services work with a team of writers who create the content for their clients. The client will provide the topic or keywords that they want the content to be about, and the writers will create articles based on those topics.',
  col6: '6',
},
{
title:'What are the benefits of using an article writing service?',
text:'There are several benefits to using our best article writing services. First, it can save you a lot of time. If you were to write the articles yourself, it would take up a lot of your time that could be used for other things. Second, it can help you get high-quality content. The writers who work for these services are professionals who know how to write good quality articles. Finally, it can help you build up your online presence. By having good quality content on your website or blog, you will attract more visitors, which can lead to more customers or clients.',
col6: '6',
},
{
title:'How do professional article writing services benefit businesses?',
text: 'There are several ways that businesses can benefit from using a professional article writing service. First, it can help you save time. Second, it can help you get high-quality content. The writers who work for these services are professionals who know how to write good quality articles. Finally, it can help you build up your online presence.',
col6: '6',
},

]




  return (
   <>
   <Head>

   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Professional Article Writing Services – Book Writing Cube</title>
    <meta name="description"
        content="Article Writing Services that help your business boost and make an impact as an outstanding digital authority. Call us to get the best writing services." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />
   
    <meta name="DC.title" content="article writing services" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />
  
    <meta name="DC.title" content="article writing services" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Professional Article Writing Services – Book Writing Cube" />
    <meta property="og:description"
        content="Article Writing Services that help your business boost and make an impact as an outstanding digital authority. Call us to get the best writing services." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Professional Article Writing Services – Book Writing Cube" />
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


{/* Professionalseo */}
<Professionalseo />




{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>High-Quality Article Writing Services To Expand Your Reach And Join The Big Leagues!</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    Expanding your reach with professional article writing services can be a great way to get your business in front of more potential customers. By having engaging and well-written content on your website, you can attract more visitors and keep them engaged with what you have to offer. Professional research article writing services can help you create content that is both informative and engaging, helping you to connect with more potential customers and grow your business.
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
   title="Efficient Article Writing Process Curated For Optimal Results"
  text="Book Writing Cube offers professional and custom article writing services to help businesses reach new heights of success! Here's a closer look at our streamlined process:"
  whychoose= {efficientarticlewriting}
 />


{/* Aspiring */}
<Aspiring
 title= 'Get High-Quality and Effective Article Writing Services for Affordable Prices at Book Writing Cube!'
 text="Get in touch with one of our industry experts for more information about our online article writing services and pricing details by leaving your email or phone number below!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Articlewritingservices