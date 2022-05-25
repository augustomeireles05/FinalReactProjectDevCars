import axios from 'axios'

const baseUrl = 'http://localhost:8080'

const api = axios.create({
    baseApi: 'http://localhost:8080/auth'
})

export const createSession = async (email, password) => {
    return await api.post("http://localhost:8080/auth", {email, password})
    // .catch((error) => 
    //     console.log( error)
    // );

}

export { baseUrl, api }
