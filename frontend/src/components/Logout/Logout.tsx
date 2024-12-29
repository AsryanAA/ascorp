import './Logout.css'
import { useProfileState } from '../../store/store'

const Logout = () => {
    const { logout } = useProfileState()

    return <>
        <button
            className='logout-btn'
            onClick={ logout }
        >
            Выйти
        </button>
    </>
}

export default Logout