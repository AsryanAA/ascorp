import { create } from 'zustand'
import axios, {get} from 'axios'

const baseUrl:String = 'http://localhost:8090/api/v1'

export const useAuthState = create(((set) => (
    {
        accessToken: null,
        refreshToken: null,
        loading: false,
        error: null,
        load: async (login, password) => {
            set({ loading: true })

            const resp = await axios.post(baseUrl + '/admin/auth/login', {
                username: login,
                password,
            }).then((resp) => {
                set({ accessToken: resp.data.token.accessToken })
                set({ refreshToken: resp.data.token.refreshToken })
            }).catch((error) => {
                console.log(error.response.data.humanMessage)
            }).finally(() => {
                console.log('finally load')
                set({ loading: false })
            })
        },
    }
)))

export const useProfileState = create(set => (
    {
        user: {
            id: 0,
            firstName: '',
            lastName: '',
            email: ''
        },
        load: async () => {
            set({ loading: true })

            const resp = await axios.get(baseUrl + '/admin/users/profile', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            }).then((resp) => {
                set({ user: {
                        id: resp.data.user.id,
                        firstName: resp.data.user.firstName,
                        lastName: resp.data.user.lastName,
                        email: resp.data.user.email
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
))