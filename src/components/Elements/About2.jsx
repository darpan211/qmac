import React from 'react';
import { NavLink } from 'react-router-dom';

var bgimg1 = require('./../../images/background/bg5.jpg');

class About2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-12 ">
                                        <div className="home-2-about bg-bottom-left bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="about-home-2">
                                            <h3 className="m-t0 sx-tilte">100+ designs and various sizes.</h3>
                                            <p>Space can become a symbol of comfort when QMAC provides new ideas for decorating your home. With special formate like 1200 x 300mm, 1000 x 300mm, 900 x 300mm in Vitrified Step & Riser which seem to enlarge available space and enhance the concepts of living quality.</p>
                                            <div className="text-left">
                                            <NavLink to={"/about-2"} className="site-button-link">Read More</NavLink>
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

export default About2;