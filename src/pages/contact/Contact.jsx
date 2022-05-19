import React from 'react'
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
                                    <Subtittle menu="LOJA"/>
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
                                            <img src={Localizacao} className="me-1" alt="Localização"/>
                                            <a href="https://goo.gl/maps/xkbNkwPFwL2yeffG9" className="links-externos">Avenida Corifeu de Azevedo Marques, 3097</a>
                                        </div>
                                        <div className="textodois">
                                            <img src={Email} className="me-1" alt="Email"/>
                                            <a href="mailto:vendas@devcars.com?subject=Compras" className="links-externos"> vendas@devcars.com</a>
                                        </div>
                                        <div className="textotres">
                                            <img src={Telefone} className="me-1" alt="Telefone"/>
                                            <a href="tel:+551137695678" className="links-externos"> (11) 3769-5678</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-card">
                                    {/* Formulário */}

                                    <div className="formulario">
                                        <p>FORMULÁRIO DE CONTATO</p>

                                        <div className="col-md-12 signin-form-contact">

                                            <Label label="Nome" htmlFor="nome"/>
                                            <Input type="text" aria-label="nome" id="nome"/>
                                            
                                
                                            <Label label="Email" htmlFor="email"/>
                                            <Input type="email" aria-label="email" id="email"/>

                                        
                                            <Label label="Telefone" htmlFor="telefone"/>
                                            <Input type="text" aria-label="telefone" id="telefone"/>
                                                
                                        
                                            <Label label="Assunto" htmlFor="assunto"/>
                                            <Input type="text" aria-label="assunto" id="assunto"/>
                                                

                                            <Label label="Mensagem" htmlFor="mensagem"/>
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
                                 <Subtittle subtitulo="DÚVIDAS FREQUENTES"/>
                                 {/* CARD PERGUNTAS  */}
                                <div className="main-card">
                                    <div className="question-perguntas">


                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        <span className="fonte-pagina-contato">O veículo já possui revisão?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse "
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p className="text-ac-body"><strong>Sim. Todos os nossos veículos passam por revisão.</strong> Nós da DevCars sempre nos preocupamos em garantir um padrão de qualidade. Prestando todos os cuidados necessários para que o seu veículo sempre esteja nos padrões.</p>
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
                                                        <p className="text-ac-body"><strong>Para ser considerado um carro de luxo, o veículo deve ter recursos de alto nível que vão além das necessidades médias.</strong> O termo luxo é usado para categorizar veículos que estão equipados com melhores capacidades de desempenho, interiores luxuosos e todos os últimos recursos de segurança e tecnologia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        <span className="fonte-pagina-contato">Os veículos são originais de fábrica?</span>

                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body fonte-pagina-contato">
                                                    <p className="text-ac-body"><strong>A DevCars trabalha apenas com veículos originais.</strong>Trabalhamos com marcas selecionacionas, que saem direto da fábrica para o nosso estoque, onde passam novamente por checagens e revisões periódicas.</p>
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
                                                    <p className="text-ac-body"><strong>Sim. Assim que o veículo é adquirido, a DevCars o assegura durante 12 meses (doze meses)</strong> após o término da garantia de fábrica, que pode variar de acordo com a marca. Para mais detalhes entre em contato com um de nossos representantes.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header w-100" id="headingFive">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        <span className="fonte-pagina-contato">Posso personalizar ou modificar o veículo?</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse"
                                                    aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    <p className="text-ac-body"><strong>No momento ainda não trabalhamos com a personalização e/ou alterações que não sejam os padrões originais dos veículos.</strong> Assim, mantemos a autenticidade do produto e entregamos a qualidade da marca. </p>
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
                                                    <p className="text-ac-body"><strong>A DevCars possui diversos parceiros na hora de fretar o seu veículo.</strong> Eles são retirados de nosso armazém por caminhões cegonha, mantendo os cuidados para que cheguem até seu destino em perfeitas condições.</p>
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