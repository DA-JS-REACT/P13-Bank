/**
 *
 * @param {function} state  for user Login
 * @returns {object}
 */
export const selectLogged = (state) => state.auth
/**
 *
 * @param {function} state  for user profile
 * @returns  {object}
 */
export const selectUser = (state) => state.user
