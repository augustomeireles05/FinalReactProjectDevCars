import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../environments'
import axios from 'axios'

import './MyOrder.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Subtittle from '../../components/Subtittle/Subtittle'
// import Button from '../../components/Button/Button'
// import SupportButton from '../../components/Button/SupportButton'
import MainTittle from '../../components/Tittle/MainTittle'

import SchedulingIcon from '../../assets/images/MyOrder/andamento.png'
import Cancelstatusicon from '../../assets/images/MyOrder/cancelado.png'
import Deliveredicon from '../../assets/images/MyOrder/entregue.png'


import Bmw320i from '../../assets/images/MyOrder/bmw-320i.jpg'





function MyOrder() {

    const [orders, setOrders] = useState([])


    // const {id} = useContext(LoginContext)
   
    const id = parseInt(localStorage.getItem('user'))
 


    const getOrders = () => {
        axios.get(`${baseUrl}/placeorder/${id}`)
            .then((response) => {
                setOrders(response.data)
                console.log(response)
            })
    }


    useEffect(() => {
        getOrders()
        // console.log(response.data)
    }, [])


    
    //INÍCIO: TRANSFORMAÇÃO PARA SEPARAÇÃO DE DEZENAS E MILHARES COM PADRÃO BRASILEIRO
    const priceConverted = (number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
    }
    //FIM: TRANSFORMAÇÃO PARA SEPARAÇÃO DE DEZENAS E MILHARES COM PADRÃO BRASILEIRO





    const renderOrders = () => {
        return orders.map((item) => {
            return (

                <div className="row accordion-item mb-3" key={item.id}>
                    <h2 className="accordion-header p-0" id="flush-headingThree">
                        <button className="justify-content-center accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">

                            <div className="col-3">
                                <span className="ms-md-3">#{item.id}</span>
                            </div>





                            <div className="col status-pedido d-flex align-items-center justify-content-center">


                                {item.status == "EM ROTA" ? <img src={SchedulingIcon} alt="em rota" className="figura-status" /> : <img src={Deliveredicon} alt="entregue" className="figura-status" />}

                                


                                <span className="ms-1">{item.status}</span>
                            </div>





                            <div className="col dt-pedido text-sm-center d-none d-md-none d-xl-block d-xxl-block">
                                <span className="ps-5">{item.dataPedido}</span>
                            </div>

                            <div className="col valor-pedido text-end d-none d-md-none d-xl-block d-xxl-block">
                                <span className="text-start">{priceConverted(item.totalPedido)}</span>
                            </div>

                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body px-1">
                            {/* item 1 do pedido 2 */}
                            <div className="row justify-content-between">
                                <div className="col-12 col-sm-12 col-lg-12 text-center mb-4 mb-sm-0 text-sm-center mb-sm-4">
                                    <img src={item.linkImagemVeiculo} alt="MercedesBenz AMG GT63 2020 Branco" className="img-pedido" />
                                </div>

                            </div>

                            <div className="row col-md-12 col-lg-12 justify-content-around ms-0">
                                <div className="col-sm-4 px-1">
                                    <div className="d-flex flex-column">
                                        <span className="titulo-descricao text-center text-sm-center">DESCRIÇÃO ITENS</span>
                                        <span className="descricao text-center">{item.marca} {item.modeloVeiculo}</span>
                                    </div>
                                </div>

                                {/* <div className="col-sm-2">
                                                <div className="d-flex flex-column text-sm-center">
                                                    <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">COD</span>
                                                    <span className="descricao text-center text-sm-center">0234</span>
                                                </div>
                                            </div> */}

                                <div className="col-sm-1 col-md-4 px-1">
                                    <div className="d-flex flex-column text-sm-center">
                                        <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">VALOR DO FRETE</span>
                                        <span className="descricao text-center text-sm-center">{priceConverted(item.valorFrete)}</span>
                                    </div>
                                </div>

                                <div className="col-sm-2 col-md-4 px-1">
                                    <div className="d-flex flex-column text-sm-center">
                                        <span className="titulo-descricao text-center text-sm-center mt-4 mt-sm-0">VALOR</span>
                                        <span className="descricao text-center text-sm-center">{priceConverted(item.valorVeiculo)}</span>
                                    </div>
                                </div>
                            </div>
                            {/* fim do item 1 do pedido 2 */}


                            {/* detalhes de entrega */}
                            <div className="row entrega mt-5">
                                <div className="col-sm-10">
                                    <div className="d-flex flex-column">
                                        <span className="titulo-descricao-endereco ">ENDEREÇO DE ENTREGA</span>
                                        <span className="descricao-endereco">CEP: {item.cep}<br />{item.logradouro} Nº {item.numeroEndereco} - {item.bairro}
                                            ({item.cidade}/{item.estado})</span>
                                    </div>
                                </div>


                                {/* <div className="col-sm">
                                    <div className="d-flex flex-column text-sm-center">
                                        <span className="titulo-descricao-data mt-5 mt-md-4 text-md-start mt-sm-0">DATA DE ENTREGA</span>
                                        <span className="descricao-data text-md-start">25/12/2021</span>
                                    </div>
                                </div> */}
                            </div>
                            {/* fim dos detalhes de entrega */}


                            {/* detalhes de pagamento */}
                            <div className="row pagamento mt-5">
                                <div className="col-sm-10">
                                    <div className="d-flex flex-column">
                                        <span className="titulo-descricao-pgmt text-md-start mt-sm-0">FORMA DE PAGAMENTO</span>
                                        <span className="descricao-pgmt text-md-start">{item.formaPagamento}</span>
                                    </div>
                                </div>

                            </div>
                            {/* fim dos detalhes de pagamento */}



                            {/* total do pedido que só aparecerá em tela de celular */}
                            <div className="row mt-5 d-block d-md-block d-xl-none d-xxl-none">
                                <div className="d-flex text-sm-center justify-content-between">
                                    <span className="titulo-data-pgmt">TOTAL</span>
                                    <span className="data-pgmt fw-bold fs-6">{priceConverted(item.totalPedido)}</span>
                                </div>
                            </div>
                            {/*fim do total do pedido que só aparecerá em tela de celular */}


                            {/* imprimir nf */}
                            {/* <div className="imprimir-nf mt-5 text-end">
                                <Link to={"#"} className="text-decoration-none text-dark p-2 rounded-1 btn-nfe">Download da N-F Eletrônica</Link>
                            </div> */}
                            {/* fim do imprimir nf */}
                        </div>

                    </div>
                </div>



            )
        })
    }






    return (
        <>
            {/* <Button link="/home" name="PRINCIPAL"/>
        <SupportButton link="/home" name="SECUNDARIO"/> */}
            <Header />
            <MainTittle tittle="PÁGINA DE PEDIDOS" />
            <div className="container">
                {/* <div className="row mb-3 mt-4">
                    <h1 className="titulo-pagina pb-3 pt-3 ps-5 text-center w-100">PÁGINA DE PEDIDOS</h1>
                </div> */}


                <div className="row justify-content-center g-5 px-3">
                    {/* inicio do menu lateral */}
                    <div className="col-md-4 flex-row justify-content-center text-center">

                        {/*Navbar*/}
                        <Subtittle menu="MENU" />

                        <Sidebar />
                    </div>
                    {/* fim do menu lateral */}


                    {/* inicio dos cards de pedidos */}
                    <div className="col-md rounded-1 mb-5">

                        <div className="d-flex justify-content-around titulo-menu mb-3 mt-0 pt-0 pb-2">
                            <div className="col-3 text-end text-md-center">
                                <span className="fs-6">PEDIDO</span>
                            </div>

                            <div className="col text-center">
                                <span className="fs-6 me-5 me-md-0">STATUS</span>
                            </div>

                            <div className="col text-center d-none d-md-none d-xl-block d-xxl-block">
                                <span className="fs-6">DATA</span>
                            </div>

                            <div className="col text-center d-none d-md-none d-xl-block d-xxl-block">
                                <span className="fs-6">TOTAL</span>
                            </div>
                        </div>


                        {renderOrders()}


                    </div>
                </div>
                {/* fim dos cards de pedidos */}

            </div>

            <Footer />
        </>
    )
}

export default MyOrder