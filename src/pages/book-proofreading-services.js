import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import thisishowyouget from '/public/images/whychoosebooks/thisishowyouget.png'
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
import styles from '@/styles/whybookpublishing.module.css '

const Bookproofreadingservices = () => {


  const bannertext=[
    {
      title: 'Offering You Book Proofreading Services That Turn Your Content Piece From Drab to Fab!',
      pra: 'Don’t let your writing be weakened by mistakes that may go under your nose. Our professional proofreaders are all set to catch any typos, grammatical errors, or other issues hurting the sentiment of your writing. Book Writing Cube is committed to providing high-quality book proofreading services to help you improve your writing and ensure that your book is error-free.',
      subtext4:'Make your book pleasing to the eyes and get it sold like crazy with our best online proofreading services.',
      subtext4bold:'We Are The Ones You Need To Let Your Words Flow Well!',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'offeringyoubook',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>





const whybookpublishingdata = [

{
  title: 'How Much Does A Book Proofreading Service Cost?',
  text:  'The cost of the best proofreading services depends on the length of your manuscript and the level of editing needed.',
  col6: '6',
},
{
  title: 'What Happens During The Book Proofreading Process?',
  text: 'During the book proofreading process, the editor will carefully read through your manuscript and make corrections as needed. They will also provide feedback on elements such as plot, character development, and pacing.',
  col6: '6',
},
{
title:'How Long Does It Take To Complete A Book Proofreading?',
text:'The length of time it takes to complete a book proofreading depends on the length of your manuscript and the level of editing needed.',
col6: '6',
},
{
title:'What Are The Benefits Of Using A Book Proofreading Service?',
text: 'The benefits of using a book proofreading service include having a professionally edited manuscript, catching errors before publication, and improving the overall quality of your book.',
col6: '6',
},

]




  return (
   <>
   <Head>


   <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Finest Proofreading Services – Book Writing Cube </title>
    <meta name="description"
        content="Proofreading Services that fix the writing errors and make your content flawless. Hire us to get your manuscript proofread by professionals. " />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />

    <meta name="DC.title" content="book proofreading services" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />

    <meta name="DC.title" content="book proofreading services" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Finest Proofreading Services – Book Writing Cube" />
    <meta property="og:description"
        content="Proofreading Services that fix the writing errors and make your content flawless. Hire us to get your manuscript proofread by professionals." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Finest Proofreading Services – Book Writing Cube" />
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
          subtext4={item.subtext4}
          subtext4bold={item.subtext4bold}
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
title='Our Done and Dusted Proofreading Projects That Speak For Our Credibility'
para='Here are a few proofreading projects that we accomplished with utmost finesse.'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Answers To Some Questions That May Be Whirling Around Your Head!</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    Our proofreading experts go above and beyond to make your manuscript flawless and attention-grabbing. Whether you are an author who wants to perfect your books or a business person who wants their publications to look professional, we serve as the perfect stop to pause. Book Writing Cube sets the bar high with its standard proofreading services online and knows what its clients may be thinking of. So, here are some frequently asked questions by clients.
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
   title="This Is How You Get A Fresh Pair Of Eyes On Your Manuscript."
  text="Here’s how we set the wheel of proofreading services in motion."
  whychoose= {thisishowyouget}
 />


{/* Aspiring */}
<Aspiring
 title= 'Have A Second Set Of Eyes To Catch The Errors That You Have Missed!'
 text="Call us to get professional editors who will comb through your work and correct any errors. Whether it's a typo or a more serious grammatical error, we'll make sure it's fixed before you submit your work."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Bookproofreadingservices