import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useAuthState, useProfileState } from '../../store/store'

import './Login.css'

import logo from '../../assets/logo.jpg'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { load } = useAuthState()
    const { loading } = useAuthState()
    const { loadProfile } = useProfileState()

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

    return <>
        <img src={ logo as string } alt='logo'/>
        <form className='form' onSubmit={handleSubmit}>
            <h1 className='title'>ASCorp</h1>
            <h4 className='sub-title'>not just a company</h4>
            <div className='input'>
                <input type='text' name='login' placeholder='Логин'/>
            </div>
            <div className='input'>
                <input type='password' name='password' placeholder='Пароль'/>
            </div>
            <button className='login-btn' type='submit'>
                {
                    loading ? 'Загрузка...' : 'Войти'
                }
            </button>
            <Link to='/forgot-password'>Забыли пароль?</Link>
        </form>
    </>
}

export default Login