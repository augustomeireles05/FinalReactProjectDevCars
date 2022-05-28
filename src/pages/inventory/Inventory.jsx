import React from 'react'
import './Inventory.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useEffect, useState } from 'react'

import MiniCart from '../../components/Cart/MiniCart'
import axios from 'axios'
import { baseUrl } from '../../environments'


function Inventory() {
    const URL = `${baseUrl}/veiculos`
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = () => {
        axios.get(`${URL}`)
        .then((response) => {
            setProducts(response.data)
        })
    }

    

    return (
        <>
            <Header />
            <MiniCart />
            <SearchFilter />
            <ProductCard products={products} />
            <Footer />
        </>
    )
}

export default Inventory