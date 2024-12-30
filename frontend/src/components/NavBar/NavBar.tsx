import { NavLink } from 'react-router-dom'
import './NavBar.css'

const setActive = ({ isActive }) => isActive ? 'active-link' : ''

const NavBar = () => {
    return <>
        <header>
            <div>
                <NavLink to='/' className={ setActive }>Профиль</NavLink>
            </div>
            <div>
                <NavLink to='/courses' className={ setActive }>Курсы</NavLink>
            </div>
            <div>
                <NavLink to='/orders' className={ setActive }>Заказы</NavLink>
            </div>
            <div>
                <NavLink to='/about-us' className={ setActive }>О нас</NavLink>
            </div>
        </header>
    </>
}

export default NavBar