import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectLogged } from '@/_helpers/selectors'
import { userLogin } from '@/_services/login.actions'
import { CheckCredentials } from '@/_services/validation'
import { Error } from '@/components/Error'
import { Checkbox } from '@/components//Checkbox'
import { getCookie, createCookie } from '@/_helpers/cookie'

/**
 * form to user Login
 * @returns {React.ReactElement}
 */
export const FormLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogged = useSelector(selectLogged)

    // const testEmail = 'tony@stark.com'
    // const testpassword = 'password123'

    // for credentials recovering in the input field
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    // for error message if no validate
    const [validationError, setValidationError] = useState({
        errorEmail: '',
        errorPassword: '',
    })
    // for checkBox
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        if (isLogged.logged) {
            navigate('/user', { replace: true })
        }
    }, [isLogged])

    const handleChange = (e) => {
        // stock credentials
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
        // change the state to true or false
        if (e.target.name === 'checkbox') {
            setIsChecked(!isChecked)
        }
        // recover the error message
        const { error } = CheckCredentials(credentials)
        setValidationError(error)
    }
    // // create a cookie
    // if (isChecked) {
    //     document.cookie = ` email=${credentials.email};path=http://localhost:3000;secure`
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { isValid } = CheckCredentials(credentials)

        console.log({ isvalid: isValid })
        if (isValid) {
            dispatch(userLogin(credentials))
            // create a cookie && isLogged.error != null
            if (isChecked && isLogged.error === null) {
                createCookie(credentials.email, credentials.password)
                //     document.cookie = ` email=${credentials.email};path=http://localhost:3000;secure`
                //     document.cookie = ` password=${credentials.password};path=http://localhost:3000;secure`
            }
        }
    }

    // injects value of cookie in input element
    useEffect(() => {
        const inputEmail = document.querySelector('input[name="email"]')
        const inputPassword = document.querySelector('input[name="password"]')

        if (getCookie('email') != null) {
            inputEmail.value = getCookie('email')
            inputPassword.value = getCookie('password')
            // update state credentials
            setCredentials({
                ...credentials,
                email: getCookie('email'),
                password: getCookie('password'),
            })
        }
    }, [])
    console.log(isChecked)

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">E-mail</label>
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

            <Checkbox checked={isChecked} onChange={handleChange} />
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}

            {/* <Link className="sign-in-button" to="/user">
                Sign In
            </Link> */}

            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button">Connect</button>
            {isLogged.error != null && (
                <Error message={isLogged.error.payload} />
            )}
        </form>
    )
}
