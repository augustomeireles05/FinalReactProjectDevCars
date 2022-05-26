import React, { useState } from 'react'
import Boleto from '../../assets/images/CheckoutOrder/barcode.png';


function PaymentSlip(props) {

    function gerarNumero() {
        let maxLimit = 900000000000000000000 //precisa ter 48 casas
        let rand = Math.random() * maxLimit

        rand = Math.floor(rand);
        console.log(rand)
        return rand
    }

    return (
        <>
        <div className="card-header">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" 
                onClick = {function () {
                    const n = gerarNumero()
                    props.funcao(n, 'Código de Barras: ')
                }}/>
                <span className="icon-payment">
                  Boleto
                  <img src={Boleto} width="30" alt="Boleto" className="ms-2" />
                </span>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-block pt-2">
              {/* <Button type="button" name="Voltar para Carrinho"> */}
              {/* <SupportButton link="/Cart" name="Voltar para o Carrinho"/> */}

              <div className="mt-3"></div>

              {/* <Link to="/cart"></Link> */}
              {/* </Button> */}
              {/* <Button type="button" name="Finalizar Compra"> */}
              {/* <Link to="/orderResume"></Link> */}
              {/* <Button link="/orderResume" name="Finalizar Compra"/> */}
              {/* </Button> */}
            </div>

        
        
        </>
    )
}

export default PaymentSlip