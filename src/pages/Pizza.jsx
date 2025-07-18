import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                if (!response.ok) throw new Error("Error al obtener los datos de la pizza");
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        getData();
    }, [id]);

    if (!pizza) return <div className="text-center">Cargando...</div>;

    const { name, price, ingredients, img, desc } = pizza;

    return (
        <div className="container my-5">
            <div className="card shadow-lg">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={img} alt={name} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h2 className="card-title text-primary">{name}</h2>
                            <p className="card-text">{desc}</p>
                            <p className="h5 text-success">Precio: ${price.toLocaleString("es-CL")}</p>
                            <h5 className="mt-3">Ingredientes:</h5>
                            <ul>
                                {ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <button className="btn btn-success mt-3">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
