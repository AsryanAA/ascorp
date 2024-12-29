import { useProfileState } from '../../store/store'

import './UserProfile.css'

const UserProfile = () => {
    const { user } = useProfileState()

    return <>
        <div className='profile'>
            <label>
                ID: {user.id}
            </label>
            <label>
                Почта: {user.email}
            </label>
            <label>
                Имя: {user.firstName}
            </label>
            <label>
                Фамилия:  {user.lastName}
            </label>
        </div>
    </>
}

export default UserProfile