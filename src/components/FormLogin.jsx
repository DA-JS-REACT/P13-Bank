import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectLogged } from '@/_helpers/selectors'
import { userLogin } from '@/_services/login.actions'

/**
 * form to user Login
 * @returns {React.ReactElement}
 */
export const FormLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogged = useSelector(selectLogged)

    const [credentials, setCredentials] = useState({
        email: 'tony@stark.com',
        password: 'password123',
    })

    useEffect(() => {
        if (isLogged.logged) {
            navigate('/user')
        }
    }, [isLogged])

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userLogin(credentials))

        // accountService
        //     .login(credentials)
        //     .then((res) => {
        //         console.log(res.data.body.token)
        //         const token = res.data.body.token
        //         // Sauvegarde du token et envoi vers admin
        //         accountService.saveToken(token)
        //         dispatch(setLogged(token))

        //         navigate('/user')
        //     })
        //     .catch((err) => console.log(err))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="pasword"
                    value={credentials.password}
                    onChange={handleChange}
                />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}

            <Link className="sign-in-button" to="/user">
                Sign In
            </Link>

            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button">Sign In</button>
        </form>
    )
}
