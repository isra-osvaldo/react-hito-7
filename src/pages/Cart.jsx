import React from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import '../Cart.css';

const Cart = () => {
    const { cart, increaseCount, decreaseCount, removeFromCart, total } = useCart();
    const { token } = useUser();

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
                        <p>Precio: ${price.toLocaleString('es-CL')}</p>
                        <p>Cantidad: {count}</p>
                        <div className="cart-buttons">
                            <button onClick={() => increaseCount(id)}>+</button>
                            <button onClick={() => decreaseCount(id)}>-</button>
                            <button onClick={() => removeFromCart(id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            )}
            <h3>Total: ${total.toLocaleString('es-CL')}</h3>
            {/* Deshabilitamos el botón "Pagar" si el token es false */}
            <button disabled={!token}>Pagar</button>
        </div>
    );
};

export default Cart;
