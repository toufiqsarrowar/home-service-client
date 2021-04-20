import React from 'react';
import office from '../../../img/office.jpg'

const About = () => {
    return (
        <section className="mt-5 pt-2 mb-5 pb-5">
            <div className="row w-100 mt-5 pt-5 d-flex justify-content-center">
                <div className="col-md-5">
                    <h2 style={{ color: '#46475c'}}><b>About <span style={{ color: '#41C941'}}>HomeService</span></b></h2>
                    <p style={{ color: '#46475c'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, possimus cum beatae voluptatum voluptates corporis minima? Eligendi consectetur maiores dolor aliquid autem est magni amet quam voluptatibus, animi inventore modi labore porro cupiditate necessitatibus placeat dignissimos ipsum sed nihil officia voluptatum recusandae quod sapiente! Quaerat officiis illum illo sapiente. Labore?</p>
                </div>
                <div className="col-md-5">
                    <img src={office} className="img-fluid" alt="" srcset=""/>
                </div>
            </div>
        </section>
    );
};

export default About;