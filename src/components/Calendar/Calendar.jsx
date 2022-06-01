import Calendar from 'react-calendar'
import React, { useState } from "react";
import '../../components/Calendar/Calendar.css';


export default function Calendario() {

    const [value, onChange] = useState(new Date());

    const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 2);
    const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 7);
    // const dateValue = new Date(new Date().setDate(value));
    console.log(value.toLocaleDateString('pt-BR'))


    return (
        <div>
            <Calendar
                onChange={onChange} value={value}

                locale="pt-BR"

                minDate={minDate}
                maxDate={maxDate}


            />



        

        </div>
    )
}

// tileDisabled={({ date, view }) =>
// (view === "month" && date.getDay() === 0) || date.getDay() === 6 || date.getDay() === date.localTime
// }


// var today = new Date();                    //Gravo a data atual na variavel
// today.setDate(today.getDate() + 7);        //Adiciono 7 dias 
// today = today.toISOString().split('T')[0];