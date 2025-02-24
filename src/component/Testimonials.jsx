import React from "react";
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css"; 

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
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
                        <div class="test-card">
                            <div className="test-imgg">
                                <img src="./public/images/download.jfif" alt="Henry C." class="test-img" />
                            </div>
                            <div class="test-info">
                                <p class="test-quote">"I did this and it was awesome!"</p>
                                <h3 class="test-name">Robert A.</h3>
                                <p class="test-sub">Member since 1999</p>
                            </div>
                        </div>
                        <div class="test-card">
                            <div className="test-imgg">
                                <img src="./public/images/download.jfif" alt="Henry C." class="test-img" />
                            </div>
                            <div class="test-info">
                                <p class="test-quote">"I did this and it was awesome!"</p>
                                <h3 class="test-name">Robert A.</h3>
                                <p class="test-sub">Member since 1999</p>
                            </div>
                        </div>
                        <div class="test-card">
                            <div className="test-imgg">
                                <img src="./public/images/download.jfif" alt="Henry C." class="test-img" />
                            </div>
                            <div class="test-info">
                                <p class="test-quote">"I did this and it was awesome!"</p>
                                <h3 class="test-name">Robert A.</h3>
                                <p class="test-sub">Member since 1999</p>
                            </div>
                        </div>
                        <div class="test-card">
                            <div className="test-imgg">
                                <img src="./public/images/download.jfif" alt="Henry C." class="test-img" />
                            </div>
                            <div class="test-info">
                                <p class="test-quote">"I did this and it was awesome!"</p>
                                <h3 class="test-name">Robert A.</h3>
                                <p class="test-sub">Member since 1999</p>
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
