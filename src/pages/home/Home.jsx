import './Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import axios from 'axios';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react'

import Capa1 from '../../assets/images/Home/Koenigsegg_Gemera.jpg'

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


import SSCTuatara from '../../assets/images/Home/SSC Tuatara.jpg'
import ProductCard from '../../components/ProductCard/ProductCard'
import { baseUrl } from '../../environments'


export default function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        axios.get(`${baseUrl}`)
            .then((response) => {
                console.log(response.data)
                setProducts(response.data)
            })
    }

    


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
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas ms-2 me-4" src={LogomarcaAstonMartin} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="">
                                            <img className="icons-marcas  me-4" src={LogomarcaAudi} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link href="BMW" to="inventory" className="">
                                            <img className="icons-marcas  me-4" src={LogomarcaBMW} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="">
                                            <img className="icons-marcas  me-4" src={LogomarcaBugatti} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas  me-4" src={LogomarcaCrysler} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas  me-4" src={LogomarcaFerrari} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas  me-4" src={LogomarcaFord} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas  me-4" src={LogomarcaJaguar} height="50px" alt="Carrossel" />
                                        </Link>
                                    </div>
                                    <div className="carousel-item fundo-marcas logo-centralizado2  logo-centralizado" data-bs-interval="3000">
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas ms-3 me-4" src={LogomarcaLamborghini} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaMclaren} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaMercedes} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaOpel} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaPagani} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaRollsRoyce} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
                                            <img className="icons-marcas ms-5 me-4" src={LogomarcaSubaru} height="50px" alt="Carrossel" />
                                        </Link>
                                        <Link to="inventory" className="" >
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
                    <p>DESTAQUES</p>
                </div> 
                <ProductCard products={products} />  
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
