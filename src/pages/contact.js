import React from 'react'
import styles from '@/styles/Contact.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'

const Contact = () => {

    const handleSubmit = async (event) => {
      
        event.preventDefault()


        // const name = document.querySelector('#name').value
        // const email = document.querySelector('#email').value
       

        // if (!name) {
        //   alert('Please Enter Your Name.')
        //   return false
        // }
        // if (!email) {
        //   alert('Please Enter Your Email.')
        //   return false
        // }
    
      
        const data = {
          first: event.target.first.value,
          email: event.target.last.value,
          phone: event.target.phone.value,
          zip: event.target.zip.value,

         

          checknow: event.target.checknow.value,
          message: event.target.message.value,
        }
    

        const JSONdata = JSON.stringify(data)

        alert(JSONdata);
    

        // const endpoint = '/api/form'
    
  
        // const options = {
        
        //   method: 'POST',
  
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
  
        //   body: JSONdata,
        // }
    
    
        // const response = await fetch(endpoint, options)
    

        // const result = await response.json()
        // alert(`Is this your full name: ${result.data}`)
    

 }


  return (
    <>

    <Head>

    <meta charSet='UTF-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>Book Writing Services Company- Book Writing Cube</title>
    <meta name='description'
        content='Book Writing Services Company that helps you become the best-selling author of all times. Get in touch today.' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='tags' content='' />
    <meta property='og:locale' content='en' />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='Book Writing Services Company- Book Writing Cube' />
    <meta property='og:description'
        content='Book Writing Services Company that helps you become the best-selling author of all times. Get in touch today.' />
    <meta property='og:url' content='https://www.bookwritingcube.com/contact' />
    <meta property='og:site_name' content='Book Writing Services Company- Book Writing Cube' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:label1' content='Est. reading time' />
    <meta name='twitter:data1' content='5 minutes' />
    <link rel='icon' href='/favicon.png' />

    </Head>
    
    <div className={styles.contactbg}>
     
     <Container>
        <Row>
            <Col md={5}>

 
                        <h2 className='color-blue font40 fw900 font-f'>
                            Elevate your book. Get published.
                        </h2>
                        <div className={`${styles.published} pt-5`}>

                            <p className='fw500 font20 color-black font-f'>
                                <em> Let’s talk about your book</em>
                            </p>
                            <p className='font20 fw500 font-f'>
                                <span className=''>Phone:</span> <Link href='tel:(302)883-8877' className={` ${styles.numpost} fw700 color-black textdocationnone`}> (302) 883-8877 </Link>
                            </p>
                            <p className='font20 fw500 font-f'>
                                <span className=''>Email:</span> <Link href='mailto:info(@)bookwritingcube(.)com' className={` ${styles.numpost} fw700 color-black textdocationnone`}>
                                    info@bookwritingcube.com </Link>
                            </p>

                        </div>
                      

                        <p className='fw500 font20 color-black font-f mt-5'>
                            …or fill out the contact <Link href='#contpost' className='textdocationnone color-black'>form below</Link> 
                        </p>
                 
            </Col>
            <Col md={3}>

       
                                        <iframe width='100%' height='252' id='gmap_canvas' src='https://maps.google.com/maps?q=12365%20SW%20Pioneer%20Ln%20Suite%20106,%20Beaverton,%20OR%2097008,%20United%20States&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'></iframe>
                                      
                                       
                                  
                            <h2 className='color-black fw500 font30 font-f mt-4 t-center'>
                                Beaverton
                            </h2>
                            <h4 className='font-f fw400 font20 color-black t-center' >(Headquarters)</h4>
                            <p className='font-f fw300 mt-3 color-black t-center' >
                                Head Office: 12365 SW Pioneer Ln Suite 106, Beaverton, OR 97008, United States
                            </p>
                     

            </Col>
            <Col md={1}></Col>
            <Col md={3}>

       <iframe width='100%' height='252' id='gmap_canvas' src='https://maps.google.com/maps?q=651%20N%20Broad%20St,%20Suite%20206%20Middletown,%20DE%2019709&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'></iframe>
                                       
                                  
                            <h2 className='color-black fw500 font30 font-f mt-4 t-center'>
                                Middletown

                            </h2>
                            <h4 className='font-f fw400 font20 color-black t-center' >(Operations)</h4>
                            <p className='font-f fw300 mt-3 color-black t-center' >
                                651 N Broad St, Suite 206 Middletown, DE 19709
                            </p>
                   

            </Col>
        </Row>
     </Container>

    </div>


<div className={styles.contfom}>

<Container id='contpost'>
        <Row className={styles.conrow}>
            <Col md={9}>
            <h2 className='t-center fw500 font30 color-blue font-f mb-5'> Fill Out The Form Below We Will Contact You Promptly</h2>



                    <form className={styles.label2} onSubmit={handleSubmit}>

                        <Row className='gy-3'>
                            <Col md={6}><input className={styles.inputfilet} id='name' type='text'  name='first' placeholder='Name'  /></Col>             
                            <Col md={6}><input className={styles.inputfilet} id='email'  type='text' name='last' placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"   /></Col> 
                        </Row>

                        <Row className='mt-3 mb-3 gy-3'>
                            <Col md={6}> <input className={styles.inputfilet} id='phone'  type='tel' name='phone' placeholder='Phone'   /> </Col>  
                            <Col md={6}> <input className={styles.inputfilet} id='tel'  type='tel' name='zip' placeholder='Location/Zip Code'   /></Col>  
                        </Row>


<Row>
    <Col> <p className='font16 fw500 font-f color-black mt-4'>Desired Service(s)* see our <b> <em> rates and services </em></b> </p> </Col>
</Row>


<Row className='gy-3'>
    <Col md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Ghostwriting--I want to hire a professional to write or rewrite my book' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Ghostwriting--I want to hire a professional to write or rewrite my book
            </label>
        </div>
    </Col>
    <Col  md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Editing--I have written a manuscript and would like a professional to review and/or edit it' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Editing--I have written a manuscript and would like a professional to review and/or edit it
            </label>
        </div>
    </Col>

    <Col  md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Book Coaching--I want to write my book on my own, but with the help of a professional to guide me' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Book Coaching--I want to write my book on my own, but with the help of a professional to guide me
            </label>
        </div>
    </Col>
    <Col  md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Cultural Accuracy Reading--I would like a professional to review my manuscript and ensure it isn’t offensive, inaccurate, or perpetuating harmful stereotypes' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Cultural Accuracy Reading--I would like a professional to review my manuscript and ensure it isn’t offensive, inaccurate, or perpetuating harmful stereotypes
            </label>
        </div>
    </Col>
</Row>


<Row className='gy-3'>
    <Col  md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Book Proposal' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Book Proposal
            </label>
        </div>
    </Col>
    <Col  md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Beta Reader Services' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Beta Reader Services
            </label>
        </div>
    </Col>

    <Col  md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Other' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Other
            </label>
        </div>
    </Col>
    <Col md={3}>
       
    </Col>
</Row>

<Row className='mt-4'>
    <Col>  <p className={styles.general}> General Genre Category*    </p>     </Col>
</Row>

<Row className='gy-3'>
    <Col  md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Business' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Business
            </label>
        </div>
    </Col>
    <Col  md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Memoir/Biography' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Memoir/Biography
            </label>
        </div>
    </Col>

    <Col  md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Health' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Health
            </label>
        </div>
    </Col>
    <Col  md={3}>
    <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Self-Help/Personal Development' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
            Self-Help/Personal Development
            </label>
        </div>
    </Col>
</Row>


<Row className='gy-3'>
    <Col md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Fiction' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
                Fiction
            </label>
        </div>
    </Col>
    <Col md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='General Nonfiction' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
                General Nonfiction
            </label>
        </div>
    </Col>

    <Col md={3}>
        <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Children’s' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
                Children’s
            </label>
        </div>
    </Col>
    <Col md={3}>
    <div className='form-check'>
            <input className='form-check-input' type='checkbox' name='checknow' value='Others' id='flexCheckDefault' />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
                Others
            </label>
        </div>
    </Col>
</Row>

    <Row>

        <Col>
            <textarea type="text" id="message" className={styles.textarea1} name="message" placeholder="Tell Us More About Your Project and  Publishing Goals Here"></textarea>
        </Col>

    </Row>

    <Col className='mt-3 mb-5'>
    <em>
    You may find our confidentiality policy <Link className='textdocationnone color-black' href="/privacy-policy"><strong className={styles.numpost}>here</strong></Link> , or request a signed NDA by email: <Link className='textdocationnone color-black' href="mailto:info@bookwritingcube.com"> <strong className={styles.numpost}>info@bookwritingcube.com</strong></Link> This site is protected by reCAPTCHA and the Google
    <Link className='textdocationnone color-black' href="/privacy-policy"><strong className={styles.numpost}> Privacy Policy</strong></Link>  and Terms of Service <Link className='textdocationnone color-black' href="/terms-of-use"> <strong className={styles.numpost}>Terms of Service</strong> </Link> apply.
    </em>
    
    </Col>

                        <button className={styles.submitform} type='submit'>Submit Form</button>

                    </form>



            </Col>
        </Row>
        </Container>
</div>


    <div className={styles.contactdata}>
    <Container>
        <Row className={styles.conrow}>
            <Col md={9}>


                                <h2 className='color-blue font48 fw900 font-f'> We Provide Everything You Need to
                                    Achieve Your Publishing Goals.</h2>
                                <p  className='font16 fw500 font-f color-black' >Let’s talk about how we can make your book a success. <span className='font20 fw700 font-f' ><Link href='tel:(302)883-8877' className='textdocationnone color-black' > Call now:
                                            (302) 883-8877 </Link></span> </p>

                        

            </Col>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default Contact