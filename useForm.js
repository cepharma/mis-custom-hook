import React, { useState } from 'react'

export const useForm = (initialState = {}) => {
  
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        });
    }
    return [ values, handleInputChange, reset ];

    // Es igual q al de arriba solo q sin nombre
    // return [ values, ({ target }) => {
    //     setValues({
    //         ...values,
    //         [target.name]: target.value
    //     });
    // } ];
}
