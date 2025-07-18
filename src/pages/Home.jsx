import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const { addToCart } = useCart();

    const url = "http://localhost:5000/api/pizzas";

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizzas(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row justify-content-center">
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className="col-md-4 col-lg-4 mb-4">
                            <div className="pizza-card text-center p-3 border rounded shadow">
                                <h3>{pizza.name}</h3>
                                <img
                                    src={pizza.img}
                                    alt={pizza.name}
                                    className="img-fluid w-75 d-block mx-auto mt-2"
                                />
                                <p className="mt-2">Precio: ${pizza.price.toLocaleString()}</p>
                                <button
                                    className="btn btn-success mt-2"
                                    onClick={() => addToCart({ ...pizza, count: 1 })}
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
