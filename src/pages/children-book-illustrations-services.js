import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Head from 'next/head'
import stepstoour from '/public/images/whychoosebooks/stepstoour.png'

import Banner from '../../components/Banner'
import Partners from '../../components/Partners'

import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'

import Childrenbook from '../../components/Childrenbook'

import ipublishmybook from '/public/images/ipublishmybook/ipublishmybook.png'


import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservicesweoffer'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'

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



const reasons = [

  {
    title:'Spot Illustration:',
    text:'Spot illustration is the tiny pieces or single piece of illustration drawn on the first or the title pages of each chapter to help breathe some life into the text or provide a little more context. It could be basic line art like or a small caricature drawn right above the title of the chapter, which takes up a quarter or lesser portion of the page. They are less expressive and have more to do with just intriguing the reader or enticing their imagination enough to carry on reading.',
    classnum: 'number1',
    
  },
 
  {
    title:'Half-page illustrations:',
    text:'As the name suggests, half-page illustrations are the illustrations that cover more than a quarter or at maximum half of the page of the book. This kind of illustration usually accompanies words by expressing one of the most intriguing aspects of the story and is not usually confined to the chapter`s title page. It can be a scene, a small introduction to a new character, a minor altercation between the characters that need to be highlighted, etc.',
    classnum: 'number1',
   
  },

  {
    title:'Single page illustrations:',
    text:'IThese kinds of illustrations typically cover the whole page and are far more detailed and expressive than the formerly explained ones. These are in great detail, and the text usually becomes optional, as the illustration speaks for itself.',
    classnum: 'number1',
  
  },
 
  {
    title:'Spread illustrations:',
    text:'These specific kinds of illustrations are usually spread on both the book`s pages and are usually more expressive and in greater detail than the text at this point is mostly optional. You could say they are like comic books, but rather, an image takes up the whole page than just a small part of the strip.',
    classnum: 'number1',
   
  },


]





  return (
   <>
   <Head>


   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Children Book Illustrations Services - Book Writing Cube</title>
    <meta name="description" content="Children Book Illustration Services That Hit The Chord With Kids and Hook Them To Read. Visit Our Website To Get Services For You." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="tags" content="" />
    <meta name="DC.title" content="children book illustrations" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />
    <meta name="DC.title" content="children book illustrations" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
  	<meta property="og:locale" content="en" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Children Book Illustrations Services - Book Writing Cube" />
	<meta property="og:description" content="Children Book Illustration Services That Hit The Chord With Kids and Hook Them To Read. Visit Our Website To Get Services For You." />
	<meta property="og:url" content="https://www.bookwritingcube.com/" />
	<meta property="og:site_name" content="Children Book Illustrations Services - Book Writing Cube" />
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
<Makestoriesnew
title='Our Latest Illustrations Books Projects'
para='Let Our Book Children’s Illustration Team Help You'
/>




{/* Lululogos components */}
<Lululogos/>



{/* Stillonthefence component */}
<div className={styles.stillbookwritingservices}>
<Container >
<Row >
<h2 className='font48 fw900 color-white t-center font-f mb-3 font-f'>You Need To Know What Type Of Children's Book Illustrations You Need For Your Book!</h2>  

<p  className='font15 fw500 color-white t-center pb-5 font-f'>Before you come to us for illustrations, you need to know that there is more than just one type of Children's Book Illustrations, and you must know which one fits your project better. Don't know what the various kinds of illustrations are? Well, allow us to educate you.</p>

</Row>  

<Row className={`${styles.childline} gy-5`}>
{ reasons.map((item, i) =>
<Childrenbook key={i}
title =  {item.title}
text =   {item.text}
classnumber = { item.classnum }
/>
  )}

</Row>  
</Container>

</div>




{/* Dowecome */}
<Dowecome
 title='How Do "I Publish My Book?"'
 text="Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves! Every word we polish is prepared for the impact on the readers and infused with care. From beginning to end, our book publishers and book editing experts take on every project, because no task is too big or difficult when you have people like us working together as part of such a one-stop solution."
 subtext="We ensure everything from page-turners to nail-biting finishes feels masterfully controlled so each reader can find a perfect read. Our book editing team eagerly waits for their next project to be proofread and edited."
 number="(302) 883-8877"
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
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Childrenbookillustrationsservices