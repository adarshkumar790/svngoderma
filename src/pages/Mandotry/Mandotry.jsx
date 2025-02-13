import React from 'react';
import './Mandotry.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/Sanatan.jpeg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import document1 from '../../utils/images/doc1.pdf';
// import  Bathroom from '../../utils/images/Bathroom.jpeg';
import  ClassRoom from '../../utils/images/Classroom.jpeg';
import  Library from '../../utils/images/library.jpeg';
import School from '../../utils/images/School.jpeg';
import BoysBathroom from '../../utils/images/Boy.jpeg';
// import  PlayGround from '../../utils/images/PlayGround.jpeg';
import  Transport from '../../utils/images/Bus.jpeg';
import Washroom from '../../utils/images/Washroom.jpeg';
// import  Water from '../../utils/images/Water.jpeg';
// import Sport from '../../utils/images/Sport.jpeg';
// import Canteen from '../../utils/images/Canteen.jpeg';
import ChemistryLab from '../../utils/images/Chemistry.jpg'; //
// import ComputerLab from '../../utils/images/ComputerLab.jpeg'; 
// import BiologyLab from '../../utils/images/BiologyLab.jpeg';
import PlayGround from '../../utils/images/playground.jpeg';
import Water from '../../utils/images/Water.jpeg';
import document2 from '../../utils/images/2.pdf';
import documentPTA from '../../utils/images/PTAJamuary.pdf'
import document3 from '../../utils/images/NOCGodarma.pdf';
import document4 from '../../utils/images/RECO.pdf';
import document5 from '../../utils/images/BuildingSafety.pdf';
import document6 from '../../utils/images/firesafety.pdf';
import document7 from '../../utils/images/SelfCertificateJ.pdf';
import document8 from '../../utils/images/8.pdf';
import document9 from '../../utils/images/Land.pdf';
import result3 from '../../utils/images/SMCgodarma.pdf';
import result1 from '../../utils/images/FEE STRUCTUREJ.pdf';
import result2 from '../../utils/images/ACADEMIC CALANDERJ.pdf';
import result6 from '../../utils/images/GODARMASTAFING.pdf'

const school = [
          
          // {
          //   id: 1,
          //   img: [School],
          //   title: 'School Field',
          // },
          {
            id: 1,
            img: [Library],
            title: 'Library',
          },
          {
           id: 2,
           img: [Washroom],
           title: 'Washroom',
          },
          {
            id: 3,
            img: [PlayGround],
            title: 'Playground',
          },
          // {
          //   id: 8,
          //   // img: [Sport],
          //   title: 'Sports',
          // },
          // {
          //   id: 9,
          //   img: [Transport],
          //   title: 'Transport',
          // },
          // {
          //   id: 10,
          //   // img: [Canteen],
          //   title: 'Canteen',
          // },
          // {
          //   id: 11,
          //   img: [ChemistryLab],
          //   title: 'Chemistry & Physics Lab',
          // }, 
          // {
          //   id: 12,
          //   // img: [ComputerLab],
          //   title: 'Computer Lab',
          // },
          // {
          //   id: 13,
          //   // img: [BiologyLab],
          //   title: 'Biology Lab',
          // }
     ]

const information = [
    {
      id: 1,
      title: 'NAME OF SCHOOL',
      description: 'SANATAN VIDYA NIKETAN',
    },
    {
      id: 2,
      title: 'AFFILIATION NO. (IF APPLICABLE)',
      description: 'N/A',
    },
    {
      id: 3,
      title: 'SCHOOL CODE (IF APPLICABLE)',
      description: 'N/A',
    },
    {
        id: 4,
        title: 'COMPLETE ADDRESS WITH PIN CODE',
        description: 'Sanata Vidya Niketan, Godarma, Rehla, Palamu, Jharkhand, Pin Code- 822124',
    },
    {
        id: 5,
        title: 'PRINCIPAL NAME & QUALIFICATION',
        description: 'Mithilesh Pandey & M.Sc (PHY), B.Ed',
    },
    {
        id: 6,
        title: 'SCHOOL EMAIL ID',
        description: 'sanatangoderma@gmail.com',
    },
    // {
    //     id: 7,
    //     title: 'DETAILS OF SPECIAL EDUCATION',
    //     description: '',
    // },
    {
        id: 7,
        title: 'CONTACT DETAILS (LANDLINE/MOBILE)',
        description: '6584-299979, 7678184625, 8092236165',
    },
]
const documents = [
  {
    id: 1,
    name: 'COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION',
    // url: document1,
  },
  {
    id: 2,
    name: 'COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE',
    url: document2,
  },
  {
    id: 3,
    name: 'COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT',
    url: document3,
  },
  {
    id: 4,
    name: 'COPY OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2019, AND ITS RENEWAL',
    url: document4,
  },
  {
    id: 5,
    name: 'COPY OF VALID FIRE SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE',
    url: document6,
  },
  {
    id: 6,
    name: 'COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE',
    url: document5,
  },
  {
    id: 7,
    name: 'COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION',
    url: document7,
  },
  {
    id: 8,
    name: 'COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES',
    url: document8,
  },
  {
    id: 9,
    name: 'COPY OF LAND CERTIFICATE',
    url: document9,
  },
];


