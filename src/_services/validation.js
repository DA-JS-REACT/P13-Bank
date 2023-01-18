/**
 *  array which contains error message
 * @constant
 */
const ErrorMessage = {
    email: " Le format de l'email n'est pas valide",
    password: 'le mot de passe doit contenir au moins 2 caratères',
    fieldLenght: 'au minimun 2 caractères ',
    fieldEmpty: 'ne peut pas être vide',
}
/**
 *  Manage message Error if password and  email are not valid
 * @function
 * @param {object.<{email: string, password: string}>}credentials
 * @returns {object}
 */
export const CheckCredentials = (credentials) => {
    let error = { email: '', password: '' }

    const isValidEmail = checkEmail(credentials.email)
    const isValidPassword = checkPassword(credentials.password)

    // console.log({ email: isValidEmail, password: isValidPassword })
    if (!isValidEmail) {
        error.email = ErrorMessage.email
        return { error }
    }
    if (!isValidPassword) {
        error.password = ErrorMessage.password
        return { error }
    }

    return { error }
}

/**
 * Manage message error
 * @function
 * @param {object.<{firstName:string, lastName:string,email: string, password: string}} data
 * @returns {object}
 */
export const validateRegister = (data) => {
    let error = { email: '', password: '', firstName: '', lastName: '' }

    const isValidEmail = checkEmail(data.email)
    const isValidPassword = checkPassword(data.password)
    const isValidFirsName = checkFieldText(data.firstName)
    const isValidLastName = checkFieldText(data.lastName)

    // console.log({ email: isValidEmail, password: isValidPassword })
    if (!isValidFirsName) {
        error.firstName = ErrorMessage.fieldLenght
        return { error }
    } else if (!isValidLastName) {
        error.lastName = ErrorMessage.fieldLenght
        return { error }
    } else if (!isValidEmail) {
        error.email = ErrorMessage.email
        return { error }
    } else if (!isValidPassword) {
        error.password = ErrorMessage.password
        return { error }
    }

    return { error }
}

/**
 * check email with regex
 * @function
 * @param {string} email - value received from the field
 * @returns {boolean} - true if email matches
 */
const checkEmail = (email) => {
    const emailReg = /^[a-z0-9._%+-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/gim
    const isValidEmail = emailReg.test(email.trim().toLowerCase())

    return isValidEmail
}

/**
 * Check password
 * @function
 * @param {string} password - value received from the field
 * @returns {boolean} - true if password is valid
 */
const checkPassword = (password) => {
    const isValidPassword = password.trim().length >= 2

    return isValidPassword
}

/**
 * check firstName and lastName
 * @function
 * @param {string} fieldValue - value received from the field
 * @param {boolean} - true if firstName or lastName are valid
 */
const checkFieldText = (fieldValue) => {
    const isValidField =
        fieldValue.trim().length >= 2 && fieldValue.trim().length != ''

    return isValidField
}
