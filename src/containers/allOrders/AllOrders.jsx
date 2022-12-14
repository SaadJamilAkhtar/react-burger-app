import React from 'react';
import {OrderItem} from "../../components";
import './allOrders.css'


function AllOrders({orderList, newOrder}) {
    return (
        <div className={'order-container'}>
            {newOrder && <div className="alert alert-success">
                New Order Created Successfully!
            </div>}
            <div className="order-box">
                <h2>All Orders</h2>
                {orderList.length > 0
                    ? orderList.map((order) => (<OrderItem order={order}/>))
                    : <div className="no-order">No order added yet!</div>
                }
            </div>
        </div>
    );
}

export default AllOrders;