import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectLogged } from '@/_helpers/selectors'
import { userLogin } from '@/_services/login.actions'
import { Error } from '@/components/Error'
import { Checkbox } from '@/components//Checkbox'
import { getCookie, createCookie } from '@/_helpers/cookie'
import { CheckCredentials } from '@/_services/validation'
import { isEmpty } from '@/_helpers/Empty'

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
    const [messageError, setMessageError] = useState({})
    // // bool for submit or not the value
    // const [isValid, setIsValid] = useState(true)
    // // retrieves the name of the html tag
    // const [fieldParent, setFieldParent] = useState()
    // const [field, setField] = useState()
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

        // check credentials for validation
        const noValidField = CheckCredentials(credentials)
        // if no valid , inject message error
        setMessageError({
            email: noValidField.error.email,
            password: noValidField.error.password,
        })
    }

    // reset messageError if the error messages have disappeared
    if (messageError.email === '' && messageError.password === '') {
        console.log('yes')
        setMessageError({})
    }

    if (isEmpty(messageError)) {
        console.log('empty', messageError)
    } else {
        console.log('Notempty', messageError)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isEmpty(messageError)) {
            dispatch(userLogin(credentials))
            // create a cookie && isLogged.error != null
            if (isChecked && isLogged.error === null) {
                createCookie(credentials.email, credentials.password)
            }
        }
    }

    // injects value of cookie in input element
    useEffect(() => {
        if (getCookie('email') != null) {
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
            <div
                className="input-wrapper"
                data-error={`${
                    !isEmpty(messageError.email) ? messageError.email : ''
                }`}
                data-error-visible={`${
                    isEmpty(messageError.email) ? 'false' : 'true'
                }`}
            >
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div
                className="input-wrapper"
                data-error={`${
                    !isEmpty(messageError.password) ? messageError.password : ''
                }`}
                data-error-visible={`${
                    isEmpty(messageError.password) ? 'false' : 'true'
                }`}
            >
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

            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button">Connect</button>
            {isLogged.error != null && (
                <Error message={isLogged.error.payload} />
            )}
        </form>
    )
}
