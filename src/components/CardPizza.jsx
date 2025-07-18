import { Link } from "react-router-dom";

const CardPizza = ({ id, nombre, precio, ingredientes, img }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>

            <Link to={`/pizza/${id}`} className="text-decoration-none text-dark">
                <img src={img} className="card-img-top" alt={nombre} />
            </Link>

            <div className="card-body">
                <Link to={`/pizza/${id}`} className="text-decoration-none text-dark">
                    <h5 className="card-title">{nombre}</h5>
                </Link>

                <p className="card-text">
                    Precio: {precio ? `$${precio.toLocaleString('es-CL')}` : "Precio no disponible"}
                </p>

                <div>
                    <h6>Ingredientes:</h6>
                    <ul>
                        {ingredientes && ingredientes.length > 0 ? (
                            ingredientes.map((ingrediente, index) => (
                                <li key={index}>{ingrediente}</li>
                            ))
                        ) : (
                            <li>No hay ingredientes disponibles</li>
                        )}
                    </ul>
                </div>

                <button className="btn btn-success ms-2">Añadir</button>
            </div>
        </div>
    );
};

export default CardPizza;
