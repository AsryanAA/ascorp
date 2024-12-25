import { useAuthState, useProfileState } from '../../store/store'
import { useEffect } from 'react'

import './Profile.css'

const MyProfile = () => {
    const { user, load } = useProfileState()
    const { accessToken }  = useAuthState()

    useEffect(() => {
        if (accessToken) {
            load()
        }
    }, [accessToken])

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

export default MyProfile