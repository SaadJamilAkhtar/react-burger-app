import React from 'react';
import {OrderItem} from "../../components";
import './allOrders.css'

function AllOrders({orderList}) {
    return (
        <div className={'order-container'}>
            <div className="order-box">
                <h2>All Orders</h2>
                {orderList.map((order) => (<OrderItem order={order}/>))}
            </div>
        </div>
    );
}

export default AllOrders;