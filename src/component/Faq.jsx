import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const Faq = () => {

  return (
    <>
        <div className='main'>
            <div className="faq-work">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="faq-left">
                            <h4>OUR FAQS</h4>
                            <h1>Frequently Asked Questions</h1>
                            <button className="faq-btn">Know More</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="faq-right" style={{alignItems:'center'}}>
                            <MDBAccordion initialActive={1}>
                                <MDBAccordionItem collapseId={1} headerTitle='One'>
                                We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences.
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={2} headerTitle='Two'>
                                We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences.
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={3} headerTitle='Three'>
                                We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences.
                                </MDBAccordionItem>
                            </MDBAccordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default Faq;