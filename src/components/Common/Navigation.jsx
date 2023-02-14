import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pathName:'',flag:false};
      }
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/mobilenav.js');

        const pathName=window.location.pathname.split('/')[1]
      
        this.setState({pathName:pathName})

        if(pathName==='4-feet-3d-step-riser'){
            this.setState({flag:true})
        }
        else if(pathName==='4-feet-full-body-step-riser'){
            this.setState({flag:true})
        }
        else if(pathName==='4-feet-double-charge-step-riser'){
            this.setState({flag:true})
        }
        else if(pathName==='4-feet-gvt-step-riser'){
            this.setState({flag:true})
        }
        else if(pathName==='3-25-feet-full-body-step-riser'){
            this.setState({flag:true})
        }
        else if(pathName==='3-25-feet-gvt-step-riser'){
            this.setState({flag:true})
        }
        else if(pathName==='3-feet-gvt-step-riser'){
            this.setState({flag:true})
        }
        else{
            this.setState({flag:false})
        }

    };
    render() {
        const pathNameSubMenu=window.location.pathname
        return (
            <>
                <ul className="nav navbar-nav">
                    <li className={this.state.pathName===''?"active":''}>
                        <NavLink to={"/"}>Home</NavLink>
                        {/* <ul className="sub-menu">
                            <li><NavLink to={"/"}>Home-1</NavLink></li>
                            <li><NavLink to={"/home-2"}>Home-2</NavLink></li>
                            <li><NavLink to={"/home-3"}>Home-3</NavLink></li>
                            <li><NavLink to={"/home-4"}>Home-4</NavLink></li>
                            <li><NavLink to={"/home-5"}>Home-5</NavLink></li>
                            <li><NavLink to={"/home-6"}>Home-6</NavLink></li>
                        </ul> */}
                    </li>
                    <li className={this.state.pathName==='about-us'?"active":''}><NavLink to={"/about-us"}>About us</NavLink>
                        {/* <ul className="sub-menu">
                            <li><NavLink to={"/about-us"}>About 1</NavLink></li>
                            <li><NavLink to={"/about-2"}>About 2</NavLink></li>
                        </ul> */}
                    </li>
                    <li className={this.state.flag===true?"active":''}>
                        <NavLink to={""}>Collection</NavLink>
                        <ul className="sub-menu">
                            <li className={pathNameSubMenu.includes('4-feet')?"active":''}>
                                <NavLink to={""}>4 FEET STEP & RISER </NavLink>
                                <ul className="sub-menu">
                                    <li className={this.state.pathName==='4-feet-3d-step-riser'?"active":''}><NavLink to={"/4-feet-3d-step-riser"}>3D STEP & RISER</NavLink></li>
                                    <li className={this.state.pathName==='4-feet-full-body-step-riser'?"active":''}><NavLink to={"/4-feet-full-body-step-riser"}> FULL BODY STEP & RISER</NavLink></li>
                                {/* our-history route Addedded */}

                                    <li className={this.state.pathName==='4-feet-double-charge-step-riser'?"active":''}><NavLink to={"/4-feet-double-charge-step-riser"}>  DOUBLE CHARGE STEP & RISER</NavLink></li>
                                    <li className={this.state.pathName==='4-feet-gvt-step-riser'?"active":''}><NavLink to={"/4-feet-gvt-step-riser"}>  GVT STEP & RISER</NavLink></li>
                                </ul>
                            </li>
                            <li className={pathNameSubMenu.includes('3-25-feet')?"active":''}>
                                <NavLink to={""}>3.25 FEET STEP & RISER </NavLink>
                                <ul className="sub-menu">
                                    <li className={this.state.pathName==='3-25-feet-full-body-step-riser'?"active":''}><NavLink to={"/3-25-feet-full-body-step-riser"}> FULL BODY STEP & RISER</NavLink></li>
                                    <li className={this.state.pathName==='3-25-feet-gvt-step-riser'?"active":''}><NavLink to={"/3-25-feet-gvt-step-riser"}> GVT STEP & RISER</NavLink></li>
                                    {/* <li><NavLink to={"/team-single"}>Team Detail</NavLink></li> */}
                                </ul>
                            </li>
                            <li className={pathNameSubMenu.includes('3-feet')?"active":''}>
                                <NavLink to={""}>3 FEET STEP & RISER </NavLink>
                                {/* icon-font route Addedded */}
                                <ul className="sub-menu">
                                    <li className={this.state.pathName==='3-feet-gvt-step-riser'?"active":''}><NavLink to={"/3-feet-gvt-step-riser"}>GVT STEP & RISER</NavLink></li>
                                </ul>
                            </li>
                            {/* <li><NavLink to={"/our-history"}>Our History</NavLink></li>
                            <li><NavLink to={"/3-25-feet-gvt-step-riser"}>Fonts Icons</NavLink></li>
                            <li><NavLink to={"/error-404"}>Error 404</NavLink></li> */}
                        </ul>
                    </li>
                    {/* <li>
                        <NavLink to={""}>Projects</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={""}>Project Grid Type</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/project-grid-3-columns"}>3 Columns</NavLink></li>
                                    <li><NavLink to={"/project-grid-3-columns-no-gap"}>3 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-grid-4-columns"}>4 Columns</NavLink></li>
                                    <li><NavLink to={"/project-grid-4-columns-no-gap"}>4 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-grid-5-columns"}>5 Columns</NavLink></li>
                                    <li><NavLink to={"/project-grid-5-columns-no-gap"}>5 Columns No Gutter</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to={""}>Project Masonry Type</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/project-masonry-3-columns"}>3 Columns</NavLink></li>
                                    <li><NavLink to={"/project-masonry-3-columns-no-gap"}>3 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-masonry-4-columns"}>4 Columns</NavLink></li>
                                    <li><NavLink to={"/project-masonry-4-columns-no-gap"}>4 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-masonry-5-columns"}>5 Columns</NavLink></li>
                                    <li><NavLink to={"/project-masonry-5-columns-no-gap"}>5 Columns No Gutter</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to={"/project-carousel"}>Project Carousel</NavLink></li>
                            <li><NavLink to={""}>Project Detail</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/project-detail1"}>Project Detail 1</NavLink></li>
                                    <li><NavLink to={"/project-detail2"}>Project Detail 2</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={""}>Blog</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/blog-grid"}>Blog Grid</NavLink></li>
                            <li><NavLink to={"/blog-listing"}>Blog Listing</NavLink></li>
                            <li><NavLink to={"/blog-masonry"}>Blog Masonry</NavLink></li>
                            <li><NavLink to={"/blog-single"}>Blog Single</NavLink></li>
                            <li><NavLink to={"/post-right-sidebar"}>Post Right Sidebar</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={""}>Shop</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/shop-grid"}>Shop Grid</NavLink></li>
                            <li><NavLink to={"/packing-detail"}>Shop List</NavLink></li>
                            <li><NavLink to={"/shop-detail"}>Shop Detail</NavLink></li>
                            <li><NavLink to={"/shop-account"}>My Account</NavLink></li>
                            <li><NavLink to={"/shop-cart"}>Cart</NavLink></li>
                            <li><NavLink to={"/shop-checkout"}>Checkout</NavLink></li>
                        </ul>
                    </li> */}
                    <li className={this.state.pathName==='packing-detail'?"active":''}><NavLink to={"/packing-detail"}> Packing Detail</NavLink></li>
                    <li className={this.state.pathName==='brochure'?"active":''}><NavLink to={"/brochure"}> Brochure</NavLink></li>
                    {/* <li><NavLink to={"/faq"}>FAQ</NavLink></li> */}
                    <li className={this.state.pathName==='contact-us'?"active":''}><NavLink to={"/contact-us"}>Contact us</NavLink></li>
                </ul>
            </>
        );
    };
};

export default Navigation;