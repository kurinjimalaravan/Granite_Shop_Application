import React from 'react'
// import Values from '../../components/Values'
import '../about/about.css'
import Header from '../../components/Header'
import About1 from '../../images/about1.jpg'
import Footer from '../../components/Footer'
import StoryImage from '../../images/1.jpg'
import visionImage from '../../images/about2.jpg'
import MissionImage from '../../images/mission.jpg'

import './about.css'
import Navbar from '../../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Header title='About Us' image={About1}>
      Granite is one of the hardest substances in the world, second only to diamonds. In fact, granite is so tough and durable that the pedestal that the Statue of Liberty stands on is made from granite. Granite has been used in construction since the Ancient Egyptians.
      </Header>   

      <section className='about_story'>
      <div className='container about_story-container'>
        <div className='about_section-image'>
          <img src={StoryImage} alt='story img'/>
        </div>
        <div className='about_section-content'>
          <h1>Our Shop</h1>
          <p>Since our founding in 2004, The Shop has committed itself to inspiring and realizing home decor ideas and creating beauty both indoors and out.</p>

          <p>Our associates travel literally across the globe, exploring the latest styles and innovations available in materials. We offer a wide selection of high-quality products, exclusive designs, expert staff and amazing customer service.</p>

        </div>
      </div>
      </section>

      <section className='about_vision'>
        <div className='container about_vision-container'>
          
          <div className='about_section-content'>
            <h1>Our Vision</h1>
            <p>We see our customers as partners. As such, we believe in developing relationships that build trust while engaging your imaginations. Your home is a big part of your life, and we take that idea seriously.</p>

            <p>So we inspire your creativity and build the personal connections you need to make you feel comfortable about transforming your living space into a showplace you can be proud of.</p>
            
          </div>
          <div className='about_section-image'>
            <img src={visionImage} alt='vision img'/>
          </div>
        </div>
      </section> 
      <section className='about_mission'>
      <div className='container about_mission-container'>
        <div className='about_section-image'>
          <img src={MissionImage} alt='mission img'/>
        </div>
        <div className='about_section-content'>
          <h1>Our Mission</h1>
          <p>Our stock of more than 500 natural stone and manmade selections gives you virtually endless options to create new rooms or upgrade existing ones.</p>

          <p>In addition, we also offer coordinating finishing pieces and installation materials to put the perfect final touch on any product. You can see in Both online and in-store.</p>
        </div>
      </div>
      </section> 


    <Footer/>

      
       {/* <Values/> */}


    </div>
  )
}

export default About

