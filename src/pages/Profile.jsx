import { useUser } from "../context/UserContext";

const Profile = () => {
    const { email, logout } = useUser();

    return (
        <div className="container text-center mt-5">
            <h2>Perfil del usuario</h2>
            <p>Email: {email || "No disponible"}</p>
            <button className="btn btn-danger mt-3" onClick={logout}>Cerrar sesión</button>
        </div>
    );
};

export default Profile;
