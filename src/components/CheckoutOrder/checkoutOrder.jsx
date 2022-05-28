import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../environments'

function CheckoutOrder (){

    const URL = `${baseUrl}/enderecos/3`
    const [checkoutOrder, setCheckoutOrder] = useState([])

    useEffect(() =>{
        getCheckoutOrder()
    },[])

    // METODO PARA TRAZER ENDEREÇO
    const getCheckoutOrder = () => {
        axios.get(`${URL}`)
        .then((response) => {
            setCheckoutOrder(response.data)
        })
    }


    // METODO PARA EDITAR ENDEREÇO
    const editarEndereço = (cliente) => {
        if (cliente.name === '' || cliente.age === '' || cliente.document ===''||
            cliente.tel === '') {
            return
        }

        axios.put(`${URL}/${cliente.id}`, cliente)
        .then((response) => {
            getCheckoutOrder()
        })
    }

    // METODO DE DELETAR
    const deleteEndereco = (id) => {
        axios.delete(`${URL}/${id}`).then((response) => {
            getCheckoutOrder()
       })
   }

   return(
       <>
       <CheckoutOrderList
        checkoutOrder ={checkoutOrder}
        editar ={editarEndereço}
        deletar ={deleteEndereco}/>
       </>
   )
}

export default CheckoutOrder