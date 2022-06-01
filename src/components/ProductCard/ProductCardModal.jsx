import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../components/ProductCard/ProductCardModal.css'
import CurrencyFormat from 'react-currency-format';
import Button from '../../components/Button/Button'

import CartContext from '../../contexts/cart.provider'
import SchedulingContext from '../../contexts/scheduling.provider'




export default function ProductCardModal(props) {

    let limitValue = 999999.99
   
   
    const { addToCart } = useContext(CartContext)
    const { addToScheduling } = useContext(SchedulingContext)

    const history = useHistory()

    const handleAddToCart = () => {
      addToCart(props.produto)
      history.push("/cart")
    }


    const handleAddToSchedulle = () => {
        addToScheduling(props.produto)
        history.push("/cartSchedulle")
      }


    //INÍCIO: TRANSFORMAÇÃO PARA SEPARAÇÃO DE DEZENAS E MILHARES COM PADRÃO BRASILEIRO
    const priceConverted = (number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
        console.log()
    }
    //FIM: TRANSFORMAÇÃO PARA SEPARAÇÃO DE DEZENAS E MILHARES COM PADRÃO BRASILEIRO


       
        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',

        }

        return (
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog modal-xl">
                    <div className="row modal-content background-modal col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center ms-0">
                        <div className="modal-header">
                            <h5 className="modal-title px-1 font-title-modal ms-2 text-light">{props.marcaVeiculo} {props.modeloVeiculo}</h5>
                            <button type="button" className="btn-close bg-light me-2" onClick={props.hide}></button>
                        </div>
                       

                        <div className="d-flex justify-content-center">
                            <div className="row modal-body row-cols-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-2 mb-md-0 mb-lg-0">
                                    <img src={props.imagem} className="img-fluid" alt="..."/>
                                </div>

                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className=" border border-2  border-dark background-datasheet">
                                        <h4 className="text-center my-2">Ficha Técnica</h4>
                                    </div>

                                    <div className="mt-2 border border-2  border-dark p-3 background-datasheet">
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center background-datasheet-lighter">
                                            <p className="col-4 text-start fs-6 my-0">Modelo:</p>
                                            <p className="col-8 css-font-family-modal text-end fs-6 my-0">{props.modeloVeiculo}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-6 text-start fs-6 my-0">Cor:</p>
                                            <p className=" col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.cor}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-9 text-start fs-6 my-0">Ano de Fabricação:</p>
                                            <p className="col-3 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.anoVeiculo}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-3 text-start fs-6 my-0">Motor:</p>
                                            <p className="col-9 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.motor}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-6 text-start fs-6 my-0">Potência:</p>
                                            <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.potencia}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-3 text-start fs-6 my-0">Câmbio:</p>
                                            <p className="col-9 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.cambio}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-6 text-start fs-6 my-0">Combustível:</p>
                                            <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.combustivel}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-6 text-start fs-6 my-0">Preço:</p>

                                           

                                            <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">
                                                {priceConverted(props.precoVeiculo)}
                                               <p className="d-none">{props.precoVeiculo}</p>
                                            </p>

                                        </div>

                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 justify-content-center">
                                    <div className=" border border-2  border-dark mt-2 background-datasheet">
                                        <h4 className="text-center my-2">Descrição do veículo</h4>
                                    </div>

                                    <div className="mt-2 border border-2  border-dark p-3 background-datasheet">
                                        <p className="css-font-family-modal">{props.descricao}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                                   
                        {

                            props.precoVeiculo >= limitValue
                                ? <>
                                    <div className="modal-footer justify-content-center col-md-12 px-4 px-md-0">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2 justify-content-center">
                                                <Button  name="Agendar" 
                                                onClick={handleAddToSchedulle}/>
                                                
                                        </div>
                                    </div>
                                </>
                                : <>
                                    <div className="modal-footer d-grid gap-2 d-flex justify-content-center col-md-12 px-4 px-md-0">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2 justify-content-center">
                                        <Button name="Agendar" 
                                                onClick={handleAddToSchedulle}/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                                            <Button name="Comprar"
                                                onClick={handleAddToCart}
                                            />
                                        </div>
                                    </div>
                                </>

                        }

                    </div>
                </div>
            </div>
        )
}