import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={validarDatos}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>

                {error && (
                    <div className="alert alert-danger" role="alert">
                        Por favor, verifica los datos ingresados.
                    </div>
                )}

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    );

    // Validar login
    function validarDatos(e) {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            setError(true);
            alert("Todos los campos son obligatorios");
            return;
        }
        if (password.length < 6) {
            setError(true);
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }
        setError(false);
        alert("Formulario enviado correctamente");
    }
}

export default Login;
