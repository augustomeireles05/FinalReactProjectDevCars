import React, { useState, createContext } from 'react'

const CartContext = createContext({})

function CartProvider(props) {

    const [cartQty, setCartQty] = useState(5)

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        localStorage.setItem("cart", JSON.stringify(item))
    }


    const getCartStorage = () => {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'))
        }

        return []
    }

    const getCart = () => {
        let getItem = getCartStorage()
        setCart(getItem)
    }

    return (
        <CartContext.Provider value={{cartQty, addToCart, getCart, cart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider }

export default CartContext;