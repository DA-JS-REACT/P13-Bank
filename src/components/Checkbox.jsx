import React from 'react'
import PropTypes from 'prop-types'

export const Checkbox = ({ checked, onChange }) => {
    return (
        <div className="input-remember">
            <input
                type="checkbox"
                name="checkbox"
                value={checked}
                id="remember-me"
                onChange={onChange}
            />
            <label htmlFor="remember-me">Remember me</label>
        </div>
    )
}
Checkbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
}

Checkbox.defaultProps = {
    checked: false,
}
