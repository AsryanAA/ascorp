import { useAuth } from '../../hook/useAuth'
import { useNavigate } from 'react-router-dom'

import './Logout.css'
import {useProfileState} from "../../store/store.ts";

const Logout = () => {
    const { logout } = useProfileState()
    const { signout } = useAuth()
    const navigate = useNavigate()

    return <>
        <button
            className='logout-btn'
            onClick={() => logout()}
        >
            Выйти
        </button>
    </>
}

export default Logout