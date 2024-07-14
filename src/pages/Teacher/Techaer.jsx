import React from 'react';
import "./Techer.css"
import Blog1Img from '../../utils/images/Pratima.jpeg';
import Blog2Img from '../../utils/images/jyoti.jpeg';
import Blog3Img from '../../utils/images/praween.jpeg';
import Blog4Img from '../../utils/images/sarswati.jpeg';
import Blog5Img from '../../utils/images/Priti.jpeg';
import Blog6Img from '../../utils/images/Neha.jpeg';
import Blog7Img from '../../utils/images/sweta.jpeg';
import Blog8Img from '../../utils/images/dubey.jpeg';
import Blog9Img from '../../utils/images/anjali.jpeg';
import Blog10Img from '../../utils/images/pragya.jpeg';
import Blog11Img from '../../utils/images/riteshsahu.jpeg';
import Blog12Img from '../../utils/images/Principal.jpeg';

const testimonials = [
  {
    name: 'MITHILESH PANDEY',
    position: 'Principal',
    image: [Blog12Img], 
    testimonial: 'M. Sc (PHY) B.Ed.',
  },
  {
    name: 'Y. BROJEN SINGH',
    position: 'Vice-Principal',
    image: [Blog10Img], 
    testimonial: 'B.Sc. (Math) B.Ed.',
  },
  {
    name: 'RAIS ANSARI',
    position: 'Math Teacher',
    image: [Blog1Img], 
    testimonial: 'M.sc (Math) B. Ed + CTET',
  },
  {
    name: 'SAVITA CHOUDHARY',
    position: 'Hindi Teacher',
    image: [Blog2Img], 
    testimonial: 'M.A. (Hindi) B.Ed.+ M.Ed. JTET.',
  },
  {
    name: 'PRIYANKA CHOUBEY',
    position: 'Science (BIO)',
    image: [Blog3Img], 
    testimonial: 'M. Sc (Botany) B.Ed',
  },
  {
    name: 'ARCHANA KUMARI MISHRA',
    position: 'Hindi Teacher',
    image: [Blog4Img], // Make sure to place your image in the public directory
    testimonial: 'B.A (Pol Science) B.ed',
  },
  {
    name: 'AJIT KUMAR UPADHYAY',
    position: 'Computer Teacher',
    image: [Blog5Img], // Make sure to place your image in the public directory
    testimonial: 'MCA',
  },
  {
    name: 'Neha Kerketta',
    position: 'Junior Teacher',
    image: [Blog6Img], // Make sure to place your image in the public directory
    testimonial: 'M.A ()',
  },
  {
    name: 'SATYAVATI TIWARI',
    position: 'Sanskrit',
    image: [Blog7Img], // Make sure to place your image in the public directory
    testimonial: 'M.A B.Ed (SANSKRIT)',
  },
  {
    name: 'BIBHA CHAUDHARI',
    position: 'S.ST Teacher',
    image: [Blog8Img], // Make sure to place your image in the public directory
    testimonial: 'B.A. (Soc) B. Ed',
  },
  {
    name: 'ARTI KUMARI ',
    position: 'Maths Teacher ',
    image: [Blog9Img], // Make sure to place your image in the public directory
    testimonial: 'M. Sc (Math) M. Ed + CTET',
  },
  {
    name: 'MOHAMMAD SAMSHIR ALAM',
    position: 'English Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B.A. (English) B.ed ',
  },
  {
    name: 'DEEPAK KUMAR PANDEY',
    position: 'English Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'M.A. (English) B.Ed',
  },
  {
    name: 'MOHAMMAD SAMSHIR ALAM',
    position: 'English Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B.A. (English) B.ed ',
  },
  {
    name: 'ANITA GUPTA',
    position: 'S.ST Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'M.A (Psychology) D.El..ED',
  },
  {
    name: 'JYOTSNA PANDEY',
    position: 'Hindi Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B.A (History) B.Ed',
  },
  {
    name: 'ANJALI KUMARI',
    position: 'English Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'M.A (ENGLISH) B.Ed',
  },
  {
    name: 'JYOTSNA PANDEY',
    position: 'Hindi Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B.A (History) B.Ed',
  },
  {
    name: 'ANJALI KUMARI ',
    position: 'English Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'M.A (ENGLISH) B.Ed',
  },
  {
    name: 'VINEETA DUBEY',
    position: 'S.ST Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'M.A (Psychology D.El.Ed.',
  },
  {
    name: 'KAJAL KUMARI ',
    position: 'Math Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B.Sc (Math) B.Ed',
  },
  {
    name: 'JUHI KUMARI',
    position: 'Math Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B. Sc (Zoology) B.Ed',
  },
  {
    name: 'KAJAL CHOUBEY',
    position: 'Science Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B. Sc (Math) B.Ed',
  },
  {
    name: 'PRIYA KUMARI ',
    position: 'Science Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B.Sc. (Zoology) B.Ed. + CTET',
  },
  {
    name: 'ARCHANA KUMARI',
    position: 'Hindi Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'B.A. (History) D.El.Ed.',
  },
  {
    name: 'Reshma Ma’am',
    position: 'Physical Education Teacher',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'M.A (Psychology D.El.Ed.',
  },
  {
    name: 'RUPESH TIWARI',
    position: 'Librarian',
    image: [Blog11Img], // Make sure to place your image in the public directory
    testimonial: 'BLIS',
  },

];

const TeacherTestimonials = () => {
  return (
    <div className="testimonials-container">
         <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Teacher</h1>
                <p className='text-center w-75 mb-5'>Teachers are the guiding lights in our lives, imparting knowledge, fostering critical thinking, and shaping the future by nurturing young minds with patience, dedication, and passion.</p>
            </div>
        </header>
      <h2 className="testimonials-title">Teacher Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="card-header">
              <img
                className="profile-image"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="name">{testimonial.name}</p>
                <p className="position">{testimonial.position}</p>
              </div>
            </div>
            <p className="testimonial">Qualification:-{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherTestimonials;
