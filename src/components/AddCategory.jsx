
import React from 'react'
import { useState } from 'react'
import props from 'react'

export const AddCategory = ({onNewCategory}) => {//Desestructure setCategories de props

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)

    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length<=1) return;
        // setCategories(categories=>[inputValue,...categories]);
        
        setInputValue('');
        onNewCategory(inputValue.trim());
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue} 
                onChange={onInputChange}
            />
        </form>

    )
}
