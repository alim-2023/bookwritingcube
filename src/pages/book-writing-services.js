import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import bookwritingprocess from '/public/images/whychoosebooks/bookwritingprocess.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import bookwritingcanbe from '/public/images/bookwritingcanbe/bookwritingcanbe.png'
import typeofbooks from '/public/images/selfpublishingservices/typeofbooks.png'
import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'
import copy from '/public/images/selfpublishingservices/copy.png'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/whybookpublishing.module.css'

const Bookwritingservices = () => {


  const bannertext=[
    {
      title: 'Turn Your Dream Of Becoming A Published Writer With Our Book Writing Services!',
      pra: 'Dream to become a published book writer? Then what are you waiting for? Avail our professional book writing services and manifest your dreams into reality. Talk to our book writing consultant today, and get it all started.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'bookwritingservices',
     
       

    }
  ]



const bookwritersforhire = <span>Pick up the phone or email us, and book our book consultancy services today! The only thing standing in your way of being a best-selling author is not signing up for our professional book writing services! Allow us to assist you in getting there and getting the best and the most affordable <Link className='textdocationnone' href="/book-writing-services"> book writers for hire </Link> today!</span>;







const whybookpublishingdata = [

{
  title: 'Why a book writer when I can write a book myself?',
  text:  'Of course, you can write your book on your own, and we are sure that you would do a stellar job with it. But are you sure that you wouldn’t appreciate an extra helping hand? A helping hand from a professional eBook writer who has been doing this for longer than you had the idea of writing your own book. Our book writing services are a collaborative process between the client and our team where we merely help our client write the book that would sell well and is up to the industry’s standards. So I ask you again, won’t a professional know how to do this better?',
  col6: '6',
},
{
  title: 'How strict are you with your confidentiality?',
  text: 'We are very strict and thorough when it comes to protecting the identity of our clients and book writers. As a bookwriting company, we make our writers sign contract and NDA where they aren’t allowed to take any material out of the office premises or tell anyone anything about the kind of project they are working on to protect our client’s identity. So many years in book writing services, and we have never had a scandal when it comes to protecting the anonymity of our client. As professional bookwriting experts, we maintain a very ethical decorum and play by the rules of the literary world.',
  col6: '6',
},
{
title:'Such services, are they very expensive?',
text:'It doesn’t have to be! We have various packages, depending upon the nature of your project and what kind of package would suit it better. And don’t worry, we have a very flexible mode of payment that wouldn’t cost you an arm and a leg.',
col6: '6',
},
{
title:'What genres do you cover?',
text: 'All! We cover all genres from fiction to autobiographies, fantasy thrillers, to children’s literature. Our book writing services cover all genres and all types of work f literature. We have an arsenal of teams dedicated to numerous genres, and all of them are tremendous at their job.',
col6: '6',
},

]




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
title='Our Book Writing Projects'
para='Let Our Book Writing Team Help You.'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Why Does One Need Professional Book Writing Services?</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    Our book writing team is composed of the industry's elite who know the ins and outs of the writing industry better than any of us. If you have any more questions about signing up for the professional book writing services, we may have your answers listed below!
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






{/* Dowecome */}
<Dowecome
 title='Book Writing Can Be A Nightmare If You Are Not As Fluent With Your Words As You Are With Your Thoughts'
 text="When you think about writing a book, know that it doesn't have to be complicated. As absurd as it may sound, thoughts or ideas may already exist within your head as seed or germinating premises of stories that still need development before they can blossom into anything concrete and comprehensive for readers around the world. Luckily, you have our professional book writers who can help turn those thoughts from just an idea into something worth sharing with friends, family members & strangers alike. Let us help you get rid of writer's block and take that burden off your shoulders."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={bookwritingcanbe}


/>

{/* Lululogos components */}

<div className='mt-5'>
<Lululogos/>
</div>












{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="What Is Our Book Writing Process?"
  text="Our professional book writing services is a collaborative process between our client and our team that has the following steps:"
  whychoose= {bookwritingprocess}
 />


{/* Aspiring */}
<Aspiring
 title= 'Allow us to dominate all the bookshelves and digital libraries, entrust our professional book writers with your book today!'
 text= {bookwritersforhire}
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Bookwritingservices