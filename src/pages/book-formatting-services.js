import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import howtheformatting from '/public/images/whychoosebooks/howtheformatting.png'
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
import Stillonthefence from '../../components/Stillonthefence'
import { useState } from 'react'

const Bookformattingservices = () => {


  const bannertext=[
    {
      title: 'Shaping Your Work into a Stellar Piece of Literary Art with Our Book Formatting Services!',
      pra: 'At Book Writing Cube, we understand that the process of creating a book can be daunting and time-consuming. That’s why we offer our professional book formatting services to help you save time and energy. From simple formatting tweaks to complete book redesigns, our team can do it all.We format your book according to industry standards so that it looks its best when published. We also work with you to ensure that your book’s interior layout is clear and easy to read.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'bookformattingservices',
     
       

    }
  ]

  const [clicktoggle, setclicktoggle] = useState(false);

  function toggle() {

    setclicktoggle((prevState) => !prevState);
  

  }




const data = <><span className={styles.alignment}> Here are a few ways that a professionally formatted book can help business owners:</span>
 <span className={styles.alignment}>Therefore, a well-formatted book looks more professional and is more likely to be taken seriously by potential customers and clients</span>   
 
 <span onClick={toggle} className={styles.motive}>Read More</span>




 <span className={ clicktoggle ?  `${styles.active1} ${styles.alignment} ${styles.proper} ${styles.design}` : 
 `${styles.alignment} ${styles.proper} ${styles.design}` }>A properly formatted and designed book is more likely to be picked up and read, which means your message will actually be seen and absorbed by readers.</span>
 <span className={ clicktoggle ?  `${styles.active1} ${styles.alignment}  ${styles.design}` : 
 `${styles.alignment}  ${styles.design}` }>A well-formatted book gives the impression that you are a professional who takes pride in your work – something that can definitely rub off on potential customers and clients.</span>

 <span className={ clicktoggle ?  `${styles.active1} ${styles.alignment}  ${styles.design}` : 
 `${styles.alignment}  ${styles.design}` }>A well-formatted book is easier to read and navigate, making readers more likely to stick with it until the end. This gives you a better chance of getting your message across and making a lasting impression.</span>

 <span className={ clicktoggle ?  `${styles.active1} ${styles.alignment}  ${styles.design}` : 
 `${styles.alignment}  ${styles.design}` }>Last but not least, having a professionally formatted book can help you stand out from the competition. In today's crowded marketplace, it's more important than ever to find ways to make your business stand out – and a well-formatted book can certainly help you do that.So if you're looking for a way to give your business a boost, investing in a professionally formatted book is definitely a wise move.</span>

 
 
 </>



const whybookpublishingdata = [

{
  title: 'What Does Book Formatting Include?',
  text:  'Professional formatting services generally include setting up the basic layout of the book, including margins, pagination, and chapter headings. It may also involve more complex tasks, such as creating a table of contents and index pages.',
  col6: '6',
},
{
  title: 'How Does Book Formatting Services Providers Help Business Owners?',
  text: 'Formatting a book can be a difficult and time-consuming task, but it’s important to get it right if you want your book to look professional and be successful. A good book formatting service will take care of all the details for you, from choosing the right font and line spacing to creating a table of contents and index. They’ll also make sure that your book is compatible with all the major e-book platforms, so you can reach the widest possible audience. Working with professional book formatting services helps businesses stand out from the crowd and give you the best chance of success. To cut a long story short, investing in professional book formatting services is a smart move that will pay off in the long run.',
  col6: '6',
},
{
title:'How to Format a Document for Book Formatting?',
text:'When formatting a document for books, there are a few things to keep in mind. First, you will want to make sure that your document is in a font that is easy to read. Times New Roman or Arial are both good options. You will also want to make sure that your margins are at least 1 inch on all sides, and that your text is double-spaced. Finally, you will want to include a header at the top of each page that includes the title of your book and your name. Professional document formatting services take care of this process.',
col6: '6',
},
{
title:'How Do Formatted Books Help Business Owners?',
text: data,
col6: '6',
},

]




const reasons = [

  {
    title:'Experienced Professionals',
    text:'We have a team of highly experienced and qualified professionals who are experts in book formatting.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Affordable Rates',
    text:'We offer affordable rates without compromising on quality.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'On-Time Delivery',
    text:'We deliver your formatted books within the promised timeframe.',
    col:'6',
    classnum: 'number',
  },

  {
    title:'Quality Assurance',
    text:'We have a 100% satisfaction guarantee, ensuring that you are happy with our book formatting services. Book Writing Cube has a proven track record of providing high-quality book formatting services to authors worldwide.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Customer Support',
    text:'We`re always available to answer any questions you may have about our services. In short, we provide 24/7 customer support to answer all your queries and doubts.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Modern Tools',
    text:'We use the latest software and technology to format your books perfectly.',
    col:'6',
    classnum: 'number',
  },


]


  return (
   <>
   <Head>

   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title> Promising Formatting Services – Book Writing Cube </title>
    <meta name="description"
        content="Formatting Services that help your book ready for publication. Contact us to format your book per international standards." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />

    <meta name="DC.title" content="book formatting services" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />
    <meta name="DC.title" content="book formatting services" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Promising Formatting Services – Book Writing Cube" />
    <meta property="og:description"
        content="Formatting Services that help your book ready for publication. Contact us to format your book per international standards." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Promising Formatting Services – Book Writing Cube" />
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
title='Our Recent Formatting Projects That Made Our Clients WOW!'
para='The list of projects goes on, but the most recent ones are here to help you confide in our formatting services expertise.'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Formatting Services Act Like A Missing Piece Of Your Book Success!</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    Our experts leave no stone unturned when it comes to formatting your book to the universal standards and making it a masterpiece. It goes unsaid that formatting services help you control the narrative and make a good first impression on the potential readers. To help you know more about book formatting perks, we have some knowledge to share with you!
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




{/* Stillonthefence component */}

<Container className='still'>


<Row >
<h2 className='font48 fw900 color-blue t-center font-f mb-5'>What Makes Us Your Top Pick?</h2>  
</Row>  

<Row className='gy-5'>
{ reasons.map((item, i) =>
<Stillonthefence key={i}
title =  {item.title}
text =   {item.text}
col6 = { item.col }
classnumber = { item.classnum }
/>
  )}

</Row>  
</Container>







{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="How The Formatting Wheels Are Set In Motion?"
  text="Our professionals follow a five-step game plan to make your manuscript perfect to the level of finesse."
  whychoose= {howtheformatting}
 />


{/* Aspiring */}
<Aspiring
 title= 'Polish Your Manuscripts To Perfection By Having Us On Your Side!'
 text="Looking for a book formatting service that can help make your dream of being a published author a reality? Look no further than our team of professionals at Book Writing Cube! We offer a wide range of book formatting services that are sure to meet your needs and exceed your expectations. Contact us today to learn more about our services."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Bookformattingservices