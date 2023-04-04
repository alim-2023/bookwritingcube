import React from 'react'
import Banner from '../../components/Banner'
import Bloglisting from '../../components/Bloglisting'
import Head from 'next/head'

const Blogs = () => {


    const bannertext=[
        {
          title: 'Blogs',
          alignclass:'blogbanclass',
          aboutbanners:'blogsbanner',
        }
      ]

  return (
    <>

<Head>

<meta charSet="UTF-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<title>Book Writing Blogs - Book Writing Cube</title>
<meta name="description"
    content="Book Writing Blogs that help you get awash with the latest trends in the writing genre. Read them to be ahead of the curve. " />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="max-image-preview:large" />
<meta name="tags" content="" />
<meta property="og:locale" content="en" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Book Writing Blogs - Book Writing Cube" />
<meta property="og:description"
    content="Book Writing Blogs that help you get awash with the latest trends in the writing genre. Read them to be ahead of the curve. " />
<meta property="og:url" content="https://www.bookwritingcube.com/" />
<meta property="og:site_name" content="Book Writing Blogs - Book Writing Cube" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="5 minutes" />
<link rel="icon" href="/favicon.png" />

</Head>
        
        {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          alignclass={item.alignclass}
          bannershome={item.aboutbanners}
       /> 
       )}


            <Bloglisting />



    </>
  )
}

export default Blogs