import { useEffect, useState } from "react";


import { getGifs } from "../helpers/getGifs";


// Declaramos una función que no devuelva un jsx. Sino cualquier otra cosa
export const useFecthGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    // Declaramos una función para obtener las imágenes y almacenarlas en el state
    const getImages = async () => {

        // Lanzamos la petición de forma asíncrona y almacenamos la respusta en el state
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false)

    }

    useEffect( () => {

        // // Lanzamos la función que obtendrá los gifs y cuando se cumpla la promesa los establecemos en el state
        // getGifs( category )
        //     .then( newImages => setImages(newImages) );

        // Cuando se carga el componente lanzamos la petición de imágines
        getImages(); 
        
    }, [  ] )

    return {
        images,
        isLoading
    }
 
}
