import React from 'react'
import './OrderResume.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainTittle from '../../components/Tittle/MainTittle.jsx';
import Subtittle from '../../components/Subtittle/Subtittle'
// import MainTittle from '../../components/Tittle/MainTittle'

import Awardicon from '../../assets/images/OrderDetails/certificado-de-garantia.png'
import Checkedicon from '../../assets/images/OrderDetails/checked.png'


function OrderResume() {
    return (
        <>

            <Header />
            <MainTittle tittle="RESUMO DO PEDIDO"/>
            <div className="container">
{/*                 
                <MainTittle tittle="RESUMO DO PEDIDO" /> */}

                    <div className="row gx-5 gy-3 px-3">
                        {/* inicio do menu lateral */}
                        <div className="col-md-4 flex-row justify-content-center text-center">
                            <Subtittle menu="MENU" />

                            <Sidebar />
                        </div>

                        {/* inicio da confirmação do pedido */}
                        <div className="col-md-8 rounded-1 mb-5">
                            <Subtittle subtitulo="PEDIDO" />
                            <div className="bg-white pb-2 p-4">
                                <div className="d-flex pedido-concluido justify-content-center flex-column mb-4">

                                    {/* <h4 className="titulo-principal text-center pb-2 mb-3 fs-3">STATUS DO PEDIDO</h4> */}


                                    <img src={Awardicon} className="img-certificado" alt="pedido concluido" />

                                    <div className="sucesso d-flex justify-content-center align-items-center m-3">
                                        <h2 className="text-center titulo-sucesso-compra mb-0 me-1">PEDIDO REALIZADO COM SUCESSO!</h2>
                                        <img src={Checkedicon} alt="sucesso" className="img-sucess" />
                                    </div>

                                    <p className="text-center numero-pedido">NÚMERO DO PEDIDO: 004742 </p>
                                </div>

                                <div className="detalhes-pedido p-2">
                                    <div className="detalhes-pedido d-flex justify-content-center align-items-center mb-3">
                                        <h2 className="titulo-detalhes-pedido me-2 mb-0">DETALHES DO PEDIDO</h2>
                                    </div>

                                    <div className="row resumo-produto mb-3">
                                        <h4 className="col-12 mb-2 pt-2">PRODUTO:</h4>
                                        <div className="produtos d-flex justify-content-start">
                                            <div className="produto col-12">
                                                <p className="fs-6">PORSCHE 911 CARRERA 2021</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row resumo-pgmt mb-3">
                                        <h3 className="mb-2 pt-2">FORMA DE PAGAMENTO:</h3>
                                        <div className="d-flex flex-column flex-lg-row  justify-content-between align-items-start w-100">
                                            <p className="text-start fs-6">CARTÃO DE CRÉDITO</p>
                                            <p className="text-center fs-6">9486.XXXX.XXXX.5030</p>
                                            <p className="text-end fs-6">3X DE R$ 133.383,33</p>
                                        </div>
                                    </div>

                                    <div className="row resumo-endereco mb-3">
                                        <h3 className="mb-2 pt-2">ENDEREÇO DE ENTREGA:</h3>
                                        <p className="fs-6"> RUA PRAÇA ROBERTO PEDRO GOMES Nº 101 MORUMBI SÃO PAULO/SP</p>
                                        <p>CEP: 12332-032</p>
                                    </div>

                                    <div className="row data-pedido mb-3">
                                        <h3 className="col-6 pt-2">DATA DO PEDIDO</h3>
                                        <p className="col-6 text-end pt-2 fs-6">01/02/2022</p>
                                    </div>

                                    <div className="row valor-total mb-5">
                                        <h3 className="col-6 pt-2">VALOR TOTAL</h3>
                                        <p className="col-6 text-end pt-2 fs-6">R$400.149,99</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                {/* fim da confirmação do pedido */}
                
            </div>

            <Footer />
        </>
    )
}

export default OrderResume