import React from 'react';
import Booking from '../../Booking/Booking';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

 const serviceData = [
    {
        serviceName: 'Home Appliances Repair',
        img: 'https://d7gh5vrfihrl.cloudfront.net/website/membership/services/apr.svg',
        charge: 1200
    },
    {
        serviceName: 'TV Mounting',
        img: 'https://d7gh5vrfihrl.cloudfront.net/website/membership/services/tvi.svg',
        charge: 1000
    },
    {
        serviceName: 'Hadyman Services',
        img: 'https://d7gh5vrfihrl.cloudfront.net/website/membership/services/hdm.svg',
        charge: 800
    },
    {
        serviceName: 'iPhone Repair',
        img: 'https://d7gh5vrfihrl.cloudfront.net/website/membership/services/mdr.svg',
        charge: 700
    },
    {
        serviceName: 'Plumbing',
        img: 'https://d7gh5vrfihrl.cloudfront.net/website/membership/services/plumbing.svg',
        charge: 2000
    },
    {
        serviceName: 'Garage Door',
        img: 'https://d7gh5vrfihrl.cloudfront.net/website/membership/services/garage.svg',
        charge: 2500
    },
]

const Services = ({order,setOrder}) => {
    return (
        <section className="mt-5 pt-5">
            <div className="text-center">
                <h2 style={{color: '#46475c'}}><b>OUR SERVICES</b></h2>
                <h4 style={{color: '#46475c'}}>Solutions to all your home maintenance needs</h4>
            </div>
            <div className = 'd-flex justify-content-center'>
            <div className="row mt-5">
                {
                    serviceData.map(service => <ServiceDetail service = {service} setOrder={setOrder}></ServiceDetail>)
                }
            </div>
            </div>
        </section>
    );
};

export default Services;