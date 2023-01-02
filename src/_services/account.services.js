import { Axios } from './caller.services'

/**
 * Connexion vers l'API
 * @param {object} credentials
 * @returns {Promise}
 */
const login = (credentials) => {
    return Axios.post('/login', credentials)
}

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token
 */
const saveToken = (token) => {
    localStorage.setItem('token', token)
}

/**
 * Suppression du token du localStorage
 */
const logout = () => {
    localStorage.removeItem('token')
}

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
const isLogged = () => {
    const token = localStorage.getItem('userToken')
    return !!token
}

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getToken = () => {
    return localStorage.getItem('userToken')
}

// Déclaration des serivces pour import
export const accountService = {
    login,

    saveToken,
    logout,
    isLogged,
    getToken,
}
