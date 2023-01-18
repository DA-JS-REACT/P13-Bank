import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '@/_services/user.actions'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '@/_helpers/selectors'
import { Error } from '@/components/Error'

import { validateRegister } from '../_services/validation'
import { isEmpty } from '@/_helpers/Empty'

export const FormRegister = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(selectUser)

    // for data recovering in the input field
    const [data, setData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })
    const [messageError, setMessageError] = useState({})

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })

        // check credentials for validation
        const noValidField = validateRegister(data)
        // if no valid , inject message error
        setMessageError({
            email: noValidField.error.email,
            password: noValidField.error.password,
            firstName: noValidField.error.firstName,
            lastName: noValidField.error.lastName,
        })
    }

    // reset messageError if the error messages have disappeared
    if (
        messageError.email === '' &&
        messageError.password === '' &&
        messageError.firstName === '' &&
        messageError.lastName === ''
    ) {
        setMessageError({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isEmpty(messageError)) {
            console.log(data)
            dispatch(userRegister(data))
        }
        if (user.error != null) {
            navigate('/login', { replace: true })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div
                className="input-wrapper"
                data-error={`${
                    !isEmpty(messageError.firstName) &&
                    data.firstName.length > 0
                        ? messageError.firstName
                        : ''
                }`}
                data-error-visible={`${
                    isEmpty(messageError.firstName) ? 'false' : 'true'
                }`}
            >
                <label htmlFor="firstName">Firstname</label>
                <input
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div
                className="input-wrapper"
                data-error={`${
                    !isEmpty(messageError.lastName) && data.lastName.length > 0
                        ? messageError.lastName
                        : ''
                }`}
                data-error-visible={`${
                    !isEmpty(messageError.lastName) && data.lastName.length > 0
                        ? 'true'
                        : 'false'
                }`}
            >
                <label htmlFor="lastName">Lastname</label>
                <input
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div
                className="input-wrapper"
                data-error={`${
                    !isEmpty(messageError.email) && data.email.length > 0
                        ? messageError.email
                        : ''
                }`}
                data-error-visible={`${
                    !isEmpty(messageError.email) && data.email.length > 0
                        ? 'true'
                        : 'false'
                }`}
            >
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    value={data.email.toLowerCase()}
                    onChange={handleChange}
                    required
                />
            </div>
            <div
                className="input-wrapper"
                data-error={`${
                    !isEmpty(messageError.password) && data.password.length > 0
                        ? messageError.password
                        : ''
                }`}
                data-error-visible={`${
                    !isEmpty(messageError.password) && data.password.length > 0
                        ? 'true'
                        : 'false'
                }`}
            >
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button">Sign In</button>
            {user.error != null && <Error message={user.error.payload} />}
        </form>
    )
}
