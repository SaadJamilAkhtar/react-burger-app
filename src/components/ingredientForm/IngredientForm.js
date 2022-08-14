import React from 'react';
import './ingredient-form.css'

function IngredientForm(props) {
    const increase = () => {
        props.update({
            ...props.data,
            [props.name]: props.quantity + 1
        })
        props.updatePrice(props.price + 0.5)
    }

    const decrease = () => {
        props.update({
            ...props.data,
            [props.name]: props.quantity - 1
        })
        props.updatePrice(props.price - 0.5)
    }

    return (
        <div className="update-ingredient">
            <div className="ingredient-title">{props.name}</div>
            <div className="button-set">
                {props.quantity > 0
                    ? <button className="dec-button" onClick={decrease}>Less</button>
                    : <button className="dec-button" disabled>Less</button>}
                <button className="inc-button" onClick={increase}>More</button>
            </div>
        </div>
    );
}

export default IngredientForm;