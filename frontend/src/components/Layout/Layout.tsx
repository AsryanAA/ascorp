import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

import './Layout.css'

const Layout = () => {
    return <>
        <Header />
        <Outlet />
        <footer>
            2024-2025
        </footer>
    </>
}

export default Layout