import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../components/ProductCard/ProductCardModal.css'
import CurrencyFormat from 'react-currency-format';
import Button from '../../components/Button/Button'

import CartContext from '../../contexts/cart.provider'





// const CartContext = React.createContext()

export default function ProductCardModal(props) {

    let limitValue = 999999.99
    
    const { addToCart } = useContext(CartContext)

    const history = useHistory()

    const handleAddToCart = () => {
      addToCart(props.produto)
      history.push("/cart")
    }



    //INÍCIO: TRANSFORMAÇÃO PARA SEPARAÇÃO DE DEZENAS E MILHARES COM PADRÃO BRASILEIRO
    const priceConverted = (number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
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
                            <h5 className="modal-title px-1 font-title-modal ms-2 text-light">{props.brand} {props.model}</h5>
                            <button type="button" className="btn-close bg-light me-2" onClick={props.hide}></button>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="row modal-body row-cols-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-2 mb-md-0 mb-lg-0">
                                    <img src={props.image} className="img-fluid" />
                                </div>

                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className=" border border-2  border-dark background-datasheet">
                                        <h4 className="text-center my-2">Ficha Técnica</h4>
                                    </div>

                                    <div className="mt-2 border border-2  border-dark p-3 background-datasheet">
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center background-datasheet-lighter">
                                            <p className="col-4 text-start fs-6 my-0">Modelo:</p>
                                            <p className="col-8 css-font-family-modal text-end fs-6 my-0">{props.model}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-6 text-start fs-6 my-0">Cor:</p>
                                            <p className=" col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.color}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-9 text-start fs-6 my-0">Ano de Fabricação:</p>
                                            <p className="col-3 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.year}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-3 text-start fs-6 my-0">Motor:</p>
                                            <p className="col-9 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.engine}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-6 text-start fs-6 my-0">Potência:</p>
                                            <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.potency}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-3 text-start fs-6 my-0">Câmbio:</p>
                                            <p className="col-9 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.gearshift}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-6 text-start fs-6 my-0">Combustível:</p>
                                            <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">{props.fuel}</p>
                                        </div>
                                        <div className="row justify-content-center col-12 border border-2  border-dark mx-0 d-flex align-items-center mt-2 background-datasheet-lighter">
                                            <p className="col-6 text-start fs-6 my-0">Preço:</p>

                                            {/* INICIO: APLICAÇÃO SEM O FORMATO DE MOEDA BRASILEIRA */}
                                            {/* <CurrencyFormat
                                            value={this.props.price.toFixed(2)}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'R$ '}
                                            renderText={value =>
                                                <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">
                                                    {value}
                                                </p>}
                                        /> */}
                                            {/* FIM: APLICAÇÃO SEM O FORMATO DE MOEDA BRASILEIRA */}

                                            <p className="col-6 css-font-family-modal text-end fs-6 my-0 css-font-family-modal">
                                                {priceConverted(props.price)}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 justify-content-center">
                                    <div className=" border border-2  border-dark mt-2 background-datasheet">
                                        <h4 className="text-center my-2">Descrição do veículo</h4>
                                    </div>

                                    <div className="mt-2 border border-2  border-dark p-3 background-datasheet">
                                        <p className="css-font-family-modal">{props.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {

                            props.price >= limitValue
                                ? <>
                                    <div className="modal-footer justify-content-center col-md-12 px-4 px-md-0">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2 justify-content-center">
                                                <Button link="/checkoutScheduling" name="Agendar" />
                                        </div>
                                    </div>
                                </>
                                : <>
                                    <div className="modal-footer d-grid gap-2 d-flex justify-content-center col-md-12 px-4 px-md-0">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-2 justify-content-center">
                                            <Button link="/checkoutScheduling" name="Agendar" />
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