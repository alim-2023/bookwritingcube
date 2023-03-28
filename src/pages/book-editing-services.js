import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import drivethebook1 from '/public/images/whychoosebooks/bookeditingprocess.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'

import whychooseourbookeditingservices1 from '/public/images/whychooseourbookeditingservices/1.png'
import whychooseourbookeditingservices2 from '/public/images/whychooseourbookeditingservices/2.png'
import whychooseourbookeditingservices3 from '/public/images/whychooseourbookeditingservices/3.png'
import whychooseourbookeditingservices4 from '/public/images/whychooseourbookeditingservices/4.png'

import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'

import Finetoothedbook from '../../components/Finetoothedbook'

const Bookeditingservices = () => {


  const bannertext=[
    {
      title: 'Book Editing Services That Turns Your Content Piece From Drab To Fab!',
      pra: 'Professional book editors: the pros to fix the literary flaws.Top ranked book editing company in US.',
      
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'bookeditingservices',
     
       

    }
  ]

const text = <span>This type of <Link className='textdocationnone' href="/book-editing-services"> ebook editing service </Link>  is also called Mechanical Editing and sometimes referred to as Line Editing. The editor's singular job is to make sure the story has a more "professional" approach and fill any gaps in the original plot.</span>;




const whybookpublishingdata = [

{
  title: 'The predetermined prerequisite:',
  text:  'Once your novel is completed, thorough read and content assessment are of crucial importance. From fixing grammar errors to pinpointing the structural improvements, our online book editor ensures the manuscript is finalized to perfection.',
  col6: '6',
},
{
  title: 'The much-needed assistance:',
  text: 'Reading and re-reading every line and pondering over each comma and semi-colon are surely mind-numbing aspects of book writing. The professional book editors have the right skills and prowess to correct, improve, and fine-tune the content.',
  col6: '6',
},
{
title:'The must-have consultation:',
text:'We know you take great pride in your work; we respect and value that. However, an expert’s advice does make all the difference. Our book writing editor helps you figure out the why’s and how’s of giving your work a professional touch.',
col6: '6',
},
{
title:'The proven technique:',
text: 'Editing requires constant work. Hiring book editing and formatting services can save you the hassle of time and effort investment. Besides, when you know the best-in-town has your manuscript taken care of, you can give up worrying about if it would be a bestseller—because that’s one thing we don’t get wrong!',
col6: '6',
},

]



const fine = [

  {
    title:'Proofreading to perfection',
    text: 'Our professional book writing editor and proofreader make sure the story is impactful, the content is clear and concise, and the message is engaging.',
    btn:'LET`S DISCUSS',
    class: 'fintopbookedit',

  },

  {
    title:'Rigorous Reviewers',
    text:'The online book editor for hire goes through the provided manuscript and pinpoints what does and doesn’t flow well with the scene, transitions, format, and story development.',
    btn:'LET`S DISCUSS',
    class: 'fintopbookedit',

  },

  {
    title:'Grammar Gurus',
    text:'Great grammar, incredible word usage, and well-written sentence are needed to make your work enticing and the audience’s favorite—this is what our professional book editors excel in!',
    btn:'LET`S DISCUSS',
    class: 'fintopbookedit',

  },


]


  return (
   <>
   <Head>

   <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Book Editing Services Rectifying Writing Flaws - Book Writing Cube</title>
    <meta name="description" content="Book Writing Cube Offers Book Editing Services To Make Your Manuscript Flawless. Visit Our Site To Know More. " />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="tags" content="" />
    <meta name="DC.title" content="Book Editing Services" />
    <meta name="geo.region" content="en" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta name="DC.title" content="book editing services uk" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="55.753005;-2.857642" />
    <meta name="ICBM" content="55.753005, -2.857642" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Book Editing Services Rectifying Writing Flaws - Book Writing Cube" />
    <meta property="og:description" content="Book Writing Cube Offers Book Editing Services To Make Your Manuscript Flawless. Visit Our Site To Know More. " />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Book Editing Services Rectifying Writing Flaws - Book Writing Cube" />
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
title='Our Book Editing Projects'
para='Let Our Book Editing Team Help You.'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Why Do You Need Professional Book Editing Services?</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    Editing is a meticulous process, one that requires severely dedicated efforts and time to accomplish. Finishing a novel is a job well done, so why not relax back and have someone take the load off.
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
      <h2 className='color-blue fw900 font48 font-f t-center'>Why Choose Our Book Editing Services?</h2>
    </Col>
  </Row>
</Container>

{/* Dowecome */}
<Dowecome
 title='Developmental Editing'
 text="We know that every word counts, so we're committed to crafting captivating stories for any length and style. Our talented teams of book writing editor will take on your project from start to finish because no task is too big when you have people like us working together as part of such fantastic Book Editing & formatting services."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={whychooseourbookeditingservices1}


/>


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='Editorial Assessment'
 text= 'Proofreading is essential to the success of every project taken up by book editing services. It’s an integral part of finishing your manuscript. Online book editor and proofreader look for errors, so you know that all text was correct before sending or releasing documents published by third parties like publishers.'
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
 image={whychooseourbookeditingservices2}
 whychooseclass= "marketyourbook"
 />



 {/* Dowecome */}
<Dowecome
 title='Structural Editing'
 text="In a world where so much information is available, it's essential to make sure what you're putting out there represents your best work. The process of our book editing services includes exploiting the complexities of this process and turning them into success possibilities. It is also an opportunity for professional book editors and publishers who want help perfecting their craftsmanship with every word they type or publish."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={whychooseourbookeditingservices3}
/>


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='Copy Editing'
 text= {text}
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
image={whychooseourbookeditingservices4}
whychooseclass= "marketyourbook"
 />

<div className={`${styles.finetoothedbook} mt-5`}>
<Container>
<Row >
<h2 className='font48 fw900 color-blue  t-center font-f mb-2'>How Do Our Book Editing And Formatting Services Stand Out?</h2>  

<p className='font15 fw500 color-black t-center pb-2'>We're committed to providing quality book editing services for your work. From book proofreading, copywriting, and grammar, we'll help you perfect what's written so it can be published professionally- whether that means removing errors or adding creative flair.</p>

</Row>

<Row className='gy-5'>
{ fine.map((item, i) =>
<Finetoothedbook   key={i}
title =  {item.title}
text =  {item.text}
btn =  {item.btn}
classtop =  {item.class}
/>
)}
</Row>
</Container>
</div>




{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="Our Book Editing Process"
  whychoose= {drivethebook1}
 />


{/* Aspiring */}
<Aspiring
 title= 'So, About That Story, Ready To Publish? Get Book Editing Done Today!'
 text="Editing, proofreading, publishing--all that form the criticalities of the book writing process. We know the effort it takes, the perseverance it needs, and the struggle it brings, so why not hire a helping hand? We are only a call, message, or email away! Let’s collaborate."
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Bookeditingservices