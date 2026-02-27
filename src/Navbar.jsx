import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/projects">Projects</NavLink>
    );
};