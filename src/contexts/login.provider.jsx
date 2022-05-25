import React, { useState, createContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const LoginContext = createContext({})

export function LoginProvider (props) {
    const [user, setUser] = useState(null)
    const history = useHistory()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const logged = localStorage.getItem('user')

        //caso o abaixo não funcione, minuto 1:13:50
        logged ? setUser(JSON.parse(logged)): setUser(null)

        setLoading(false)

    }, [])



    const login = (email, password) => {
        console.log("login auth: ", { email, password })


        //consumir a API para criar uma sessão (ela deverá retornar além do token, id e email)
        const loggedUser = {
            id: "123", 
            email
        }

        localStorage.setItem("user", JSON.stringify(loggedUser))


        if(password === "secret"){
            setUser(loggedUser)
            history.push("/myData")
        } else{
            return(
                <div className="bg-danger text-light">Usuário ou senha inválido</div>
            )
        }

       
    }

    const logout = () => {
        console.log("logout")
        localStorage.removeItem("user")
        setUser(null)
        history.push("/")
    }



    return (
        <LoginContext.Provider value={{authenticaded: !!user, user, login, logout, loading}}>
            {props.children}
        </LoginContext.Provider>
    )

}

// export { LoginProvider }
// export default LoginContext
