import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/Sanatan.jpeg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import document1 from '../../utils/images/doc1.pdf';
// import document2 from '../../utils/images/document2.pdf';
// import document3 from '../../utils/images/document3.pdf';
// import document4 from '../../utils/images/document4.pdf';
// import document5 from '../../utils/images/document5.pdf';
// import document6 from '../../utils/images/document6.pdf';
// import document7 from '../../utils/images/document7.pdf';
// import document8 from '../../utils/images/document8.pdf';
// import document9 from '../../utils/images/document9.pdf';

const documents = [
  {
    id: 1,
    name: 'COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION',
     url: document1,
  },
  {
    id: 2,
    name: 'COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE',
    // url: document2,
  },
  {
    id: 3,
    name: 'COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT',
    // url: document3,
  },
  {
    id: 4,
    name: 'COPY OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2019, AND ITS RENEWAL',
    // url: document4,
  },
  {
    id: 5,
    name: 'COPY OF VALID FIRE SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE',
    // url: document5,
  },
  {
    id: 6,
    name: 'COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE',
    // url: document6,
  },
  {
    id: 7,
    name: 'COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION',
    // url: document7,
  },
  {
    id: 8,
    name: 'COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES',
    // url: document8,
  },
  {
    id: 9,
    name: 'COPY OF LAND CERTIFICATE',
    // url: document9,
 },
];

function About() {
  const handleDownload = (url) => {
    window.location.href = url;
  };

  return (
    <div className='about-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>About Us</h1>
          <p className='text-center w-75 mb-5'>
            The school gallery showcases a vibrant tapestry of student life, capturing memorable moments, achievements, and creative endeavors within our educational community.
          </p>
        </div>
      </header>

      <div className='container my-5'>
        <div className="row">
          <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
            <h2 className='mb-4 mb-lg-5'>Study with us</h2>
            <p className='w-150'>
              Sanatan Vidya Niketan (Pvt) was established in 2012 and is managed by Rishikul Shaikshanik Sansthan. It is located in the rural area of Jamuary, Kanke, Ranchi district, Jharkhand. The school consists of Grades 1 to 8. It is a co-educational institution with an attached pre-primary section. The school is privately run and does not operate as a shift-school. English is the medium of instruction. The academic session starts in April.
            </p>
            <Link to="/contact">
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
            </Link>
          </div>
          <div className='col-lg-6 d-flex justify-content-center'>
            <img src={AboutUsSectionImg} className='img-fluid w-75' alt="About Us" />
          </div>
        </div>
      </div>

      <div className='bg-dark text-light py-5'>
        <ChooseSection />
      </div>

      <div className='container py-5'>
        <h2 className='text-center mb-5'>B: DOCUMENTS AND INFORMATION</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>SL NO.</th>
              <th>DOCUMENTS/INFORMATION</th>
              <th>DOWNLOAD DOCUMENT</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.name}</td>
                <td>
                  <button onClick={() => handleDownload(doc.url)} className='btn btn-secondary'>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
