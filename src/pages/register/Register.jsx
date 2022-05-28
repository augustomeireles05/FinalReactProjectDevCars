import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import './Register.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/Button/Button'

import MainTittle from '../../components/Tittle/MainTittle'
import Input from '../../components/Input/Input'
import Label from '../../components/Input/Label'
import Subtitle from '../../components/Subtittle/Subtittle'

import { baseUrl } from '../../environments'

// import { PFClient } from '../../models'
// import { PJClient } from '../../models'

import MaskedInput from '../../util/maskedInput'

const initialValuesPF = {
    numeroDocumento: "",
    nomeCliente: "",
    dataNascimento: "",
    emailCliente: "",
    telefoneCliente: "",
    senhaCliente: ""
}

const initialValuesPJ = {
    razaoSocial: "",
    emailCliente: "",
    numeroDocumento: "",
    inscricaoEstadual: "",
    telefoneCliente: "",
    senhaCliente: ""
}


function Register() {

    // const [values, setValues] = useState(initialValues);
    const history = useHistory()
    const URLPF = `${baseUrl}/cliente/f`

    const [registerPF, setRegisterPF] = useState(initialValuesPF)
    const [confirmPassword, setConfirmPassword] = useState('')

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    function handleChange(event) {
        setRegisterPF({ ...registerPF, numeroDocumento: event.target.value });
    }


    const registerPFClient = () => {
        axios.post(`${URLPF}`, registerPF)
            .then((response) => {

            }).catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        history.push("/login")
        console.log("registrado")
    }

    //INICIO DE TRATAMENTO DE PESSOA JURÍDICA
    const URLPJ = `${baseUrl}/cliente/j`
    const [registerPJ, setRegisterPJ] = useState(initialValuesPJ)

    const [confirmPasswordPJ, setConfirmPasswordPJ] = useState('')

    const registerPJCliente = () => {
        axios.post(`${URLPJ}`, registerPJ)
            .then((response) => {


            })

        history.push("/login")


    }

    const comparePasswordsPJ = () => {
        if (registerPJ.senhaCliente !== confirmPasswordPJ) {
            <div className="invalid-feedback">
                Senhas divergentes
            </div>
            console.log("senhas divergentes")
        }
    }




    return (
        <>
            <Header />
            <div className="container-lg">
                <MainTittle tittle="Cadastro" />
            </div>


            <div id="accordion" className="container container-register w-75 d-flex flex-column px-md-5 mt-4">


                <div className="d-flex w-50" id="myGroup">
                    <button className="accordion-button border-bottom-0 trigger-colapse-register rounded-top" data-bs-toggle="collapse" href="#collapseOne">
                        PESSOA FISICA
                    </button>
                    <button className="accordion-button collapsed border-bottom-0 trigger-colapse-register rounded-top" data-bs-toggle="collapse" href="#collapseTwo">
                        PESSOA JURIDICA
                    </button>
                </div>

                {/* colapse pessoa fisica */}
                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">

                    <form className="col-12 col-md-10 mb-2 justify-content-start gy-3 dados-pessoais ps-md-5 pe-md-5 h-100 w-100" >
                        <Subtitle menu="Dados Pessoais" />

                        <div className="col-md-12 mb-3">
                            <Label label="Nome" htmlFor="nome" />
                            <Input type="text" aria-label="Nome" id="Nome" value={registerPF.nomeCliente}
                                onChange={(event) => { setRegisterPF({ ...registerPF, nomeCliente: event.target.value }) }} />
                        </div>


                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="Email" htmlFor="emailPF" />
                                <Input type="email" aria-label="emailPF" id="emailPF" value={registerPF.emailCliente}
                                    onChange={(event) => { setRegisterPF({ ...registerPF, emailCliente: event.target.value }) }} />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="CPF" htmlFor="cpf" />
                                {/* <Input type="text" aria-label="cpf" id="cpf" maxLength="17" value={registerPF.numeroDocumento}
                                    onChange={(event) => { setRegisterPF({ ...registerPF, numeroDocumento: event.target.value }) }}/> */}
                                <MaskedInput
                                    type="text" aria-label="cpf"
                                    id="cpf"
                                    name="cpf"
                                    mask="999.999.999-99"
                                    value={registerPF.numeroDocumento}
                                    onChange={handleChange}
                                    maxLength={17}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-5">
                                <Label label="Data de Nascimento" htmlFor="dtNascimento" />
                                <Input type="text" aria-label="dtNascimento" maxlength="10" id="dtNascimento" value={registerPF.dataNascimento}
                                    onChange={(event) => { setRegisterPF({ ...registerPF, dataNascimento: event.target.value }) }} />
                                {/* <MaskedInput
                                    type="text" aria-label="dataNascimento"
                                    id="dataNascimento"
                                    name="dataNascimento"
                                    mask="9999-99-99"
                                    value={registerPF.dataNascimento}
                                    onChange={handleChange}
                                    maxLength={8}
                                /> */}
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="Telefone" htmlFor="telefonePF" />
                                <MaskedInput type="text" aria-label="telefonePF" maxlength="18" id="telefonePF" value={registerPF.telefoneCliente}
                                    onChange={(event) => { setRegisterPF({ ...registerPF, telefoneCliente: event.target.value }) }} mask="(99)99999-9999"/>
                            </div>
                        </div>


                        { /*Começo Senha*/}


                        <Subtitle subtitulo="Senha" />

                        <div className="col-12 col-md-12 col-lg-6 mb-3">
                            <Label label="Escolha um senha" htmlFor="password-registerPF" />
                            <Input type="password" aria-label="password-registerPF" id="password-registerPF"
                                value={registerPF.senhaCliente}
                                onChange={(event) => {
                                    setRegisterPF({ ...registerPF, senhaCliente: event.target.value })

                                    // console.log("primeira senha" +registerPF.senhaCliente)
                                }}

                            />



                            {/* <div className="link-danger">
                                Senhas divergentes
                            </div> */}
                        </div>

                        <div className="col-12 col-md-12 col-lg-6 mb-3">
                            <Label label="Confirme sua nova senha" htmlFor="password-register-confirmPF" />
                            <Input type="password" aria-label="password-register-confirmPF" id="password-register-confirmPF"
                                value={confirmPassword}
                                onChange={(event) => {

                                    setConfirmPassword(event.target.value)

                                    if (event.target.value === registerPF.senhaCliente) {

                                        setStatus({ type: 'sucess', mensagem: 'ok' })
                                    } else {

                                        setStatus({ type: 'error', mensagem: 'senhas divergentes' })
                                    }
                                }} />

                            {
                                status.type === 'sucess'
                                    ?
                                    <span style={{ color: 'white', backgroundColor: 'green', padding: '2px 15px' }}>
                                        {status.mensagem}
                                    </span>
                                    :
                                    ""

                            }


                            {
                                status.type === 'error'
                                    ?
                                    <span style={{ color: 'white', backgroundColor: 'red', padding: '2px 15px' }}>
                                        {status.mensagem}
                                    </span>
                                    :
                                    ""

                            }



                        </div>

                        <div className="col-12 mt-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="PF" required defaultChecked />
                                <label className="form-check-label" htmlFor="gridCheckPF">
                                    Li e concordo com os <a href="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" download="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" target="_blank">Termos e Condições de Uso</a>.
                                </label>
                            </div>
                        </div>

                        <div className="row justify-content-center justify-content-lg-start">
                            <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mb-3 ">
                                <Button link="" name="CADASTRE-SE" onClick={registerPFClient} />

                                {/* <Button link="" name="CADASTRE-SE" type="submit" /> */}
                            </div>

                        </div>
                    </form>
                </div>




                {/* colapse pessoa juridica */}
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">


                    {/* <form className="row mb-2 gy-3"> */}
                    <div className="col-12 col-md-10 mb-2 justify-content-start gy-3 dados-pessoais ps-md-5 pe-md-5 h-100 w-100">
                        <Subtitle menu="Dados Pessoais" />

                        <div className="col-md-12 mb-3">
                            <Label label="Razão Social" htmlFor="rzSocial" />
                            <Input type="text" aria-label="rzSocial" id="rzSocial" value={registerPJ.razaoSocial}
                                onChange={(event) => { setRegisterPJ({ ...registerPJ, razaoSocial: event.target.value }) }} />
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="Email" htmlFor="emailPJ" />
                                <Input type="email" aria-label="emailPJ" id="emailPJ" value={registerPJ.emailCliente}
                                    onChange={(event) => { setRegisterPJ({ ...registerPJ, emailCliente: event.target.value }) }} />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mb-3">
                                <Label label="CNPJ" htmlFor="cnpj" />
                                {/* <Input type="text" aria-label="cnpj" maxlength="14" id="cnpj" value={registerPJ.numeroDocumento}
                                    onChange={(event) => { setRegisterPJ({ ...registerPJ, numeroDocumento: event.target.value }) }} /> */}
                                <MaskedInput type="text" aria-label="cnpj" maxLength={15} id="cnpj" value={registerPJ.numeroDocumento}
                                    onChange={(event) => { setRegisterPJ({ ...registerPJ, numeroDocumento: event.target.value }) }} name="cnpj" mask="99.999.999/9999-99"/>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mb-5">
                                <Label label="Inscrição Estadual" htmlFor="inscrEstadual" />
                                <MaskedInput type="text" aria-label="inscrEstadual" maxLength={15} id="inscrEstadual" value={registerPJ.inscricaoEstadual}
                                    onChange={(event) => { setRegisterPJ({ ...registerPJ, inscricaoEstadual: event.target.value }) }} name="inscrEstadual" mask="999.999.999.999"/>

                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mb-5">
                                <Label label="Telefone" htmlFor="telefonePJ" />
                                {/* <Input type="text" aria-label="telefonePJ" maxlength="11" id="telefonePJ" value={registerPJ.telefoneCliente}
                                    onChange={(event) => { setRegisterPJ({ ...registerPJ, telefoneCliente: event.target.value }) }} /> */}
                                <MaskedInput type="text" aria-label="telefonePJ" maxlength="18" id="telefonePJ" value={registerPJ.telefoneCliente}
                                    onChange={(event) => { setRegisterPJ({ ...registerPJ, telefoneCliente: event.target.value }) }} mask="(99)99999-9999" />
                            </div>
                        </div>







                        { /*Começo Senha PJ*/}


                        <Subtitle subtitulo="Senha" />
                        {/* <div className="col-12 col-md-10 col-lg-6 mb-3">
                            <Label label="Informe sua senha atual" htmlFor="current-password" />
                            <Input type="password" aria-label="password-register" id="current-password" />
                            {/* <span className="fs-6">Digite uma senha de 8-16 caracteres</span>
                        </div> */}


                        <div className="col-12 col-md-12 col-lg-6 mb-3">
                            <Label label="Escolha um senha" htmlFor="password-registerPJ" />
                            <Input type="password" aria-label="password-registerPJ" id="password-registerPJ"
                                value={registerPJ.senhaCliente}
                                onChange={(event) => { setRegisterPJ({ ...registerPJ, senhaCliente: event.target.value }) }} />

                        </div>

                        <div className="col-12 col-md-12 col-lg-6 mb-3">
                            <Label label="Confirme sua nova senha" htmlFor="password-register-ConfirmPasswordPJ" />
                            <Input type="password" aria-label="password-register-confirmPasswordPJ" id="password-register-confirmPJ"
                                value={confirmPasswordPJ}
                                onChange={(event) => {

                                    setConfirmPasswordPJ(event.target.value)
                                    if (event.target.value === registerPJ.senhaCliente) {

                                        setStatus({ type: 'sucess', mensagem: 'ok' })
                                    } else {

                                        setStatus({ type: 'error', mensagem: 'senhas divergentes' })
                                    }
                                }} />
                            {
                                status.type === 'sucess'
                                    ?
                                    <span style={{ color: 'white', backgroundColor: 'green', padding: '2px 15px' }}>
                                        {status.mensagem}
                                    </span>
                                    :
                                    ""
                            }

                            {
                                status.type === 'error'
                                    ?
                                    <span style={{ color: 'white', backgroundColor: 'red', padding: '2px 15px' }}>
                                        {status.mensagem}
                                    </span>
                                    :
                                    ""
                            }




                        </div>

                        <div className="col-12 mt-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" required defaultChecked />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Li e concordo com os <a href="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" download="TERMOS E CONDIÇÕES DE USO DEV CARS™.pdf" target="_blank">Termos e Condições de Uso</a>.
                                </label>
                            </div>
                        </div>
                        <div className="row justify-content-center justify-content-lg-start">
                            <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mb-3 ">
                                <Button name="CADASTRE-SE" onClick={registerPJCliente} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default Register