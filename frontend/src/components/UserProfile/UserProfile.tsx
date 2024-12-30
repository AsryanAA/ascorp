import { useProfileState } from '../../store/store'

import { formatDate } from '../../utils/utils'

import './UserProfile.css'

const UserProfile = () => {
    const { user, loadProfile } = useProfileState()

    return <>
        <div className='profile-container'>
            <div className='profile'>
                <h1>Мой профиль</h1>
                <label>
                    <span>ID:</span> {user.id}
                </label>
                <label>
                    <span>Почта:</span> {user.email}
                </label>
                <label>
                    <span>Имя:</span> {user.firstName}
                </label>
                <label>
                    <span>Фамилия:</span> {user.lastName}
                </label>
                <label>
                    <span>Дата рождения:</span> {user.birthday}
                </label>
                <label>
                    <span>Был в сети:</span> {formatDate(user.onlineAt)}
                </label>
                <label>
                    <span>Дата регистрации:</span> {formatDate(user.createdAt)}
                </label>
            </div>
        </div>
    </>
}

export default UserProfile