import {Header} from "./components";
import './App.css';
import {Home, Order, AllOrder} from "./containers";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    const [orderList, setOrderList] = useState([]);
    const [ingredients, setIngredients] = useState({
        'lettuce': 0,
        'bacon': 0,
        'cheese': 0,
        'meat': 0
    })
    const [price, setPrice] = useState(3.00);
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={
                        <Home
                            ingredients={ingredients}
                            setIngredients={setIngredients}
                            price={price}
                            setPrice={setPrice}
                        />
                    }/>
                    <Route path="/order" element={
                        <Order
                            ingredients={ingredients}
                            setOrderList={setOrderList}
                            orderList={orderList}
                            price={price}
                            setIngredients={setIngredients}
                            setPrice={setPrice}
                        />
                    }/>

                    <Route path="/all-orders" element={
                        <AllOrder
                            orderList={orderList}
                        />
                    }/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
