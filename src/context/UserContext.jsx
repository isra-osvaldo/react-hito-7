import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [email, setEmail] = useState(localStorage.getItem("email") || null);

    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) throw new Error("Error en el login");

            const data = await response.json();
            setToken(data.token);
            setEmail(email);
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", email);
        } catch (error) {
            console.error(error);
        }
    };

    const register = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) throw new Error("Error en el registro");

            const data = await response.json();
            setToken(data.token);
            setEmail(email);
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", email);
        } catch (error) {
            console.error(error);
        }
    };


    const logout = () => {
        setToken(null);
        setEmail(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

    const getProfile = async () => {
        try {
            if (!token) return;

            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) throw new Error("Error al obtener el perfil");

            const data = await response.json();
            setEmail(data.email);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
