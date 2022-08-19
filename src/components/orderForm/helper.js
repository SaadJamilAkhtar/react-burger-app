export const validate = (e, errors, setErrors, formData) => {
    const field = e.target.name;
    const val = e.target.value;
    let nameValid = errors.nameValid;
    let emailValid = errors.emailValid;
    let streetValid = errors.streetValid;
    let zipValid = errors.zipValid;
    let countryValid = errors.countryValid;
    switch (field) {
        case "name":
            nameValid = val.length > 0;
            break
        case "email":
            emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            break
        case 'country':
            countryValid = val.length > 0;
            break
        case 'street':
            streetValid = val.length > 0;
            break
        case 'zip':
            zipValid = val.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
            break
    }

    let formValid = nameValid && zipValid && emailValid && countryValid &&
        streetValid && formData.name && formData.zip && formData.email && formData.country && formData.street

    setErrors({
        nameValid,
        zipValid,
        emailValid,
        countryValid,
        streetValid,
        formValid
    })

}

export const placeOrder = (e, ingredients, setOrderList, orderList, price, setIngredients, setPrice, navigate) => {
    e.preventDefault()
    setOrderList([
        ...orderList,
        {
            ...ingredients,
            price
        }
    ])
    setIngredients({
        'lettuce': 0,
        'bacon': 0,
        'cheese': 0,
        'meat': 0
    })
    setPrice(3.00)

    navigate("/all-orders", {state: {newOrder: true}});

}

