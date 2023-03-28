import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import hereshowwehelp from '/public/images/whychoosebooks/hereshowwehelp.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'



import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'

const Webcontentwritingservices = () => {


  const bannertext=[
    {
      title: 'Web Content Writing Services To Help You Drive Traffic and Engagement To Your Business!',
      pra:'To help you appeal to your target audience, Book Writing Cube has set forth its professional web content writing services complimented with high-intent keywords. With our web writing services, you can now improve your online presence and web traffic, and conversion.',
      subtext1:'If you struggle with writing or are not a native English speaker, it can be difficult to produce high-quality content on your own. But when you outsource your web content writing needs to us, you can be sure that you’ll receive well-written, error-free content ensured to meet your standards and the expectations of your audience.',
      subtext2:'Call Our Website Content Writer To Capture The Attention Of Your Readers And Hold Their Interest Throughout The Entirety Of Your Piece!',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'webcontentwritingservices',
     
       

    }
  ]



const whybookpublishingdata = [

{
  title: 'What Is Web Content Writing?',
  text:  'Web content writing refers to the creation of digital content for websites. This can include anything from articles and blog posts to product descriptions and even website copy. Good web content should be engaging and informative, providing value to the reader while also helping to promote the website it is published on.',
  col6: '6',
},
{
  title: 'Why Is Web Content Writing Important?',
  text: 'Web content writing is important because it helps ensure that a website’s visitors can find the information they need. Good web content can also help to improve a website’s search engine ranking, making it more likely to be seen by potential customers.',
  col6: '6',
},
{
title:'Who Needs Website Content Writing Services?',
text:'Anyone who wants to improve their website’s digital Content can benefit from web content writing services. This includes businesses of all sizes, as well as authors and other individuals who wish to promote their work online.',
col6: '6',
},
{
title:'How Much Do Web Copywriting Services Cost?',
text: 'The cost of web content writing services will vary depending on the scope of the project and the experience of the writer. However, generally, businesses can expect to pay between $0.10 and $0.50 per word for quality web content.',
col6: '6',
},

]




  return (
   <>
   <Head>

  

   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Profesional Web Content Writing Services – Book Writing Cube</title>
    <meta name="description"
        content="Web Content Writing Services that help you pen down your business values and offerings in the most appealing way. Get in touch with our writers now." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />

    <meta name="DC.title" content="web content writing services" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />

    <meta name="DC.title" content="web content writing services" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Profesional Web Content Writing Services – Book Writing Cube" />
    <meta property="og:description"
        content="Web Content Writing Services that help you pen down your business values and offerings in the most appealing way. Get in touch with our writers now." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Profesional Web Content Writing Services – Book Writing Cube" />
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
          subtext1={item.subtext1}
          subtext2={item.subtext2}
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
title='Go Through Our Web Content Writing Projects To Affirm Our Expertise!'
para='Have a glimpse of what accomplishment we have achieved so far.'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>SEO Content Writing Helps Your Possession Be People’s Favorite!</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    We help people outshine and be a cut above the rest. With professionally written website content infused with relevant keywords, Book Writing Cube sets the stage for business success. Content is the KING; thus, we strive to turn the potential customers into die-hard followers with the power of Content.
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
   title="Here’s how we help You Get the Perfect Piece of Web Content!"
  text="After gathering the necessary information from the client, we kick-start the journey to penning down our writing excellence."
  whychoose= {hereshowwehelp}
 />


{/* Aspiring */}
<Aspiring
 title= 'WHelping You Build Digital Authority with SEO Friendly Content Writing Services!'
 text="We are equipped with the right resources to help your business appear in the Search Engine Result Pages (SERPs) so that you can enjoy witnessing the potential customers into actual clients. We help you target specific keywords and phrases relevant to your business, products, or services. This ensures that your Content is more likely to be found by people who are actually interested in what you have to offer."
 subtext='So, what are you waiting for? Hit us up with your requirements and get your hands on the Content that is well-organized and free of errors!'
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Webcontentwritingservices