/**
 *  array which contains error message
 * @constant
 */
const ErrorMessage = {
    email: " Le format de l'email n'est pas correcte",
    password: 'le mot de passe doit contenir au moins 2 caratères',
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
 * check with regex email
 * @param {string} email
 * @returns {boolean}
 */
export const checkEmail = (email) => {
    const emailReg = /^[a-z0-9._%+-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/gim
    const isValidEmail = emailReg.test(email.trim().toLowerCase())

    return isValidEmail
}
/**
 * check lenght password
 * @param {string} password
 * @returns {boolean}
 */
const checkPassword = (password) => {
    const isValidPassword = password.trim().length >= 1

    return isValidPassword
}
