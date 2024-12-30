import { NavLink } from 'react-router-dom'

import './NavBar.css'

import logo from '../../assets/logo.jpg'

const setActive = ({ isActive }) => isActive ? 'menu-item active' : 'menu-item'

const NavBar = () => {
    return <>
        <header>
            <div className='menu'>
                <div className='menu-list'>
                    <img
                        src={logo as string}
                        alt='logo'
                        width={100}
                        height={100}
                        className='navbar-logo'
                    />
                    <NavLink to='/' className={setActive}>Профиль</NavLink>
                    <NavLink to='/courses' className={setActive}>Курсы</NavLink>
                    <NavLink to='/orders' className={setActive}>Заказы</NavLink>
                    <NavLink to='/about-us' className={setActive}>О нас</NavLink>
                </div>
            </div>
        </header>
    </>
}

export default NavBar