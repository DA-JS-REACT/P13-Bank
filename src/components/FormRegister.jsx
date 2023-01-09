import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '@/_services/user.actions'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '@/_helpers/selectors'
import { Error } from '@/components/Error'
import {
    checkEmail,
    checkFieldText,
    checkPassword,
} from '@/_services/validation'

export const FormRegister = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    // retrieves the name of the html tag
    const [field, setField] = useState()
    // for data recovering in the input field
    const [data, setData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })
    // bool for submit or not the value
    const [isValid, setIsValid] = useState(true)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
        setField(e.target.name)
    }

    if (field) {
        const input = document.querySelector(`input[name="${field}"]`)

        let inputValue = ''

        if (field === 'firstName') {
            inputValue = data.firstName
            checkFieldText(inputValue, input)
        } else if (field === 'lastName') {
            inputValue = data.lastName
            checkFieldText(inputValue, input)
        } else if (field === 'password') {
            inputValue = data.password
            checkPassword(inputValue, input)
        } else if (field === 'email') {
            inputValue = data.email
            checkEmail(inputValue, input)
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
        console.log(isValid)
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        if (user.error != null && isValid) {
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
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName">Lastname</label>
                <input
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                    required
                />
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
            </div>

            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button">Sign In</button>
            {user.error != null && <Error message={user.error.payload} />}
        </form>
    )
}
