import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Partners from '../../components/Partners'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Whychoosebook from '../../components/Whychoosebook'
import ourprosperousblog from '/public/images/whychoosebooks/ourprosperousblog.png'
import Dowecome from '../../components/Dowecome'
import Customersatisfaction from '../../components/Customersatisfaction'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Bookpublishingservices from '../../components/Bookpublishingservices'
import Whybookpublishing from '../../components/Whybookpublishing'
import styles from '@/styles/whybookpublishing.module.css'

const Blogwritingservices = () => {


  const bannertext=[
    {
      title: 'First-Class Blog Writing Services to Bring Your Business Up!',
      pra: 'Our professional blog writing services are designed to help you achieve your business objectives at every turn!',
      discuss:'LET S DISCUSS',
      homebannernum:'(302) 883-8877',
      banlogo:homebannerlogos,
      banners:'blogwritingservices',
     
       

    }
  ]

const text = <span>We write, edit, publish and market all genres of books. Also, we provide similar services to <Link className='textdocationnone' href="#">self publish ebooks</Link>. So, we can also help you with <Link className='textdocationnone' href="#">self publishing</Link> .</span>;

const subtext = <span>Benefit from our wide-ranging array of book publication formats and forms and book your place as a book writing cube. We are ranked among the top book publishing companies including children’s book publishers and Amazon publishing services providers.</span>;

const  kindledirectpublishing = <span>Providing the Highest quality and cost-effective <Link href="#" className='textdocationnone'>kindle direct publishing</Link> and printing services to our clients, with shipping and handling across the state.</span>


const datapost = <span>Yes, you can. The Book Writing Cube team will assist you in choosing the platform i.e.,  <Link className='textdocationnone' href="#">Amazon KDP</Link> that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!</span>


const whybookpublishingdata = [

{
  title: 'What is blog writing services?',
  text:  'Businesses need content that engages their audience and drives conversions. A blog is a great way to accomplish this, but many businesses don’t have the time or resources to produce high-quality blog content on a regular basis. This is where our content blog writing services and guest blog writing services come in.',
  col6: '6',
},
{
  title: 'What is the importance of blog writing for businesses?',
  text: 'Blog writing services can help businesses by providing high-quality, engaging content that helps to achieve their marketing and business goals. Services vary, but most will provide articles on a specific topic or niche, customized to the client’s needs. There are many benefits of using a blog writing service. Perhaps the most obvious is that it frees up time for businesses to focus on other aspects of their operations.',
  col6: '6',
},
{
title:'How can blog writing help you become successful?',
text:'There’s no doubt that a successful blog can be a powerful tool. It can help you build your brand, connect with customers, and even drive sales. But what if you don’t have the time or expertise to write compelling content? That’s where business blog writing services come in. Best blog writing services can provide high-quality, engaging content that will help you achieve your business goals. Whether you need help developing ideas, crafting headlines, or writing entire posts, these services can take the burden off of your shoulders so you can focus on other aspects of your business.',
col6: '6',
},
{
title:'What is the cost of blog writing services?',
text: 'Blogging is a popular way to share your thoughts and ideas with the world. The cost of blog writing services can vary depending on the quality and experience of the writer, as well as the length and complexity of the project. Our team of talented writers has experience working on numerous projects. At Book Writing Cube, our blog writing services packages’ prices vary for the success and ease of our valued clients.',
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
title='A Quick Look At Our Successful Blog Writing Projects'
para='Our team of brilliant blog writers has years’ worth of experience.'
/>


{/* Whybookpublishing */}
<div className={styles.whybookpublishing}>
  <Container>

  <Row>
    <h2 className='font48 fw900 color-blue t-center'>The Importance Of Blog Writing In Today's Digitally-Driven Era</h2>
    <p className='font15 fw500 color-black t-center pb-5'>
    Blog writing is a great way to promote a book or a business. In addition, blogging can be a great way to connect with others who share your interests. Professional blog writing services can also be a great marketing tool. If you can write well and provide valuable information, people will be more likely to visit your blog. Our professional blog writers help you with that. This can lead to more traffic for your website or blog, which can, in turn, lead to more customers or clients.
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
   title="Our Prosperous Blog Writing Process Crafted For Your Success"
  text="Book Writing Cube's professional and affordable blog writing services offer custom-tailored solutions designed for your success."
  whychoose= {ourprosperousblog}
 />


{/* Aspiring */}
<Aspiring
 title= 'For Blog Writing Services That Expedite Your Journey Towards Success, Contact Book Writing Cube Today!'
 text="Get in touch with one of our industry experts for more information about our online blog writing services and pricing details by leaving your email or phone number below!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"
/>








   </>
  )
}

export default Blogwritingservices