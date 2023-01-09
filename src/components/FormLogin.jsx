import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectLogged } from '@/_helpers/selectors'
import { userLogin } from '@/_services/login.actions'
import { checkEmail, checkPassword } from '@/_services/validation'
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

    // for credentials recovering in the input field
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    // bool for submit or not the value
    const [isValid, setIsValid] = useState(true)
    // retrieves the name of the html tag
    const [field, setField] = useState()
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
        setField(e.target.name)
    }

    if (field) {
        const input = document.querySelector(`input[name="${field}"]`)
        let inputValue = ''

        if (field === 'password') {
            inputValue = credentials.password
            checkPassword(inputValue, input)
        } else if (field === 'email') {
            inputValue = credentials.email
            checkEmail(inputValue, input)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

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
    useEffect(() => {
        const formData = document.querySelectorAll('.input-wrapper')
        // parcours tout les FormData pour  trouver si il y a une erreur
        for (let attrError of formData) {
            if (attrError.getAttribute('data-error')) {
                setIsValid(!isValid)
            }
        }
    }, [credentials])

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
