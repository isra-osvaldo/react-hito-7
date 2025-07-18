import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
    const { total } = useCart();
    const { token, logout } = useUser();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mia!</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">🔓 Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link text-white" onClick={logout}>
                                        🔒 Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">🔐 Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">🔐 Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    <div className="d-flex ms-auto">
                        <Link to="/cart" className="btn btn-primary">
                            🛒 Total: ${total.toLocaleString()}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
