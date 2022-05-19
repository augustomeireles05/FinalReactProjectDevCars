import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'


function SidebarItem(props) {
    return (
        <>
            <li className="nav-item">
                <Link to={props.link} className="nav-link link-solution button-menu-lateral sidebar-font border-button-sidebar-menu w-100 p-2 fs-6">
                    <span>{props.item}</span>
                </Link>
            </li>
        </>
    )
}

export default SidebarItem