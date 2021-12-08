import axios from 'axios'

export const api = axios.create({

    baseURL: '/api' // É url padrão onde o axios vai buscar os dados, URL padrão do back end

})

