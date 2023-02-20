import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Resistant to Acids And Chemicals',
        flaticon: 'flaticon-sketch',
        description: 'Their concepts have helped QMAC in upgrading technology & product line to attain higher levels of perfection...',
    },
    {
        count: '02',
        title: 'Resistant to loads',
        flaticon: 'flaticon-stairs',
        description: 'QMAC is committed to harness excellence by implementing strict quality control policy...',
    },
    {
        count: '03',
        title: 'Stain Resistant ',
        flaticon: 'flaticon-window',
        description: 'We are concerned about our manufacturing process is non-polluting and any harmful materials into...',
    },
    {
        count: '04',
        title: 'Durable Over Time',
        flaticon: 'flaticon-skyline',
        description: 'QMAC has perfected the techniques. Its tiles the most durable and appealing in the market...',
    },
    {
        count: '05',
        title: 'Resistant to Thermal Shock',
        flaticon: 'flaticon-bed',
        description: 'Our team also provides consultations on all architectural issues, even if you need specific info about working...',
    },
    {
        count: '06',
        title: 'Environment Friendly',
        flaticon: 'flaticon-door',
        description: 'We combine Interior and Exterior Design services and often provide them as a single solution. It helps us...',
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Services1 extends React.Component {
    render() {

        return (
            <>
                <div className="section-full mobile-page-padding p-t80  p-b50 bg-gray">
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-left">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one ">Technical Characteristics</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                {services.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="sx-icon-box-wraper  icon-count-2-outer">
                                            <div className="icon-count-2 bg-white">
                                                <span className="icon-count-number">{item.count}</span>
                                                <div className="icon-xl inline-icon m-b5 scale-in-center">
                                                    <span className="icon-cell"><i className={item.flaticon} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="sx-tilte">{item.title}</h4>
                                                    <p>{item.description}</p>
                                                    <div className="text-left">
                                                        <NavLink to={"/4-feet-gvt-step-riser"} className="site-button-link">Read More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Services</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Services1;