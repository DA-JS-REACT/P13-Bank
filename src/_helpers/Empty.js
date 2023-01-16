/**
 * which allows to check if a string or an object is empty
 * @function
 * @param {string || Object} value
 * @returns {boolean}
 */
export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    )
}
