import React from 'react';
import './ingredient.css'
import {IngredientForm} from "../index";
import {Link} from "react-router-dom";

function Ingredient(props) {
    const ingredients = props.ingredients
    const hasIngredients = ingredients.meat || ingredients.bacon || ingredients.lettuce || ingredients.cheese;
    return (
        <div className="ingredient-section">
            <div className="price">
                Current Price : <span>${props.price.toFixed(2)}</span>
            </div>
            {Object.keys(ingredients).map((e, i) => (
                    <IngredientForm
                        key={i}
                        name={e}
                        data={ingredients}
                        quantity={ingredients[e]}
                        update={props.update}
                        updatePrice={props.updatePrice}
                        price={props.price}
                    />
                )
            )}
            {hasIngredients
                ? <Link to='/order' className="order scale-up-center no-underline">Order</Link>
                : <button className="order" disabled>Order</button>
            }

        </div>
    );
}

export default Ingredient;