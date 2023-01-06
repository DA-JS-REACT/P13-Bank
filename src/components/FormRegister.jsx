import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '@/_services/user.actions'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '@/_helpers/selectors'
import { Error } from '@/components/Error'
import { validateRegister } from '../_services/validation'

export const FormRegister = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const [data, setData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    console.log(data)
    const { isValid, error } = validateRegister({ data })
    console.log({ isvalid: isValid, error: error })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user.error === null) {
            dispatch(userRegister(data))
            navigate('/login', { replace: true })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="firstName">Firstname</label>
                <input
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                    required
                />
                {/* {validationError.password && (
                    <span className="error">{validationError.password}</span>
                )} */}
            </div>
            <div
                className="input-wrapper"
                // data-error="oups"
                // data-error-visible="true"
            >
                <label htmlFor="lastName">Lastname</label>
                <input
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                    required
                />
                {/* {validationError.password && (
                    <span className="error">{validationError.password}</span>
                )} */}
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    value={data.email.toLowerCase()}
                    onChange={handleChange}
                    required
                />
                {/* {validationError.email && (
                    <span className="error">{validationError.email}</span>
                )} */}
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                />
                {/* {validationError.password && (
                    <span className="error">{validationError.password}</span>
                )} */}
            </div>

            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button">Sign In</button>
            {user.error != null && <Error message={user.error.payload} />}
        </form>
    )
}
