import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import stepsthatwe from '/public/images/whychoosebooks/stepsthatwe.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'



import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservicesweoffer'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'

const Booktrailerservices = () => {


  const bannertext=[
    {
      title: 'Build Excitement For Your Forthcoming Book With Our Book Trailer Services!',
      pra: 'Don’t you want to generate interest in your book? Book trailers can fit the bill.Without the shadow of a doubt, they give potential customers a taste of what your book is about, and it can also help build buzz around your book.',
      subtext1:'By creating a short video that showcases your book, you can give potential readers a flavor of what your writing is like and help them decide if they’d like to check out your work.',
      subtext2:'Are you about to launch your book, or do you want to bring your published book to the limelight? If yes, confide in our book video trailer services. Rest assured, while working with us, you will have a delightful exit with a quality product in your hands!',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'buildexcitement',
     
       

    }
  ]



const datapost =  <><span className={styles.keepit}>Keep it short and sweet</span><span className={styles.keepit}>Make sure the audio is clear and easy to hear</span><span className={styles.keepit}>Include engaging visuals</span><span className={styles.keepit}>Tell a story</span><span className={styles.keepit}>Highlight the key points of your book</span></>




const whybookpublishingdata = [

{
  title: 'Can I Use Copyrighted Music In My Book Trailer?',
  text:  'You can use copyrighted music in your book trailer as long as you have obtained the appropriate permissions and licenses.',
  col6: '6',
},
{
  title: 'What Are Some Tips For Making A Great Book Trailer?',
  text: 'Some tips for making a great book trailer include:',
  subtext: datapost,
  col6: '6',
},
{
title:'How Do I Promote My Book Trailer?',
text:'There are several ways to promote your book trailer. You can post it on social media, include it on your website or blog, and submit it to online directories and book-related websites. You can also embed the trailer on other websites and share it via email or word-of-mouth.',
col6: '6',
},
{
title:'How Do Book Trailers Help Authors?',
text: 'Book trailers are a relatively new phenomenon, and they are becoming increasingly popular as a way for authors to promote their books. A book trailer is a short film or video that gives viewers a taste of what the book is about and tries to generate interest in it. They can be used to reach out to potential readers who might not otherwise be aware of the book. Moreover, book trailers can help create a buzz around a book and generate word-of-mouth interest. Lastly, book trailers can also serve as a reminder to people who have already read the book and enjoyed it, encouraging them to recommend it to others. Overall, book trailers can be a very effective marketing tool for authors, and they are definitely worth considering if you are looking for ways to promote your book.',
col6: '6',
},

]




  return (
   <>
   <Head>

   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title> Impeccable Book Trailer Services – Book Writing Cube </title>
    <meta name="description"
        content="Book Trailer Services to help you hit the chord with the readers before your book makes an entry into the publication world. Call us to get the services." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />
    <meta name="DC.title" content="book trailer" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />
    <meta name="DC.title" content="book trailer" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Impeccable Book Trailer Services – Book Writing Cube" />
    <meta property="og:description"
        content="Book Trailer Services to help you hit the chord with the readers before your book makes an entry into the publication world. Call us to get the services." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Impeccable Book Trailer Services – Book Writing Cube" />
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
title='Our Recent Book Trailer Projects That Roar For Our Sound Expertise!'
para='Here’s a list of our done-and-dusted projects that we completed with utmost excellence and received rave reviews from our clients.'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Untangle The Complexity Of Your Manuscript Selling With Our Book Marketing Services!</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    A picture speaks a thousand words, but a moving picture narrates a thousand episodes. With our book video trailer services, you can hit the chord with your target audience and make them go GAGA for your publication.
                    </p>

  </Row>

    <Row>
      {whybookpublishingdata.map((item, i) =>
        <Whybookpublishing  key={i}
          title={item.title}
          text={item.text}
          subtext={item.subtext}
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
   title="Steps That We Follow To Create an Enthralling Book Trailer for You!"
  text="We throw creativity and innovation into the process so that your book doesn't get lost in the mix. We don't start until we have all the necessary information and requirements gathered from you."
  whychoose= {stepsthatwe}
 />


{/* Aspiring */}
<Aspiring
 title= 'Strengthen Your Marketing Efforts and Ensure Crazy Sales Of Your Publication With Us!'
 text="At Book Writing Cube, we specialize in creating engaging and visually appealing book trailers for authors and businesses. Our team of skilled professionals has years of experience in video production and graphic design, so you can be confident that your book trailer will be of the highest quality. We understand that a book trailer is one of the most important marketing tools an author has, so we work closely with our clients to ensure their vision is brought to life. We also offer a variety of customization options, i.e., custom comic book video trailer, to make sure that your book trailer is truly unique. Call us to make your book happen with our book trailer services."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Booktrailerservices