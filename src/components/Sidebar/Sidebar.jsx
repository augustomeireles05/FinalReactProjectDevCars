import React from 'react'
import './Sidebar.css'

import ButtonTrigger from '../../components/Sidebar/ButtonTrigger'
import SidebarItem from '../../components/Sidebar/SidebarItem'

function Sidebar() {
    return (

        <>

            <div className="col-md-12 flex-row justify-content-center align-items-start text-center mt-0 px-0">

                <ButtonTrigger />
                <nav id="sidebarMenu"
                    className=" col-12 d-md-block bg-light sidebar collapse btn-group-vertical background-container-subject bg-white mt-0 mw-100">
                    <div className="position-sticky w-100">
                        <ul className="nav flex-column">
                            <SidebarItem link="/myData" item="MEUS DADOS" />

                            <SidebarItem link="/myOrder" item="MEUS PEDIDOS" />

                            <SidebarItem link="/cart" item="CARRINHO DE COMPRA" />

                            <SidebarItem link="/wishList" item="LISTA DE DESEJOS" />

                            <SidebarItem link="/" item="SAIR" />
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Sidebar