import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrderList from '../OrderList/OrderList';


const AdminPanel = () => {

    const [ showUi, setShowUi] = useState(true)
    console.log(showUi);
    
    
    const handleManage = () => {
        setShowUi(false)
    }
    const handle = () => {
        setShowUi(true)
    }
    return (
        <section>
       <div className="row w-100">
                <div className="col-md-3 col-sm-6 col-12">
                    <Sidebar handleManage={handleManage} handle={handle}></Sidebar>
                </div>
                <div className="col-md-9 col-sm-12 col-12">
                   <OrderList></OrderList>
                </div>
            </div>
    </section>
    );
};

export default AdminPanel;