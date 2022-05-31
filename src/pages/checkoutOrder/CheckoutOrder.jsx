import './CheckoutOrder.css';
import axios from 'axios'
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Button from '../../components/Button/Button.jsx';
import SupportButton from '../../components/Button/SupportButton';
import Input from '../../components/Input/Input';
import Label from '../../components/Input/Label';
import Editar from '../../assets/images/CheckoutOrder/edit.png';
import Lixeira from '../../assets/images/CheckoutOrder/trash.png';
import Adicionar from '../../assets/images/CheckoutOrder/plus.png';
import Boleto from '../../assets/images/CheckoutOrder/barcode.png';
import Pix from '../../assets/images/CheckoutOrder/pix.png';
import { baseUrl } from '../../environments';
import React, { useEffect, useState, useContext } from 'react'
import CartContext from '../../contexts/cart.provider'
import { useHistory } from 'react-router-dom'
import { EnderecoModelo, CartaoModelo, Pedido } from '../../models';
import PaymentSlip from '../../components/PaymentSlip/PaymentSlip'




function CheckoutOrder(props) {
  const history = useHistory()


  const priceConverted = (number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
  }

  const { deleteCart } = useContext(CartContext)
  const id = parseInt(localStorage.getItem('user'))
  const email = localStorage.getItem('email')
  const nome = localStorage.getItem('nome')
  const cart = JSON.parse(localStorage.getItem('cart'))

  const URLEND = `${baseUrl}/enderecos/${id}` // setando cliente manualmente
  const URLCART = `${baseUrl}/cartao/cliente/${id}` // setando cliente manualmente

  const URLendCad = `${baseUrl}/enderecos`
  const URLcadastrarCartao = `${baseUrl}/cartao`
  const URLcadastrarPedido = `${baseUrl}/placeorder`

  const [endereco, setEndereco] = useState([]);
  const [registerEndereco, setRegisterEndereco] = useState(EnderecoModelo);
  const [registerCartao, setRegisterCartao] = useState(CartaoModelo);
  const [cartao, setCartao] = useState([]);
  const [successRegister, SetSuccessRegister] = useState(false);
  const [pedido, setPedido] = useState(Pedido)
  const [idAdress, setIdAdress] = useState('')
  const [idCart, setIdCart] = useState('')
  const idVeic = cart[1]





  {/*
  const registerEndereco = () => {
   
    axios.post(URLendCad, Endereco)
        .then((response) => {
            SetSuccessRegister(true)
        })      
}
 */

    const registerCartao = () => {
      console.log()
      axios.post(URLcadastrarCartao, CartaoModelo)
        .then((response) => {
          getCheckoutOrderCartao()
        })
    }



    //INICIO PEDIDO
    const postPedido = () => {

      axios.post(URLcadastrarPedido, {
        codCliente: id,
        codVeiculo: idVeic,
        codEndereco: idAdress,
        codPagamento: 1,
        codFrete: 25,
        valor: frete.valorFrete + cart[8],
        codStatus: 3,
        codCartao: idCart
      })

        .then((response) => {
          console.log(response)

        })

        deleteCart('cart')
     

      history.push("/")

    }
    //FIM PEDIDO



    //Início FRETE
    const [frete, setFrete] = useState('')


    const getFrete = () => {
      axios.get(`${baseUrl}/frete/SP`)
        .then((response) => {
          setFrete(response.data)
        })
    }
    //fim FRETE


    useEffect(() => {
      getFrete()
      getCheckoutOrder()
      getCheckoutOrderCartao()
    }, [])

    // METODO PARA TRAZER ENDEREÇO
    const getCheckoutOrder = () => {
      axios.get(`${URLEND}`)
        .then((response) => {
          setEndereco(response.data)
          console.log(response.data)
          console.log()
        })
    }

    // METODO PARA TRAZER CARTAO
    const getCheckoutOrderCartao = () => {
      axios.get(`${URLCART}`)
        .then((response) => {
          setCartao(response.data)
          console.log(response.data)
        })
    }


    //INÍCIO: GERAR NUMERO RANDOMICO
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState('')

    function exibirValor(numero, texto) {
      setNum(numero, texto)
      setTexto(texto)
    }
    //FIM: GERAR NUMERO RANDOMICO


    const addAdress = (event) => {
      setIdAdress(event.target.value)

      console.log(idAdress)
    }



    const addCart = (event) => {
      setIdCart(event.target.value)
      console.log("id do veiculo:", cart[1])
      console.log("id do cartão: ", idCart)

    }




    const renderOEnderecos = () => {
      return endereco.map((item) => {
        return (
          <>
            <div className=" col-md-12 card-header " key={item.codEndereco}>
              <div className="form-check font-text d-flex justify-content-between align-items-center">
                <div className="d-grid d-flex justify-content-start"  >
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={addAdress} value={item.codEndereco} />
                  <span className="space-input">CEP: {item.cep}
                    <br />
                    {item.rua},{item.numero}
                    <br />
                    Bairro : {item.bairro}
                    <br />
                    Cidade: {item.cidade}
                    <br />
                    UF: {item.uf}
                  </span>
                </div>
                <div className="d-flex d-md-flex justify-content-end">
                  <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" title="Editar">
                    <img className="btn " src={Editar} width="45" alt="Editar" title="Editar" />
                  </button>
                  <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdropDeleteAdress" title="Excluir">
                    <img className="btn " src={Lixeira} width="45" alt="Lixeira" title="Excluir" />
                  </button>
                </div>
              </div>
            </div>
            {/* Fim Endereço 01 */}
          </>
        )
      })
    }

    const renderCartao = () => {
      return cartao.map((item) => {
        return (
          <>
            <div className=" col-md-12 card-header" key={item.codCartao}>
              <div className="form-check font-text d-flex justify-content-between align-items-center">
                <div className="d-grid d-flex justify-content-start"  >
                  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" onClick={addCart} value={item.codCartao} />
                  <span className="space-input">Crédito  <br />
                    {/* Bandeira:  <br /> */}
                    Número do cartão: {item.numeroCartao} <br />
                    Nome do titular: {item.nomeTitular} <br />
                    Data de validade: {item.validadeCartao} <br />
                  </span>
                </div>
                <div className="d-flex d-md-flex justify-content-end">
                  <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdropEditCard">
                    <img className="btn " src={Editar} width="45" alt="Editar" />
                  </button>

                  <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdropDeleteCard">
                    <img className="btn " src={Lixeira} width="45" alt="Lixeira" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )
      })
    }

    return (
      <>
        <Header />
        {/* INÍCIO DO TÍTULO DA PÁGINA */}
        <div className="title-page background font-text-bold">
          <h3>Confira e finalize seu pedido</h3>
          <hr />
        </div>

        {/* FIM DO TÍTULO DA PÁGINA */}

        <div className="row background d-flex justify-content-center">
          {/* INÍCIO DO CARD ENDERECO */}
          <div className="col-md-5 col-lg-5 row d-flex justify-content-center background mt-2">


            {/* INICIO DO CARD DOS MEUS DADOS */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 row justify-content-between px-md-0 align-items-center">
              <div className="col-10 col-sm-10 col-md-10 col-lg-10 ps-0 mb-2">
                <h4 className="font-text">Meus Dados</h4>
              </div>


              <div className="col-2 col-sm-2 col-md-2 col-lg-2 text-end pe-0 pe-md-0">

                <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#modal-endereco" >
                  {/* <img src={Adicionar} width="30" alt="Adicionar" /> */}
                </button>

              </div>


            </div>
            {/* FIM DO CARD DOS MEUS DADOS */}

            {/* INICIO MEUS DADOS */}

            <div className="card text-black bg-white mb-3 px-0">

              {/* <div className=" col-md-12 card-header"> */}
              {/* <div className="form-check font-text d-flex justify-content-between"> */}
              {/* <div className="d-grid d-flex justify-content-start">
                  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                  <span className="space-input">Meus Dados</span>
                </div> */}
              {/* <div className="d-grid d-md-flex justify-content-end">
                  <img className="btn " src={Editar} width="45" alt="Editar" />
                  <img className="btn " src={Lixeira} width="45" alt="Lixeira" />
                </div> */}
              {/* </div> */}
              {/* </div> */}

              <div className="card-body">
                <h5 className="card-title font-text">Dados Pessoais</h5>
                <p className="card-text font-text">
                  Nome: {nome}
                  <br />
                  E-mail Cadastrado: {email}
                  <br />

                </p>
              </div>


            </div>
            {/* FIM DOS MEUS DADOS */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 row justify-content-between px-md-0 align-items-center">
              <div className="col-10 col-sm-10 col-md-10 col-lg-10 ps-0">
                <h4 className="font-text">Endereços de Entrega</h4>
              </div>

              {/* INÍCIO DO BOTÃO DE ADICIONAR ENDEREÇO */}
              <div className="col-2 col-sm-2 col-md-2 col-lg-2 text-end pe-0 pe-md-0">
                {/* Início botão padrão que abre o modal Endereco */}
                <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#modal-endereco" title="Adicionar" >
                  <img src={Adicionar} width="30" alt="Adicionar" title="Adicionar" />
                </button>
                {/* Início botão padrão que abre o modal Endereco */}
              </div>
              {/* FIM DO BOTÃO DE ADICIONAR ENDEREÇO */}
              {/* FIM DO CARD ENDERECO */}

            </div>




            <div className="card text-black bg-white mb-3 px-0">
              {/* Início Endereço 01 */}
              {renderOEnderecos()}
            </div>



            {/* Início modal adicionar endereço*/}
            <div className="modal fade" id="modal-endereco" tabIndex={-1} aria-labelledby="inicioModal" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content background-modal-checkoutorder">
                  {/* header do modal */}
                  <div className="modal-header">

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <h5 className="modal-title text-center text-black" id="inicioModal">
                    Cadastre um novo endereço
                  </h5>
                  {/* fim da header do modal */}

                  {/* corpo do modal Endereço */}
                  <div className="modal-body">
                    <div className="container">
                      <div className="col-12 col-sm-12 col-md-12 px-0">
                        <Label label="Rua" for="rua" />
                        <Input type="text" aria-label="logradouro" id="logradouro" value={EnderecoModelo.rua}
                          onChange={(event) => { setRegisterEndereco({ ...EnderecoModelo, rua: event.target.value }) }} />
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                        <div className="col-12 col-sm-12 col-md-6 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Cidade" for="cidade" />
                          <Input type="text" aria-label="cidade" id="cidade" value={EnderecoModelo.cidade}
                            onChange={(event) => { setRegisterEndereco({ ...EnderecoModelo, cidade: event.target.value }) }} />
                        </div>

                        <div className="col-12 col-sm-12 col-md-4 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Bairro" for="bairro" />
                          <Input type="text" aria-label="bairro" id="bairro" value={EnderecoModelo.bairro}
                            onChange={(event) => { setRegisterEndereco({ ...EnderecoModelo, bairro: event.target.value }) }} />
                        </div>

                        <div className="col-12 col-sm-12 col-md-2 px-0">
                          <Label label="UF" for="uf" />
                          <Input type="text" aria-label="uf" id="uf" value={EnderecoModelo.uf}
                            onChange={(event) => { setRegisterEndereco({ ...EnderecoModelo, uf: event.target.value }) }} />
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                        <div className="col-12 col-sm-12 col-md-10 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Cep" for="cep" value={EnderecoModelo.uf}
                            onChange={(event) => { setRegisterEndereco({ ...EnderecoModelo, uf: event.target.value }) }} />
                          <Input type="text" aria-label="cep" id="cep" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 px-0">
                          <Label label="Nº" for="numero" value={EnderecoModelo.numero}
                            onChange={(event) => { setRegisterEndereco({ ...EnderecoModelo, numero: event.target.value }) }} />
                          <Input type="text" aria-label="uf" id="numero" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 px-0">
                          <Label label="Complemento" for="complemento" value={EnderecoModelo.complemento}
                            onChange={(event) => { setRegisterEndereco({ ...EnderecoModelo, complemento: event.target.value }) }} />
                          <Input type="text" aria-label="complemento" id="numero" />
                        </div>
                      </div>
                      {successRegister ? <h3>Endereço cadastrado com Sucesso.</h3>
                        : ''
                      }
                      <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                        <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3"
                          onClick={registerEndereco}>
                          Salvar
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* fim do corpo do modal Endereço */}
                </div>
              </div>
            </div>
            {/* fim do modal adicionar endereço */}




            {/* modal editar endereço */}
            <div className="modal fade" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content background-modal-checkoutorder">
                  <div className="modal-header">

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <h5 className="modal-title text-center text-black" id="staticBackdropLabel">Editar Endereço</h5>
                  <div className="modal-body">

                    {/* corpo do modal Editar Endereço */}
                    <div className="modal-body">
                      <div className="container">
                        <div className="col-12 col-sm-12 col-md-12 px-0">
                          <Label label="Logradouro" for="logradouro" />
                          <Input type="text" aria-label="logradouro" id="logradouro" value="Praça Roberto Pedro Gomes" />
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                          <div className="col-12 col-sm-12 col-md-6 pe-md-2 ps-0 ps-md-0 pe-0">
                            <Label label="Cidade" for="cidade" />
                            <Input type="text" aria-label="cidade" id="cidade" value="São Paulo" />
                          </div>

                          <div className="col-12 col-sm-12 col-md-4 pe-md-2 ps-0 ps-md-0 pe-0">
                            <Label label="Bairro" for="bairro" />
                            <Input type="text" aria-label="bairro" id="bairro" value="Morumbi" />
                          </div>

                          <div className="col-12 col-sm-12 col-md-2 px-0">
                            <Label label="UF" for="uf" />
                            <Input type="text" aria-label="uf" id="uf" value="SP" />
                          </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                          <div className="col-12 col-sm-12 col-md-10 pe-md-2 ps-0 ps-md-0 pe-0">
                            <Label label="Cep" for="cep" />
                            <Input type="text" aria-label="cep" id="cep" value="12332-032" />
                          </div>
                          <div className="col-12 col-sm-12 col-md-2 px-0">
                            <Label label="Nº" for="numero" />
                            <Input type="text" aria-label="uf" id="numero" value="101" />
                          </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                          <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3">
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* fim do corpo do modal Editar Endereço */}
                  </div>
                </div>
              </div>
            </div>
            {/* fim do do modal editar endereço */}




            {/* modal editar cartão */}
            <div className="modal fade" id="staticBackdropEditCard" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content background-modal-checkoutorder">
                  <div className="modal-header">

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <h5 className="modal-title text-center text-black" id="staticBackdropLabel">Editar Cartão</h5>


                  {/* corpo do modal Cartão */}
                  {successRegister ? <h3>Cartao cadastrado com Sucesso.</h3>
                    : ''
                  }
                  <div className="modal-body">
                    <div className="container">
                      <div className="col-12 col-sm-12 col-md-12 px-0">
                        <Label label="Número do cartão" for="cardnumber" />
                        <Input type="text" aria-label="cardnumber" id="cardnumber" value={CartaoModelo.numeroCartao}
                          onChange={(event) => { setRegisterCartao({ ...CartaoModelo, numeroCartao: event.target.value }) }} />
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                        <div className="col-12 col-sm-12 col-md-6 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Nome do titular" for="ownnername" />
                          <Input type="text" aria-label="ownnername" id="ownnername" value={CartaoModelo.nomeTitular}
                            onChange={(event) => { setRegisterCartao({ ...CartaoModelo, nomeTitular: event.target.value }) }} />
                        </div>

                        <div className="col-12 col-sm-12 col-md-4 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Data de validade" for="validdate" />
                          <Input type="text" aria-label="validdate" id="validdate" value={CartaoModelo.validadeCartao}
                            onChange={(event) => { setRegisterCartao({ ...CartaoModelo, validadeCartao: event.target.value }) }} />
                        </div>

                        <div className="col-12 col-sm-12 col-md-2 px-0">
                          <Label label="CVV" for="cvv" />
                          <Input type="text" aria-label="uf" id="cvv" value={CartaoModelo.cvv}
                            onChange={(event) => { setRegisterCartao({ ...CartaoModelo, cvv: event.target.value }) }} />
                        </div>
                      </div>
                      {/*  
                    <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                      <div className="col-12 col-sm-12 col-md-10 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="CPF do titular" for="ownnercpf" />
                        <Input type="text" aria-label="cep" id="ownnercpf" value="099.345.666-09" />
                      </div>
                      <div className="col-12 col-sm-12 col-md-2 px-0">
                        <Label label="Bandeira" for="bandeira" />
                        <Input type="text" aria-label="uf" id="bandeira" value="VISA" />
                      </div>
                    </div>
                        */}
                      <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                        <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3"
                          onClick={registerCartao}>
                          Salvar
                        </button>
                      </div>
                    </div>

                    {/* fim do corpo do modal Cartão */}
                  </div>
                </div>
              </div>
            </div>
            {/* fim do do modal editar Cartão */}




            {/* modal excluir Cartão */}
            <div className="modal fade" id="staticBackdropDeleteCard" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content background-modal-checkoutorder">
                  <div className="modal-header">

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <h5 className="modal-title text-center text-black" id="staticBackdropLabel">Excluir cartão </h5>


                  {/* corpo do modal excluir Cartão */}
                  <div className="modal-body">
                    <div className="container">

                      <div>
                        <h5 className="text-dark text-center">Tem certeza que deseja excluir o cartão</h5>
                        <h4 className="text-center">** ** ** 0564 ?</h4>
                      </div>




                      <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                        <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3">
                          Excluir
                        </button>
                      </div>
                    </div>

                    {/* fim do corpo do excluir Cartão */}
                  </div>
                </div>
              </div>
            </div>
            {/* fim do modal excluir Cartão */}



            <hr />

            <div className="col-12 col-sm-12 col-md-12 col-lg-12 row justify-content-between align-items-center p-0 p-md-0">
              <div className="col-10 col-sm-10 col-md-10 col-lg-10 ps-0">
                <h4 className="mb-3 font-text">Formas de Pagamento</h4>
              </div>
              {/* INÍCIO DO BOTÃO DE ADICIONAR FORMA DE PAGAMENTO */}

              <div className="col-2 col-sm-2 col-md-2 col-lg-2 text-end pe-0 pe-md-0">
                {/* botão padrão que abre o modal Cartão */}
                <button type="button" className="btn px-0 mb-2" data-bs-toggle="modal" data-bs-target="#modal-cartao">
                  <img src={Adicionar} width="30" alt="Adicionar" />
                </button>
                {/* fim do botão que abre o modal Cartão  */}
              </div>
              {/* FIM DO BOTÃO DE ADICIONAR FORMA DE PAGAMENTO */}
            </div>


            <div className="card text-black bg-white mb-3 px-0">

              {/* Início Cartão 01 */}

              <div className="">
                {renderCartao()}
              </div>
              {/* Fim Cartão 01 */}
            </div>



            {/* Início modal adicionar cartão*/}
            <div className="modal fade" id="modal-cartao" tabIndex={-1} aria-labelledby="inicioModal" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content background-modal-checkoutorder">
                  {/* header do modal */}
                  <div className="modal-header">

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <h5 className="modal-title text-center text-black" id="inicioModal">
                    Adicione um novo cartão
                  </h5>
                  {/* fim da header do modal */}



                  {/*  */}
                  <div className="modal-body">
                    <div className="container">
                      <div className="col-12 col-sm-12 col-md-12 px-0">
                        <Label label="Número do cartão" for="cardnumber" />
                        <Input type="text" aria-label="cardnumber" id="numeroCartao"
                         value={registerCartao.numeroCartao}
                         onChange={(event) => { setRegisterCartao({...registerCartao, numeroCartao: event.target.value}) }} />
                      </div>

                      <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                        <div className="col-12 col-sm-12 col-md-6 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Nome do titular" for="ownnername" />
                          <Input type="text" aria-label="ownnername" id="ownnername"
                            value={registerCartao.nomeTitular}
                            onChange={(event) => { setRegisterCartao({...registerCartao, nomeTitular: event.target.value}) }} />
                        </div>

                        <div className="col-12 col-sm-12 col-md-4 pe-md-2 ps-0 ps-md-0 pe-0">
                          <Label label="Data de validade" for="validdate" />
                          <Input type="text" aria-label="validdate" id="validdate"
                            value={registerCartao.validadeCartao}
                            onChange={(event) => { setRegisterCartao({...registerCartao, validadeCartao: event.target.value}) }} />
                        </div>

                        <div className="col-12 col-sm-12 col-md-2 px-0">
                          <Label label="CVV" for="cvv" />
                          <Input type="text" aria-label="uf" id="cvv"
                            value={registerCartao.cvv}
                            onChange={(event) => { setRegisterCartao({...registerCartao, cvv: event.target.value}) }} />
                        </div>
                      </div>

                      {/*
                    <div className="col-12 col-sm-12 col-md-12 row justify-content-between px-0 mx-0">
                      <div className="col-12 col-sm-12 col-md-10 pe-md-2 ps-0 ps-md-0 pe-0">
                        <Label label="CPF do titular" for="ownnercpf" />
                        <Input type="text" aria-label="cep" id="ownnercpf" />
                      </div>
                      <div className="col-12 col-sm-12 col-md-2 px-0">
                        <Label label="Bandeira" for="bandeira" />
                        <Input type="text" aria-label="uf" id="bandeira" />
                      </div>
                    </div>
                    */}
                      {successRegister ? <h3>Cartao cadastrado com Sucesso.</h3>
                        : ''
                      }
                      <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                        <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3"
                          onClick={registerCartao}>
                          Salvar
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* fim do corpo do modal Endereço */}
                </div>
              </div>


            </div>
            {/* fim do modal adicionar endereço */}




            {/* modal excluir endereço */}
            <div className="modal fade" id="staticBackdropDeleteAdress" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content background-modal-checkoutorder">
                  <div className="modal-header">

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <h5 className="modal-title text-center text-black" id="staticBackdropLabel">Excluir Endereço </h5>


                  {/* corpo do modal excluir endereço */}
                  <div className="modal-body">
                    <div className="container">

                      <div>
                        <h5 className="text-dark text-center">Tem certeza que deseja excluir o endereço? </h5>
                        <div>
                          <h5 className="text-justify text-dark">PRAÇA ROBERTO PEDRO GOMES Nº 101 Morumbi (São Paulo/SP) <br /> CEP: 12332-032
                          </h5>

                        </div>

                      </div>




                      <div className="col-12 col-sm-12 col-md-12 text-center mx-0 m-4">
                        <button type="submit" className="col-12 col-md-4 btn-modal-checkoutorder pt-2 pb-2 pe-3 ps-3">
                          Excluir
                        </button>
                      </div>
                    </div>

                    {/* fim do corpo do excluir endereço */}
                  </div>
                </div>
              </div>
            </div>
            {/* fim do modal excluir endereço */}




            <hr />

            <div className="card text-black bg-white mb-3 font-text px-0">


              {/* Início do Card do Pix */}
              {/* <div className="card-header">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                  <span className="icon-payment">
                    Pix
                    <img src={Pix} width="30" alt="Pix" className="ms-2" />
                  </span>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Vencimento em 30 minutos. Após o pagamento seu pedido será
                  processado.
                </p>
              </div> */}
              {/* Fim do Card do Pix */}

              {/* Início do Card do Boleto */}
              <PaymentSlip funcao={exibirValor} />
              <div className="card-body">
                {/* <h5 className="card-title">Secondary card title</h5> */}
                <p className="card-text">
                  Vencimento em 1 dia útil. A data de entrega será alterada
                  devido ao tempo de processamento do Boleto.
                </p>
                <div>
                  <p>{texto}</p>
                  <p>{num}{num}</p>
                </div>
              </div>
              {/* Fim do Card do Boleto */}
            </div>
          </div>



          {/* INICIO DO CARD DO RESUMO  */}
          <div className="col-md-6 col-lg-5 order-md-last mt-2">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-black">Resumo do Pedido</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <div className="col-7 col-md-8 col-lg-8 format-resume">
                  <h6 className="my-0 mb-3 fw-bold">{cart[2]} {cart[3]}</h6>
                  <small className="col-12 col-md-6 col-lg-12">
                    {cart[12]}
                  </small>
                </div>
                {/* <span className="text-muted font-text">R$ {cart[7]}</span> */}
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0 font-text">Valor do Frete</h6>
                  {/* <small className="font-text">Cep: 03145-050</small> */}
                </div>
                {/* <span className="text-success font-text">R$ 23.000,00</span> */}
                <span className="text-success font-text">{priceConverted(frete.valorFrete)}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span className="font-text-bold">Valor do veículo </span>
                <strong className="font-text-bold"> {priceConverted(cart[8])}</strong>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span className="font-text-bold">Total (R$)</span>
                <strong className="font-text-bold"> {priceConverted(frete.valorFrete + cart[8])}</strong>
              </li>
            </ul>
            <div className="d-grid gap-2 d-md-block pt-2">
              <div className="col-sm-12">
                <SupportButton link="/Cart" name="Voltar para o Carrinho" />
                <Button onClick={postPedido} name="Finalizar Compra" />
              </div>
            </div>

            {/* </Button> */}
          </div>
          {/* FIM DO CARD DO RESUMO  */}
        </div>
        <Footer />
      </>
    );
  }
}
export default CheckoutOrder;