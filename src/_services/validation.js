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
 *  check password and  email
 * @function
 * @param {object.<{email: string, password: string}>}credentials
 * @returns {object}
 */
export const CheckCredentials = (credentials) => {
    let isValid = false
    let error = { email: '', password: '' }

    const isValidEmail = checkEmail(credentials.email)
    const isValidPassword = checkPassword(credentials.password)

    // console.log({ email: isValidEmail, password: isValidPassword })
    if (isValidEmail && isValidPassword) {
        isValid = true
    }
    if (isValidEmail && isValidPassword) {
        isValid = true
    } else if (!isValidEmail && isValidPassword) {
        error.email = ErrorMessage.email
    } else if (isValidEmail && !isValidPassword) {
        error.password = ErrorMessage.password
    } else if (!isValidEmail && !isValidPassword) {
        error = ErrorMessage
    }

    return { isValid, error }
}
/**
 * Manage message error
 * @function
 * @param {boolean} isValid
 * @param {HtmlElement} inputElement - field
 * @param {string} texterror - message  when field isn't valid
 */
const validateRegister = (isValid, inputElement, texterror) => {
    const divElement = inputElement.closest('.input-wrapper')

    if (!isValid) {
        divElement.setAttribute('data-error', texterror)
        divElement.setAttribute('data-error-visible', true)
    } else {
        divElement.removeAttribute('data-error')
        divElement.removeAttribute('data-error-visible')
    }
}

/**
 * check with regex email
 * @function
 * @param {string} email - value received from the field
 * @param {HtmlElement} inputElement - field
 */
export const checkEmail = (email, inputElement) => {
    const emailReg = /^[a-z0-9._%+-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/gim
    const isValidEmail = emailReg.test(email.trim().toLowerCase())

    const texterror = ErrorMessage.email

    validateRegister(isValidEmail, inputElement, texterror)
}
/**
 * Check password
 * @function
 * @param {string} password - value received from the field
 * @param {HtmlElement} inputElement - field
 */
export const checkPassword = (password, inputElement) => {
    const isValidPassword =
        password.trim().length >= 2 && password.trim().length != ''
    const texterror = ErrorMessage.password

    validateRegister(isValidPassword, inputElement, texterror)
}

/**
 * check firstName and lastName
 * @function
 * @param {string} fieldValue - value received from the field
 * @param {HtmlElement} inputElement - field
 */
export const checkFieldText = (fieldValue, inputElement) => {
    const isValidField =
        fieldValue.trim().length >= 2 && fieldValue.trim().length != ''

    const texterror = ErrorMessage.fieldLenght

    validateRegister(isValidField, inputElement, texterror)
}
