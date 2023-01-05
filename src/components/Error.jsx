import React from 'react'
import PropTypes from 'prop-types'
/**
 * Display a eror message
 * @param {string} message - error message which depends on the status of the request
 * @returns
 */
export const Error = ({ message }) => {
    const messageErrorAPI = {
        Network: 'Network Error',
        BadRequest: 'Bad Request',
    }

    return (
        <div className="error">
            <span className="error-title">{message}</span>
            {message === messageErrorAPI.Network && (
                <p className="error-message">
                    Une erreur s'est produite , veuillez réessayer
                    ultérieurement
                </p>
            )}
        </div>
    )
}

Error.propTypes = {
    message: PropTypes.string,
}
