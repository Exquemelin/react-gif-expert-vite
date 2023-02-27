import { useState } from "react"




export const AddCategory = ({ onNewCategory }) => {

    // declaramos el useState para controlar el estado
    const [inputValue, setInputValue] = useState('');

    // Función para lanzar cuando cambie el input
    const onInputChange = ({ target }) => {
        // Añadimos al state
        setInputValue( target.value );
    }

    // Función que se lanzará cuando se finalice el formulario
    const onSubmit = ( event ) => {

        // prevenimos la propagación y que se vuelva a cargar entero
        event.preventDefault();

        // Si el inputValue está vacío paramos la función
        if( inputValue.trim().length <= 1 ) return;

        // Almacenamos la información del formulario en el estado
        // Por el onNewCategory devolvemos una desestructuración que la función ya sabrá lo que tiene que hacer.
        // setCategories( categories => [ ...categories, inputValue ] )
        onNewCategory( inputValue.trim() );
        
        // Limpiamos la caja de texto
        setInputValue('');

    }

    return (
        <form onSubmit={ onSubmit }> 
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />
        </form>

    )
}
