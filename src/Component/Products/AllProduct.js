import React from 'react'
import Product from './Product'
import '../Products/allproduct.css';

export default function AllProduct() {
    return (
        <div className="allproduct">
            <div className="allproduct_container">
                <img
                    className="banner_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                
          
            <div className="allproduct_row">
                <Product />
                <Product />
                </div> <br />
                <div className="allproduct_row">
                <Product />
                <Product />
                <Product />
            </div> <br />
            <div className="allproduct_row">
                <Product />
                </div>
            </div>
           
        </div>
    )
}
