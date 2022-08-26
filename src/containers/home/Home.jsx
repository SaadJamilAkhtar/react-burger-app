import React from 'react';
import './home.css'
import {Burger, Ingredient} from "../../components";

function Home({ingredients, setIngredients, price, setPrice}) {
    return (
        <div>
            <Burger ingredients={ingredients}/>
            <Ingredient
                ingredients={ingredients}
                price={price}
                update={setIngredients}
                updatePrice={setPrice}
            />
        </div>
    );
}

export default Home;