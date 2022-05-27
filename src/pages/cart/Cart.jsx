import './Cart.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import trash from '../../assets/images/CheckoutOrder/trash.png'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Sidebar from '../../components/Sidebar/Sidebar'
import Subtittle from '../../components/Subtittle/Subtittle'
import React, { useEffect, useContext } from 'react'
import MiniCart from '../../components/Cart/MiniCart'
import CartContext from '../../contexts/cart.provider'
import axios from 'axios'
import { baseUrl } from '../../environments'
import { useState } from 'react'




function Cart() {
    const URL = `${baseUrl}/cart`
    const { getCart, cart, setCart, deleteCart } = useContext(CartContext)
    // const [ cart, setCart ] = useState ([])

    useEffect(() => {
        getCart()
    }, [])


    function CardProduct() {
        return (

            <div className="row col-11 col-md-11 col-lg-12 col-xl-12 align-items-center bg-body rounded-3 shadow justify-content-center py-lg-3 m-auto">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 pt-2 pt-md-0 pt-lg-0 pt-2 pt-md-2 pt-lg-0 pt-xl-0">
                    <img src={cart[11]} className="img-fluid" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">

                    <div className="font-cart">
                        <p className="text-center pt-3 fw-bold m-0">{cart[2]} {cart[3]}</p>
                    </div>
                    <div className="">
                        <p className="texto-alinhado p-2">
                            {cart[12]}
                        </p>
                    </div>
                </div>
                <div className="row col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center p-0 mb-3 mb-md-0 mb-lg-0 mb-3 mb-md-4 mb-lg-0 d-flex align-items-center">

                    <div className="col-8 col-sm-8 col-md-8 col-lg-9 col-xl-9">
                        <p className="text-center m-0 price-style">
                            {priceConverted(cart[8])}
                        </p>
                    </div>
                    {/* Inicio Lixeira */}
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-start ">




                        <button type="button" className="btn px-0 mb-2" title="Excluir" onClick={() => {
                            deleteCart('cart')
                            getCart()
                        }}>
                            <img className="btn" src={trash} width="50" alt="Lixeira" title="Excluir" />
                        </button>



                    </div>

                </div>
            </div>
        )
    }

    //INÍCIO: TRANSFORMAÇÃO PARA SEPARAÇÃO DE DEZENAS E MILHARES COM PADRÃO BRASILEIRO
    const priceConverted = (number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
    }

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





                        {
                            localStorage.getItem('cart')
                                ? <>
                                    {CardProduct()}
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mt-3 d-flex justify-content-center d-md-flex justify-content-md-center">
                                        <div className="col-11 col-md-11 col-lg-12 col-xl-12 d-lg-flex justify-content-lg-end">
                                            <Button link="/checkoutOrder" name="Continuar" />
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="my-5 mx-5 d-flex justify-content-center">
                                        <h1> Garagem vazia </h1>
                                    </div>
                                    <div className="col-11 col-md-11 col-lg-12 col-xl-12 d-lg-flex justify-content-lg-end">
                                        <Button link="/inventory" name="Estoque" />
                                    </div>
                                </>

                        }



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