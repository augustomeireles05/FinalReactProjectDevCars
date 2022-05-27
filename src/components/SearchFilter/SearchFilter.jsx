import React, { useState, useEffect } from 'react'
import Button from '../../components/Button/Button'
import axios from 'axios'
import { baseUrl } from '../../environments'

import { useParams } from 'react-router-dom'


function SearchFilter() {

    const [modelo, setModelo] = useState([])
    const [marcas, setMarcas] = useState([])
    const [filtro, setFiltro] = useState([])
    

    useEffect(() => {
        getSelectMarca()
        getSelectModelo()
    }, [])

    const getSelectMarca = () => {
        axios.get(`${baseUrl}/veiculos/marca`)
            .then((response) => {
                console.log(response.data)
                let filtroFilter = []
                let filtroResponse = response.data
                for (let i = 0; i < filtroResponse.length; i++) {
                    if (filtro.codMarca !== filtroResponse[i].codMarca) {
                        filtroFilter.push(filtroResponse[i])
                    }
                }
                setFiltro(filtroFilter)
            })
    }

    const getSelectModelo = (filtroSelected) => {
        axios.get(`${baseUrl}/veiculos/marcaid?codMarca=${filtroSelected}`)
        .then((response) => {
            console.log(response.data)
            let modeloFilter = []
            let modeloResponse = response.data
            for (let i = 1; i < modeloResponse.length; i++) {
                if (modelo.marcaVeiculo !== modeloResponse[i].marcaVeiculo) {
                    modeloFilter.push(modeloResponse[i])
                }
                setModelo(modeloFilter)
            }
        })
    }

    const renderFiltro = () => {
        return (
            <>
                <div className="col-md-4 col-lg-3 col-12 ">
                    <select id="marcas" className="form-select bg-filter" onChange={(event) => {
                        const filtroSelected = event.target.options.selectedIndex
                        console.log(filtroSelected)
                        let textFiltro = event.target.options[filtroSelected].innerText
                        setMarcas({ codMarca: event.target.value, marcaVeiculo: textFiltro })
                    }}>
                        <option defaultValue>Selecione a Marca</option>
                        {
                            filtro.map((item) => {
                                return (
                                    <option key={item.codMarca} value={item.codMarca}>{item.marcaVeiculo}</option>
                                )
                            })
        
                        }
                    </select>
                </div>
                <div className="col-md-4 col-lg-4 ">
                    <select id="modelos" className="form-select bg-filter" onChange={(event) => {
                        const modeloSelected = event.target.options.selectedIndex
                        console.log(modeloSelected)
                        let textModelo = event.target.options[modeloSelected].innerText
                        setMarcas({ codVeiculo: event.target.value, modeloVeiculo: textModelo })
                    }}>
                        <option defaultValue>Selecione o Modelo</option>
                        {
                            modelo.map((item) => {
                                return (
                                    <option key={item.codVeiculo} value={item.codVeiculo}>{item.modeloVeiculo}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </>
        )
    }

    return (
        <>
            <hr />
            <div className="row-cols-1 row-cols-md-12 g-4 justify-content-center mt-4 mb-5 mx-4">

                <form className=" filtro-de-busca row rounded p-3 mt-5 ms-0 gx-3 gy-3">
                    <legend className="text-center">ENCONTRE SEU CARRO</legend>

                    {renderFiltro()}
                    
                    
                    <div className="col-md-4 col-lg-3 ">
                        <select id="inputState" className="form-select bg-filter">
                            <option defaultValue>Selecione o Ano</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                        </select>

                    </div>

                    <div className="col-12 col-md-5 col-lg-2 text-center">
                    <Button link="/inventory" name="BUSCAR" />
                        {/* <button type="submit" className="btn botao-buscar btn border-none py-2 ms-0 w-100">BUSCAR</button> */}
                    </div>
                </form>

            </div>
        </>
    )

}

export default SearchFilter