import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find((item) => item.id === product.id);
            if (productExists) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, count: 1 }];
        });
    };


    const increaseCount = (id) => {
        setCart(cart.map(item => item.id === id ? { ...item, count: item.count + 1 } : item));
    };

    const decreaseCount = (id) => {
        setCart(cart
            .map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
            .filter(item => item.count > 0)
        );
    };


    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };


    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseCount, decreaseCount, removeFromCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para consumir el contexto
export const useCart = () => useContext(CartContext);