const results = [
    {
      id: 1,
      name: 'FEE STRUCTURE OF THE SCHOOL',
      url: result1,
    },
    {
      id: 2,
      name: 'ANNUAL ACADEMIC CALANDER,',
      url: result2,
    },
    {
      id: 3,
      name: 'LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)',
      url: result3,
    },
    {
      id: 4,
      name: 'LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS',
      url: documentPTA,
    },
    // {
    //   id: 5,
    //   name: 'LAST THREE-YEAR RESULT OF THE BORAD EXAMINATION AS PER APPLICABLILITY',
    //   // url: document5,
    // },
    {
      id: 5,
      name : 'TEACHING STAFF',
      url:result6
    }

    
  ];


  const additionalData = [
    {
      id: 1,
      title: 'PRINCIPAL',
      description: '1',
    },
    {
      id: 2,
      title: 'TOTAL NO. OF TEACHERS',
      description: '20',
    },
    {
      id: 3,
      title: 'PGT',
      description: '0',
    },
    {
        id: 4,
        title: 'TGT',
        description: '10',
    },
    {
        id: 5,
        title: 'PRT',
        description: '5',
    },
     {
        id: 6,
        title: 'NTT',
        description: '3',
    },
    {
      id:7,
      title: 'PET',
      description: '1',
    },
    {
        id: 8,
        title: 'TEACHERS SECTION RATIO',
        description: '1.5:1',
    },
    {
        id: 9,
        title: 'DETAILS OF SPECIAL EDUCATOR',
        description: '1',
    },
    {
        id: 10,
        title: 'DETAILS OF COUNSELLOR AND WELNESS TEACHERS',
        description: '1',
    }

]  

const infrastructure = [
    {
      id: 1,
      title: 'TOTAL CMAPUS AREA OF THE SCHOOL (IN SQUARE MRT)',
      description: '9200',
    },
    {
      id: 2,
      title: 'NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)',
      description: 'Total Class Room 12.  Each 46.45152 square meter',
    },
    {
      id: 3,
      title: 'NO. AND SIZE LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)',
      description: '3 + 1 & 55.74',
    },
    {
        id: 4,
        title: 'INTERNET FACILITY (Y/N)',
        description: 'Yes',
    },
    {
        id: 5,
        title: 'NO. OF GIRLS TOILETS',
        description: '10',
    },
    {
        id: 6,
        title: 'NO. OF BOYS TOILETS',
        description: '10',
    },
    
]

  

const Mandotry = () => {
  const handleDownload = (url) => {
    if (url) {
      window.location.href = url;
    } else {
      alert('Document not available for download');
    }
  };

  return (
    <div className="about-page">
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Mandatory Disclosure</h1>
          <p className='text-center w-75 mb-5'>
          "Mandatory Disclosure" section typically provides essential information about an institution, ensuring transparency and compliance with regulatory requirements.
          </p>
        </div>
      </header>
      <div className='container my-5'>
        <h2 className='text-center mb-5'>A : GENERAL INFORMATION:</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>SL NO.</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {information.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      

      <div className='container my-5'>
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
                  {doc.url ? (
                    <button onClick={() => handleDownload(doc.url)} className='btn btn-primary'>
                      Download
                    </button>
                  ) : (
                    <span className='text-muted'>Not available</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='container my-5'>
        <h2 className='text-center mb-5'>C : RESULT AND ACADMICS</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>SL NO.</th>
              <th>DOCUMENTS/INFORMATION</th>
              <th>DOWNLOAD DOCUMENT</th>
            </tr>
          </thead>
          <tbody>
            {results.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.name}</td>
                <td>
                  {doc.url ? (
                    <button onClick={() => handleDownload(doc.url)} className='btn btn-primary'>
                      Download
                    </button>
                  ) : (
                    <span className='text-muted'>Not available</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='container my-5'>
        <h2 className='text-center mb-5'>D : STAFF (TEACHING)</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>SL NO.</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {additionalData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='container my-5'>
        <h2 className='text-center mb-5'>E: SCHOOL INFRASTRURE:</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>SL NO.</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {infrastructure.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>      

      <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {school.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/gallery" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4 text-center'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
  );
};

export default Mandotry;
