import Logo from '../assets/airbnb 1.png';
import '../index.css';
function Navbar() {
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo Airbnb" />
        </nav>
    );
}

export default Navbar;
