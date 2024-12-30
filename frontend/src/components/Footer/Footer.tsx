import './Footer.css'

import Logout from '../Logout/Logout'

const Footer = () => {
    return <>
        <footer>
            <div className='logout-block'>
                <Logout />
            </div>
            <div className='rights-block'>
                All rights reserved 2024-2025 &copy;
            </div>
        </footer>
    </>
}

export default Footer