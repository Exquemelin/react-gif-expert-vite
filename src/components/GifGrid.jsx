// import { useEffect, useState } from "react";


// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import { useFecthGifs } from "../hooks/useFecthGifs";


export const GifGrid = ({ category }) => {

    // // Utilizamos el useState para mantener las imágines que nos lleguen. Usamos un array vacío para que no se muestre hasta que queramos
    // const [images, setImages] = useState([]);

    // // Declaramos una función para obtener las imágenes y almacenarlas en el state
    // const getImages = async () => {

    //     // Lanzamos la petición de forma asíncrona y almacenamos la respusta en el state
    //     const newImages = await getGifs( category );
    //     setImages(newImages);

    // }

    // Vamos a utilizar un hook para ejecutar todo lo anterior
    const { images, isLoading } = useFecthGifs( category );

    console.log( isLoading );

    // Usamos el useEffect para que solo se lance la obtencion de los gifs cuando nosotros queremos.
    // useEffect( () => {

    //     // // Lanzamos la función que obtendrá los gifs y cuando se cumpla la promesa los establecemos en el state
    //     // getGifs( category )
    //     //     .then( newImages => setImages(newImages) );

    //     // Cuando se carga el componente lanzamos la petición de imágines
    //     getImages(); 
        
    // }, [  ] )

    return (
        <>
            <h3>{category}</h3>
            {/* {
                isLoading 
                    ? ( <h2>Cargando...</h2> ) 
                    : null
            } */}
            {
                isLoading  && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifGridItem 
                            key={ image.id }
                            // title={ image.title }
                            // url={ image.url }
                            {...image} // Así se desestructura image en sus keys.
                        />
                    ))
                }
            </div>
            
        </>
    )
}
