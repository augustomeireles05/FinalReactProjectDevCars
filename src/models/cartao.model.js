const id = parseInt(localStorage.getItem('user'))

const CartaoModelo = {    
    codCliente: id,
    codModalidadeCartao: 1,
    nomeTitular: "",        
    numeroCartao: "",
    validadeCartao: "",
    cvv: ""
}
export default CartaoModelo