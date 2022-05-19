import './Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SearchFilter from '../../components/SearchFilter/SearchFilter'

import { Link } from 'react-router-dom';

import LogoDevCars from '../../assets/images/Inventory/logo-rev01.jpeg'


import Capa1 from '../../assets/images/Home/Koenigsegg_Gemera.jpg'
import Capa2 from '../../assets/images/Home/ferarri-monza.jpg'

import BugattichironBanner from '../../assets/images/Home/bugatti-chiron-banner.png'
import LamborghiniAventadorBanner from '../../assets/images/Home/Lamborghini-aventador-banner.png'


import LogomarcaAstonMartin from '../../assets/images/Home/aston-martin.png'
import LogomarcaAudi from '../../assets/images/Home/audi.png'
import LogomarcaBMW from '../../assets/images/Home/bmw.png'
import LogomarcaBugatti from '../../assets/images/Home/bugatti.png'
import LogomarcaCrysler from '../../assets/images/Home/chrysler.png'
import LogomarcaFerrari from '../../assets/images/Home/ferrari-logo.png'
import LogomarcaFord from '../../assets/images/Home/ford.png'
import LogomarcaJaguar from '../../assets/images/Home/jaguar.png'
import LogomarcaLamborghini from '../../assets/images/Home/lamborghini.png'
import LogomarcaMclaren from '../../assets/images/Home/Mclaren.png'
import LogomarcaMercedes from '../../assets/images/Home/mercedes.png'
import LogomarcaOpel from '../../assets/images/Home/opel.png'
import LogomarcaPagani from '../../assets/images/Home/pagani.png'
import LogomarcaRollsRoyce from '../../assets/images/Home/rolls-royce.png'
import LogomarcaSubaru from '../../assets/images/Home/subaru.png'
import LogomarcaVolvo from '../../assets/images/Home/volvo.png'


import MercedesBenzAMGF12016 from '../../assets/images/Inventory/Mercedes-BenzAMG-F1-2016.jpg'
import BugattiChiron from '../../assets/images/Inventory/BugattiChiron.jpg'
import LamborghiniHuracan from '../../assets/images/Inventory/LamborghiniHuracan.jpg'

import ModalMercedesBenzAMGF12016 from '../../assets/images/Inventory/Mercedes-BenzAMG-F1-2016.jpg'


import VideoF1 from '../../assets/videos/F1.mp4'

import SSCTuatara from '../../assets/images/Home/SSC Tuatara.jpg'
import Button from '../../components/Button/Button.jsx'
import SupportButton from '../../components/Button/SupportButton';



