import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormEditName } from './FormEditName'
/**
 *  Banner for profile page
 * @component
 * @param {string} fisrtName
 * @param {string} lasttName
 * @returns {React.ReactElement}
 */
export const AccountHeader = ({ firstName, lastName }) => {
    const [toggleEdit, setToggleEdit] = useState(false)

    return (
        <div className="AccountHeader">
            {!toggleEdit ? (
                <h1>
                    Welcome back
                    <br />
                    {firstName + ' ' + lastName}!
                </h1>
            ) : (
                <h1>Welcome back</h1>
            )}

            {!toggleEdit ? (
                <button
                    onClick={() => setToggleEdit(!toggleEdit)}
                    className="edit-button"
                >
                    Edit Name
                </button>
            ) : (
                <FormEditName
                    firstName={firstName}
                    lastName={lastName}
                    setToggleEdit={setToggleEdit}
                />
            )}
        </div>
    )
}

AccountHeader.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
}
