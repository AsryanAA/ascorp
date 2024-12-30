import { create } from 'zustand'
import axios from 'axios'
import { persist } from 'zustand/middleware'

const baseUrl:String = 'http://localhost:8090/api/v1'

export const useAuthState = create(((set) => (
    {
        loading: false,
        error: null,
        load: async (login, password) => {
            set({ loading: true })

            const resp = await axios.post(`${baseUrl}/admin/auth/login`, {
                username: login, // TODO: исправить на login (backend)
                password,
            }).then((resp) => {
                localStorage.setItem('accessToken', resp.data.token.accessToken)
                localStorage.setItem('refreshToken', resp.data.token.refreshToken)
            }).catch((error) => {
                console.log(error.response.data.humanMessage)
            }).finally(() => {
                console.log('finally load')
                set({ loading: false })
            })
        },
    }
)))

export const useProfileState = create(persist(set => (
    {
        user: null,
        loading: false,
        error: null,
        logout: () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            set({ user: null })
        },
        loadProfile: async () => {
            set({ loading: true })

            const resp = await axios.get(`${baseUrl}/admin/users/profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then((resp) => {
                console.log(resp.data.user)
                set({ user: {
                        id: resp.data.user.id,
                        firstName: resp.data.user.firstName,
                        lastName: resp.data.user.lastName,
                        email: resp.data.user.email,
                        birthday: resp.data.user.birthday,
                        onlineAt: resp.data.user.onlineAt,
                        createdAt: resp.data.user.createdAt
                    }
                })
            }).catch((error) => {
                console.log(error.response.data.humanMessage)
            }).finally(() => {
                console.log('finally profile')
                set({ loading: false })
            })
        }
    }
)))