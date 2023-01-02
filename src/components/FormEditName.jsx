import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { editUserName, getUser } from '../_services/user.actions'
/**
 * @component
 * @prop {string} firstName
 * @prop {string} lastName
 * @prop {function} setToggleEdit
 * @returns {React.ReactElement}
 */
export function FormEditName({ firstName, lastName, setToggleEdit }) {
    const [edit, setEdit] = useState({
        firstName: firstName,
        lastName: lastName,
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        console.log(edit)
        e.preventDefault()
        dispatch(editUserName(edit))
        setToggleEdit(false)
        dispatch(getUser())
    }
    return (
        <form onSubmit={handleSubmit} className="form-edit">
            <div className="input-group">
                <input
                    className="input-group__field"
                    type="text"
                    name="firstName"
                    value={edit.firstName}
                    onChange={handleChange}
                />
                <input
                    className="input-group__field"
                    type="text"
                    name="lastName"
                    value={edit.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="button-group">
                <input
                    className="button-group__field"
                    type="submit"
                    value="Save"
                />
                <button
                    className="button-group__field"
                    onClick={() => setToggleEdit(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

FormEditName.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    setToggleEdit: PropTypes.func.isRequired,
}
