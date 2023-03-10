import React from 'react';

const services = [
    {
        count: '01',
        title: 'Resistant to Acids And Chemicals',
        img:require('./../../images/projects/portrait/chemicals.png'),
        description: 'materials that are resistant to acids and chemicals are important in many industries such as chemical processing, industrial manufacturing, and even household products.',
    },
    {
        count: '02',
        title: 'Resistant to loads',
        img:require('./../../images/projects/portrait/loads.png'),

        description: 'resistant to loads are able to withstand forces and stresses that are applied to them without undergoing deformation or failure. ',
    },
    {
        count: '03',
        title: 'Stain Resistant ',
        img:require('./../../images/projects/portrait/stain.png'),
        description: 'Stain resistance refers to the ability of a material to resist or repel stains caused by various substances, such as food, drinks, and chemicals.',
    },
    {
        count: '04',
        title: 'Durable Over Time',
        img:require('./../../images/projects/portrait/durable.png'),
        description: 'Durability over time refers to the ability of a material to withstand wear and tear over an extended period of time.',
    },
    {
        count: '05',
        title: 'Resistant to Thermal Shock',
        img:require('./../../images/projects/portrait/thermal.png'),
        description: 'Thermal shock resistance refers to the ability of a material to resist sudden and extreme changes in temperature without cracking or breaking.',
    },
    {
        count: '06',
        title: 'Environment Friendly',
        img:require('./../../images/projects/portrait/environment.png'),
        description: 'Environmentally friendly tiles are tiles that are designed to have minimal impact on the environment throughout their lifecycle. ',
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Services1 extends React.Component {
    constructor() {
        super()
        this.state = {
            isShow: true,
            index:null,
        }
    }
    readMore=(index)=>{
        this.setState({index:index});
        this.setState({isShow:!this.state.isShow})
    };
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
                                                    <span className="icon-cell"><img src={item.img} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="sx-tilte">{item.title}</h4>
                                                    <p>{index===this.state.index&&this.state.isShow?item.description:`${item.description.slice(0,70)} ...`}</p>
                                                    <div className="text-left">
                                                        <div onClick={()=>{this.readMore(index,"index")}} className="site-button-link" style={{cursor:'pointer'}}>Read More</div>
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