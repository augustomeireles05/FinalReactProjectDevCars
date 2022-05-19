import './SchedulingDetails.css'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import Subtittle from '../../components/Subtittle/Subtittle'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainTittle from '../../components/Tittle/MainTittle'

import Awardicon from '../../assets/images/OrderDetails/certificado-de-garantia.png'
import Checkedicon from '../../assets/images/OrderDetails/checked.png'
import PrintNfe from '../../assets/images/OrderDetails/printer.png'

function schedulingDetails() {
    return (
        <>

            <Header />

            <MainTittle tittle="RESUMO DO AGENDAMENTO "/>
            <div className="container">
                
                <div className="row gx-5 gy-3 px-3">
                    {/* inicio do menu lateral */}
                    <div className="col-md-4 flex-row justify-content-center text-center">
                        <Subtittle menu="MENU" />

                        <Sidebar />
                    </div>
                    {/* fim do menu lateral */}


                    {/* inicio da confirmação do pedido */}
                    <div className="col-md-8 mb-5">

                        <Subtittle subtitulo="AGENDAMENTO" />
                        <div className="bg-white p-4 pb-2">
                            <div className="d-flex pedido-concluido justify-content-center flex-column mb-4">

                                <img src={Awardicon} className="img-certificado" alt="pedido concluido" />

                                <div className="sucesso d-flex justify-content-center align-items-center m-3">
                                    <h2 className="text-center titulo-sucesso-agendamento mb-0 me-1">AGENDAMENTO REALIZADO COM SUCESSO!</h2>
                                    <img src={Checkedicon} alt="sucesso" className="img-sucess" />
                                </div>

                                <p className="text-center numero-pedido">PROTOCOLO DE AGENDAMENTO: 00991 </p>
                            </div>

                            <div className="detalhes-pedido">
                                <div className="detalhes-pedido d-flex justify-content-center align-items-center mb-3">
                                    <h2 className="titulo-detalhes-agendamento me-2 mb-0">DETALHES DO AGENDAMENTO</h2>
                                    <Link to={"/"}>
                                        <img src={PrintNfe} alt="imprimir resumo do pedido"
                                            className="print" />
                                    </Link>
                                </div>

                                <div className="row resumo-produto mb-3">
                                    <h3 className="col-12 mb-2 pt-2 subtitulo">PRODUTO</h3>
                                    <div className="produtos d-flex justify-content-around">
                                        <div className="produto col-7">
                                            <p className="nome-produto1">BUGATTI CHIRON</p>
                                        </div>

                                        <div className="qtd col-5">
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="row data-agendamento mb-3">
                                    <h3 className="subtitulo col-6 pt-2">DATA DO AGENDAMENTO</h3>
                                    <p className="col-6 text-end pt-2">29/03/2022</p>
                                </div>

                                <div className="row valor-total mb-5">
                                    <h3 className="subtitulo col-6 pt-2">VALOR DO BEM</h3>
                                    <p className="col-6 text-end pt-2">R$ 22.000.000,00</p>
                                </div>

                                <div className="row valor-total mb-5">
                                    <h3 className="subtitulo col-6 pt-2">TAXA DE AGENDAMENTO</h3>
                                    <p className="col-6 text-end pt-2">0,1 %</p>
                                </div>

                                <div className="row valor-total mb-5">
                                    <h3 className="subtitulo col-6 pt-2">VALOR TOTAL</h3>
                                    <p className="col-6 text-end pt-2">R$ 22.000,00</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fim da confirmação do pedido */}

            < Footer />

        </>
    )
}

export default schedulingDetails

