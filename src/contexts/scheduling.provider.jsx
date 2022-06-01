import React, { useState, createContext, useEffect } from 'react'

const SchedulingContext = createContext({})

function SchedulingProvider(props) {

    const [schedulingQtd, setSchedulingQtd] = useState()
    const [scheduling, setScheduling] = useState([])

    const addToScheduling = (veic)  => {
        localStorage.setItem('scheduling', JSON.stringify(veic))
    }



    


    const getSchedulingStorage = () => {
        if (localStorage.getItem('scheduling')) {
            return JSON.parse(localStorage.getItem('scheduling'))
        }

        return []
    }


    const getScheduling = () => {
        let getVeic = getSchedulingStorage()
        setScheduling(getVeic)
    }



    const deleteScheduling = () =>{
        localStorage.removeItem('scheduling');
        //alert('Removido')       
        getScheduling()
    }




    return (
        <SchedulingContext.Provider value={{schedulingQtd, addToScheduling, getScheduling , scheduling, deleteScheduling}}>
            {props.children}
        </SchedulingContext.Provider>
    )

}

export { SchedulingProvider }

export default SchedulingContext;