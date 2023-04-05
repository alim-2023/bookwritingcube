import React from 'react'
import Banner from '../../components/Banner'
import Head from 'next/head'

const Thankyou = () => {

    const bannertext=[
        {
          title: 'Thank You',
          pra: 'For filling out the contact form. Our representative will contact you shortly.',
          banners:'bookpublishingservices',
          thankyou:'thankyou',
         
           
    
        }
      ]


  return (
    <>
    <Head>

    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Thank You - Hire Professional Book Writing Experts in the US -</title>
    <meta name="description"
        content="Receive the Best Fraction of Profits with Our Publication Services We give you maximum creative control that retains royalties with a self-published book. Discuss your publishing requirement and strategies with us. Lets Discuss Lets Discuss (302) 883-8877 Request A Free Quote Your Budget3k-5k5k-7k7k-10k10k-15k15k-20k20k-25k25k-30k30k-40k40k-50k The published manifestation of your writing dreams! Get Free Consultancy Publishing by […]" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="tags" content="" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Book Publishing - Hire Professional Book Writing Experts in the US -" />
    <meta property="og:description"
        content="Receive the Best Fraction of Profits with Our Publication Services We give you maximum creative control that retains royalties with a self-published book. Discuss your publishing requirement and strategies with us. Lets Discuss Lets Discuss (302) 883-8877 Request A Free Quote Your Budget3k-5k5k-7k7k-10k10k-15k15k-20k20k-25k25k-30k30k-40k40k-50k The published manifestation of your writing dreams! Get Free Consultancy Publishing by […]" />
    <meta property="og:url" content="https://www.bookwritingcube.com/book-publishing-services/" />
    <meta property="og:site_name" content="Book Publishing - Hire Professional Book Writing Experts in the US -" />
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
          bannershome={item.banners}
          thankyou={item.thankyou}
       /> 
       )}

    </>
  )
}

export default Thankyou