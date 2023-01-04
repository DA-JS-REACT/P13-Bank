const ErrorMessage = {
    email: " Le format de l'email n'est pas correcte",
    password: 'le mot de passe doit contenir au moins 2 caratères',
}

export const CheckCredentials = (credentials) => {
    let isValid = false
    let error = { email: '', password: '' }
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9-]{2,}[.][A-Z]{2,4}$/gim
    const isValidEmail =
        emailReg.test(credentials.email.trim()) &&
        credentials.email.trim().length > 2

    const isValidPassword = credentials.password.trim().length > 2

    console.log({ email: isValidEmail, password: isValidPassword })
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
