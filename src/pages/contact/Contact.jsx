import React, { useState } from 'react'
import './Contact.css'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Input/Label';
import MainTittle from '../../components/Tittle/MainTittle.jsx';
import Subtittle from '../../components/Subtittle/Subtittle';

import DevCars from '../../assets/images/Contact/card-contato.jpeg';
import Email from '../../assets/images/Contact/e-mail.png';
import Telefone from '../../assets/images/Contact/telefone-celular 1.svg';
import Localizacao from '../../assets/images/Contact/localizacao 1.svg';


function Contact() {

    const [email, setEmail] = useState(localStorage.getItem('email'))
    const [nome, setNome] = useState(localStorage.getItem('nome'))




    return (
        <>
            <Header />

            <section>
                <MainTittle tittle="Contato" />


                <article className="page-content">
                    {/* duas colunas  */}
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="column">
                                {/* LOJA  */}
                                {/* <div className="title"> */}
                                <Subtittle menu="LOJA" />
                                {/* </div> */}
                                {/* CARROUSEL  */}
                                <div className="main-card">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={DevCars} alt=""></img>
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="carousel-caption d-none d-md-block"></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="geral">
                                        <div className="textoum">
                                            <img src={Localizacao} className="me-1" alt="Localiza????o" />
                                            <a href="https://goo.gl/maps/xkbNkwPFwL2yeffG9" className="links-externos">Avenida Corifeu de Azevedo Marques, 3097</a>
                                        </div>
                                        <div className="textodois">
                                            <img src={Email} className="me-1" alt="Email" />
                                            <a href="mailto:vendas@devcars.com?subject=Compras" className="links-externos"> vendas@devcars.com</a>
                                        </div>
                                        <div className="textotres">
                                            <img src={Telefone} className="me-1" alt="Telefone" />
                                            <a href="tel:+551137695678" className="links-externos"> (11) 3769-5678</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-card">
                                    {/* Formul??rio */}

                                    <div className="formulario">
                                        <p>FORMUL??RIO DE CONTATO</p>

                                        <div className="col-md-12 signin-form-contact">

                                            <Label label="Nome" htmlFor="nome" />
                                            <Input type="text" aria-label="nome" id="nome"
                                                value={nome}
                                                onChange={event => {setNome(event.target.value)}}
                                            />


                                            <Label label="Email" htmlFor="email" />
                                            <Input type="email" aria-label="email" id="email"
                                                value={email}
                                                onChange={event => {setEmail(event.target.value)}}
                                           
                                            />


                                            <Label label="Telefone" htmlFor="telefone" />
                                            <Input type="text" aria-label="telefone" id="telefone" />


                                            <Label label="Assunto" htmlFor="assunto" />
                                            <Input type="text" aria-label="assunto" id="assunto" />


                                            <Label label="Mensagem" htmlFor="mensagem" />
                                            <textarea className="form-control m-0" rows="6" type="text" id="mensagem" aria-label="mensagem"></textarea>


                                            <div className="d-grid gap-2 col-12 mx-auto mt-4">
                                                <Button link="/" name="ENVIAR" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="column">
                                {/* DUVIDAS  */}
                                <Subtittle subtitulo="D??VIDAS FREQUENTES" />
                                {/* CARD PERGUNTAS  */}
                                <div className="main-card">
                                    <div className="question-perguntas">


                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        <span className="fonte-pagina-contato">O ve??culo j?? possui revis??o?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse "
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p className="text-ac-body"><strong>Sim. Todos os nossos ve??culos passam por revis??o.</strong> N??s da DevCars sempre nos preocupamos em garantir um padr??o de qualidade. Prestando todos os cuidados necess??rios para que o seu ve??culo sempre esteja nos padr??es.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        <span className="fonte-pagina-contato">O que faz um carro ser de luxo?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p className="text-ac-body"><strong>Para ser considerado um carro de luxo, o ve??culo deve ter recursos de alto n??vel que v??o al??m das necessidades m??dias.</strong> O termo luxo ?? usado para categorizar ve??culos que est??o equipados com melhores capacidades de desempenho, interiores luxuosos e todos os ??ltimos recursos de seguran??a e tecnologia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        <span className="fonte-pagina-contato">Os ve??culos s??o originais de f??brica?</span>

                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body fonte-pagina-contato">
                                                        <p className="text-ac-body"><strong>A DevCars trabalha apenas com ve??culos originais.</strong>Trabalhamos com marcas selecionacionas, que saem direto da f??brica para o nosso estoque, onde passam novamente por checagens e revis??es peri??dicas.</p>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingFour">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        <span className="fonte-pagina-contato">O carro possui garantia?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse"
                                                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p className="text-ac-body"><strong>Sim. Assim que o ve??culo ?? adquirido, a DevCars o assegura durante 12 meses (doze meses)</strong> ap??s o t??rmino da garantia de f??brica, que pode variar de acordo com a marca. Para mais detalhes entre em contato com um de nossos representantes.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingFive">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        <span className="fonte-pagina-contato">Posso personalizar ou modificar o ve??culo?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse"
                                                    aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p className="text-ac-body"><strong>No momento ainda n??o trabalhamos com a personaliza????o e/ou altera????es que n??o sejam os padr??es originais dos ve??culos.</strong> Assim, mantemos a autenticidade do produto e entregamos a qualidade da marca. </p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingSix">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        <span className="fonte-pagina-contato">Como funciona a modalidade de entrega?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseSix" className="accordion-collapse collapse"
                                                    aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p className="text-ac-body"><strong>A DevCars possui diversos parceiros na hora de fretar o seu ve??culo.</strong> Eles s??o retirados de nosso armaz??m por caminh??es cegonha, mantendo os cuidados para que cheguem at?? seu destino em perfeitas condi????es.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Contact