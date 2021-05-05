import React from 'react'
import aboutimage from '../images/hero.jpeg';

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>
                    Who We Are?
                </h1>
                <p> Welcome to NICCO HOTEL. Nicco Hotel is a small independent family run hotel in Baneshor, Kathmandu. It was established as a start-up business in June 4, 2020 with a mission to introduce Quality Food to the people of Kathmandu.
                    Nicco Hotel now in it’s fourth year currently provides training and employment oppurtunities to over 20 Nepalese staffs. Nicco Hotel aspired to become one of the best hotel and want to fulfill the needs of people by providing unique dishes.

                    <br/> Please take a look through our web site where you will find most of the information you need. Call us to discuss your hotel reservation, dining plans or function requirements.</p>
                <button>Read More</button>
            </div>

            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            
        </div>
    )
}

export default About;
