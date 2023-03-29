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

import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservicesweoffer'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/Whybookpublishing.module.css'
import Finetoothedbook from '../../components/Finetoothedbook'

import Stillonthefence from '../../components/Stillonthefence'

const Ghostwritingservices = () => {


  const bannertext=[
    {
      title: 'Ghostwriting Services Turning Your Words Into Compelling Stories!',
      pra: 'Want to craft rich and compelling stories? Hire our top-notch ghostwriting services, and let us help you transform your words into a masterpiece!',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'bookwritingservices',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>





const whybookpublishingdata = [

{
  title: 'Your book needs dedication:',
  text:  'The fact is writing a book is hard work—it takes revisions, edits, rewrites, and re-edits. Hiring a ghostwriter will actually ease the process for you. You wouldn’t have to go around structuring each sentence, correcting the content flow, and proofreading the story. Ghost writers are professionals trained to understand, grasp, and compose stories as ideated by their clients.',
  col6: '6',
},
{
  title: '2. You don’t have enough time:',
  text: 'Of course, writing a book is no overnight job. It takes months or even years to finish one book. Professional ghostwriting services provide you with streamlined processes and structured approaches to help you complete your book project in your preferred timeline. All you have to do is submit the book idea, collaborate with your ghost writer, and wait on the finished product.',
  col6: '6',
},
{
title:'You don’t know how it’s done:',
text:'Writing a book can be a learning and rewarding experience, but it demands severe time and effort investment. The trial and error process, the compilation stage, and the finalized product require some serious learning and skills. With ghost writing services, you can simply work in collaboration and learn from your assigned ghostwriter about the must-haves and have-nots of book writing.',
col6: '6',
},
{
title:'You don’t have a brand:',
text: 'One of the perks of hiring ghostwriting services is that it comes with the advantage of branding and marketing services. Without a recognized brand, your work might not get the audience it deserves. The professional ghost writing services offer their clients affordable and client-oriented packages to help build their reputation and online presence.',
col6: '6',
},

]




const reasons = [

  {
    title:'World-class ghostwriting services Team',
    text:'Work with the industry’s top writers, editors, and publishing strategists. Our team approach gives you the best chance for success.',
    classnum: 'number1',
    
  },
  {
    title:'Personalized Strategic Approach',
    text:'Our process begins with extensive writing, editing, and publishing strategies to ensure the development of a feasible project completion budget and timeline.',
    classnum: 'number1',
   
  },
  {
    title:'Refined Process',
    text:'Enjoy the efficiency and dependability of a professionally managed ghostwriting services process',
    classnum: 'number1',
   
  },

  {
    title:'Trained ghostwriters',
    text:' Our team includes the industry’s best ghostwriters who have worked with acclaimed authors for every genre.',
    classnum: 'number1',
  
  },
  {
    title:'Big-5 publishers',
    text:'We work in collaboration with the industry’s top 5 publishers and publishing houses. Book Writing Cube guarantees you the acquisition of well-thought-through contracts with the best in town publishers',
    classnum: 'number1',
    
  },
  {
    title:'Online and offline formats',
    text:'We provide our clients with thorough guidance about the online and offline publishing processes. From well-designed paperback and hardcover to well-formatted eBook, our hybrid approach is our all-in-one publishing solution.',
    classnum: 'number1',
   
  },


]






const fine = [

  {
    title:'Client-tailored packages',
    text: 'The process of hiring a ghostwriter starts with thorough and detailed communication of the idea and the storyline. We get to know the clients’ requirements and a dedicated budget for the project. After that, we offer and suggest well-structured packages befitting all the clients’ needs and preferences.',
    class: 'fintop',
    btn:'LET`S DISCUSS'

  },

  {
    title:'Diverse options and approaches',
    text:'Every book, genre, and the client has different needs. One approach can’t fit all, which is why we offer our clients an all-inclusive range of services. We offer basic editing, line-by-line editing, developmental editing, and proofreading services for editing clients. We offer different writing plans and processes for each genre for writing clients.',
    class: 'fintop',
    btn:'LET`S DISCUSS'

  },

  {
    title:'Around the clock availability',
    text:'Our customer support representatives and ghostwriters are available and open to communication, no matter your time region. For us, your book`s success is what counts the most! A well-crafted book, a successfully marketed brand, and a reputable name—we invest all our time and effort to deliver these promises.',
    class: 'fintop',
    btn:'LET`S DISCUSS'

  },


]



  return (
   <>
   <Head>

   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Ghostwriting Services - Book Writing Cube</title>
    <meta name="description"
        content="Ghostwriting services to help you get away with writer's block.Get Our Ghostwriting Services Today." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />

    <meta name="DC.title" content="ghostwriting services" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="54.702355;-3.276575" />
    <meta name="ICBM" content="54.702355, -3.276575" />

    <meta name="DC.title" content="ghostwriting services" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Ghostwriting Services - Book Writing Cube" />
    <meta property="og:description"
        content="Ghostwriting services to help you get away with writer's block.Get Our Ghostwriting Services Today." />
    <meta property="og:url" content="https://www.bookwritingcube.com/" />
    <meta property="og:site_name" content="Ghostwriting Services - Book Writing Cube" />
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
title='Our Ghostwriting Services Projects'
para='Become a renowned author with the help of our ghostwriters!'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>When Should You Hire Ghost Writing Services?</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    The right time to hire a ghostwriter is when you want to pen down your story. In fact, when the will is there but intangible realities like time don’t favor you—that’s when a ghostwriter comes into play!
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
<h2 className='font48 fw900 color-white t-center font-f mb-5'>Why choose our ghostwriting services?</h2>  
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
 title='And No, Hiring Ghostwriting Services Isn’t Illegal!'
 text="The misconception has prevailed ever since the phenomenon of ghostwriting services came into being. The ghostwriter's job is to get paid in return for his written masterpiece. Creativity and a great idea can come from anywhere and anyone, and it doesn’t surely mean everyone has the right ability to articulate it. Ghostwriters are professionals working to make those ambitions a reality. It is a legal collaboration to get that idea out there because those ghostwriters are trained to write, edit, and publish that work."
 number="+1-302-883-8877"
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
<h2 className='font48 fw900 color-blue  t-center font-f mb-2'>Your Book's Success Is Our Objective—We Work As A Team.</h2>  

<p className='font15 fw500 color-black t-center pb-2'>Hire Book Writing Cube to experience professionalism and exceptional quality.</p>

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
   title="What Is Our Ghost Writing Process?"
  text="Our professional ghost writing services is a collaborative process between our client and our team that has the following steps:"
  whychoose= {bookwritingprocess}
 />


{/* Aspiring */}
<Aspiring
 title= 'At The End Of The Day, You Need The Whole Kit And Caboodle To Get It Down Right!'
 text="Give us a call, or leave an email, and our experts will guide you through the entire process, needs, and packages for ghostwriting services your book!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Ghostwritingservices