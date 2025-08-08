import { useState } from "react";
import { useUser } from "../context/UserContext";

function Register() {
    const { register } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const validarDatos = async (e) => {
        e.preventDefault();
        setError("");

        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            await login(email, password);
        } catch (err) {
            setError(err.message || "Error al iniciar sesión");
        }

    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Registro</h2>
            <form className="bg-light p-4 rounded shadow" onSubmit={validarDatos}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ingresa tu correo"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirmar Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirma tu contraseña"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        required
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default Register;
