import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'

import logo from '../../assets/logo.jpg'

import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { signin } = useAuth()

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault()

        // получаем форму авторизации
        const form = e.target

        // получаем поля из формы авторизации
        const login = form.login.value
        const password = form.password.value
        console.log(login, password)

        // TODO: запрос на back

        const user = true // заполнить поля пользователя
        signin(user, () => navigate(from, { replace: true }))
    }

    return <>
        <img src={ logo } alt='logo'/>
        <form className='form' onSubmit={handleSubmit}>
            <h1 className='title'>ASCorp</h1>
            <h4 className='sub-title'>Knowledge Academy</h4>
            <div className='input'>
                <input type='text' name='login' placeholder='Логин'/>
            </div>
            <div className='input'>
                <input type='password' name='password' placeholder='Пароль'/>
            </div>
            <button className='login-btn' type='submit'>Войти</button>
            <Link to='/forgot-password'>Забыли пароль?</Link>
        </form>
    </>
}

export default Login