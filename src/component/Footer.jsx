import React from 'react';

const Footer = () => {
  return (
<footer class="footer ">
    <div class="main">
      <div class="row">
        <div class="col-12 ">
          <section class="py-4 py-md-5 py-xl-8">
            <div class="container-fluid overflow-hidden">
              <div class="row gy-4 gy-lg-0 justify-content-xl-between">
                <div class="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div class="widget">
                    <a href="#!">
                      <img src="./public/images/logoo.png" alt="BootstrapBrain Logo" />
                    </a>
                  </div>
                      <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div class="widget">
                    <h4 class="widget-title mb-4">Quick Links</h4>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">Home</a>
                      </li>
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">Features</a>
                      </li>
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">Blogs</a>
                      </li>
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">Docs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div class="widget">
                    <h4 class="widget-title mb-4">Support</h4>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">Company</a>
                      </li>
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">Press Media</a>
                      </li>
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">Our Blogs</a>
                      </li>
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">Terms of Service</a>
                      </li>
                      <li class="mb-0">
                        <a href="#!" class="link-secondary text-decoration-none">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-3 col-xl-4">
                  <div class="widget">
                    <h4 class="widget-title mb-4">Our Newsletter</h4>
                    <p class="mb-4">Subscribe to receive future updates.</p>
                    <form action="#!">
                      <div class="row gy-4">
                        <div class="col-12">
                          <div class="input-group">
                            <span class="input-group-text" id="email-newsletter-addon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </span>
                            <input type="email" class="form-control" id="email-newsletter" value="" placeholder="Email Address" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-grid">
                            <button class="btn btn-primary" type="submit">Subscribe</button>
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
</footer> 
  )
}

export default Footer;
