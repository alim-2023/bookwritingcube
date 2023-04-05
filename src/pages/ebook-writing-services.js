import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import bookwritingprocess from '/public/images/whychoosebooks/bookwritingprocess.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import andnohiring from '/public/images/andnohiring/andnohiring.png'
import Finetoothedbook from '../../components/Finetoothedbook'
import Stillonthefence from '../../components/Stillonthefence'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservicesweoffer'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'

const Ebookwritingservices = () => {


  const bannertext=[
    {
      title: 'Become The Next Best Book-seller With Our Impeccable Ebook Writing Services!',
      pra: 'We are the experts of designing, illustrating, and compiling your eBooks for a successful publication.',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'bookwritingservices',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>


const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="#">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>


const whybookpublishingdata = [

{
  title: 'Why a book writer when I can write a book myself?',
  text:  'Of course, you can write your book on your own, and we are sure that you would do a stellar job with it. But are you sure that you wouldn’t appreciate an extra helping hand? A helping hand from a professional eBook writer who has been doing this for longer than you had the idea of writing your own book. Our book writing services are a collaborative process between the client and our team where we merely help our client write the book that would sell well and is up to the industry’s standards. So I ask you again, won’t a professional know how to do this better?',
  col6: '6',
},
{
  title: 'How strict are you with your confidentiality?',
  text: 'We are very strict and thorough when it comes to protecting the identity of our clients and our ghostwriters. We make our eBook ghostwriters sign an NDA where they aren’t allowed to take any material out of the office premises or tell anyone anything about the kind of project they are working on to protect our client’s identity. So many years in book writing services, and we have never had a scandal when it comes to protecting the anonymity of our client. As professional writing services, we maintain a very ethical decorum and play by the rules of the literary world.',
  col6: '6',
},
{
title:'Such book editing services, are they very expensive?',
text:'It doesn’t have to be! We have various packages, depending upon the nature of your project and what kind of package would suit it better. And don’t worry, we have a very flexible mode of payment that wouldn’t cost you an arm and a leg.',
col6: '6',
},
{
title:'What genres do you cover?',
text: 'All! We cover all genres from fiction to autobiographies, fantasy thrillers, to children’s literature. Our book writing services cover all genres and all types of work f literature. We have an arsenal of teams dedicated to numerous genres, and all of them are tremendous at their job.',
col6: '6',
},

]


const reasons = [

  {
    title:'World-Class ghostwriting-services Team',
    text:'Work with the industry’s top writers, editors, and publishing strategists. Our team approach gives you the best chance for success.',
    classnum: 'number1',
    
  },
  {
    title:'Personalized Strategic Approach',
    text:'Our process begins with extensive publishing strategy sessions to ensure we develop a plan to achieve your goals.',
    classnum: 'number1',
   
  },
  {
    title:'Refined Process',
    text:'Enjoy the efficiency and dependability of a professionally managed ghostwriting-services process',
    classnum: 'number1',
   
  },

  {
    title:'Book Writing Ghostwriters',
    text:'Our team includes #1 New York Times - Book Writing ghostwriters and award-winning authors for almost any genre.',
    classnum: 'number1',
  
  },
  {
    title:'Big-5 Editors',
    text:'Your project will be managed and edited by a former acquisitions editor from a Big-5 publisher with numerous New York Times - Book Writing titles.',
    classnum: 'number1',
    
  },
  {
    title:'Publishing Navigation',
    text:'We guide you through every step of the book publishing process. We can place your book directly with traditional publishers or help you choose the ideal hybrid publishing solution',
    classnum: 'number1',
   
  },


]







const fine = [

  {
    title:'Connect with an efficient genre writer and schedule a 1 on 1 interview',
    class: 'connect',
    btn:'LET`S DISCUSS'

  },

  {
    title:'Get the desired eBook design and have it formatted according to industry standards',
    class: 'connect',
    btn:'LET`S DISCUSS'

  },

  {
    title:'We take care of copyrights, editing, and designs along with content',
    class: 'connect',
    btn:'LET`S DISCUSS'

  },


]




  return (
   <>
   <Head>


   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Ebook Writing Services  - Book Writing Cube</title>
    <meta name="description"
        content="Ebook Writing Services Offer You The Professional Assistance To Pen Down Your Thoughts. Get A Custom Quote Today!" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />
    <meta name="DC.title" content="Ebook Writing Services" />
    <meta name="geo.region" content="en" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta name="DC.title" content="ebook writing services" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="55.753005;-2.857642" />
    <meta name="ICBM" content="55.753005, -2.857642" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Ebook Writing Services  - Book Writing Cube" />
    <meta property="og:description"
        content="Ebook Writing Services Offer You The Professional Assistance To Pen Down Your Thoughts. Get A Custom Quote Today!" />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Ebook Writing Services  - Book Writing Cube" />
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
title='Our E-Book Writing Projects'
para='Let Our E-Book Writing Team Help You.'
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


{/* Stillonthefence component */}
<div className={styles.stillbookwritingservices}>
<Container >
<Row >
<h2 className='font48 fw900 color-white t-center font-f mb-5'>Why Choose Our E-Book Writing Services?</h2>  
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

</div>




{/* Dowecome */}
<Dowecome
 title='Planning >> Writing >> Designing = eBook Customization Formula'
 text="We want to help you shine your eBook and make it compelling for readers, so we'll work with the most important ideas. You have an option of doing a one-hour interview where any challenging or confusing topics will be bouncing off us before they're even published."
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
Dowecome= "publishmybook"
image={andnohiring}


/>









{/* Lululogos components */}
<div className='mt-5'>
<Lululogos/>
</div>



<div className={`${styles.finetoothedbook} customizedbook`}>
<Container>
<Row >
<h2 className='font48 fw900 color-blue  t-center font-f mb-2'>Paving Your Way for An Unforgettable eBook</h2>  

<p className='font15 fw500 color-black t-center pb-2'>Our eBook publishing service is an excellent tool to build your authority in the book writing industry and become an authority of relevant information.</p>

</Row>

<Row className='gy-5'>
{ fine.map((item, i) =>
<Finetoothedbook   key={i}
title =  {item.title}
text =  {item.text}
classtop =  {item.class}
btn =  {item.btn}
/>
)}
</Row>
</Container>
</div>



{/* Why Choose Book Writing Cube? */}
<Whychoosebook
   title="Ultimate Place for eBook Illustration and Designing"
  text="Book Writing Cube has a team of professional illustrators and designers ready to breathe life into your idea. Our ebook editing service specialization lies in various genres that include:"
  whychoose= {bookwritingprocess}
 />


{/* Aspiring */}
<Aspiring
 title= 'Professional eBook Writing and Publishing We Give New Life To Your Words'
 text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
 number="(302) 883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Ebookwritingservices