function Home() {
    return (
        <>
            <Header />
            <section>
                <div className="row">
                    <div className="col-12">
                        <div id="carousel-hipercarros" className="carousel slide carousel-dark carousel-hipercarros background-color-black"
                            data-bs-ride="carousel-hipercarros">
                            <div className="carousel-indicators">
                                <button type="button carousel-button-hover" data-bs-target="#carousel-hipercarros" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button carousel-button-hover" data-bs-target="#carousel-hipercarros" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button carousel-button-hover" data-bs-target="#carousel-hipercarros" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                                <button type="button carousel-button-hover" data-bs-target="#carousel-hipercarros" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="3000">
                                    <img src={Capa1} className="d-block w-100" alt="Capa1"></img>
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="3000">
                                    <img src={BugattichironBanner} className="d-block w-100 stf2" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="3000">
                                    <img src={LamborghiniAventadorBanner} className="d-block w-100" alt="..." width="100%" />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>

                            </div>
                            <button className="carousel-control-prev carousel-button-hover" type="button" data-bs-target="#carousel-hipercarros"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-button-hover" type="button" data-bs-target="#carousel-hipercarros"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="carousel-marcas" className="carousel slide logo_marcas" data-bs-ride="carousel-marcas">

                    <div className="row ">
                        <div className="col-12 ">
                            <div id="carousel-marcas" className="carousel slide logo_marcas" data-bs-ride="carousel-marcas">
                                <div className="carousel-inner">
                                    <div className="carousel-item active logo-centralizado" data-bs-interval="3000">
                                        <Link to="inventory"className="" > 
                                            <img className="icons-marcas ms-2 me-4" src={LogomarcaAstonMartin} height="50px" alt="Carrossel"/>
                                        </Link>
                                        <Link to="inventory"className=""> 
                                            <img className="icons-marcas  me-4" src={LogomarcaAudi} height="50px" alt="Carrossel" />
                                        </Link>    
                                        <Link href="BMW" to="inventory"className=""> 
                                            <img className="icons-marcas  me-4" src={LogomarcaBMW} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className=""> 
                                            <img className="icons-marcas  me-4" src={LogomarcaBugatti} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" > 
                                            <img className="icons-marcas  me-4" src={LogomarcaCrysler} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" > 
                                            <img className="icons-marcas  me-4" src={LogomarcaFerrari} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" > 
                                            <img className="icons-marcas  me-4" src={LogomarcaFord} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" > 
                                            <img className="icons-marcas  me-4" src={LogomarcaJaguar} height="50px" alt="Carrossel" />
                                        </Link>
                                    </div>
                                    <div className="carousel-item fundo-marcas logo-centralizado2  logo-centralizado" data-bs-interval="3000">
                                        <Link to="inventory"className="" >
                                            <img className="icons-marcas ms-3 me-4" src={LogomarcaLamborghini} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaMclaren} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaMercedes} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaOpel} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaPagani} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaRollsRoyce} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaSubaru} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory"className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaVolvo} height="50px" alt="Carrossel" />
                                        </Link>

                                    </div>
                                </div>
                                <button className="carousel-control-prev carousel-button-hover" type="button" data-bs-target="#carousel-marcas"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next carousel-button-hover" type="button" data-bs-target="#carousel-marcas"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                <SearchFilter />
            </section>






            <div className="row ">
                <div className="row linhaDestaque">
                    <p> DESTAQUES</p>
                </div>

                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false"
                    data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center mx-3">
                                {/* card 1 */}
                                <div className="col text-center btn" type="button" data-bs-toggle="modal"
                                    data-bs-target="#modal-produto-1">
                                    {/* link entre Modal e Card */}
                                    <div className="text-decoration-none">
                                        <div className="card h-100 mb-5">
                                            <img src={MercedesBenzAMGF12016} className="card-img" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title card-title-height">Mercedes AMG F1</h5>
                                                <p className="card-text text-center"><strong>R$19.000.000,00</strong></p>
                                                {/* <button className="btn mt-3 ms-0 btn_buscar" role="button">DETALHES</button> */}
                                                <Button link="#modal-produto-1" name="DETALHES" />
                                            </div>
                                        </div>
                                    </div>
                                </div>







                                {/* Modal */}
                                <div className="modal fade " id="modal-produto-1" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    {/* link entre Modal e Card */}
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content cores-modal">

                                            <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1 ml-auto">
                                               
                                                <div className="col-2">
                                                
                                                </div> <h5 className="">Mercedes AMG F1 </h5>
                                                <button type="button"
                                                    className="btn-close btn-modal-close fecharmodal  "
                                                    data-bs-dismiss="modal" aria-label="Close">
                                                </button>
                                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">                                                
                                                
                                                </div>
                                            </div>

                                            
                                            
                                            <div className="modal-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-5 modal-mobily">
                                                            <p> Vídeo 360° meramente ilustrativo</p>
                                                             {/*<video> className="img-modal" controns autoplay playbackRate=0.1;
                                                                style="max-width: 102%; padding-top: 5px;">
                                                                <source src="./videos/F1.mp4" type="video/mp4">
                                                                Your browser does not support the video tag.
                                                            </video> 
                                                            */}
                                                            <img src={ModalMercedesBenzAMGF12016}
                                                                className="card-img img-modal" alt="...">

                                                            </img>
                                                        </div>

                                                        <div className="col-12 col-lg-7 modal-mobily2">
                                                            <h3 className="info-gerais1">Ficha Técnica</h3>
                                                            <ul className="lista-modal info-gerais2 linhas-modal">
                                                                <li>
                                                                    <span className="detalhes-info">COR:</span>
                                                                    <span className="detalhes-info">Prata</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span className="detalhes-info">KM:</span>
                                                                    <span className="detalhes-info">31.106</span>
                                                                </li>
                                                                <li>
                                                                    <span className="detalhes-info">CAMBIO:</span>
                                                                    <span className="detalhes-info">PDK</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span className="detalhes-info">POTENCIA:</span>
                                                                    <span className="detalhes-info">350 cv.</span>
                                                                </li>
                                                                <li>
                                                                    <span className="detalhes-info">VALOR (R$):</span>
                                                                    <span className="detalhes-info">R$19.000.000,00</span>
                                                                </li>
                                                            </ul>
                                                            <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                            <p className="alinhamento_paragrafo  info-gerais2 mt-3 pe-2 ps-2">Cambio PDK de 8
                                                                marchas e dupla embreagem, tração integral,
                                                                modos E,
                                                                Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                                controle de chassi 4D, suspensão pneumática, pacote Sport
                                                                Chrono, escapamento com seletor de ronco, carregador
                                                                universal Porsche AC com mala de transporte e suporte
                                                                de parede básico, chave Keyless, interior em couro
                                                                caramelo com acabamento em fibra de carbono, Black
                                                                Piano e alumínio, teto revestido em alcantara, painel
                                                                de instrumentos em TFT, ar condicionado digital Quad
                                                                Zone, soleiras e acabamentos iluminados, cortinas
                                                                laterais e traseira elétricas, teto solar duplo,
                                                                portas Soft Close, porta malas elétrico, aerofólio
                                                                retrátil.
                                                            </p>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row col-12">
                                                                <div className="col-6">
                                                                    <div id="carouselExampleControls " className="carousel slide carouselExampleControls"
                                                                        data-bs-ride="carousel">
                                                                        <div
                                                                            className="carousel-inner carosel-modal  row-cols-1 row-cols-md-3 g-4 justify-content-center mt-4">
                                                                            <div className="carousel-item active">

                                                                                <img src={ModalMercedesBenzAMGF12016}
                                                                                    className="d-block w-100" alt="..." width="5%"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={ModalMercedesBenzAMGF12016}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={ModalMercedesBenzAMGF12016}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={ModalMercedesBenzAMGF12016}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={ModalMercedesBenzAMGF12016}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                        </div>
                                                                        <button className="carousel-control-prev carousel-button-hover carousel-button-hover" type="button"
                                                                            data-bs-target="#carouselExampleControls"
                                                                            data-bs-slide="prev">
                                                                            <span className="carousel-control-prev-icon"
                                                                                aria-hidden="true"></span>
                                                                            <span className="visually-hidden">Previous</span>
                                                                        </button>
                                                                        <button className="carousel-control-next carousel-button-hover" type="button"
                                                                            data-bs-target="#carouselExampleControls"
                                                                            data-bs-slide="next">
                                                                            <span className="carousel-control-next-icon"
                                                                                aria-hidden="true"></span>
                                                                            <span className="visually-hidden">Next</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-center mt-4 col-12 ">
                                                        <SupportButton link="/checkoutScheduling" name="Agendar Visita" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="modal-footer modalfooter">
                                                <div className="row">
                                                    <div className="col-10 modal-mobily3 text-center mb-3">
                                                        <img className="logo-modal" src={LogoDevCars} alt=""></img>
                                                    </div>
                                                    <div className="col-1 modal-mobily3">

                                                        {/* <button type="button"
                                                            className="btn btn-secondary btn-modal-footer"><Link to="/checkoutScheduling" className="nav-link text-black">Agendar
                                                                visita </Link></button> */}
                                                        {/* <SupportButton link="/checkoutScheduling" name="AGENDAR VISITA" />

                                                    </div> */}
                                                {/* </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                {/* fim do card 1 */}


                                {/* card 2 */}
                                <div className="col text-center btn" type="button" data-bs-toggle="modal"
                                    data-bs-target="#modal-produto-2">
                                    {/* link entre Modal e Card */}
                                    <div href="#" className="text-decoration-none">
                                        <div className="card h-100 mb-5">
                                            <img src={BugattiChiron} className="card-img" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title card-title-height">Bugatti Chiron</h5>
                                                <p className="card-text text-center"><strong> R$ 21.000.000,00 </strong></p>
                                                {/* <button className="btn mt-3 btn_buscar ms-0" role="button">DETALHES</button> */}
                                                <Button link="#modal-produto-2" name="DETALHES" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal */}
                                <div className="modal fade " id="modal-produto-2" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    {/* link entre Modal e Card */}
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content cores-modal">
                                            <div className="modal-header cores-modal">
                                            <div className="col-2">
                                                
                                                </div>
                                                <h5 className="modal-title" id="exampleModalLabel">BUGATTI CHIRON
                                                </h5>
                                                <button type="button" className="btn-close btn-modal-close" data-bs-dismiss="modal"
                                                    aria-label="Close">

                                                </button>
                                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">                                                
                                                
                                                </div>
                                            </div>
                                            <div className="modal-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-5 modal-mobily">
                                                            <p> Vídeo 360° meramente ilustrativo</p>
                                                            {/* <video className="img-modal" controns autoplay playbackRate=0.1;
                                                        style="max-width: 102%; padding-top: 5px;">
                                                        <source src="./videos/Bugatti Chiron.mp4" type="video/mp4">
                                                        Your browser does not support the video tag.
                                                    </video> */}

                                                            <img src={BugattiChiron}
                                                                className="card-img img-modal" alt="..."></img>
                                                        </div>

                                                        <div className="col-12 col-lg-7">
                                                            <h3 className="info-gerais1">Ficha Técnica</h3>
                                                            <ul className="lista-modal info-gerais2  linhas-modal">
                                                                <li>
                                                                    <span className="detalhes-info">COR:</span>
                                                                    <span className="detalhes-info">Azul</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span className="detalhes-info">KM:</span>
                                                                    <span className="detalhes-info">18.106</span>
                                                                </li>
                                                                <li>
                                                                    <span className="detalhes-info">CAMBIO:</span>
                                                                    <span className="detalhes-info text-end">Automatico 7 velocidades</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span className="detalhes-info">POTENCIA:</span>
                                                                    <span className="detalhes-info">150 cv</span>
                                                                </li>
                                                                <li>
                                                                    <span className="detalhes-info">VALOR (R$):</span>
                                                                    <span className="detalhes-info">21.000.000,00</span>
                                                                </li>
                                                            </ul>
                                                            <h3 className=" info-gerais">INFORMAÇÕES GERAIS</h3>
                                                            <p className="alinhamento_paragrafo  info-gerais2  mt-3">Cambio PDK de 8
                                                                marchas e dupla embreagem, tração integral,
                                                                modos E,
                                                                Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                                controle de chassi 4D, suspensão pneumática, pacote Sport
                                                                Chrono, escapamento com seletor de ronco, carregador
                                                                universal Porsche AC com mala de transporte e suporte
                                                                de parede básico, chave Keyless, interior em couro
                                                                caramelo com acabamento em fibra de carbono, Black
                                                                Piano e alumínio, teto revestido em alcantara, painel
                                                                de instrumentos em TFT, ar condicionado digital Quad
                                                                Zone, soleiras e acabamentos iluminados, cortinas
                                                                laterais e traseira elétricas, teto solar duplo,
                                                                portas Soft Close, porta malas elétrico, aerofólio
                                                                retrátil.</p>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row col-12">
                                                                <div className="col-6">
                                                                    <div id="carouselExampleControls" className="carousel slide carouselExampleControls">
                                                                        <div className="carousel-inner carosel-modal">
                                                                            <div className="carousel-item active">
                                                                                <img src={BugattiChiron}
                                                                                    className="d-block w-100" alt="..." width="5%"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={BugattiChiron}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={BugattiChiron}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={BugattiChiron}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={BugattiChiron}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                        </div>
                                                                        <button className="carousel-control-prev carousel-button-hover" type="button"
                                                                            data-bs-target="#carouselExampleControls"
                                                                            data-bs-slide="prev">
                                                                            <span className="carousel-control-prev-icon"
                                                                                aria-hidden="true"></span>
                                                                            <span className="visually-hidden">Previous</span>
                                                                        </button>
                                                                        <button className="carousel-control-next carousel-button-hover" type="button"
                                                                            data-bs-target="#carouselExampleControls"
                                                                            data-bs-slide="next">
                                                                            <span className="carousel-control-next-icon"
                                                                                aria-hidden="true"></span>
                                                                            <span className="visually-hidden">Next</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="align-self-center mt-4 col-12 ">
                                                        <SupportButton link="/checkoutScheduling" name="Agendar Visita" />
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* Fim Modal */}
                                {/* fim do card 2 */}

                                {/* card 3 */}
                                <div className="col text-center btn" type="button" data-bs-toggle="modal"
                                    data-bs-target="#modal-produto-3">
                                    {/* link entre Modal e Card */}
                                    
                                    <div href="#" className="text-decoration-none">
                                        <div className="card h-100 mb-5">
                                            <img src={LamborghiniHuracan} className="card-img" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title card-title-height">Lamborghini Huracan </h5>
                                                <p className="card-text text-center"><strong>R$4.300.000,00</strong></p>
                                                {/* <button className="btn mt-3 btn_buscar ms-0" role="button">DETALHES</button> */}
                                                <Button link="#modal-produto-3" name="DETALHES" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal */}
                                <div className="modal fade " id="modal-produto-3" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    {/* link entre Modal e Card */}
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content cores-modal">
                                            
                                            <div className="modal-header cores-modal">
                                            <div className="col-2">

                                            </div>
                                                <h5 className="modal-title" id="exampleModalLabel">LAMBORGHINI HURACAN </h5>
                                                <button type="button" className="btn-close btn-modal-close" data-bs-dismiss="modal"
                                                    aria-label="Close">

                                                </button>
                                                <div className="modal-header cores-modal modal-mobily5 justify-content-center mt-1">                                                
                                                
                                                </div>
                                            </div>
                                            <div className="modal-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-5 modal-mobily">
                                                            <p> Vídeo 360° meramente ilustrativo</p>
                                                            {/* <video className="img-modal" controns autoplay playbackRate="0.1" ;
                                                        style="max-width: 102%; padding-top: 5px;">
                                                        <source src="./videos/URACAN.mp4" type="video/mp4">
                                                        Your browser does not support the video tag.
                                                    </video> */}

                                                            <img src={LamborghiniHuracan}
                                                                className="card-img img-modal" alt="..."></img>
                                                        </div>

                                                        <div className="col-12 col-lg-7">
                                                            <h3 className="info-gerais1">Ficha Técnica</h3>
                                                            <ul className="lista-modal info-gerais2  linhas-modal">
                                                                <li>
                                                                    <span className="detalhes-info">COR:</span>
                                                                    <span className="detalhes-info">Preto</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span className="detalhes-info">KM:</span>
                                                                    <span className="detalhes-info">18.106</span>
                                                                </li>
                                                                <li>
                                                                    <span className="detalhes-info">CAMBIO:</span>
                                                                    <span className="detalhes-info text-end">Automatico 7 velocidades</span>
                                                                </li>
                                                                <li className="info-gerais-linhas">
                                                                    <span className="detalhes-info">POTENCIA:</span>
                                                                    <span className="detalhes-info">150 cv</span>
                                                                </li>
                                                                <li>
                                                                    <span className="detalhes-info">VALOR (R$):</span>
                                                                    <span className="detalhes-info">4.300.000,00</span>
                                                                </li>
                                                            </ul>

                                                            <h3 className="info-gerais">INFORMAÇÕES GERAIS</h3>
                                                            <p className="alinhamento_paragrafo  mt-3">Cambio PDK de 8 marchas e dupla embreagem, tração integral,
                                                                modos E,
                                                                Híbrido, Sport e Sport Plus, eixo traseiro direcional,
                                                                controle de chassi 4D, suspensão pneumática, pacote Sport
                                                                Chrono, escapamento com seletor de ronco, carregador
                                                                universal Porsche AC com mala de transporte e suporte
                                                                de parede básico, chave Keyless, interior em couro
                                                                caramelo com acabamento em fibra de carbono, Black
                                                                Piano e alumínio, teto revestido em alcantara, painel
                                                                de instrumentos em TFT, ar condicionado digital Quad
                                                                Zone, soleiras e acabamentos iluminados, cortinas
                                                                laterais e traseira elétricas, teto solar duplo,
                                                                portas Soft Close, porta malas elétrico, aerofólio
                                                                retrátil.</p>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row col-12">
                                                                <div className="col-6">
                                                                    <div id="carouselExampleControls" className="carousel slide carouselExampleControls">
                                                                        <div className="carousel-inner carosel-modal">
                                                                            <div className="carousel-item active">
                                                                                <img src={LamborghiniHuracan}
                                                                                    className="d-block w-100" alt="..." width="5%">
                                                                                </img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={LamborghiniHuracan}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={LamborghiniHuracan}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={LamborghiniHuracan}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                            <div className="carousel-item">
                                                                                <img src={LamborghiniHuracan}
                                                                                    className="d-block w-100" alt="10px"></img>
                                                                            </div>
                                                                        </div>
                                                                        <button className="carousel-control-prev carousel-button-hover" type="button"
                                                                            data-bs-target="#carouselExampleControls"
                                                                            data-bs-slide="prev">
                                                                            <span className="carousel-control-prev-icon"
                                                                                aria-hidden="true"></span>
                                                                            <span className="visually-hidden">Previous</span>
                                                                        </button>
                                                                        <button className="carousel-control-next carousel-button-hover" type="button"
                                                                            data-bs-target="#carouselExampleControls"
                                                                            data-bs-slide="next">
                                                                            <span className="carousel-control-next-icon"
                                                                                aria-hidden="true"></span>
                                                                            <span className="visually-hidden">Next</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="align-self-center mt-4 col-12 ">
                                                        <SupportButton link="/checkoutScheduling" name="Agendar Visita" />
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* fim do card 3 */}

                            </div>
                            <div className="carousel-item">
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        {/* * Retirar o elemento de carrossel dos cards "Destaques".
                        
                            <button className="carousel-control-prev carousel-button-hover" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-button-hover" type="button" data-bs-target="#carouselExampleControlsNoTouching "
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        */}
                    </div>

                </div>
            </div>



            <section>
                <div className="social col-12 noticia">
                    <div className="row social-Texto px-5 pt-3 col-12">
                        <h3 className="titulo-noticia">SSC Tuatara apresenta versão com até 2.230 CV</h3>
                        <div className="col-8 texto_midia">
                            <p p className="paragrafo-institucional-card">

                                O SSC Tuatara alcançou a velocidade máxima de 532,8 km/h em um trecho da State Route 160 no sul do estado de Nevada, nos Estados Unidos. Contudo, o recorde é estabelecido pela média das máximas nos dois sentidos da via mitigar os efeitos dos ventos laterais e traseiros, o que resultou em 508,7 km/h. Ao volante estava o piloto britânico Oliver Webb.
                                Foi neste mesmo local que o Koenigsegg Agera RS alcançou os  447,237 km/h, que já havia sido desbancado há um ano pelo Bugatti Chiron quando alcançou os 490,48 km/h em Ehra-Lessien, na Alemanha.
                                E é um recorde controverso: foi estabelecido com apenas uma passagem na pista.  
                            </p>
                        </div>
                        <div className="col-4 imagens-midia">
                            <img src={SSCTuatara} alt="" width="100%"></img>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Home