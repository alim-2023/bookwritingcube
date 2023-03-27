import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'

import bookmarketingprocess from '/public/images/whychoosebooks/bookmarketingprocess.png'

import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'

import bookmarketingservices1 from '/public/images/bookmarketingservices/1.png'
import bookmarketingservices2 from '/public/images/bookmarketingservices/2.png'
import bookmarketingservices3 from '/public/images/bookmarketingservices/3.png'
import bookmarketingservices4 from '/public/images/bookmarketingservices/4.png'


import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/whybookpublishing.module.css'

const Bookmarketingservices = () => {


  const bannertext=[
    {
      title: 'Untangle The Complexity Of Your Manuscript Selling With Our Book Marketing Services!',
      pra: 'Consistency. Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered! Simplifying the harsh process of book marketing.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'bookmarketingservices',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>




const whybookpublishingdata = [

{
  title: 'The awareness & trust capture:',
  text:  'The key is to make your work known before you make it available. We keep them eager to earn their trust, all while making sure your marketing content aligns with what they seek.',
  col6: '6',
},
{
  title: 'The socially responsive bond',
  text: 'There’s nothing more value-adding in book marketing than social media engagement. The seal-the-deal tip here is to know what they expect. The readers are on the constant quest for good literature; keep them hooked on your work with posts, comments, and tags.',
  col6: '6',
},
{
title:'The authenticity deal',
text:'Of course, it doesn’t mean your book should have a distinctive idea, just the marketing strategy. The trick here is to utilize the digital marketing strategies effectively for reputation building—audience-focused and platform-oriented content.',
col6: '6',
},
{
title:'The profit-generating finale',
text: 'Readers are quick and harsh assessors; they want to know why your work is worthy. Creating a focused book promotion plan is fundamental to a book’s success. Make the traction of your work the trump card for sales and profits amplification.',
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



{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Why Book Marketing?</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    It is a toolset tailored to your requirements and approaches. Adjusting it to your budget, fine-tuning it to fit your audience preferences, and preparing it for maximized exposure. Unlike other book marketing companies, we capitalize on commercialization, ensuring the highest book sales & profits.
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


<Container className='servicetitle'>
  <Row>
    <Col>
      <h2 className='color-blue fw900 font48 font-f t-center'>Why Choose Our Book Marketing Services?</h2>
    </Col>
  </Row>
</Container>

{/* Dowecome */}
<Dowecome
 title='We Appreciate Our Clients Who Put Their Faith In Us.'
 text="Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves! Every word we polish is prepared for the impact on the readers and infused with care. From beginning to end, our affordable book marketing services guarantee excellence-- because no task is too big or difficult when you have people like us working together as part of such a one-stop solution."
 subtext="Good branding will amplify all your marketing efforts. But it takes professionalism and industry insight to make a trustworthy brand. To add to that, it takes much effort to find experienced professionals to get this job done—something only the best book marketing services can offer!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={bookmarketingservices1}


/>


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='Through Collaboration'
 text= 'Our book marketing services and packages include comprehensive publishing assistance and guidance. We will design a budget for you, covering the designing, publishing, printing, and editing needs of the book.'
 subtext= 'Our book marketers formulate online and offline strategies to make your work a recognized read. Unlike other book marketing companies, our job isn’t done till your reputation is established as a renowned name in the industry.'
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
 image={bookmarketingservices2}
 whychooseclass= "marketyourbook"
 />



 {/* Dowecome */}
<Dowecome
 title='Impeccable Customer Support'
 text="For us, our customer’s needs are the top priority. Regardless of the different profiles or the website updates and revisions, our book marketing services aim to make your work a stellar addition to the literature world."
 subtext= 'From keeping up with marketing trends to revamping the strategies, the best book marketing services providers go the extra mile to make the bestselling title a reality.'
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={bookmarketingservices3}
/>


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='Impressive Strategic Implementation'
 text= 'Every marketing approach, platform, and product requires a well-tailored strategy and plan of execution. Since every book has a different audience, our affordable book marketing services make sure the needs and preferences of the target readers are met.'
 subtext= 'Our experts provide thorough guidance about different types and strategies of marketing to gain complete customer satisfaction. The packages we offer regarding book marketing services include social media platforms, blogging, guest posting, and email marketing.'
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
image={bookmarketingservices4}
whychooseclass= "marketyourbook"
 />





{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="What Is Our Book Marketing Process?"
  text="The best book marketing services come with an elaborate process of guaranteeing transparency and communication. We do this through an extensive process of updating our customers at every project stage. This helps the customer understand where we're coming from and be aware of what's going on."
  whychoose= {bookmarketingprocess}
 />


{/* Aspiring */}
<Aspiring
 title= 'Ready To Make It Big With Our Book Marketing Services?'
 text="You are the ambassador of your own book—but that doesn’t mean it is a singly endeavor. It is an ever-changing, seriously challenging, and quite honestly, commercially competitive industry. The right book marketing plan, calculated milestones, and extended exposure—the all’s and must-haves of making your work a chart-topper! Let’s collaborate!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Bookmarketingservices