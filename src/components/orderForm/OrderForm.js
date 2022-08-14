import React from 'react';
import './orderForm.css'
import {useState} from "react";
import {validate, placeOrder} from './helper'
import {useNavigate} from "react-router-dom";


function OrderForm({ingredients, setOrderList, orderList, price, setIngredients, setPrice}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        street: '',
        zip: '',
        country: '',
        email: '',
        delivery: 'fastest'
    });

    const [errors, setErrors] = useState({
        nameValid: true,
        streetValid: true,
        zipValid: true,
        countryValid: true,
        emailValid: true,
        formValid: false
    });

    const updateInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        validate(e, errors, setErrors, formData)
    }
    return (
        <div className="form-container">
            <form
                className='form'
                onSubmit={(e) => placeOrder(
                    e,
                    ingredients,
                    setOrderList,
                    orderList,
                    price,
                    setIngredients,
                    setPrice,
                    navigate
                )}
            >
                <h2 className="title">
                    Enter your Contact Data
                </h2>
                <input
                    placeholder={'Name'}
                    name={'name'}
                    value={formData.name}
                    onChange={updateInput}
                    className={!errors.nameValid ? "input-error" : undefined}
                />
                {!errors.nameValid && (<div className="error-message">Please Enter a Valid Name</div>)}

                <input
                    placeholder={'Street'}
                    name={'street'}
                    value={formData.street}
                    onChange={updateInput}
                    className={!errors.streetValid ? "input-error" : undefined}
                />
                {!errors.streetValid && (<div className="error-message">Please Enter a Valid Street</div>)}
                <input
                    placeholder={'Zip Code'}
                    name={'zip'}
                    value={formData.zip}
                    onChange={updateInput}
                    className={!errors.zipValid ? "input-error" : undefined}
                />
                {!errors.zipValid && (<div className="error-message">Please Enter a Valid Zip Code</div>)}
                <input
                    placeholder={'Country'}
                    name={'country'}
                    value={formData.country}
                    onChange={updateInput}
                    className={!errors.countryValid ? "input-error" : undefined}
                />
                {!errors.countryValid && (<div className="error-message">Please Enter a Valid Country</div>)}
                <input
                    placeholder={'Email'}
                    type="email"
                    name={'email'}
                    value={formData.email}
                    onChange={updateInput}
                    className={!errors.emailValid ? "input-error" : undefined}
                />
                {!errors.emailValid && (<div className="error-message">Please Enter a Email</div>)}
                <select
                    name="delivery"
                    value={formData.delivery}
                    onChange={updateInput}
                >
                    <option value="fastest">Fastest</option>
                    <option value="cheapest">Cheapest</option>
                </select>
                {errors.formValid
                    ? <button type={"submit"}>Order</button>
                    : <button type={"submit"} disabled>Order</button>}
            </form>
        </div>
    );
}

export default OrderForm;