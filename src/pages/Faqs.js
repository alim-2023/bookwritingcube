import React from 'react'
import homebannerlogos from '/public/images/bannerimages/homebannerlogos.png'
import Head from 'next/head'
import Banner from '../../components/Banner'
import Aspiring from '../../components/Aspiring'
import Partners from '../../components/Partners'
import Faqslist from '../../components/Faqslist'






const Faqs = () => {


    const bannertext=[
        {
          title: 'Create An Impact With Our Non Fiction ghostwriting-services Services',
          pra: 'At highly affordable pricing, we bring our team of competent non fiction ghostwriters with their promising expertise',
          discuss:'LET S DISCUSS',
          homebannernum:'(302) 883-8877',
          banlogo:homebannerlogos,
          faqs:'faqs',
         
           
    
        }
      ]


  return (
    <>
    
    <Head> 
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Book Writing Services Company - Book Writing Cube</title>
    <meta name="description"
        content="We Give You Professional in Book Writing Want to become an author of the all-time best seller? We have the right solution for you Lets Discuss Lets Discuss (302) 883-8877 Request A Free Quote Your Budget3k-5k5k-7k7k-10k10k-15k15k-20k20k-25k25k-30k30k-40k40k-50k The published manifestation of your writing dreams! Get Free Consultancy Are You Facing Difficulty in Converting Idea into Words? […]" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Book Writing Services Company - Book Writing Cube" />
    <meta property="og:description"
        content="We Give You Professional in Book Writing Want to become an author of the all-time best seller? We have the right solution for you Lets Discuss Lets Discuss (302) 883-8877 Request A Free Quote Your Budget3k-5k5k-7k7k-10k10k-15k15k-20k20k-25k25k-30k30k-40k40k-50k The published manifestation of your writing dreams! Get Free Consultancy Are You Facing Difficulty in Converting Idea into Words? […]" />
    <meta property="og:url" content="https://www.bookwritingcube.com//book-writing-services-services/" />
    <meta property="og:site_name" content="Book Writing Services Company - Book Writing Cube" />
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
          bannershome={item.faqs}
       /> 
       )}



{/* partners components */}
<Partners/> 


{/* Faqslist */}
<Faqslist />




{/* Aspiring */}
<Aspiring
 title='Allow us to dominate all the bookshelves and digital libraries, entrust our professional book writers with your book today!'
 text="Pick up the phone or email us, and book our book consultancy services today! The only thing standing in your way of being a best-selling author is not signing up for our professional book writing services! Allow us to assist you in getting there and getting the best and the most affordable book writers for hire today!"
 number="+1-302-883-8877"
 discuss="LET'S DISCUSS"




/>


    
    </>
  )
}

export default Faqs