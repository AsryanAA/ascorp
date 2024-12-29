import { createContext, useState } from 'react'
import { useProfileState } from '../store/store'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const { user }  = useProfileState()
    const value = { user }

    return <AuthContext.Provider value={ value }>
        { children }
    </AuthContext.Provider>
}