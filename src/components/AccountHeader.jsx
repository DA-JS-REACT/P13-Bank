import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormEditName } from '@/components/FormEditName'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo } from '@/_helpers/selectors'
import { editUserName, getUser } from '@/_services/user.actions'

/**
 *  Banner for profile page
 * @component
 * @param {string} fisrtName
 * @param {string} lasttName
 * @returns {React.ReactElement}
 */
export const AccountHeader = ({ firstName, lastName }) => {
    const user = useSelector(selectUserInfo)

    const [isToggleEdit, setIsToggleEdit] = useState(false)
    const [edit, setEdit] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editUserName(edit))
        setIsToggleEdit(false)
        dispatch(getUser())
    }

    // updates with new values after the change
    useEffect(() => {
        setEdit({
            ...edit,
            firstName: user.firstName,
            lastName: user.lastName,
        })
    }, [user])

    return (
        <div className="AccountHeader">
            {!isToggleEdit ? (
                <h1>
                    Welcome back
                    <br />
                    {firstName + ' ' + lastName}!
                </h1>
            ) : (
                <h1>Welcome back</h1>
            )}

            {!isToggleEdit ? (
                <button
                    onClick={() => setIsToggleEdit(!isToggleEdit)}
                    className="edit-button"
                >
                    Edit Name
                </button>
            ) : (
                <FormEditName
                    user={user}
                    edit={edit}
                    setIsToggleEdit={setIsToggleEdit}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    )
}

AccountHeader.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
}
