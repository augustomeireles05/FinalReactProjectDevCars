import './AboutUs.css';

import React from 'react';

import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import MainTittle from '../../components/Tittle/MainTittle.jsx';

import Empresa from '../../assets/images/AboutUs/empresa.jpg';
import Estoque from '../../assets/images/AboutUs/estoque.jpg';
import Executivo from '../../assets/images/AboutUs/executivo.jpg';
import Helicoptero from '../../assets/images/AboutUs/helicoptero.jpg';



function AboutUs() {

    return (
        <>
            <Header />
            <MainTittle tittle="Sobre Nós" />

            <div className="container">
                {/* A EMPRESA */}
                <div className="container">
                    <div className="row social col-sm-12 col-md-12 col-lg-12">
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <h3 className="texto-sobre-nos title">A Empresa</h3>
                            <p className="texto-sobre-nos">
                                Fundada com o conceito de atender um nicho de mercado de carros exclusivos e top de linha,
                                a DevCar's Automóveis abastecem todo o Brasil com a linha
                                de automóveis multimarcas nacionais e importados, novos e semi-novos
                                e veículos na linha Premium, verificados e certificados com estoque
                                em constante renovação e excluisividade. Oferecem garantia de fábrica
                                de todos os veículos novos.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <img src={Empresa} alt="Empresa" width="100%" />
                        </div>
                    </div>
                </div>
                <hr />

                {/* Nossa Historia */}
                <div className="container">
                    <div className="d-none d-xs-none d-sm-none d-md-flex row social col-sm-12 col-md-12 col-lg-12">
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <img src={Executivo} alt="Executivo" width="100%" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <h3 className="title mt-4">A Nossa História</h3>
                            <p className="texto-sobre-nos">
                                A DevCars surgiu a partir do princípio de que nem sempre o luxuoso deve ser algo impossível de se alcançar, seguindo deste propósito criamos a nossa marca para que pudesse atingir todo e qualquer público que venha a nos conhecer.
                                Teve origem através do Programa QUERO SER DEV 7º Edição, um projeto integrador formado de Desenvolvedores de
                                Sistemas, da RaiaDrogasil
                                <br />
                                Composto por:
                            </p>
                            <p className="texto-sobre-nos">
                                Augusto Meireles, Larissa Bandeira, Lidia Maciel, Guilherme Viana e Wanderson Thiers.
                            </p>
                        </div>
                    </div>
                    <div className="d-md-none d-lg-none row social col-sm-12 col-md-12 col-lg-12">
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <h3 className="title mt-4">A Nossa História</h3>
                            <p className="texto-sobre-nos">
                                A DevCars surgiu a partir do princípio de que nem sempre o luxuoso deve ser algo impossível de se alcançar, seguindo deste propósito criamos a nossa marca para que pudesse atingir todo e qualquer público que venha a nos conhecer.
                                Teve origem através do Programa QUERO SER DEV 7º Edição, um projeto integrador formado de Desenvolvedores de
                                Sistemas, da RaiaDrogasil
                                <br />
                                Composto por:
                            </p>
                            <p className="texto-sobre-nos">
                                Augusto Meireles, Larissa Bandeira, Lidia Maciel, Guilherme Viana e Wanderson Thiers.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <img src={Executivo} alt="Executivo" width="100%" />
                        </div>
                    </div>
                </div>
                <hr />
                {/* Missao */}
                <div className="container">
                    <div className="row social col-sm-12 col-md-12 col-lg-12">
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <h3 className="texto-sobre-nos title mt-4">Missão</h3>
                            <p className="texto-sobre-nos">
                                Ser uma organização, capaz de realizar conexão com o desejo e
                                satisfação do cliente. Onde em cada venda possamos fazer parte
                                do sonho do consumidor, do colaborador e do fornecedor.
                                Proporcionar ao maior número de pessoas uma experiência memorável e excelência em produtos e serviços, sendo referência em gestão do negócio de automóveis.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <img src={Estoque} alt="Estoque" width="100%" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className="d-none d-xs-none d-sm-none d-md-flex row social col-sm-12 col-md-12 col-lg-12">
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <img src={Helicoptero} alt="Helicoptero" width="100%" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <h3 className="title mt-4">Conforto e Praticidade</h3>
                            <p className="texto-sobre-nos" width="100%">
                                A DevCar's disponibiliza de um equipado e sofisticado heliponto,
                                Trazendo maior comodidade e agilidade a nossos clientes
                            </p>
                            <p> Endereço: Avenida Corifeu de Azevedo Marques, 3097 </p>
                            <p> Bairro: Vila Butantã </p>
                            <p> CEP: 05339-900</p>
                            <p> <strong> Latitude: -23.5698526</strong> </p>
                            <p> <strong>Longitude: -46.7413329</strong></p>
                        </div>
                    </div>
                    <div className="d-md-none d-lg-none row social col-sm-12 col-md-12 col-lg-12">
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <h3 className="texto-sobre-nos title mt-4">Conforto e Praticidade</h3>
                            <p className="texto-sobre-nos" width="100%">
                                A DevCar's disponibiliza de um equipado e sofisticado heliponto,
                                Trazendo maior comodidade e agilidade as nossos clientes.
                            </p>
                            <p> Endereço: Avenida Corifeu de Azevedo Marques, 3097 </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <img src={Helicoptero} alt="Helicoptero" width="100%" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 sobre_nos_center">
                            <p> Bairro: Vila Butantã </p>
                            <p> CEP: 05339-900</p>
                            <p> <strong> Latitude: -23.5698526</strong> </p>
                            <p> <strong>Longitude: -46.7413329</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Nossa Historia */}

            <Footer />
        </>
    )
}

export default AboutUs;