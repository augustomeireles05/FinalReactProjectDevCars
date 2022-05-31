import React, { useState } from 'react'
import List from './List'
import ProductCardModal from './ProductCardModal'
import './ProductCard.css'
import CurrencyFormat from 'react-currency-format';

const ProductCard = (props) => {

    const showPrice = (number) => {
        let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

        return (
            <>
                <h6 className="font-price">{priceConverted}</h6>
            </>
        )

    }

    const products = props.products || []

    const [modal, setModal] = useState(false);
    const [tempdata, setTempData] = useState([]);


    const getData = (codVeiculo, marcaVeiculo, modeloVeiculo, cor, anoVeiculo, motor, potencia, precoVeiculo, cambio, combustivel, estoque, imagem, descricao) => {
        let tempData = [
            codVeiculo, marcaVeiculo, modeloVeiculo, cor, anoVeiculo, motor, potencia, precoVeiculo, cambio, combustivel, estoque, imagem, descricao
        ];

        // console.warn(tempData)
        setTempData(item => [0, ...tempData])

        return setModal(true);
    }


    return (
        <>
            {
                products.length === 0
                    ?
                    <h2>Carrinho vazio</h2>

                    :

                    <section className="py-4 py-lg-5 col-12 col-sm-12 col-md-11 col-lg-11 justify-content-center m-auto">
                        <div className="row justify-content-around align-item-center">


                            {products.map((item, index) => {
                                console.log(item)
                                return (

                                    <div className="row justify-content-around col-12 col-md-10 col-lg-3 mx-0 mb-4" key={index} style={{ width: 19 + 'em' }}>
                                        <div className="card product-card p-0 overflow-hidden h-100 shadow" >
                                            <img src={item.imagem} className="card-img-top" alt="..." />
                                            <div className="text-center mb-3">
                                                <h5 className="card-title mb-4 css-font-family">{item.marcaVeiculo} {item.modeloVeiculo}</h5>

                                        
                                                {/* TRAZENDO O PREÇO FORMATADO */}
                                                {showPrice(item.precoVeiculo)}

                                                <button className="btn mt-3 color-button"
                                                    onClick={() => getData(item.codVeiculo, item.marcaVeiculo, item.modeloVeiculo, item.cor, item.anoVeiculo, item.motor, item.potencia, item.precoVeiculo, item.cambio, item.combustivel, item.imagem, item.descricao)}>
                                                    Ver detalhes
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
            }
            {
                modal === true ?
                    <ProductCardModal
                        codVeiculo={tempdata[1]}
                        marcaVeiculo={tempdata[2]}
                        modeloVeiculo={tempdata[3]}
                        cor={tempdata[4]}
                        anoVeiculo={tempdata[5]}
                        motor={tempdata[6]}
                        potencia={tempdata[7]}
                        precoVeiculo={tempdata[8]}
                        cambio={tempdata[9]}
                        combustivel={tempdata[10]}
                        imagem={tempdata[11]}
                        descricao={tempdata[12]}

                        produto={tempdata}
                        hide={() => setModal(false)}
                    /> : ''
            }
        </>


    )


}


export default ProductCard;