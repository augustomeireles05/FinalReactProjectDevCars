import axios from 'axios'

export const api = axios.create({
    baseApi: 'http://localhost:8080'
})

export const createSession = async (emailCliente, senhaCliente) => {
    return await api.post("http://localhost:8080/auth", {emailCliente, senhaCliente})
    .catch((error) => 
        console.log( error)
    );

}
