import React, { useState, createContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { api, createSession } from '../environments'

export const LoginContext = createContext({})

export function LoginProvider(props) {
    const [user, setUser] = useState(null)
    const history = useHistory()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const logged = localStorage.getItem('user')

        //caso o abaixo não funcione, minuto 1:13:50
        logged ? setUser(JSON.parse(logged)) : setUser(null)

        setLoading(false)

    }, [])



    const login = async (email, password) => {

        const response = await createSession(email, password)
        console.log("login auth: ", response)


        //consumir a API para criar uma sessão (ela deverá retornar além do token, id e email)
        const loggedUser = response.data.user
        const token = response.data.token

        localStorage.setItem("user", JSON.stringify(loggedUser))
        localStorage.setItem("token", token)


        api.defaults.headers.Authorization = `Bearer ${token}`


        setUser(loggedUser)
        history.push("/myData")


    }

    const logout = () => {
        console.log("logout")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null
        setUser(null)
        history.push("/")
    }



    return (
        <LoginContext.Provider value={{ authenticaded: !!user, user, login, logout, loading }}>
            {props.children}
        </LoginContext.Provider>
    )

}

// export { LoginProvider }
// export default LoginContext
