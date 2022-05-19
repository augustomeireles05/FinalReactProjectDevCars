import './Register.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/Button/Button'

import MainTittle from '../../components/Tittle/MainTittle'
import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'
import Subtitle from '../../components/Subtittle/Subtittle'

function Register() {
    return (
        <>
            <Header />
            <div className="container-lg">
                <MainTittle tittle="Cadastro" />
            </div>


            <div id="accordion" class="container container-register w-75 d-flex flex-column px-md-5 mt-4">


                <div className="" id="myGroup">
                    <button class="btn btn-outline-secondary border-bottom-0 trigger-colapse-register" data-bs-toggle="collapse" href="#collapseOne">
                        PESSOA FISICA
                    </button>
                    <button class="collapsed btn btn-outline-secondary border-bottom-0 trigger-colapse-register" data-bs-toggle="collapse" href="#collapseTwo">
                        PESSOA JURIDICA
                    </button>
                </div>

                {/* colapse pessoa fisica */}
                <div id="collapseOne" class="collapse" data-bs-parent="#accordion">

                    <form className="col-12 col-md-10 mb-2 justify-content-start gy-3 dados-pessoais ps-md-5 pe-md-5 h-100 w-100">
                        <Subtitle menu="Dados Pessoais" />

                        <div className="col-md-12 mb-3">
                            <Label label="Nome" for="nome" />
                            <Input type="text" aria-label="Nome" id="Nome" />
                        </div>


                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="Email" for="emailPF" />
                                <Input type="email" aria-label="emailPF" id="emailPF" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="CPF" for="cpf" />
                                <Input type="text" aria-label="cpf" id="cpf" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-5">
                                <Label label="Data de Nascimento" for="dtNascimento" />
                                <Input type="date" aria-label="dtNascimento" id="dtNascimento" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="Telefone" for="telefonePF" />
                                <Input type="text" aria-label="telefonePF" id="telefonePF" />
                            </div>
                        </div>


                        { /*Começo Senha*/}


                        <Subtitle subtitulo="Senha" />
                        {/* <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="Informe sua senha atual" for="current-password" />
                            <Input type="password" aria-label="password-register" id="current-password" />
                            {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span>
                        </div> */}


                        <div className="col-12 col-md-12 col-lg-6 mb-3">
                            <Label label="Escolha um senha" for="password-register" />
                            <Input type="password" aria-label="password-register" id="password-register" />
                            {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span> */}
                        </div>

                        <div className="col-12 col-md-12 col-lg-6 mb-3">
                            <Label label="Confirme sua nova senha" for="password-register-confirm" />
                            <Input type="password" aria-label="password-register-confirm" id="password-register-confirm" />
                        </div>

                        <div className="col-12 mt-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" required defaultChecked />
                                <label className="form-check-label" for="gridCheck">
                                    Li e concordo com os <a href="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" download="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" target="_blank">Termos e Condições de Uso</a>.
                                </label>
                            </div>
                        </div>

                        <div className="row justify-content-center justify-content-lg-start">
                            <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mb-3 ">
                                <Button link="" name="CADASTRE-SE" />
                            </div>
                        </div>
                    </form>
                </div>




                {/* colapse pessoa juridica */}
                <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">


                    {/* <form className="row mb-2 gy-3"> */}
                    <form className="col-12 col-md-10 mb-2 justify-content-start gy-3 dados-pessoais ps-md-5 pe-md-5 h-100 w-100">
                        <Subtitle menu="Dados Pessoais" />

                        <div className="col-md-12 mb-3">
                            <Label label="Razão Social" for="rzSocial" />
                            <Input type="text" aria-label="rzSocial" id="rzSocial" />
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="Email" for="email" />
                                <Input type="email" aria-label="email" id="email" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="CNPJ" for="cnpj" />
                                <Input type="text" aria-label="cnpj" id="cnpj" />
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-5">
                                <Label label="Inscrição Estadual" for="inscrEstadual" />
                                <Input type="text" aria-label="inscrEstadual" id="inscrEstadual" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mb-5">
                                <Label label="Telefone" for="telefonePJ" />
                                <Input type="text" aria-label="telefonePJ" id="telefonePJ" />
                            </div>
                        </div>







                        { /*Começo Senha*/}


                        <Subtitle subtitulo="Senha" />
                        {/* <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="Informe sua senha atual" for="current-password" />
                            <Input type="password" aria-label="password-register" id="current-password" />
                            {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span>
                        </div> */}


                        <div className="col-12 col-md-12 col-lg-6 mb-3">
                            <Label label="Escolha um senha" for="password-register" />
                            <Input type="password" aria-label="password-register" id="password-register" />
                            {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span> */}
                        </div>

                        <div className="col-12 col-md-12 col-lg-6 mb-3">
                            <Label label="Confirme sua nova senha" for="password-register-confirm" />
                            <Input type="password" aria-label="password-register-confirm" id="password-register-confirm" />
                        </div>

                        <div className="col-12 mt-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" required defaultChecked />
                                <label className="form-check-label" for="gridCheck">
                                    Li e concordo com os <a href="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" download="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" target="_blank">Termos e Condições de Uso</a>.
                                </label>
                            </div>
                        </div>
                        <div className="row justify-content-center justify-content-lg-start">
                            <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mb-3 ">
                                <Button link="" name="CADASTRE-SE" />
                            </div>
                        </div>
                    </form>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Register