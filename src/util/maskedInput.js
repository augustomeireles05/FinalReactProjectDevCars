import React from 'react';
import InputMask from 'react-input-mask';
import '../components/Input/Input.css'

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ value, onChange, name, mask, maxlength, id}) => {
    function handleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value: onlyNumbers(event.target.value)
            }
        });
    }

    return (
        <InputMask className="input-style col-12 p-3 fs-6"
            id={id}
            maxlength={maxlength}
            name={name}
            mask={mask}
            value={value}
            onChange={handleChange}
        />
    );
};

export default MaskedInput;