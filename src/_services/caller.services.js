import axios from 'axios'

import { accountService } from './account.services'

// Paramétrage de base d'axios
export const Axios = axios.create({
    baseURL: 'http://localhost:3001/api/v1/user/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use((request) => {
    request.headers.Authorization = 'Bearer ' + accountService.getToken()

    return request
})
