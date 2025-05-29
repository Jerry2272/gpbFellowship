import { useState ,useEffect } from 'react';
import './App.css';
// import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { testimonies } from './components/service';
import Carousel from 'react-slick';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from './components/Modal';  // Import the modal component;
import { HeroSlide } from './components/util';
import Ab from '../src/assets/aboutUs.avif';

import Mission from '../src/assets/Ourmission.avif'

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'
import { Navbar } from './components/Navbar';



function App() {
 useEffect(() =>{
  AOS.init({
    duration: 1000, // Duration of animations
  })
 }, []);

  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  // const openModal = (content) => {
  //   setModalContent(content);
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setModalContent('');
    setIsModalOpen(false);
  };
  const settings = {
    slidesToShow: 3,   // Default: 3 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 568,  // For screen widths <= 568px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,  // For screen widths <= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can add more breakpoints here
    ],
  };

  const heroSettings = {
    infinite: true,
    speed: 5000,
    fade: true, 
    autoplay: true,
    arrows: false
  };
  

  return (
    <main className="bg-green-950">
      <Navbar />

    {/* hero section  */}
      <Slider {...heroSettings} className="heroSlide">
        {HeroSlide.map((slide, i) => (
          <div key={i} 
          >
            <section
              className="hero lg:h-[210] h-screen text-white flex pt-[5em]  justify-center lg:pl-11 pl-4"
              id="home"
              style={{
                backgroundImage: `linear-gradient( rgb(5, 46, 22 , 0.25),  rgb(5, 46, 22 , 1) ), url(${slide.img})`,
              }}
            >
              <div className="lg:mt-6 mt-[5em] pr-4 mx-auto lg:w-[70%]">
                <div className=" text-center flex justify-center flex-col items-center">
                  <h2 className="text-[20px] text-white lg:text-5xl font-[400] lg:font-[600] uppercase mb-5" data-aos="fade-up">
                  Welcome to Green passion Believer Fellowship
                  </h2>
                  <h6
                    className="text-2xl lg:text-2xl font-[400] lg:font-[400]  leading-10 lg:leading-[50px] text-white"
                    data-aos="fade-up"
                  >
                    Our Goal is to see Jesus REVEALED, GLORIFIED AND HIS BODY EDIFIED
                  </h6>
                  <button className="text-white my-10 bg-green-950 shadow border" data-aos="zoom-in">
                   <a href="https://chat.whatsapp.com/LnxXg88WjWmJB9dXfmu8nS"   target='_blank' className='text-white'>Join Our WhatApp</a>
                  </button>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
 
    {/* hero section ending */}

    {/* about section  */}
    <section className="about lg:grid grid-cols-2 gap-16 lg:my-[6em] my-[2em] px-4 lg:h-[100vh]" id='about'>
      <div className="imgContainer lg:w-[110%] lg:pt-[2em] pl-0 lg:ml-[-20px] flex items-center" data-aos="zoom-in" data-aos-delay="300">
        <img src={Ab} className='w-full h-full' alt="" />
      </div>
      <div className="textArea flex items-center justify-self-start pl-4">
        <div className='lg:px-1 lg:pr-3'>
          <h2 className='text-2xl lg:text-4xl font-[400] lg:font-[800] text-left lg:pl-6 py-4 text-white uppercase pt-[1em]' data-aos="fade-up">About GPBF</h2>
          <p className='text-left lg:py-3 mb-4 lg:px-6 py-4 font-[600] text-2xl text-white' data-aos="zoom-in">
        GREEN PASTURES  BELIEVERS FELLOWSHIP is a family. A family who come to God not just for what He has to offer but to Know Him Experientially. To love Him Unconditionally. This family is created to help build everyone in the knowledge of God for themselves by walking in the leading of the Holy Ghost
          </p>
          <button className='lg:w-[30%] lg:ml-6 bg-green-900 text-white'><a href="#mission" className='text-white'>Learn More</a></button>
        </div>
      </div>
    </section>
    {/* about section ending */}

      {/* mission section  */}
  <section className="mission lg:grid grid-cols-2 gap-1 mt-[1em] lg:pt-[3em]  bg-green-900 py-10 items-center lg:mr-[4em] relative lg:pl-[4em] lg:pb-[4em] h-auto" id='vision'>
      <div className='textArea flex justify-center lg:px-3 p-4 leading-7 flex-col pl-[40px] '>
        <h2 className='lg:text-4xl text-3xl lg:font-[800] font-[300] text-left lg:px-6 text-white uppercase '> Our Vision</h2>
        <p className='text-left py-6 lg:px-2 px-1 text-gray-300 lg:text-[20px] font-[500]' data-aos="fade-up" data-aos-delay="400">
        To helps raise men and women who will grow in stature and capacity to stand in the gap for their generation. To raise men and women who will not just grow spiritually but physically, financially and other sphere of life too numerous to mention. To help raise men and women who will not just be called Christians but they will be witnesses to God in all areas of their lives. Men and women that will carry the burden of God and deliver it safely no matter what.
        </p>
        <button className='w-[40%] lg:ml-6 bg-green-950'><a href="#service" className='text-white font-[600]' data-aos="zoom-out">Learn More</a></button>
      </div>
      <div className="imgContainer w-[90%] order-[first] relative">
        <img src={Mission} className='w-full hidden lg:block absolute right-[-6.75em] top-[-9em]' alt="" />
      </div>
    </section>
    {/* mission section ending */}

    {/* misson section  */}
    <section className='lg:h-[100vh] lg:mt-[11em] flex flex-col justify-center items-center mt-[3em]'>
      <h2 className='lg:text-4xl text-3xl lg:font-[800] font-[300] text-white text-left lg:px-6  uppercase my-5'>Our Mission</h2>
      <p className='text-white text-center'>Our Goal is to see Jesus REVEALED, GLORIFIED AND HIS BODY EDIFIED</p>

      <div className="grid lg:grid-cols-3  lg:p-[6em] lg:pt-[4em]">
        <div className='m-[1em] bg-green-900 text-white p-4 lg:h-[50vh]'>
          <h2 className='font-bold text-2xl my-8'>watching Jesus do the extraordinary.</h2>
          <h6>
      Teaching / Preaching the undiluted word of God. Thereby winning souls in masses and conquering territories for Christ. 
          </h6>
        </div>
        <div className='m-[1em] bg-green-900 text-white p-4 lg:h-[50vh]'>
          <h2 className='font-bold text-2xl my-8'>Live Generously</h2>
          <h6>
        Going to secondary schools, higher institutions, orphanage homes, to place the burden of God upon the younger generation who will grow to become the disciples of Christ and good citizens of the kingdom and nations.
          </h6>
        </div>
        <div className='m-[1em] bg-green-900 text-white p-4 lg:h-[50vh]'>
          <h2 className='font-bold text-2xl my-8'>Watch the Extraordinary</h2>
          <h6>
         To show case Christ in His true nature though our lifestyle, our businesses, careers, miracles ,signs and wonders, etc.
          </h6>
        </div>
      </div>
    </section>
    {/* misson section  */}

    {/* testimonial section  */}
{/* Testimonial Section */}
<section className="my-[5em] py-10 lg:px-14 px-4 bg-green-900" id="service">
  <h2 className="lg:text-4xl text-3xl font-bold text-white text-center uppercase mb-8">
    Testimonial
  </h2>

  <Carousel {...settings}>
    {testimonies.map((content, i) => (
      <div
        key={i}
        className="my-12 max-w-md p-[1em] "
      >
        <div className="h-[340px] lg:h-[280px] w-full overflow-hidden rounded-t-lg">
          <img
            src={content.img}
            alt={`Testimonial ${i + 1}`}
            className="w-full h-full object-cover"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </div>
        <div className="p-6 bg-green-800">
          <h5 className="text-white text-xl font-bold mb-2">{content.title}</h5>
          <p
            className="text-white text-base"
            data-aos="fade-up"
            data-aos-delay="70"
          >
            {content.content}
          </p>
        </div>
      </div>
    ))}
  </Carousel>
</section>
{/* End of Testimonial Section */}

    {/* testimonial section ending */}

{/* Events Section */}
<section id="events" className="events p-8 my-12 lg:px-16">
  <h2 className="text-3xl lg:text-4xl font-bold text-center text-white uppercase mb-6">
    Upcoming Events
  </h2>
  <div className="event-list grid lg:grid-cols-2 gap-12">
    <div className="event-item bg-green-900 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
      <h3 className="text-xl font-bold mb-4">Weekly Bible Study</h3>
      <p className="text-lg">Join us every Monday at 6:30 PM for an uplifting Bible study session.</p>
    </div>
    <div className="event-item bg-green-900 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-xl font-bold mb-4">Prayer Meetings</h3>
      <p className="text-lg">Come together every Thursday at 7:00 PM for powerful prayer meetings.</p>
    </div>
    <div className="event-item bg-green-900 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
      <h3 className="text-xl font-bold mb-4">Community Outreach</h3>
      <p className="text-lg">Be a part of our community outreach every last Saturday of the month.</p>
    </div>
  </div>
</section>

{/* Resources Section */}
<section id="resources" className="resources p-8  my-12 lg:px-16 bg-green-900 text-white h-[80vh] flex justify-center items-center flex-col gap-6"> 
  <h2 className="text-3xl lg:text-4xl font-bold text-center text-green uppercase mb-6">
    Useful Resources
  </h2>
  <div className="resource-list grid lg:grid-cols-3 gap-12">
    <div className="resource-item bg-green-950 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
      <h3 className="text-xl font-bold mb-4">Bible Study Guide</h3>
      <p className="text-lg">Explore the depths of Gods word with our Bible study guide, available for download.</p>
      <button className="bg-green-900 text-white p-2 rounded mt-4">
        <a href="link-to-guide" className="text-white">Download Now</a>
      </button>
    </div>
    <div className="resource-item bg-green-950 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-xl font-bold mb-4">Christian Articles</h3>
      <p className="text-lg">Read a variety of insightful Christian articles on faith, life, and growth.</p>
      <button className="bg-green-900 text-white p-2 rounded mt-4">
        <a href="link-to-articles" className="text-white">Read Articles</a>
      </button>
    </div>
    <div className="resource-item bg-green-950 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
      <h3 className="text-xl font-bold mb-4">Community Forum</h3>
      <p className="text-lg">Join the conversation in our Christian community forum for fellowship and support.</p>
      <button className="bg-green-900 text-white p-2 rounded mt-4">
        <a href="link-to-forum" className="text-white">Join Now</a>
      </button>
    </div>
  </div>
</section>


   {/* Contact Section */}
<section id="contact" className="contact p-8 my-12 lg:px-16">
  <h2 className="text-3xl lg:text-4xl font-bold text-center text-white uppercase mb-6">
    Contact Us
  </h2>
  <div className="contact-form bg-green-900 mx-auto text-white p-8 rounded-lg shadow-lg w-3/4" data-aos="fade-up">
    <h3 className="text-xl font-bold mb-4 text-center">Get in Touch</h3>
    <p className="text-lg mb-6 text-center"> We  love to hear from you. Fill out the form below to get in touch with us.</p>
    <form action="#" method="POST">
      <div className="form-group mb-4">
        <input type="text" id="name" placeholder='Your Name' className="w-full p-3 bg-green-950 border text-white rounded" />
      </div>
      <div className="form-group mb-4">
        <input type="email" id="email" placeholder='Enter Your Email' className="w-full p-3 bg-green-950 text-white border rounded" />
      </div>
      <div className="form-group mb-4">
        <textarea id="message" placeholder='Enter Your Message' className="w-full p-3 bg-green-950 border text-white rounded" rows="4"></textarea>
      </div>
      <button type="submit" className="bg-green-950 text-white py-3 px-6 rounded-lg mt-4 text-center">
        Submit
      </button>
    </form>
  </div>
</section>


    {/* Render the modal */}
    <Modal
      isOpen={isModalOpen}
      content={modalContent}
      onClose={closeModal}
    />

    <Footer />
  </main>
  )
}

export default App;
