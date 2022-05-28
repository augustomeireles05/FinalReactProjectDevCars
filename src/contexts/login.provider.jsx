import React, { useState, createContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { api, createSession } from '../envinromentsLogin'
import axios from 'axios'



export const LoginContext = createContext({})


export function LoginProvider(props) {
    const [user, setUser] = useState(null)
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [userName, setUserName] = useState('')
    const [id, setId] = useState('')





    useEffect(() => {
        const logged = localStorage.getItem('user')

        logged ? setUser(JSON.parse(logged)) : setUser(null)

        setLoading(false)

    }, [])



    const login = async (email, password) => {



        try {


            const response = await createSession(email, password)

            const loggedUser = response.data.id
            const token = response.data.token
            const nome = response.data.nome

            localStorage.setItem("user", JSON.stringify(loggedUser))
            localStorage.setItem("token", token)
            localStorage.setItem("nome", nome)
            localStorage.setItem("email", email)

            setUserName(nome)
            setId(localStorage.getItem('user'))

     
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setUser(loggedUser)
            history.push("/")

            console.log("token:", token)
            console.log("login auth: ", response)
            console.log("nome: ", nome)
            console.log("id: ", loggedUser)


        } catch (erro) {

            console.log("erro: ", erro)

            //    alert("erro ao logoar")

        }






    }

    const logout = () => {
        console.log("logout")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        localStorage.removeItem("nome")
        localStorage.removeItem("email")
        delete axios.defaults.headers.common['Authorization']
        setUser(null)
        history.push("/")
    }



    return (
        <LoginContext.Provider value={{ authenticaded: !!user, user, login, logout, loading, userName, id }}>
            {props.children}
        </LoginContext.Provider>
    )

}

// export { LoginProvider }
// export default LoginContext