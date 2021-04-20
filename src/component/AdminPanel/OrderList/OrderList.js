import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [orderList, setOrderList] = useState({})
    useEffect(() =>{
        fetch('http://localhost:5002/orderList')
        .then(res => res.json())
        .then(data => setOrderList(data))
    }, [])
    
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  orderList.map((order, index) => 
                        
                    <tr>
                        <td>{order.name}</td>
                        <td>{order.serviceName}</td>
                        <td>{order.charge}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderList;