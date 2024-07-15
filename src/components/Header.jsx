import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <NavLink to='/'>Hot Cards</NavLink>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Shop</NavLink>
                <NavLink to='/'>Account</NavLink>
                <NavLink to='/'>Cart (0)</NavLink>
            </nav>
            
        </header>
    )
}