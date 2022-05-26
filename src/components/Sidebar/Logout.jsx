import React from 'react'
import './Sidebar.css'



function Logout(props) {


    const { logout, authenticaded } = useContext (LoginContext)

    const handleLogout = () =>{
        logout()
    }



    return (
        <>
            <li className="nav-item">
                <button onClick={props.onClick} className="nav-link link-solution button-menu-lateral sidebar-font border-button-sidebar-menu w-100 p-2 fs-6">
                    <span>{props.item}</span>
                </button>
            </li>
        </>
    )

}

export default Logout