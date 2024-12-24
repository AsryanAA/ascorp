import { useAuth } from '../../hook/useAuth'
import { useNavigate } from 'react-router-dom'

import './Logout.css'

const Logout = () => {
    const { signout } = useAuth()
    const navigate = useNavigate()

    return <>
        <button
            className='logout-btn'
            onClick={
                () => signout(
                () => navigate('/login', { replace: true })
            )
        }>
            Выйти
        </button>
    </>
}

export default Logout