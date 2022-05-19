import React from 'react'
import './Sidebar.css'

import MenuImage from '../../assets/images/SchedulingDetails/botao-de-menu.png'

function ButtonTrigger() {
    return (
        <>
            <div className="navbar-toggler d-md-none collapsed w-100 mt-4 bg-white navbar-toggler-style d-flex "
                type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu" aria-expanded="false"
                aria-label="Toggle navigation">
                <div className="navbar-toggler-icon text-center me-2 ">
                    <img src={MenuImage} alt="imagem de menu hamburguer" className="menu-image-size" />
                </div>

                <div className="navbar-toggler-icon text-center">
                    <span>MENU</span>
                </div>

            </div>

        </>
    )
}
export default ButtonTrigger
