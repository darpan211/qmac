import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShopSidebar from '../Elements/ShopSidebar';
import MosicTiles from '../Table/MosicTiles';
import SubweyTiles from '../Table/SubweyTiles';
const products = [
    {
        size:'Size',
        detail:'1220 x 181 mm'
    },
    {
        size:'Thickness',
        detail:'4.00 mm + 1.00 mm IXPE underlayment'
    },
    {
        size:'Wearlayer',
        detail:'0.30 mm'
    },
    {
        size:'Packing Details',
        detail:'10 Planks/Box,2.21 SQM/Box, 55 Box/Pallet'
    },
]
var bnrimg = require('./../../images/banner/5.jpg');

class ShopList extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                <Banner title="Packing Detail" pagename="Packing Detail" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* SHOP SECTION START */}
                    <div className="section-full p-t120 p-b90 bg-white mobile-page-padding">
                        <div className="container">
                 
                            <h3>SPC Flooring</h3>
                            <h5>Product Size & Packing Details</h5>
                        <table class="table table-dark">
                            <tbody>
                                {products.map((item) => (
                                <tr border-white>
                                <td class="col-2 border border-white spc-td">{item.size}</td>
                                <td class="col-8 border border-white spc-td">{item.detail}</td>
                                </tr>
                                ))}
                            </tbody>
                         </table>

                            <h3>Mosic Tiles</h3>
                          <div>
                            <div class="card-header" style={{backgroundColor:'rgb(52 58 64)',color:'white',fontWeight:'bold'}}>
                                PAKING DETAILS
                            </div>
                            <MosicTiles />
                            </div>

                            <div>
                            <h3>Subwey Tiles</h3>
                            <h6 style={{letterSpacing: '2px',color:'rgb(12 70 207)'}}> PAKING DETAILS</h6>
                                <SubweyTiles/>
                            </div>
                        </div>
                    </div>
                    {/* SHOP SECTION END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ShopList;