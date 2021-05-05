import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s4.jpeg';
import pimage2 from '../images/s1.jpeg';
import pimage3 from '../images/s3.jpeg';


function Products() {
    return (
        <div id='products'>
            <h1>FIND SOME UNIQUE DISHES</h1>
            <p>Our food ordering system is completely free. Save your money with us!!</p>
            <div className='a-container '>
                <Productbox 
                image={pimage1} title="Full Lunch"
                />
                 <Productbox 
                image={pimage2} title="Burger"
                />
                 <Productbox 
                image={pimage3} title="Pizza"
                />
            </div>
        </div>
    )
}

export default Products
