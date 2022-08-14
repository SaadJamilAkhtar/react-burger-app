import React from 'react';
import './order.css'

function OrderItem({order}) {
    return (
        <div className="order-item-container">
            <div className="ingredients">
                <h4>Ingredients :</h4>
                <div className="ingredient-container">Bacon ({order.bacon})</div>
                <div className="ingredient-container">Cheese ({order.cheese})</div>
                <div className="ingredient-container">Lettuce ({order.lettuce})</div>
                <div className="ingredient-container">Meat ({order.meat})</div>
            </div>
            <div className="price-container">
                Price : <span>USD {order.price.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default OrderItem;