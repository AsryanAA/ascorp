import { createContext, useState } from 'react'
import { useProfileState } from '../store/store'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const { user }  = useProfileState()
    const [ userState, setUserState ] = useState(null)

    const signin = (tokens, callback) => {
        if (tokens[0] && tokens[1]) {
            localStorage.setItem('accessToken', tokens[0])
            localStorage.setItem('refreshToken', tokens[1])
        }

        setUserState(user)

        if (userState) {
            console.log('callback')
            callback()
        }
    }

    const signout = (callback) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        setUserState(null)

        callback()
    }

    const value = { user, signin, signout }

    return <AuthContext.Provider value={ value }>
        { children }
    </AuthContext.Provider>
}