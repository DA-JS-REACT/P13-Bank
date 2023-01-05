import PropTypes from 'prop-types'

/**
 * @component
 * @prop {object.<{firstName: string, lastName: string}>} edit
 * @prop {function} setIsToggleEdit
 * @prop {function} handleSubmit
 * @prop {function} handleChange
 * @returns {React.ReactElement}
 */
export function FormEditName({
    edit,
    setIsToggleEdit,
    handleSubmit,
    handleChange,
}) {
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
                    onClick={() => setIsToggleEdit(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

FormEditName.propTypes = {
    setIsToggleEdit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    edit: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    }).isRequired,
}
