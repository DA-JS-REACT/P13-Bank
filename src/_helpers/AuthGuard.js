import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const AuthGuard = ({ children }) => {
    const logged = false

    if (!logged) {
        return <Navigate to="/sign-in" />
    }
    return children
}

AuthGuard.propTypes = {
    children: PropTypes.element,
}
