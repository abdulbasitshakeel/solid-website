import React from "react";
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css"; 

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};

const Testimonials = () => {
  return (
    <>
        <section>
            <div className="main">
                <div className="testmonial-work" style={{ marginBottom: '8%' }}>
                    <div className="testimonial-main" style={{ textAlign: 'center' }}>
                        <button style={{
                            backgroundColor: '#ececf7',
                            padding: '8px 14px',
                            fontSize: '14px',
                            fontWeight: '500',
                            border: '1px solid white',
                            borderRadius: '18px'
                        }}>
                            TESTIMONIALS
                        </button>
                        <h1 style={{
                            textAlign: 'center',
                            fontSize: '44px',
                            marginBottom: '1%',
                            marginTop: '1%',
                            color: "black",
                            fontWeight: '700',
                            lineHeight: '55px'
                        }}>
                            Client’s Testimonials
                        </h1>
                        <p style={{ color: 'gray', textAlign: 'center' }}>
                            Solid is a decentralization project that gives users control over their data <br /> through personal online data stores project that (pods).
                        </p>
                    </div>

                    <div className="test-testimonal">
                        <Slider {...settings}>
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img src="/images/download.jfif" alt="Sarah L." className="client-img" />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-quote">
                                "Absolutely loved the experience! The support team was very helpful, and the results were outstanding."
                                </p>
                                <div className="client-info">
                                <h3 className="client-name">Sarah L.</h3>
                                <p className="client-sub">Member since 2015</p>
                                <div className="client-rating">
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img src="/images/download.jfif" alt="Sarah L." className="client-img" />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-quote">
                                "Absolutely loved the experience! The support team was very helpful, and the results were outstanding."
                                </p>
                                <div className="client-info">
                                <h3 className="client-name">Sarah L.</h3>
                                <p className="client-sub">Member since 2015</p>
                                <div className="client-rating">
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img src="/images/download.jfif" alt="Sarah L." className="client-img" />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-quote">
                                "Absolutely loved the experience! The support team was very helpful, and the results were outstanding."
                                </p>
                                <div className="client-info">
                                <h3 className="client-name">Sarah L.</h3>
                                <p className="client-sub">Member since 2015</p>
                                <div className="client-rating">
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img src="/images/download.jfif" alt="Sarah L." className="client-img" />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-quote">
                                "Absolutely loved the experience! The support team was very helpful, and the results were outstanding."
                                </p>
                                <div className="client-info">
                                <h3 className="client-name">Sarah L.</h3>
                                <p className="client-sub">Member since 2015</p>
                                <div className="client-rating">
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                </div>
                                </div>
                            </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Testimonials;
