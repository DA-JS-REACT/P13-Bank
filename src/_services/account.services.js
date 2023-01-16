/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getToken = () => {
    return localStorage.getItem('userToken')
}

// Déclaration des serivces pour import
export const accountService = {
    getToken,
}
