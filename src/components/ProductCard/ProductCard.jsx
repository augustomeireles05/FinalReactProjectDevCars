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

    const [model, setModel] = useState(false);
    const [tempdata, setTempData] = useState([]);


    const getData = (brand, model, color, year, engine, potency, price, gearshift, fuel, inventory, enphasis, image, description) => {
        let tempData = [
            brand, model, color, year, engine, potency, price, gearshift, fuel, inventory, enphasis, image, description
        ];

        // console.warn(tempData)
        setTempData(item => [1, ...tempData])

        return setModel(true);
    }

    
    return (
        <>
            {
                products.length == 0
                ?
                <h2>Carrinho vazio</h2>

                :

                <section className="py-4 py-lg-5 col-12 col-sm-12 col-md-11 col-lg-11 justify-content-center m-auto">
                    <div className="row justify-content-around align-item-center">


                        {List.cardData.map((item, index) => {

                            return (

                                <div className="row justify-content-around col-12 col-md-10 col-lg-3 mx-0 mb-4" key={index} style={{ width: 19 + 'em' }}>
                                    <div className="card product-card p-0 overflow-hidden h-100 shadow" >
                                        <img src={item.image} className="card-img-top" />
                                        <div className="text-center mb-3">
                                            <h5 className="card-title mb-4 css-font-family" >{item.brand} {item.model}</h5>

                                            {/* INÍCIO: UTILIZANDO A BIBLIOTECA DO CURRENCY FORMAT */}
                                            {/* <CurrencyFormat
                                            value={item.price.toFixed(2)}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'R$ '}
                                            renderText={value =>
                                                <p className="font-price">
                                                    {value}
                                                </p>}
                                        /> */}
                                            {/* FIM: UTILIZANDO A BIBLIOTECA DO CURRENCY FORMAT */}

                                            {/* TRAZENDO O PREÇO FORMATADO */}
                                            {showPrice(item.price)}

                                            <button className="btn mt-3 color-button"
                                                onClick={() => getData(item.brand, item.model, item.color, item.year, item.engine, item.potency, item.price, item.gearshift, item.fuel, item.image, item.description)}>
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
                model === true ?
                    <ProductCardModal
                        brand={tempdata[1]}
                        model={tempdata[2]}
                        color={tempdata[3]}
                        year={tempdata[4]}
                        engine={tempdata[5]}
                        potency={tempdata[6]}
                        price={tempdata[7]}
                        gearshift={tempdata[8]}
                        fuel={tempdata[9]}
                        image={tempdata[10]}
                        description={tempdata[11]}

                        produto={tempdata}
                        hide={() => setModel(false)}
                    /> : ''
            }


        </>


    )


}


export default ProductCard;

// function ProductCard(props) {

//     const vehicles = props.vehicles || []




//     const [model, setModel] = useState(false);
//     const [tempdata, setTempData] = useState({});

//     const getData = (marcaVeiculo, modeloVeiculo, anoVeiculo, precoVeiculo, cor, motor, potencia, cambio, combustivel, imagem, descricao) => {
//         let tempData = [
//             marcaVeiculo, modeloVeiculo, anoVeiculo, precoVeiculo, cor, motor, potencia, cambio, combustivel, imagem, descricao
//         ];

//         console.warn(tempData)
//         // setTempData(item => [1, ...tempData])
//         return setModel(true);
//     }


//     const showPrice = (number) => {
//         let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

//         return (
//             <>
//                 <h6 className="font-price">{priceConverted}</h6>
//             </>
//         ) 

//     }



//     return (
//                 <>
//                     <section className="py-4 py-lg-5 col-12 col-sm-12 col-md-11 col-lg-11 justify-content-center m-auto">
//                         <div className="row justify-content-around align-item-center">


//                             {List.cardData.map((item, index) => {

//                                 return (

//                                     <div className="row justify-content-around col-12 col-md-10 col-lg-3 mx-0 mb-4" key={index} style={{ width: 19 + 'em' }}>
//                                         <div className="card product-card p-0 overflow-hidden h-100 shadow" >
//                                             <img src={item.image} className="card-img-top" />
//                                             <div className="text-center mb-3">
//                                                 <h5 className="card-title mb-4 css-font-family" >{item.brand} {item.model}</h5>

//                                                 {showPrice(item.price)}

//                                                 <button className="btn mt-3 color-button"
//                                                     onClick={() => getData(item.brand, item.model, item.color, item.year, item.engine, item.potency, item.price, item.gearshift, item.fuel, item.image, item.description)}>
//                                                     Ver detalhes
//                                                 </button>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </section>

//                     {
//                         model === true ?
//                             <ProductCardModal
//                                 brand={tempdata[1]}
//                                 model={tempdata[2]}
//                                 color={tempdata[3]}
//                                 year={tempdata[4]}
//                                 engine={tempdata[5]}
//                                 potency={tempdata[6]}
//                                 price={tempdata[7]}
//                                 gearshift={tempdata[8]}
//                                 fuel={tempdata[9]}
//                                 image={tempdata[10]}
//                                 description={tempdata[11]}

//                                 hide={() => setModel(false)}
//                             /> : ''
//                     }


//                 </>
//             )

// }


// export default ProductCard;