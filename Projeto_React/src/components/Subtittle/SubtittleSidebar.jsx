import React from 'react'
import './Subtittle.css'

function Subtitle(props) {

    return (
        <>
            <div className="navbar navbar-light border-bottom-menu titulo-menu mb-3 mt-0 pt-0 pb-2 col-12">
                <div className="container-fluid d-block text-center">
                    <span className="fs-6">{props.menu}</span>
                    <span className="fs-6">{props.subtitulo}</span>
                </div>
            </div>
        </>
    )
}

export default Subtitle