import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            {/* <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p> */}
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What facilities does the School avail?</Accordion.Header>
                    <Accordion.Body>
                       School has facilities like, computer lab, Science lab, big playground, auditorium, Bus facility etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Is English spoken in School ?</Accordion.Header>
                    <Accordion.Body>
                        The School provides English spoken class and teachers and students communicate with each other in english.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What type of co-curricular activities does the school organises ?</Accordion.Header>
                    <Accordion.Body>
                       The School organises co-curricular activities such as dance and singing competition, debate and quiz competition, writing competition, 
                       painting competiion and many more which help the children to achieve all round development.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How long has your School been open ?</Accordion.Header>
                    <Accordion.Body>
                       It has been 12 years since our School opened.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Does your School have transport facility?</Accordion.Header>
                    <Accordion.Body>
                       Yes, there is transport facility available in the School.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>Is your school follows the CBSE Curriculum ?</Accordion.Header>
                    <Accordion.Body>
                          Yes, Our School follows the CBSE Curriculum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                    <Accordion.Header>Which Publication of books are followed by your School ?</Accordion.Header>
                    <Accordion.Body>
                    The best publication of books are N.C.E.R.T, Mscmillan, RS Aggarwal, S.Chand, R.D Sharma etc..
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;