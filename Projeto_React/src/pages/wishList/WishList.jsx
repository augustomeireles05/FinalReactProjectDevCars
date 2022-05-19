import './WishList.css'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/Button/Button'
import Subtittle from '../../components/Subtittle/Subtittle'

import { Link } from 'react-router-dom'

import imgListaDesejos from '../../assets/images/newInventory/audi-tt.jpeg'
import imagensLista from '../../assets/images/newInventory/Porsche-Panamera-4ES-Preto.jpg'
import imagensLista2 from '../../assets/images/newInventory/Lamborghini-Aventor.jpg'
import Sidebar from '../../components/Sidebar/Sidebar'



function WishList() {
    return (
        <>
            <Header />


            <section>


                <article className="page-content">


                    <div className="row gx-5 gy-3 px-3">
                        {/* inicio do menu lateral */}
                        <div className="col-md-4 flex-row justify-content-center text-center">
                            <Subtittle menu="MENU" />

                            <Sidebar />
                        </div>
                        {/* fim do menu lateral */}

                        {/* inicio da confirmação do pedido */}
                        <div className="col-md-8 mb-5">

                            <Subtittle subtitulo="LISTA DE DESEJOS" />
                            <div className="listadedesejos">

                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 responsive-ipadPro">
                                    {/* card 1 */}
                                    <div className="col text-center">
                                        <Link to="#" className="text-decoration-none" />
                                        <div className="card h-100 mb-5">
                                            {/* <img src="../img/Land_Rover_Evoque_HSE_Dynamic_Preta_2020_01-768x576.jpg"
                                                            className="card-img" alt="..."/> */}
                                            <div className="col-md-12 col-lg-12 col-xl-12">
                                                <img src={imgListaDesejos} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">AUDI TT ATTRACTION</h5>
                                                <p className="card-text">R$260.000,00</p>
                                                {/* <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link> */}
                                                {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link />
                                                            </div> */}
                                                <Button link="/cart" name="COMPRAR" />
                                            </div>

                                            <Link />
                                        </div>
                                    </div>
                                    {/* fim do card 1 */}

                                    {/* card 2 */}
                                    <div className="col text-center">
                                        <Link to="#" className="text-decoration-none" />
                                        <div className="card h-100 mb-5">
                                            {/* <img src="../img/Land_Rover_Evoque_HSE_Dynamic_Preta_2020_01-768x576.jpg"
                                                            className="card-img" alt="..."/> */}
                                            <div className="col-md-12 col-lg-12 col-xl-12">
                                                <img src={imagensLista} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">PORSCHE PANAMERA</h5>
                                                <p className="card-text">R$1.150.000,00</p>
                                                {/* <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link> */}
                                                {/* <Button link="/" name="COMPRAR" /> */}
                                                {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link />
                                                            </div> */}
                                                <Button link="/checkoutScheduling" name="COMPRAR" />

                                            </div>

                                            <Link />
                                        </div>
                                    </div>

                                    {/* fim do card 2 */}

                                    {/* card 3 */}
                                    <div className="col text-center">
                                        <Link to="#" className="text-decoration-none" />
                                        <div className="card h-100 mb-5">
                                            {/* <img src="../img/Land_Rover_Evoque_HSE_Dynamic_Preta_2020_01-768x576.jpg"
                                                            className="card-img" alt="..."/> */}

                                            <div className="col-md-12 col-lg-12 col-xl-12">
                                                <img src={imagensLista2} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">PORSCHE PANAMERA</h5>
                                                <p className="card-text">R$6.800.000,00</p>
                                                {/* <Link className="btn-sm btn-warning mt-3 buttom-width text-decoration-none">COMPRAR</Link> */}
                                                {/* <Button link="/" name="COMPRAR" /> */}
                                                {/* <Link to="#" /><img src="./img/img-header/favorite.png" alt="favotirar"
                                                                    className="favoritar"/><Link />
                                                            </div> */}
                                                <Button link="/checkoutScheduling" name="COMPRAR" />

                                            </div>

                                            <Link />
                                        </div>
                                    </div>

                                    {/* fim do card 3 */}


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

export default WishList
