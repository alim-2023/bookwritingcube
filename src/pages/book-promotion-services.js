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
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/whybookpublishing.module.css '
import Stillonthefence from '../../components/Stillonthefence'

const Bookpromotionservices = () => {


  const bannertext=[
    {
      title: 'Book Promotion Services That Give Your Book The Exposure It Deserves!',
      pra: 'As an author, the only wish you long for is to make an unbeatable name for yourself. Here at Book Writing Cube, we offer book marketing services that help authors reach a larger audience, boost visibility, and get more ratings and sales for their books.',
      subtext1:'If you want to create buzz around your publication and grow your audience, we are the perfect destination to stop by. We specialize in helping authors get their books into the hands of their target readership.',
      subtext2:'Connect with us to connect with the world who may serve as the biggest advocates of your book!',
      subtext3:'Our Job Isn’t Done Till Your Reputation Is Established As A Renowned Name In The Industry.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'bookpromotionservices',
     
       

    }
  ]





const whybookpublishingdata = [

{
  title: 'Why Do I Need Book Promotion Services?',
  text:  'There are a lot of reasons why you might need book promotion services. Perhaps you are self-publishing and want to make sure your book gets seen by as many people as possible. Or maybe you have got a traditional publisher, but they are not doing much to promote your book. In either case, working with a book promotion company can help you get your book in front of more readers.',
  col6: '6',
},
{
  title: 'What Kind of Services Do Book Promotion Companies Offer?',
  text: 'Book promotion companies offer a wide range of services, from helping you create a social media campaign to organizing a book tour. They can also provide more general marketing and publicity assistance, such as drafting press releases, working with book reviewers, or kindle book promotion services for authors.',
  col6: '6',
},
{
title:'How Much Do Book Promotion Services Cost?',
text:'The cost of book promotion services varies depending on the company you work with and the scope of the project. In general, you can expect to pay several hundred dollars for basic services and upwards of a few thousand for more comprehensive campaigns.',
col6: '6',
},
{
title:'How Does Book Promotion Help Businesses?',
text: 'Book promotion can help businesses in many ways. It can generate awareness for a companys products or services, help create or increase brand recognition, and even drive sales. Promotions can be targeted to specific audiences and can take many forms, from online ads and social media campaigns to in-person events and personal interactions. When done correctly, book promotion can be an extremely effective marketing tool. It can reach a wide audience, build interest and excitement, and ultimately help boost a companys bottom line. With so much potential, it is no wonder that businesses of all sizes are turning to book promotion to help them grow and succeed.',
col6: '6',
},

]



const reasons = [

  {
    title:'Proven Track Record',
    text:'Our company has a proven track record of successful book promotion campaigns.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Team of Marketing Gurus',
    text:'Book Writing Cube has a team of experienced and creative professionals who can provide customized book promotion services. Every marketing approach, platform, and product requires a well-tailored strategy and plan of execution. Since every book has a different audience, our book marketing services make sure the needs and preferences of the target readers are met.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Cost-Effective Solutions',
    text:'We offer cost-effective book promotion services for authors that fit any budget. The packages we offer regarding book marketing services include social media platforms, blogging, guest posting, and email marketing.',
    col:'6',
    classnum: 'number',
  },

  {
    title:'Extensive Network',
    text:'We bear a wide range of contacts and resources to promote your book effectively. We`ve helped authors from all genres and backgrounds achieve their publishing goals, and we can do the same for you.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Deep Understanding',
    text:'We have a deep understanding of the book promotion process and know how to get results.',
    col:'6',
    classnum: 'number',
  },
  {
    title:'Result-driven Approach',
    text:'We are committed to providing the best possible online book promotion services and achieving the desired results for our clients.',
    col:'6',
    classnum: 'number',
  },


]


  return (
   <>
   <Head>

   <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title> Professional Book Promotion Services – Book Writing Cube</title>
    <meta name="description"
        content="Book Promotion Services to make a noise around your books. Call our marketing gurus and let them make your book the talk of the town. 
        " />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />

    <meta name="DC.title" content="book promotion" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />

    <meta name="DC.title" content="book promotion" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Professional Book Promotion Services – Book Writing Cube" />
    <meta property="og:description"
        content=" Book Promotion Services to make a noise around your books. Call our marketing gurus and let them make your book the talk of the town." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Professional Book Promotion Services – Book Writing Cube" />
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
          subtext3={item.subtext3}
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
title='Our Recent Book Promotion Projects That Made Headlines!'
para='Here is a list of the projects we nailed with our marketing expertise.'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Untangle The Complexity Of Your Manuscript Selling With Our Book Marketing Services!</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    Book Writing Cube is a creative studio that offers book promotion services to help authors and business personas get their work noticed by potential readers. We offer various services to suit your needs, including book trailer creation, social media marketing, and more. We're here to help you get your work out there and seen by as many people as possible. Here are a few FAQs that our professional book marketers curated to add information to your knowledge bag.
                    </p>

  </Row>

    <Row>
      {whybookpublishingdata.map((item, i) =>
        <Whybookpublishing  key={i}
          title={item.title}
          text ={item.text}
          col6 ={item.col6}
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
<h2 className='font48 fw900 color-blue t-center font-f mb-5'>Still On the Fence? We Have Reasons For You To Confide In Us!</h2>  
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
   title="Here’s How We Buckle up To Drive the Book Promotion Engine!"
  text="We have a team of marketing maestros who maximize the marketing channels and make your book the talk of the town. Here is a recipe of how their marketing is cooked to perfection:"
  whychoose= {drivethebook1}
 />


{/* Aspiring */}
<Aspiring
 title= 'Making Your Book a Stellar Addition to the Literature World!'
 text="If you want to watch your work take off and reach new heights, Book Writing Cube may help you do the trick. With extended years of experience in the industry, we know exactly what it takes to get your book noticed and gain maximum exposure. Call us now to take your book to the next level!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Bookpromotionservices