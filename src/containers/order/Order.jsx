import React from 'react';
import './order.css'
import {OrderForm, Burger} from "../../components";

function Order({ingredients, setOrderList, orderList, price, setIngredients, setPrice}) {
    return (
        <div>
            <Burger ingredients={ingredients}/>
            <OrderForm
                ingredients={ingredients}
                setOrderList={setOrderList}
                orderList={orderList}
                price={price}
                setIngredients={setIngredients}
                setPrice={setPrice}
            />
        </div>
    );
}

export default Order;