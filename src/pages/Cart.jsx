import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import "../Cart.css";

const Cart = () => {
    const { cart, increaseCount, decreaseCount, removeFromCart, total, clearCart } = useCart();
    const { token } = useUser();
    const [message, setMessage] = useState("");


    const handleCheckout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ cart }),
            });


            const data = await response.json();
            console.log(data);

            if (!response.ok || data.error) {
                throw new Error(data.message || "Error al procesar la compra");
            }

            setMessage("¡Compra realizada con éxito!");
            clearCart();
        } catch (error) {
            console.error("Error al procesar la compra:", error);
            setMessage("Hubo un problema al procesar la compra. Inténtalo de nuevo.");
        }
    };

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                cart.map(({ id, name, price, count, img }) => (
                    <div key={id} className="cart-item">
                        <img src={img} alt={name} className="cart-img" />
                        <p>{name}</p>
                        <p>Precio: ${price.toLocaleString("es-CL")}</p>
                        <p>Cantidad: {count}</p>
                        <div className="cart-buttons">
                            <button onClick={() => increaseCount(id)}>+</button>
                            <button onClick={() => decreaseCount(id)}>-</button>
                            <button onClick={() => removeFromCart(id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            )}
            <h3>Total: ${total.toLocaleString("es-CL")}</h3>

            {message && <p className="message">{message}</p>}

            <button onClick={handleCheckout} disabled={!token || cart.length === 0}>
                Pagar
            </button>
        </div>
    );
};

export default Cart;
