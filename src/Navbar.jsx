import { BrowserRouter, NavLink } from "react-router-dom";
import logo from './assets/smiley-face-emoji-png-images-hd-download-11626606130soijnfuzlf.png';

export function Navbar() {

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const homeStyle = {
        paddingRight: '50%',
    };

    const navItemsStyle = {
        margin: '0 1vw 0 1vw',
    };

    return (
        <header>
            <BrowserRouter>
                <nav style={navStyle}>
                    <NavLink to="/" end style={homeStyle}>
                        <img src={logo} alt="logo" style={{width: '40px'}} />
                    </NavLink>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <NavLink to="/about-us" style={navItemsStyle}>About Us</NavLink>
                        <NavLink to="/projects" style={navItemsStyle}>Projects</NavLink>
                        <NavLink to="/buy-things" style={navItemsStyle}>Buy Things</NavLink>  
                    </div>
                </nav>
            </BrowserRouter>
        </header>
    );
};