import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import drivethebook1 from '/public/images/whychoosebooks/bookeditingprocess.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import typeofbooks from '/public/images/selfpublishingservices/typeofbooks.png'
import marketyourbook from '/public/images/selfpublishingservices/marketyourbook.jpg'
import copy from '/public/images/selfpublishingservices/copy.png'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'
import Stillonthefence from '../../components/Stillonthefence'
import Bookpublishingservicesweoffer from '../../components/Bookpublishingservicesweoffer'

const Bookpublishingservices = () => {


    const bannertext=[
        {
          title: 'Book Publishing Services Giving You The Creative Control You Deserve!',
          pra: 'Whether it be amazon self publishing or any other platform, our book publishing services give you the creative control you deserve. Discuss with our expert book publishers the creative control you deserve. Discuss with our expert book publishers.',
          discuss:'LET S DISCUSS',
          homebannernum:'(302) 883-8877',
          banlogo:homebannerlogos,
          banners:'bookpublishingservices',
          process:'OUR PROCESS, IN A MINUTE',
         
           
    
        }
      ]




      const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="/book-publishing-services">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="/book-publishing-services">self publishing</Link> .</span>;

      const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;
      
      const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="/book-publishing-services" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>
      
      
      const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="/book-publishing-services">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>
      
      
      const whybookpublishingdata = [
      
      {
        title: 'How can I publish my book?',
        text:  'The first thing you need to do after making up your mind about publishing a book is to find a publishing house. There are several types of publications including online publication, paperback or hardcopy publishing as well as self Publication. You need to select the kind of publication you want and then work with the publisher company to assist you with the process.',
        col6: '6',
      },
      {
        title: 'What’s different about Self Publishing?',
        text: 'By self publishing a book, you get full authority of your work including the management and other processes of publishing like editing, cover design and even marketing strategies. You have to pay a certain amount as fee and you get to call the shots! At Book Writing Cube, different teams designated for different kinds of publications.',
        col6: '6',
      },
      {
      title:'How much does it cost to have a book published?',
      text:'If you’re worried about the initial investment you have to put in order to get your book published, don’t fret too much! There are various packages available from which you can select the one that works for you. We work with every kind of budget to give your clients the best experience and help them publish their work for the world to read!',
      col6: '6',
      },
      {
      title:'Can I publish on different publishing platforms?',
      text: datapost,
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
   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Amazon KDP Book Publishing Services Company - bookwritingcube.com</title>
    <meta name="description" content="Hire a reliable Book Publishing company, for Kindle Direct Publishing. As a top book publisher, we offer a variety of tools and resources to help authors succeed – Call us now and let our publishing experts guide you!" />
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
	<meta property="og:title" content="Amazon KDP Book Publishing Services Company - bookwritingcube.com" />
	<meta property="og:description" content="Hire a reliable Book Publishing company, for Kindle Direct Publishing. As a top book publisher, we offer a variety of tools and resources to help authors succeed – Call us now and let our publishing experts guide you!" />
	<meta property="og:url" content="https://www.bookwritingcube.com/" />
	<meta property="og:site_name" content="Amazon KDP Book Publishing Services Company - bookwritingcube.com" />
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
          processs={item.process}
       /> 
       )}
   

   {/* partners components */}
<Partners/>

{/* Makestories */}
<Makestoriesnew
title='Our Latest Book Publishing Projects'
para='Let Our Book Publishing Team Help You'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>Why Book Publishing?</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
                        Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss inside our heads. However, some ideas/stories and visions are meant for the world to read and study. The ideas develop once you write, but the important aspect is to let the world to see your work and change mindsets!
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
      <h2 className='color-blue fw900 font48 font-f t-center'>Why Choose Our Self Publishing Services?</h2>
    </Col>
  </Row>
</Container>



{/* Dowecome */}
<Dowecome
 title='How Do "I Publish My Book?"'
 text="Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves! Every word we polish is prepared for the impact on the readers and infused with care. From beginning to end, our book publishers and book editing experts take on every project, because no task is too big or difficult when you have people like us working together as part of such a one-stop solution."
 subtext="We ensure everything from page-turners to nail-biting finishes feels masterfully controlled so each reader can find a perfect read. Our book editing team eagerly waits for their next project to be proofread and edited."
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={publishmybook}


/>


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='What Type Of Books Do We Publish?'
 text= {text}
 subtext={subtext}
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
 image={typeofbooks}
 whychooseclass= "marketyourbook"
 />



 {/* Dowecome */}
<Dowecome
 title='How Many Copies Of Your Book Will Be Published?'
 text="We publish/print books on demand. We set up your account with Amazon and other places, which allows us to have no set values for the minimum amount of copies that can be published/printed. We will print as many and as little as you want."
 subtext={kindledirectpublishing}
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={copy}
/>


{/* Whychoosebookwritingcube */}
<Whychoosebookwritingcube
 title='How Will We Help You Market Your Book?'
 text= 'Our team of marketing experts are willing to provide their services to you. If you choose us for marketing, we ensure that you and your book gets maximum exposure. Our marketing professionals will assist your book and brand in reaching the success it deserves.'
 subtext= 'Our book marketing professionals will help your book and brand reach the success it deserves.'
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
image={marketyourbook}
whychooseclass= "marketyourbook"
 />



{/* Customersatisfaction */}
<Customersatisfaction/>



 {/* Bookpublishingservicesweoffer */}
 <Bookpublishingservicesweoffer />




{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="What Is Our Book Publishing Process?"
  text="We have devised an elaborate workflow process to maximize transparency while also making sure that the final product's quality does not suffer. We do this through an extensive process of asking for approvals and updating our customers at every project stage. This helps a customer understand where we're coming from and be aware of what's going on. Our self publishing process follows these six stages, as listed below."
  whychoose= {drivethebook1}
 />


{/* Aspiring */}
<Aspiring
 title= 'Whether Bookshelf or Amazon Self Publishing – Our Designs Makes You Stand Out'
 text="Design is the most important aspect when it comes to selling books. We know that might sound like an old cliché, but designing your cover will deliver layout and build intrigue for potential readers; they’ll want more after seeing what’s in store within these pages! So don’t settle on anything less than perfection – let us help make sure every manuscript looks exactly how you envisioned through Book Writing Cube."
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
/>









   </>
  )
}

export default Bookpublishingservices