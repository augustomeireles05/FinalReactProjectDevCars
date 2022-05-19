import './Cart.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Sidebar from '../../components/Sidebar/Sidebar'
import Subtittle from '../../components/Subtittle/Subtittle'



// import imgCarrinho from '../../assets/images/Cart/bmw-x5.jpg'
import React, { useEffect, useContext } from 'react'

import MiniCart from '../../components/Cart/MiniCart'

import CartContext from '../../contexts/cart.provider'
import axios from 'axios'

import { baseUrl } from '../../environments'




function Cart() {


    const URL = `${baseUrl}/cardData`
    const { getCart, cart } = useContext(CartContext) 


    useEffect(() => {
        getCart()
    }, [])

    // const deleteCart = (id) => {
    //     axios.delete(`${URL}/${id}`)
    //     .then((response) => {
    //         getCart()
    //     })
    // }


    return (
        <>

            <Header />

            <MiniCart />

            {/* BEGIN TITULO PAGINA */}

            {/* BEGIN CONTAINER PRINCIPAL */}
            <main className="background-grey mt-2 mb-0">

                <div className="row col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11 m-auto">
                    {/* Início Container Lado esquerdo */}
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        {/* Inicio subtitulo lado esquerdo */}
                        <div className="">
                            <Subtittle menu="Menu" />
                        </div>
                        {/* Fim subtitulo lado esquerdo */}

                        {/* Inicio Sidebar */}
                        <div className="">
                            <Sidebar />
                        </div>
                        {/* Fim Sidebar */}
                    </div>
                    {/* Fim Container Lado esquerdo */}


                    {/* Início Container Lado direito */}
                    <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 px-0">

                        {/* Inicio subtitulo lado direito */}
                        <div className="">
                            <Subtittle menu="Carrinho de compra" />
                        </div>
                        {/* Fim subtitulo lado direito */}




                        {/* Inicio Card lado direito */}
                        <div className="row col-11 col-md-11 col-lg-12 col-xl-12 align-items-center bg-body rounded-3 shadow justify-content-center py-lg-3 m-auto">
                            {/* Inicio Div Imagem */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 pt-2 pt-md-0 pt-lg-0 pt-2 pt-md-2 pt-lg-0 pt-xl-0">
                                <img src={cart[10]} className="img-fluid" />
                            </div>
                            {/* Fim Div Imagem */}

                            {/* Inicio Div Nome + Resumo */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                {/* Inicio Nome */}
                                <div className="font-cart">
                                    <p className="text-center pt-3 fw-bold m-0">{cart[1]} {cart[2]}</p>
                                </div>
                                {/* Fim Div Nome */}

                                {/* Inicio Resumo */}
                                <div className="">
                                    <p className="texto-alinhado p-2">
                                        {cart[11]}
                                    </p>
                                </div>
                                {/* Fim Div Resumo */}
                            </div>
                            {/* Fim Div Nome + Resumo */}

                            {/* Inicio Div Preco + Lixo */}
                            <div className="row col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center p-0 mb-3 mb-md-0 mb-lg-0 mb-3 mb-md-4 mb-lg-0">
                                {/* Inicio Preço */}
                                <div className="col-9 col-sm-9 col-md-9 col-lg-10 col-xl-10">
                                    <p className="text-center m-0 price-style">R$ {cart[7]}</p>
                                </div>
                                {/* Fim Div Preço */}

                                {/* Inicio Lixeira */}
                                <div className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2">
                                <button 
                                    // onClick={() => {deleteCart(cart[0])}}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                        className="bi bi-trash trash-position text-danger" viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fillRule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                                </div>
                                {/* Fim Div Lixeira */}

                            </div>
                            {/* Fim Div Preco + Lixo */}
                        </div>
                        {/* Fim Card lado direito */}

                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mt-3 d-flex justify-content-center d-md-flex justify-content-md-center">
                            <div className="col-11 col-md-11 col-lg-12 col-xl-12 d-lg-flex justify-content-lg-end">
                                <Button link="/checkoutOrder" name="Continuar" />
                            </div>
                        </div>

                    </div>
                    {/* Fim Container Lado direito    */}
                </div>


            </main>
            {/* END CONTAINER PRINCIPAL */}


            < Footer />
        </>

    )
}

export default Cart