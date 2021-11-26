import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/login/loginSlice'

const Login = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(process.env.REACT_APP_API_URL)
        dispatch(loginUser(data))
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email"
                onChange={handleChange} value={data.email} 
                />
                <input type="password" name="password" placeholder="password"
                onChange={handleChange} value={data.password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
