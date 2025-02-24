import React from 'react';

const Footer = () => {
  return (
  <footer className="footer ">
      <div className="main">
        <div className="row">
          <div className="col-12 ">
            <section className='myborderwork'>
              <div className="">
                <div className="row">
                  <div className="col-md-4">
                    <div className="widget mb-3">
                      <a href="#"><img src="/images/logoo.png" alt="BootstrapBrain Logo" />
                      </a>
                    </div>
                    <p className='mt-4 mystyle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div className="col-md-2">
                    <div className="widget">
                      <h4 className="widget-title mb-4">Quick Links</h4>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <a href="#!" className="link-secondary text-decoration-none">Home</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!" className="link-secondary text-decoration-none">Features</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!" className="link-secondary text-decoration-none">Blogs</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!" className="link-secondary text-decoration-none">Docs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="widget">
                      <h4 className="widget-title mb-4">Support</h4>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <a href="#!" className="link-secondary text-decoration-none">Company</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!" className="link-secondary text-decoration-none">Press Media</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!" className="link-secondary text-decoration-none">Our Blogs</a>
                        </li>
                        <li className="mb-2">
                          <a href="#!" className="link-secondary text-decoration-none">Terms of Service</a>
                        </li>
                        <li className="mb-0">
                          <a href="#!" className="link-secondary text-decoration-none">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="widget">
                      <h4 className="widget-title mb-4">Our Newsletter</h4>
                      <p className="mb-4">Subscribe to receive future updates.</p>
                      <form action="#!">
                        <div className="row gy-4">
                          <div className="col-12">
                            <div className="input-group">
                              <span className="input-group-text" id="email-newsletter-addon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                              </span>
                              <input type="email" className="form-control" id="email-newsletter" value="" placeholder="Email Address" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button className="btn btn-primary" type="submit">Subscribe</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className='footerline'>
        <div className='main'>
          <p>© Copyright Solid All Rights Reserved</p>
        </div>
      </div>
  </footer> 
  )
}

export default Footer;
