import { useState } from "react";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Registro</h2>
            <form className="bg-light p-4 rounded shadow" onSubmit={validarDatos}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
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
                        name="password"
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
                        name="confirmPassword"
                        placeholder="Confirma tu contraseña"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
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

    // validar datos
    function validarDatos(e) {
        e.preventDefault();
        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            setError(true);
            alert("Todos los campos son obligatorios");
            return;
        }
        if (password.length <= 6) {
            setError(true);
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }
        if (password !== confirmPassword) {
            setError(true);
            alert("Las contraseñas no coinciden");
            return;
        }
        setError(false);
        alert("Formulario enviado correctamente");
    }
}

export default Register;
