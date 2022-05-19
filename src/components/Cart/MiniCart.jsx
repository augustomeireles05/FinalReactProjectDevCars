import React, { useEffect, useContext } from 'react';
import CartContext from '../../contexts/cart.provider'


function MiniCart() {

    const { cartQty } = useContext(CartContext)

    useEffect(() => {

    })

    return (
        <>
            <h3>{cartQty}</h3>
        </>
    )

}

export default MiniCart;