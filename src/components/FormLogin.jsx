import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectLogged } from '@/_helpers/selectors'
import { userLogin } from '@/_services/login.actions'
import { CheckCredentials } from '../_services/validation'
import { Error } from './Error'

/**
 * form to user Login
 * @returns {React.ReactElement}
 */
export const FormLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogged = useSelector(selectLogged)
    console.log(isLogged)
    const [validationError, setValidationError] = useState({
        errorEmail: '',
        errorPassword: '',
    })
    const [credentials, setCredentials] = useState({
        email: 'tony@stark.com',
        password: 'password123',
    })

    useEffect(() => {
        if (isLogged.logged) {
            navigate('/user', { replace: true })
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
        const { isValid, error } = CheckCredentials(credentials)
        setValidationError(error)
        console.log({ isvalid: isValid, error: error })
        if (isValid) {
            dispatch(userLogin(credentials))
        }
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
                    required
                />
                {validationError.email && (
                    <span className="error">{validationError.email}</span>
                )}
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                {validationError.password && (
                    <span className="error">{validationError.password}</span>
                )}
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}

            {/* <Link className="sign-in-button" to="/user">
                Sign In
            </Link> */}

            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button">Sign In</button>
            {isLogged.error != null && (
                <Error message={isLogged.error.payload} />
            )}
        </form>
    )
}
