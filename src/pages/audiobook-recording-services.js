import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import bookeditingprocess from '/public/images/whychoosebooks/bookeditingprocess.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'



import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/whybookpublishing.module.css '

const Audiobookrecordingservices = () => {


  const bannertext=[
    {
      title: 'Professional Audiobook Recording Services To Give Your Books A Voice!',
      pra: 'As an author, the only wish you long for is to make an unbeatable name for yourself. Here at Book Writing Cube, we offer book marketing services that help authors reach a larger audience, boost visibility, and get more ratings and sales for their books.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'audiobookrecordingservices',
     
       

    }
  ]



const whybookpublishingdata = [

{
  title: 'What is the best audiobook service?',
  text:  'As an author, you want your audiobook to be perfect. You want every word to be clear, and you want the overall performance to be engaging. This is why so many authors choose Book Writing Cube’s audiobook recording service. We are the best in the industry for a reason. Our team of professional voice actors has years of experience performing audiobooks. They know how to bring a book to life, and they know how to make sure every word is clear. Plus, they’re just plain fun to listen to! ',
  col6: '6',
},
{
  title: 'WWhat are the benefits of audiobook recording services?',
  text: 'Audiobook recording services can provide a range of benefits for businesses and individuals. For businesses, audiobooks can be used as a marketing tool to promote products or services. For individuals, audiobooks can provide a convenient way to learn new skills or improve existing ones. They can also be a great way to stay entertained and engaged while driving, working out, or doing other activities.',
  col6: '6',
},
{
title:'What is the cheapest audiobook service?',
text:'Book Writing Cube offers affordable audiobook recording services that are perfect for any author. Our packages are designed to fit any budget, and we offer a variety of services that will make your audiobook recording process easy and hassle-free. We understand that not every author has the time or resources to record their own audiobook. That’s why we offer professional recording services that will make your audiobook sound great. We also offer editing and mastering services to ensure that your audiobook is ready for distribution.',
col6: '6',
},
{
title:'What are audiobook recording rates?',
text: 'Audiobook recording rates can vary depending on the length of the audiobook, the quality of the recording, and the number of people who are involved in the recording process. For a typical audiobook that is around 8 hours long, the recording rate might be around $200-$400. However, for an audiobook that is longer than 10 hours, the rate may increase to $500 or more.',
col6: '6',
},

]




  return (
   <>
   <Head>
 
   <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title> Audiobook Recording Services – Book Writing Cube </title>
    <meta name="description"
        content="Audiobook Recording Services to help you narrate your story in the most captivating voice. Hire us to let your words sound the best. " />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />

    <meta name="DC.title" content="audiobook recording" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />

    <meta name="DC.title" content="audiobook recording" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Audiobook Recording Services – Book Writing Cube " />
    <meta property="og:description"
        content="Audiobook Recording Services to help you narrate your story in the most captivating voice. Hire us to let your words sound the best." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Audiobook Recording Services – Book Writing Cube " />
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
    <h2 className='font48 fw900 color-blue t-center'>Competent And Impeccable Audiobook Production Service For Your Success</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    Audiobooks are becoming more and more popular as time goes on. You can listen to an audiobook while you're working out, cleaning the house, or driving. They're also perfect for people who like to read but don't have a lot of time. Book Writing Cube offers audiobook recording services for just that reason. Here is where your books are brought to life!
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
   title="Storytelling Made Easy With Our Audio Book Recording Services"
  text="If you're a book writer, then audiobook production must be on your radar. Even if you're not yet a published author, it's worth learning about the process of turning your words into an audio experience."
  whychoose= {bookeditingprocess}
 />


{/* Aspiring */}
<Aspiring
 title= 'Dive into The New Era of Audiobooks with Book Writing Cube’s High-Quality Audiobook Recording Services Today!'
 text="Get in touch with one of our industry experts for more information about our online blog writing services and pricing details by leaving your email or phone number below!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Audiobookrecordingservices