import React from 'react';
import header from '../../../img/header.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className = 'row d-flex align-items-center w-100'>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#46475c'}}>Home Repair Services</h1>
                <p className="text-secondary">Our local experts in your neighborhood can be there as soon as same-day.</p>
                <button type="button" class="btn header-btn">BOOK SERVICES</button>
            </div>
            <div className="col-md-6">
                <img src={header} alt="" style = {{height:'500px'}}/>
                
            </div>
        </main>
    );
};

export default HeaderMain;