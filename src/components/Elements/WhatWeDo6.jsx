import React from 'react';

var bgimg1 = require('./../../images/background/bg-5.png');
var bgimg2 = require('./../../images/background/bg-2.jpg');
var bgimg3 = require('./../../images/background/cross-line2.png');

class WhatWeDo6 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b30 bg-repeat overflow-hide" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container right-half-bg-image-outer">
                        <div className="right-half-bg-image bg-parallax bg-fixed bg-top-right" data-stellar-background-ratio={0} style={{ backgroundImage: 'url(' + bgimg2 + ')' }} />
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                    <h3 className="sep-line-one">What We do</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row number-block-one-outer justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/pic1.jpg')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">Our Mission</h4>
                                            <span className="m-a-text">True success for a product, comes when it is identified as a brand in the market. Rudra Step Riser is the top brand for many and we aspire to become one of the most favorite brands in the market through the new innovation and dedication.</span>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>01</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/pic2.jpg')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">Our Vision</h4>
                                            <span className="m-a-text">We believe in producing premium quality tiles with a diversely skilled team to design and manufacture hence, the company has maintained the record to be a leading tiles company in the competitive market for many years the record to be a leading tiles company in the competitive market for many years.</span>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={require('./../../images/pic3.jpg')} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">Core Value</h4>
                                            <ul className="list1 list-unstyled">
                                                <li> <i class="fa fa-check-circle"></i> Quality in everything we do.</li>
                                                <li> <i class="fa fa-check-circle"></i> Continuous improvements, innovations and embrace change</li>
                                                <li> <i class="fa fa-check-circle"></i> Team work and open communication. </li>
                                                <li> <i class="fa fa-check-circle"></i> To create a  productive and rewarding safety work environment.</li>
                                            </ul>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>03</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default WhatWeDo6;