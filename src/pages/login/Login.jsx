import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Bugatti from '../../assets/images/Login/login.jpg'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'
import Button from '../../components/Button/Button';

function Login() {
    return (
        <>
            <Header />
            <section className="ftco-section background-section pt-4 pb-4">
                <div className="col-10 col-md-8 col-lg-6 container shadow shadow-container px-0">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-3 d-flex justify-content-center ">
                            <h2 className="heading-section font-login-title pt-4">LOGIN</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center px-0 mx-0 pb-3">
                        <div className="col-md-12 col-lg-12">
                            <div className="container-md wrap d-md-flex d-flex justify-content-between">

                                <div className="img col-md-6 imagem-login">
                                    <img src={Bugatti} alt="Login" className="w-100" />
                                </div>

                                <div className="login-wrap p-md-2 col-12 col-md-6 ">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="w-100 justify-content-center">
                                            <h3 className="mb-4 main-font-login text-center">Entrar</h3>
                                        </div>
                                        <div className="w-100">
                                            <p className="social-media d-flex justify-content-end">
                                                <Link to="#"
                                                    className="social-icon d-flex align-items-center justify-content-center"><span
                                                        className="fa fa-facebook"></span></Link>
                                                <Link to="#"
                                                    className="social-icon d-flex align-items-center justify-content-center"><span
                                                        className="fa fa-twitter"></span></Link>
                                            </p>
                                        </div>
                                    </div>
                                    <form action="#" className="signin-form ms-1">
                                        <div className="form-group mb-3">
                                            <Label label="Login" for="login"/>
                                            <Input type="text" aria-label="login" id="login"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <Label label="Senha" for="senha"/>
                                            <Input type="password" aria-label="senha" id="senha"/>
                                        </div>
                                        <div className="form-group button-entrar-login mt-4">
                                            <Button link="/ShedulingDetails" name="Entrar" className="form-group button-entrar-login"/>
                                        </div>
                                        <div className="col-12 row form-group d-md-flex pt-3 mx-0 text-center">
                                            <div className="col-12 flex-center input-layout">
                                                <Link to="/recoveryPassword" className="font-login link-color">Esqueci minha senha</Link>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="text-center pt-3 font-login">Não é um membro?</p>
                                    <div className="text-center input-layout "><Link data-toggle="tab" to="/register" className="link-color">Cadastre-se</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Login