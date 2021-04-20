import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './ServiceDetail.css'

const ServiceDetail = ({service,setOrder}) => {

    //const [order,setOrder] = useContext(userContext);
    
    const handleOrder=() => {
        setOrder(service);
    }

    return (
        
        <Link onClick={handleOrder} className="col-md-4 text-center service-link" to="/booking">
            <div className= 'service-style'>
                <img src={service.img} alt=""/>
                <p>{service.serviceName}</p>            
            </div>
        </Link>
    );
};

export default ServiceDetail;

