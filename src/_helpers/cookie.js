/**
 *  get cookie on the list by name
 * @function
 * @param {string} cookieName name ofthe cookie  ex: email=Tony@stark.com"
 * @returns {string}
 */
export function getCookie(cookieName) {
    let cookie = {}
    document.cookie.split(';').forEach(function (el) {
        let [key, value] = el.split('=')
        cookie[key.trim()] = value
    })
    return cookie[cookieName]
}
/**
 * Create a cookie
 * @param {string} email
 * @param {string} password
 */
export function createCookie(email, password) {
    let date = new Date(Date.now() + 3600000) // 3600000ms = 1 heure
    date = date.toUTCString()
    document.cookie = ` email=${email};path=http://localhost:3000;secure;expires=${date}`
    document.cookie = ` password=${password};path=http://localhost:3000;secure;expires=${date}`
    console.log('cookie')
}
