import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useAuthState, useProfileState } from '../../store/store'

import './Login.css'

import telegram from '../../assets/icons/telegram.png'
import vk from '../../assets/icons/vk.png'
import instagram from '../../assets/icons/instagram.png'
import youtube from '../../assets/icons/youtube.png'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { load } = useAuthState()
    const { loading } = useAuthState()
    const { loadProfile } = useProfileState()
    const [ containerState, setContainerState ] = useState('container')

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = async (e) => {
        e.preventDefault()

        // получаем форму авторизации
        const form = e.target

        // получаем поля из формы авторизации
        const login = form.login.value
        const password = form.password.value

        const credentials = {
            login: login,
            password: password
        }

        await load(credentials.login, credentials.password)
        await loadProfile()
        navigate(from, { replace: true })
    }

    const signInBtn = () => {
        setContainerState('container')
    }

    const signUpBtn = () => {
        setContainerState('container active')
    }

    return <>
        <div className='general'>
            <div className={ containerState }>
                <div className='form-container sign-up'>
                    <form>
                        <h1>Присоединяйся к нам</h1>
                        <div className='social-icons'>
                            <Link to='#' className='icon'>
                                <img src={telegram as string} width={30} height={30} alt='telegram'/>
                            </Link>
                            <Link to='#' className='icon'>
                                <img src={youtube as string} width={30} height={30} alt='youtube'/>
                            </Link>
                            <Link to='#' className='icon'>
                                <img src={vk as string} width={30} height={30} alt='vk'/>
                            </Link>
                            <Link to='#' className='icon'>
                                <img src={instagram as string} width={30} height={30} alt='instagram'/>
                            </Link>
                        </div>
                        <span>... еще чуть чуть</span>
                        <input type='text' placeholder='Логин' name='login' />
                        <input type='email' placeholder='Email' name='email' />
                        <input type='password' placeholder='Пароль' name='password' />
                        <button>Зарегистрироваться</button>
                    </form>
                </div>
                <div className='form-container sign-in'>
                    <form onSubmit={ handleSubmit }>
                        <h1>Войди</h1>
                        <div className='social-icons'>
                            <Link to='#' className='icon'>
                                <img src={telegram as string} width={30} height={30} alt='telegram'/>
                            </Link>
                            <Link to='#' className='icon'>
                                <img src={youtube as string} width={30} height={30} alt='youtube'/>
                            </Link>
                            <Link to='#' className='icon'>
                                <img src={vk as string} width={30} height={30} alt='vk'/>
                            </Link>
                            <Link to='#' className='icon'>
                                <img src={instagram as string} width={30} height={30} alt='instagram'/>
                            </Link>
                        </div>
                        <span>... чтобы не упустить важного</span>
                        <input type='text' placeholder='Логин' name='login' />
                        <input type='password' placeholder='Пароль' name='password' />
                        <Link to='#'>Забыли пароль?</Link>
                        <button>
                            { loading ? '...' : 'Войти'}
                        </button>
                    </form>
                </div>
                <div className='toggle-container'>
                    <div className='toggle'>
                        <div className='toggle-panel toggle-left'>
                            <h1>Мы тебя так долго ждали!</h1>
                            <p>Скорее заходи и начинай учиться</p>
                            <button className='hidden' onClick={ signInBtn }>
                                Войти
                            </button>
                        </div>
                        <div className='toggle-panel toggle-right'>
                            <h1>Дорогой друг!</h1>
                            <p>Скорее заходи и продолжай учиться</p>
                            <button className='hidden' onClick={ signUpBtn }>
                                { loading ? '...' : 'Зарегистрироваться'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login